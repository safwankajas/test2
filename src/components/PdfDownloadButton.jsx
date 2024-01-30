import React from 'react';

const PdfDownloadButton = () => {
  const downloadPdf = () => {
    // Create a new Blob with the content of your resume HTML
    const htmlContent = document.getElementById('resume-container').outerHTML;
    const blob = new Blob([htmlContent], { type: 'application/pdf' });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.pdf';

    // Append the link to the document and trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadPdf}>Download PDF</button>
  );
};

export default PdfDownloadButton;
