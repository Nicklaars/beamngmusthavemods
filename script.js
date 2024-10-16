function downloadMod(modFileName) {
    // Assuming the zip files are in the same directory as the HTML file
    const link = document.createElement('a');
    link.href = modFileName;
    link.download = modFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
