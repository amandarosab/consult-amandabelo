param(
    [string]$Source = 'C:\Users\Pichau\Downloads\Foto clientes',
    [string]$Dest = (Join-Path -Path $PSScriptRoot -ChildPath '..\public\assets\clients')
)

function Remove-Diacritics([string]$s) {
    $formD = [System.Text.NormalizationForm]::FormD
    $temp = $s.Normalize($formD)
    $sb = New-Object System.Text.StringBuilder
    foreach ($ch in $temp.ToCharArray()) {
        $cat = [Globalization.CharUnicodeInfo]::GetUnicodeCategory($ch)
        if ($cat -ne [Globalization.UnicodeCategory]::NonSpacingMark) { $null = $sb.Append($ch) }
    }
    return $sb.ToString().Normalize([System.Text.NormalizationForm]::FormC)
}

function Normalize-Name([string]$s) {
    if (-not $s) { return '' }
    $noDiacritics = Remove-Diacritics $s
    $lower = $noDiacritics.ToLower()
    $onlyAlnum = ($lower -replace '[^a-z0-9]', '')
    return $onlyAlnum
}

$expected = @(
    'shaymon-alvarez.jpg',
    'julis-araujo.jpg',
    'gabriely-rodrigues.jpg',
    'monik-rangel.jpg',
    'jackson-miranda.jpg',
    'gilcllys-costa.jpg',
    'yasmin-bueno.jpg',
    'pedro-brantis.jpg',
    'carlos-eduardo-fiuza.jpg',
    'samuel-silva.jpg',
    'cauet-delfim.jpg',
    'matheus-freitas.jpg'
)

if (-not (Test-Path $Source)) {
    Write-Error "Source folder not found: $Source"
    exit 1
}

New-Item -ItemType Directory -Force -Path $Dest | Out-Null

$files = Get-ChildItem -Path $Source -File -Recurse | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|webp)$' } | Sort-Object Name

if ($files.Count -eq 0) {
    Write-Error "No image files found in: $Source"
    exit 1
}

# Build normalized lookup for source files
$lookup = @{}
foreach ($f in $files) {
    $base = [System.IO.Path]::GetFileNameWithoutExtension($f.Name)
    $norm = Normalize-Name $base
    $lookup[$f.FullName] = $norm
}

$mapping = @{}
$usedFiles = [System.Collections.Generic.HashSet[string]]::new()

# Try to match by name parts
foreach ($exp in $expected) {
    $expBase = [System.IO.Path]::GetFileNameWithoutExtension($exp)
    $expNorm = Normalize-Name $expBase
    $found = $null
    foreach ($kv in $lookup.GetEnumerator()) {
        if ($usedFiles.Contains($kv.Key)) { continue }
        if ($kv.Value.Contains($expNorm) -or $expNorm.Contains($kv.Value)) {
            $found = $kv.Key; break
        }
    }
    if ($found) {
        $mapping[$exp] = $found
        $usedFiles.Add($found) | Out-Null
    }
}

# Assign remaining expected names by leftover files in order
$remainingExpected = $expected | Where-Object { -not $mapping.ContainsKey($_) }
$remainingFiles = $files | Where-Object { -not $usedFiles.Contains($_.FullName) }

for ($i = 0; $i -lt [math]::Min($remainingExpected.Count, $remainingFiles.Count); $i++) {
    $mapping[$remainingExpected[$i]] = $remainingFiles[$i].FullName
}

Write-Host "Preview mapping (destination -> source):`n" -ForegroundColor Cyan
$idx = 1
foreach ($k in $mapping.Keys) {
    Write-Host "[$idx] $k  <=  $($mapping[$k])"
    $idx++
}

if ($mapping.Count -eq 0) {
    Write-Error "No automatic mappings found. Consider renaming source files to include client names."
    exit 1
}

$confirm = Read-Host "Proceed to copy ${mapping.Count} files to $Dest? (Y/N)"
if ($confirm -notin @('Y','y')) {
    Write-Host "Aborted by user." -ForegroundColor Yellow
    exit 0
}

foreach ($k in $mapping.Keys) {
    $src = $mapping[$k]
    $dst = Join-Path -Path $Dest -ChildPath $k
    try {
        Copy-Item -Path $src -Destination $dst -Force
        Write-Host "Copied: $src -> $dst" -ForegroundColor Green
    } catch {
        Write-Host "Failed to copy $src -> $dst : $_" -ForegroundColor Red
    }
}

Write-Host "Done. If some expected images weren't matched, rename source files to include client names and re-run." -ForegroundColor Green
