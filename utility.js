const utility = {}
utility.types = {
    images: ["jpeg", "jpg", "png", "webp"],
    media: ["mp4", "mkv","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'ps', 'tex'],
    spreadsheet: ['xlsx', 'csv', "tsv"],
    text: ['txt'],
    asm: ['asm'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
module.exports = utility;