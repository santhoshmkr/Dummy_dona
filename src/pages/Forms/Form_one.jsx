import React, { useState } from "react";
import { Document, Paragraph, TextRun, Packer, AlignmentType } from "docx";
import { saveAs } from "file-saver";

export const OrganDonationForm = () => {
  const [user, setUser] = useState({
    Name: "karuppu",
  });

  const generateDocx = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Form Title
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "FORM 2",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "FOR ORGAN OR TISSUE DONATION BY LIVING SPOUSAL DONOR",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(To be completed by him/her)",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(See rules 3, 5(3)(a) and 5(3)(d))",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            // Donor Information
            new Paragraph({
              children: [
                new TextRun("My full name (proposed Donor) is "),
                new TextRun({
                  text: user.Name,
                  bold: true,
                }),
                new TextRun(" and this is my photograph"),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "Photograph of the Donor)",
                  italics: true,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "(Attested by Notary Public)",
                  italics: true,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "across the photo after affixing)",
                  italics: true,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
              // Address Section
            new Paragraph({
                children: [
                  new TextRun("My permanent home address is "),
                  new TextRun({
                    text: "75/96, GANDHIPURAM 1ST STREET, PALLIPALAYAM, NAMAKKAL, TAMIL NADU - 638006",
                    bold: true,
                  }),
                ],
              }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
                children: [
                  new TextRun("My present home address is "),
                  new TextRun({
                    text: "75/96, GANDHIPURAM 1ST STREET, PALLIPALAYAM, NAMAKKAL, TAMIL NADU - 638006",
                    bold: true,
                  }),
                ],
              }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph("Date of birth: 01-01-1980"),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            // Recipient Information
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "Photograph of the Recipient ",
                  italics: true,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "(Attested by Notary Public ",
                  italics: true,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "across the photo after affixing)",
                  italics: true,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),

            // Documents Section
            new Paragraph(
              "I enclose copies of the following documents (attach attested photocopy of at least two of following relevant documents to indicate the spousal relationship):"
            ),
            
            
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: " Ration/Consumer Card number and Date of issue and place            :",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "          :",
                  bold: false,
                  size: 24,
                }),
              ],
            }),

            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "And / or",
                  bold: true,
                  size: 20,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 20,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: " Permanent Account Number (PAN)     	            	            	         :",
                  bold: false,
                  size: 24, 
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: " ",
                  bold: false,
                  size: 24, 
                }),
              ],
            }),
                    
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "And/or",
                  bold: true,
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: " ",
                    bold: false,
                    size: 24, 
                  }),
                ],
              }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "Aadhar Number       	           	           	           	            	          : ",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: " ",
                    bold: false,
                    size: 24, 
                  }),
                ],
              }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "And/or",
                  bold: true,
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: " ",
                    bold: false,
                    size: 24, 
                  }),
                ],
              }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "Any other valid proof of identity and address reflecting                    :               -",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "near realationship",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            

            // Evidence of Marriage
            new Paragraph(
              "I submit the following as evidence of being married to the recipient:-"
            ),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph("(a) A certified copy of a marriage certificate"),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "OR",
                  size: 24,
                }),
              ],
            }),
            new Paragraph(
              "(b) An affidavit of a 'near relative' confirming the status of marriage to be sworn before Class-I Magistrate/Notary Public."
            ),
            new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: " ",
                    bold: false,
                    size: 24, 
                  }),
                ],
              }),
            new Paragraph("(c) Family photographs"),
            new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: " ",
                    bold: false,
                    size: 24, 
                  }),
                ],
              }),
            new Paragraph(
              "(d) Letter from Head of Gram Panchayat / Tehsildar / Block Development Officer/Member of Legislative Assembly/Member of Legislative Council (MLC)/Member of Parliament with seal certifying factum and status of marriage."
            ),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "OR",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph("(e) Other credible evidence"),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            // Declaration Section
            new Paragraph({
              children: [
                new TextRun({
                  text: "I solemnly affirm and declare that sections 2, 9 and 19 of the Transplantation of Human Organs Act, 1994 (42 of 1994), have been explained to me and I confirm that",
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph(
              "1. I understand the nature of criminal offences referred to in the sections."
            ),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph(
              "2. No payment of money or money's worth as referred to in the Sections of the Act has been made to me or will be made to me or any other person."
            ),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph(
              "3. I am giving the authorization to remove my One kidney and consent to donate the same, of my own free will without any undue pressure, inducement, influence or allurement."
            ),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "     ",
                    bold: true,
                    size: 24,
                  }),
                ],
              }),

            new Paragraph(
              "4. I have been given a full explanation of the nature of the medical procedure involved and the risks involved for me in the removal of my One kidney. That explanation was given by Dr. Appan Prakash, MD.,DM.,, (Nephrology) Tamil Nadu registration No.113555"
            ),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "     ",
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
            new Paragraph(
              "5. I understand the nature of that medical procedure and of the risks to me as explained by that practitioner."
            ),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "     ",
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
            new Paragraph(
              "6. I understand that I may withdraw my consent to the removal of that organ at any time before the operation takes place."
            ),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "     ",
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
            new Paragraph(
              "7. I state that particulars filled by me in the form are true and correct to the best of my knowledge and nothing material has been concealed by me."
            ),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "     ",
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "     ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            // Signature Section
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [new TextRun("Signature of the prospective donor:")],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [new TextRun("Date: 24-02-2025")],
            }),

            // Footer Note
            new Paragraph({
              text: "Note: To be sworn before Notary Public, who while attesting shall ensure that the person/persons swearing the affidavit(s) signs(s) on the Notary Register, as well",
              italics: true,
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Organ_Donation_Form.docx");
    });
  };

  return (
    <button
      onClick={generateDocx}
      style={{ padding: "10px 20px", fontSize: "16px", margin: "20px" }}
    >
      Download Organ Donation Form
    </button>
  );
};
