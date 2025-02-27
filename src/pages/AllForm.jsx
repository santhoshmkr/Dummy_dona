import React, { useState } from "react";
// import { Document, Paragraph, TextRun, Packer, AlignmentType,Table,TableRow,TableCell  } from "docx";
import { Document, Packer,Paragraph, TextRun,AlignmentType,  } from "docx";
import { saveAs } from "file-saver";

export const OrganDonationForm = () => {
  const [user, setUser] = useState({
    Name: "karuppu",
  });

  const Form_one = () => {
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
                  text: "FORM 1",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "FOR ORGAN OR TISSUE DONATION FROM IDENTIFIED LIVING NEAR RELATED DONOR",
                  bold: true,
                  size: 26,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(To be completed by him/her)",
                  bold: true,
                  italics: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(Refer rules 3 and 5(3)(a))",
                  bold: false,
                  size: 24,
                  italics: true,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),

            // Donor Information
            new Paragraph({
              children: [
                new TextRun("My full name (proposed Donor) is "),
                new TextRun({
                  text: "John Doe", // Replace with user.Name
                  bold: true,
                }),
                new TextRun(" and this is my photograph"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
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
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "(Attested by Notary Public)",
                  italics: true,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "across the photo after affixing)",
                  italics: true,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
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
                  text: " ",
                  bold: true,
                  size: 30,
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
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph("Date of birth: 01-01-1980"),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),

            // Consent Section
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "I authorize removal for therapeutic purposes and consent to donate one of my Kidney to my Niece whose particulars are as follows and full name is Mr. Parishkan and who was born on:",
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  text: new Date().toDateString(),
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "Photograph of the Recipient ",
                  italics: true,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "(Attested by Notary Public ",
                  italics: true,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "across the photo after affixing)",
                  italics: true,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),

            // Documents Section
            new Paragraph({
              children: [
                new TextRun("I enclose copies of the following documents"),
                new TextRun({
                  text: "(attach attested photocopy of at least two of following relevant documents to indicate the spousal relationship):",
                  bold: true,
                  underline: true,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Ration/Consumer Card number",
                  bold: true,
                }),
                new TextRun({
                  text: "and Date of issue and place ",
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "And/or",
                  bold: false,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "Permanent Account Number (PAN): ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "And/or",
                  bold: false,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "Aadhar Number: ",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "And/or",
                  bold: false,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "Any other valid proof of identity and address reflecting near relationship: ",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),

            // Declaration Section
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "I submit the following as evidence of being married to the recipient:",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph("(a)A certified copy of a marriage certificate"),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Or",
                  size: 20,
                }),
              ],
            }),
            new Paragraph(
              "(b)An affidavit of a ‘near relative’ confirming the status of marriage to be sworn before Class-I Magistrate/Notary Public."
            ),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "",
                  size: 20,
                }),
              ],
            }),
            new Paragraph(
              "(c)Family photograph"
            ),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "",
                  size: 20,
                }),
              ],
            }),
            new Paragraph(
              "(d)Letter from Head of Gram Panchayat / Tehsildar / Block Development Officer/Member of Legislative Assembly/Member of Legislative Council (MLC)/Member of Parliament with seal certifying factum and status of marriage."
            ),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Or",
                  size: 20,
                }),
              ],
            }),
            new Paragraph(
              "(e)Other credible evidence"
            ),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  size: 20,
                }),
              ],
            }),
            new Paragraph(
              "I solemnly affirm and declare that sections 2, 9 and 19 of the Transplantation of Human Organs Act, 1994 (42 of 1994), have been explained to me and I confirm that"
            ),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  size: 20,
                }),
              ],
            }),
            new Paragraph(
              "1.I understand the nature of criminal offences referred to in the sections."
            ),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  size: 20,
                  
                }),
              ],
            }),
            new Paragraph(
              "2.No payment of money or money’s worth as referred to in the Sections of the Act has been made to me or will be made to me or any other person."
            ),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  size: 20,
                }),
              ],
            }),
            new Paragraph(
              "3.I am giving the authorization to remove my One kidney and consent to donate the same, of my own free will without any undue pressure, inducement, influence or allurement.."
            ),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "4.I have been given a full explanation of the nature of the medical procedure involved and the risks involved for me in the removal of my One kidney. That explanation was given by ",
                  size: 20,
                }),
                new TextRun({
                  text:"Dr. Appan Prakash, MD.,DM.,, (Nephrology) Tamil Nadu registration No.113555",
                  bold: true,
                })
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "5.I understand the nature of that medical procedure and of the risks to me as explained by that practitioner.",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "6.I understand that I may withdraw my consent to the removal of that organ at any time before the operation takes place.",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "7.I state that particulars filled by me in the form are true and correct to to the best of my knowledge and nothing material has been concealed by me.",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: " ",
                  size: 20,
                }),
              ],
            }),
            
            // Signature Section
            new Paragraph({
              children: [
                new TextRun({
                  text: "Signature of the prospective donor",
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "Date",
                  bold: false,
                  size: 24,
                }),
                new TextRun({
                  text: new Date().toDateString(),
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "Note: To be sworn before Notary Public, who while attesting shall ensure that the person/persons swearing the affidavit(s) signs(s) on the Notary Register, as well",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Form1.docx");
    });
  };

  const Form_two = () => {
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
  const Form_three = () => {
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
                  text: "FORM 3",
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
                  text: "FOR ORGAN OR TISSUE DONATION BY OTHER THAN NEAR RELATIVE LIVING DONOR",
                  bold: false,
                  size: 28,
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
                  text: "(Refer rules 3, 5(3)(a) and 5(3)(e))",
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
                new TextRun("My full name  is "),
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

            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "I enclose copies of the following documents: (attach attested photocopy of at least two of following relevant documents to prove your identity):",
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
                  text: "          ",
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
                  text: " Ration/Consumer Card number and Date of issue and place ",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "And / or",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "Voter’s I-Card number, date of issue, Assembly constituency",
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
                  text: "Passport number and country of issue",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "Driving License number, Date of issue, licensing authority ",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "And / Or",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Aadhar no:",
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
                  text: "Any other valid proof of identity and address: ",
                  bold: false,
                  size: 24,
                }),
              ],
            }),

            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "",
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
                  text: "Details of last three years income and vocation of donor (enclose documentary evidence) ………………………………  I authorize removal for therapeutic purposes and consent to donate my Kidney (Name of organ/tissue) to a person whose full name is Mr. NARAYANA SING  and who was born on 01-01-1970 (day/month/year) and whose particulars are as follows:",
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
            
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(attach attested photocopy of at least two relevant documents to prove identity of recipient)",
                  bold: true,
                  size: 24,
                }),
              ],
            }),

            // Evidence of Marriage
            new Paragraph(
              " solemnly affirm and declare that sections 2, 9 and 19 of the Transplantation of Human Organs Act, 1994 (42 of 1994), have been explained to me and I confirm that"
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
                  text: "",
                  size: 24,
                }),
              ],
            }),
            new Paragraph(
              "1. I understand the nature of criminal offences referred to in the sections. "
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
            new Paragraph("2 .No payment as referred to in the sections of the Act has been made to me or will be made to me or any other person."),
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
              "3. I am giving the consent and authorization to remove my KIDNEY (name of organ/tissue) of my own free will without any undue pressure, inducement, influence or allurement. "
            ),
            ,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph("4. I have been given a full explanation of the nature of the medical procedure involved and the risks involved for me in the removal of my KIDNEY (name of organ)/tissue).That explanation was given by Dr. Appan Prakash, MD.,DM.,, (Nephrology) (name of registered medical practitioner). "),
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
                  text: "5. I understand the nature of that medical procedure and of the risks to me as explained by that practitioner. ",
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
                  text: "6. I understand that I may withdraw my consent to the removal of that organ at any time before the operation takes place.",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph(
              "I state that particulars filled by me in the form are true and correct to the best of my knowledge and belief and nothing material has been concealed by me"
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
           
            // Signature Section
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [new TextRun("Signature of the prospective donor:")],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [new TextRun("Date: 24-02-2025")],
            }),

            // Footer Note
            
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Organ_Donation_Form.docx");
    });
  };
  const Form_four = (userData) => {
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
                  text: "FORM 4",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "FOR CERTIFICATION OF MEDICAL FITNESS OF LIVING DONOR",
                  bold: false,
                  size: 28,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(To be given by the Registered Medical Practitioner)",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "[Refer proviso to rule 5(3)(b)]",
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
  
            // Doctor's Certification
            new Paragraph({
              children: [
                new TextRun("I Dr. "),
                new TextRun({
                  text: userData.doctorName,
                  bold: true,
                }),
                new TextRun(", possessing qualification of "),
                new TextRun({
                  text: userData.doctorQualification,
                  bold: true,
                }),
                new TextRun(" registered as medical practitioner at serial No. "),
                new TextRun({
                  text: userData.doctorRegistrationNumber,
                  bold: true,
                }),
                new TextRun(" by the "),
                new TextRun({
                  text: userData.medicalCouncil,
                  bold: true,
                }),
                new TextRun(", certify that I have examined Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(" aged "),
                new TextRun({
                  text: userData.donorAge,
                  bold: true,
                }),
                new TextRun(" years "),
                new TextRun({
                  text: userData.donorGender,
                  bold: true,
                }),
                new TextRun(", residing at "),
                new TextRun({
                  text: userData.donorAddress,
                  bold: true,
                }),
                new TextRun(" who has given informed consent about donation of the organ, namely "),
                new TextRun({
                  text: userData.organDonated,
                  bold: true,
                }),
                new TextRun(" to Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(" aged "),
                new TextRun({
                  text: userData.recipientAge,
                  bold: true,
                }),
                new TextRun(" years "),
                new TextRun({
                  text: userData.recipientGender,
                  bold: true,
                }),
                new TextRun(", residing at "),
                new TextRun({
                  text: userData.recipientAddress,
                  bold: true,
                }),
                new TextRun(" related as "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" according to the statement given by them. The said donor is in proper state of health and is medically fit to be subjected to the procedure of organ removal."),
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
                  text: "Date : ",
                  bold: false,
                  size: 24,
                }),
                new TextRun({
                  text: userData.date,
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Place: ",
                  bold: false,
                  size: 24,
                }),
                new TextRun({
                  text: userData.place,
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: userData.doctorName,
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
  
            // Photographs
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Photograph of the Donor",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(Attested by the Doctor)",
                  italics: true,
                  size: 20,
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
                  text: "Photograph of the recipient",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(Attested by the Doctor)",
                  italics: true,
                  size: 20,
                }),
              ],
            }),
          ],
        },
      ],
    });
  
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Medical_Fitness_Form.docx");
    });
  };
  const Form_eleven = (userData) => {
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
                  text: "FORM 11",
                  bold: true,
                  size: 30,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "APPLICATION FOR APPROVAL OF TRANSPLANTATION FROM LIVING DONOR",
                  bold: false,
                  size: 28,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(To be completed by the proposed recipient and the proposed living donor)",
                  bold: false,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "[Refer rules 5(3)(d), 5(3)(e) and 10]",
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
  
            // Photographs
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Photography of the donor",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "photography of the recipient (self-attested)",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(self-attested)",
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
  
            // Recipient Information
            new Paragraph({
              children: [
                new TextRun("Whereas I Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(" aged "),
                new TextRun({
                  text: userData.recipientAge,
                }),
                new TextRun("/"),
                new TextRun({
                  text: userData.recipientGender,
                }),
                new TextRun(" years residing at "),
                new TextRun({
                  text: userData.recipientAddress,
                  bold: true,
                }),
                new TextRun(" has been advised by my Dr. "),
                new TextRun({
                  text: userData.doctorName,
                  bold: true,
                }),
                new TextRun(", that I am suffering from "),
                new TextRun({
                  text: userData.disease,
                  bold: true,
                }),
                new TextRun(" and may be benefited by transplantation of a new "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" into my body."),
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
  
            // Donor Information
            new Paragraph({
              children: [
                new TextRun("And Whereas I Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(" aged "),
                new TextRun({
                  text: userData.donorAge,
                }),
                new TextRun("/"),
                new TextRun({
                  text: userData.donorGender,
                }),
                new TextRun(" years residing at "),
                new TextRun({
                  text: userData.donorAddress,
                  bold: true,
                }),
                new TextRun(" by the following reason (S):"),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("By virtue of being a near relative i.e., "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" by reason of affection & attachment I would therefore like to donate a "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("."),
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
  
            // Application
            new Paragraph({
              children: [
                new TextRun("We "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(" (Donor) and "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(" (Recipient), hereby apply to Authorization Committee for permission for such transplantation to be carried out"),
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
  
            // Affirmation
            new Paragraph({
              children: [
                new TextRun("We solemnly affirm that the above decision has been taken without any undue pressure, inducement, influence or allurement and that all possible consequences and options of organ transplantation."),
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
  
            // Instructions
            new Paragraph({
              children: [
                new TextRun("Instructions for the applicants: -"),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("1. Form 11 must be submitted along with the completed Form 1 or Form 2 or Form 3 as may be applicable."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("2. The applicable Form i.e. Form 1 or Form 2 or Form 3 as the case may be, should be accompanied with all documents mentioned in the applicable form and all relevant queries set out in the applicable form must be adequately answered."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("3. Completed Form 5 must be submitted along with the laboratory report."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("4. The doctor’s advice recommending transplantation must be enclosed with the application."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("5. In addition to above, in case the proposed transplant is between unrelated persons, appropriate evidence of vocation and income of the donor as well as the recipient for the last three years must be enclosed with this application. It is clarified that the evidence of income does not necessarily mean the proof of income-tax returns, keeping in view that the applicant(s) in a given case may not be filing income tax returns."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("6. The application shall be accepted for consideration by the competent authority / Authorization Committee only if it is complete in all respects and any omission of the documents or the information required in the forms mentioned above, shall render the application incomplete."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("7. When the donor is unrelated and the donor and/or recipient belong to a State/Union Territory other than the State/Union Territory, where the transplant is intended to take place, then the Tehsildar or the officer authorized for the purpose of the domicile state of the donor or recipient as the case may be, would provide the verification certificate of domicile of donor/recipient, as the case may be as per Form 20. The approval for transplantation would be considered by the authorization committee of the State/District/hospital (as the case may be) where the transplantation is intended to be done. Such verification Certificate will not be required for near relatives including cases involving swapping of organs (permissible between near relatives only)."),
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
                new TextRun("We have read and understood the above instructions."),
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
  
            // Signatures
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Signature of the Prospective Donor"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "Date: ",
                  bold: false,
                }),
                new TextRun({
                  text: userData.date,
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Signature of the Prospective Recipient"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "Date: ",
                  bold: false,
                }),
                new TextRun({
                  text: userData.date,
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Place: "),
                new TextRun({
                  text: userData.place,
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });
  
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Transplantation_Approval_Form.docx");
    });
  };
  
  // Example user data
  const userData_two = {
    recipientName: "Parishkan",
    recipientAge: "27",
    recipientGender: "M",
    recipientAddress: "460(3), NAVLAR NAGAR II STREET, RMS COLONY, VILAR, THANJAVUR, TAMILNADU - 613006",
    donorName: "Umalfathima",
    donorAge: "31",
    donorGender: "F",
    donorAddress: "39/19, Kasi Garden 3rd Street, Rayapuram, Chennai - 600013",
    doctorName: "Appan Prakash",
    disease: "kidney disease",
    organ: "kidney",
    relationship: "Niece",
    date: "25-02-2025",
    place: "Tiruchirappalli",
  };

  const DonorDependentAffidavit = (userData) => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Title
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "DONOR’S DEPENDENT AFFIDAVIT",
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
  
            // Affidavit Content
            new Paragraph({
              children: [
                new TextRun("I, Mr. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(" aged "),
                new TextRun({
                  text: userData.donorAge,
                }),
                new TextRun("/"),
                new TextRun({
                  text: userData.donorGender,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.donorAddress,
                  bold: true,
                }),
                new TextRun(" do hereby solemnly affirm and sincerely state as follows; -"),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("I am a citizen of India and permanently residing in the above address."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("I am the "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" of Ms. "),
                new TextRun({
                  text: userData.spouseName,
                  bold: true,
                }),
                new TextRun(" and have been explained the consequences of "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" transplantation for the recipient and the consequences of donating a "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" by the donor."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("I have been explained the following points in my native languages("),
                new TextRun({
                  text: userData.nativeLanguage,
                  bold: true,
                }),
                new TextRun(")."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("I understand that after the "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" transplantation for the recipient, the consequences of the "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" may be rejected, infected and bleeding."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("Further, I understand that after the "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" transplantation the donor may face the consequences of the risk of surgery and anesthesia, possibility of hypertension and proteinuria in the long run, possibility of disease or injury to the single "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" and inability to work hard for three months from the date of surgery."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("I do not have any objection to transplant my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" 's "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" to Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun("."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("Hence, I hereby declare that I will look after my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" after the operation with due care."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("I will not claim any damages or compensation from "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.hospitalAddress,
                  bold: true,
                }),
                new TextRun("."),
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
  
            // Signatures
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Signature of the Donor Dependent"),
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
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Witnesses"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("1."),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("2."),
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
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("The above facts are true"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Before me,"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Solemnly affirm at "),
                new TextRun({
                  text: userData.place,
                  bold: true,
                }),
                new TextRun(" and"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Signed his Name in my presence"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Advocate, "),
                new TextRun({
                  text: userData.advocateName,
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });
  
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Donor_Dependent_Affidavit.docx");
    });
  };


  const userData = {
    patientName: "NARAYANA SING",
    patientAge: "55",
    patientGender: "Male",
    patientAddress: "615, BAPU NAGAR. PALLI, MARWAR, RAJASTHAN",
    condition: "Chronic Renal Failure",
    organ: "kidney",
    relationship: "FAMILY FRIEND",
    donorName: "POONGODI",
    donorAddress: "75/96, GANDHIPURAM 1ST STREET, PALLIPALAYAM, NAMAKKAL, TAMIL NADU - 638006",
    hospitalName: "Star Kims Hospital",
    hospitalAddress: "D6, 6th Cross, th Cross St W, Extension, Thillai Nagar, Tiruchirappalli, Tamil Nadu, 620018",
    hospitalCity: "Tiruchirappalli",
    doctorName: "Dr.Appan Prakash MD.,DM.,,(Nephro)",
    doctorTitle: "Consultant & Urologist Transplant Surgeon– Renal Transplant",
    nativeLanguage: "Tamil",
    place: "Tiruchirappalli",
    advocateName: "John Doe"
  };
  
  
  

  // doner affidavit
  const DonorAffidavit = (userData) => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Title
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "DONOR AFFIDAVIT",
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
  
            // Affidavit Content
            new Paragraph({
              children: [
                new TextRun("I, Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(" aged "),
                new TextRun({
                  text: userData.donorAge,
                }),
                new TextRun("/"),
                new TextRun({
                  text: userData.donorGender,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.donorAddress,
                  bold: true,
                }),
                new TextRun(" hereby truthfully and solemnly affirm to the following declaration"),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("1. I declare that I am the donor who is giving my full consent to donate one of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s to my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(". I further submit that now I came to know that my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(" is suffering from chronic renal failure as both of his "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s have been destroyed by disease and the doctors’ advice that he is in urgent need of "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" transplantation. Doctors informed that a "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" can be transplanted from one person to another person through surgical operation in an attempt to save a patient of "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" failure. Doctors also informed that if any of the close relative could save him from danger. Since anyone can donate a suitable "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" out of affection to the patient, being he "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun("; I immediately expressed my willingness to donate one of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s to my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(" to save him from danger and give him life."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("2. Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(" is now undergoing treatment at "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.hospitalAddress,
                  bold: true,
                }),
                new TextRun(" for the "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" failure. I am staying with my family at the aforesaid address "),
                new TextRun({
                  text: userData.donorAddress,
                  bold: true,
                }),
                new TextRun(". On seeing the acute condition of my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(" and I voluntarily out of my own free will, and natural affection towards my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(". I decided to donate one of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s to him only with an aim of saving him from danger. No one has compelled or forced me. Moreover, all the necessary "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" donation medical tests are carried out for me in the same hospital and the Doctors certified that I am suitable for donating one of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s to my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(". I am not expecting any financial or other types of rewards for donating one of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s to my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(". I have taken the decision myself to donate one of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s to my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" without anybody’s encouragement or force. My "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" transplant operation is to be performed at "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.hospitalAddress,
                  bold: true,
                }),
                new TextRun("."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("3. I am a person of mature age and mind and out of compassion, I accepted to donate one of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s out of my own free will and out of compassion to my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(". I also understand that the nature of risks involved in the operation for removal of one of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s as well as the possible future permanent injury to my health and the risk that my remaining "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" may be subsequently become injured or diseased. I also declare that I am aware of the possibilities that such a "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" transplant operation may not be successful."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("4. I hereby declare that I, out of my own free will and accord and out of humanitarian consideration, I voluntarily agreed to donate one of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s for transplantation into the body of the aforesaid Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(" in an effort to benefit of Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(". I wish to request and authorize the Doctors / Members of the "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(", their team of Doctors, Surgeons, Anesthetists, and to operate and / or assist in operating on me for the purpose of removal of one of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s from my body and to transplant operation into the body of the aforesaid Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun("."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("5. If at the time of the operation, any condition is discovered that was not previously apparent and that in the judgment of operating surgeons call for any surgical operation in addition to or in substitution for those that are not initially contemplated. I authorize him to takeover whatever measures he may consider necessary."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("6. I hereby declare that I shall not hold the aforesaid my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(" or other person, or "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(" and all the Doctors, Surgeons, Anesthetists, operating on, responsible for any consequences arising from the removal of one my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s whether at present or in future."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("7. I am fully aware and conscious that the operation is at my own risk and hence I shall not hold "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(", or any Doctor of "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(", or any one responsible or make any one liable on account of the operation."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("8. I submit that I know "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" donation is a major surgery, which is done under general Anaesthesia. I know that like all other surgeries which are done under general Anaesthesia, "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" donation surgery also have usual risks and complications. I also understand that for normal physiological function of our body one "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" is enough. So, "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" donation is not a problem to lead a normal life in future. All these matters about the "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" donation including post-operative complications have been explained to me by the Doctors. After knowing all the post – operative risks, I give my full consent / No Objection to donate one of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s to my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(" agree to this without any pressure."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("9. I, Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(" (Myself donor) and Mr. "),
                new TextRun({
                  text: userData.recipientName,
                  bold: true,
                }),
                new TextRun(" (Patient) both of us are "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" & "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun("."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("The content of this affidavit was translated in the language ("),
                new TextRun({
                  text: userData.nativeLanguage,
                  bold: true,
                }),
                new TextRun(") known to me and after understanding and accepting the whole contents. I set my signature to this solemn affidavit."),
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
  
            // Signatures
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Signature of the Donor"),
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
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Witnesses"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("1."),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("2."),
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
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("The above facts are true"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Before me,"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Solemnly affirm at "),
                new TextRun({
                  text: userData.place,
                  bold: true,
                }),
                new TextRun(" and"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Signed his Name in my presence"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Advocate, "),
                new TextRun({
                  text: userData.advocateName,
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });
  
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Donor_Affidavit.docx");
    });
  };

  // Patient Affidavit
  const PatientAffidavit = (userData) => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Title
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "PATIENT AFFIDAVIT",
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
  
            // Affidavit Content
            new Paragraph({
              children: [
                new TextRun("I, Mr. "),
                new TextRun({
                  text: userData.patientName,
                  bold: true,
                }),
                new TextRun(" aged "),
                new TextRun({
                  text: userData.patientAge,
                }),
                new TextRun("/"),
                new TextRun({
                  text: userData.patientGender,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.patientAddress,
                  bold: true,
                }),
                new TextRun(" and taking treatment at "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.hospitalAddress,
                  bold: true,
                }),
                new TextRun(". do hereby solemnly and sincerely affirm and declare as follows:"),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("1. I declare that I am the patient who has been suffering from "),
                new TextRun({
                  text: userData.condition,
                  bold: true,
                }),
                new TextRun(" as both of my "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s have been destroyed by disease and I was informed through doctors that I am in urgent need of "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" transplantation for my survival. I heard through Doctors that a "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" can be transplanted from one person to another through surgical operation in an attempt to save a patient of "),
                new TextRun({
                  text: userData.condition,
                  bold: true,
                }),
                new TextRun(". Doctors also informed that if any of my close relatives donate a suitable "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" to me; my life could be saved from danger. On hearing about my "),
                new TextRun({
                  text: userData.condition,
                  bold: true,
                }),
                new TextRun(", my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(", who permanently residing at "),
                new TextRun({
                  text: userData.donorAddress,
                  bold: true,
                }),
                new TextRun(", immediately expressed his willingness to donate one of his "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s to me, as he is very much attached and affectionate towards me. He never hesitates to do any help to me. On seeing my acute condition, and hearing about my "),
                new TextRun({
                  text: userData.condition,
                  bold: true,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(", was shocked and he voluntarily, out of his own will, decided to donate one of his "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s to me out of affection and deep attachment towards me, without any hesitation."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("2. His only aim is to save me from danger and give me life. No one has compelled or forced him to donate. There is no monetary consideration involved in this "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" donation."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("3. I further state that my permanent resident of "),
                new TextRun({
                  text: userData.patientAddress,
                  bold: true,
                }),
                new TextRun(" for my "),
                new TextRun({
                  text: userData.condition,
                  bold: true,
                }),
                new TextRun(" then all the necessary "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" donation medical tests are carried out for my relative in the same Hospital, and the Doctors certified that my "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(", who resides in "),
                new TextRun({
                  text: userData.donorAddress,
                  bold: true,
                }),
                new TextRun(", is suitable for donating a "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" to me."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("4. My "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(", also came to know through Doctors the nature of risks involved in the operation for removal of one of his "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s as well as the possible future injury to his health and the risk that his remaining "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" may be subsequently become injured or diseased. He is also aware of the possibilities that such a "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" transplant operation may not be successful. Since he is a person of mature age and mind, out of compassion and on humanitarian grounds, he is voluntarily accepted to donate one of his "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s out of his own free will to me to save me from danger."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("5. He also understands that for normal physiological function of his body one "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" is enough. So, "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" donation is not a problem to lead a normal life in future. All above said details about the "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" donation including the post-operative complications have been explained by the Doctors to "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(", who resides in "),
                new TextRun({
                  text: userData.donorAddress,
                  bold: true,
                }),
                new TextRun(", and after knowing all the post-operative risks, he gives his full consent. No objection to donate one of his "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s to me. I really feel proud of "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(", who resides in "),
                new TextRun({
                  text: userData.hospitalCity,
                  bold: true,
                }),
                new TextRun(". I have made own arrangements with "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(", who is residing the above address, enable to undergo the transplantation surgery. I am aware that neither the "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.hospitalAddress,
                  bold: true,
                }),
                new TextRun(" authorizes or that "),
                new TextRun({
                  text: userData.doctorName,
                  bold: true,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.doctorTitle,
                  bold: true,
                }),
                new TextRun(" of the at "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.hospitalAddress,
                  bold: true,
                }),
                new TextRun(", are responsible for arranging the donor to donate the "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" to me."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("6. I submit that I am willing to accept and receive one of the "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun("s from the donor, that I am accepting this out of my own, free will and consent and that there is absolutely no compulsion, or undue influence from any source. The Doctors of the Nephrology Department of the "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(" have explained to me in detail about the nature of the operation, the extent of risk involved and the consequences arising out of the transplantation operation. I am hereby giving my full consent to the "),
                new TextRun({
                  text: userData.doctorName,
                  bold: true,
                }),
                new TextRun(", "),
                new TextRun({
                  text: userData.doctorTitle,
                  bold: true,
                }),
                new TextRun(" to conduct the "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" transplantation operation on me and carry out the subsequent treatment."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("7. I declare that the donation of the "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" by the Donor and the recipient of the same by me under certain terms and condition inclusive of the financial aspects, encumbrance and expenses arising out of the said transplantation are exclusively between the donor and myself and that the "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(" or Department of Nephrology, or the Doctors who participate and conduct the "),
                new TextRun({
                  text: userData.organ,
                  bold: true,
                }),
                new TextRun(" transplantation surgery are not liable in any way for the above."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("8. I am fully aware and conscious that the operation is at my own risk and hence I shall not hold "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(" or any Doctor of the "),
                new TextRun({
                  text: userData.hospitalName,
                  bold: true,
                }),
                new TextRun(" or any one responsible or make any one liable on account of the operation."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("9. I, Mr. "),
                new TextRun({
                  text: userData.patientName,
                  bold: true,
                }),
                new TextRun(" (Patient) and Ms. "),
                new TextRun({
                  text: userData.donorName,
                  bold: true,
                }),
                new TextRun(" (Donor) both of us are "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun(" & "),
                new TextRun({
                  text: userData.relationship,
                  bold: true,
                }),
                new TextRun("."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("The content of this Declaration form was translated in the language("),
                new TextRun({
                  text: userData.nativeLanguage,
                  bold: true,
                }),
                new TextRun(") known to me and after understanding the whole contents, I am signing this Declaration Form."),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Date: 26-02-2025",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Place: Tiruchirappalli",
                  bold: true,
                }),
              ],
            }),
  
            // Signatures
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Signature of the Patient"),
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
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Witnesses"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("1."),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("2."),
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
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("The above facts are true"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Before me,"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Solemnly affirm at "),
                new TextRun({
                  text: userData.place,
                  bold: true,
                }),
                new TextRun(" and"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Signed his Name in my presence"),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun("Advocate, "),
                new TextRun({
                  text: userData.advocateName,
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });
  
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Patient_Affidavit.docx");
    });
  };

  const [list, setList] = useState([
    "Survival advantage over dialysis",
    "Better quality of life",
    "Independence of dialysis",
    "No fluid restriction"
  ]);

  const [ul,setul]=useState([
    "Deep vein thrombosis / pulmonary embolism",
    "Bleeding requiring blood transfusions or re- exploration",
    "Lymph collection around the kidney",
    "Pain at surgical site",
    "Blood clot in the graft artery/ vein which might need surgical removal of kidney","Urine leak and /or ",
    "urine collection in abdomen requiring re-exploration","Reactions/side effects from immunosuppressive medications including, infection, graft dysfunction, bowel disturbance, anaphylaxis especially with intravenous drugs and immunosuppressants"
  ])



  const videoConcern = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Title
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "INFORMED CONSENT FOR KIDNEY TRANSPLANT RECIPIENT",
                  bold: true,
                  underline: true,
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

            // Affidavit Content
            new Paragraph({
              children: [
                new TextRun("The kidney transplant surgery will be done under general anesthesia and usually takes about three to four hours. The surgeon will make an incision that's about eight inches long in your lower abdomen. The donor kidney will then be placed in the small pocket next to your pelvic bone, on either your left or right side. After a successful kidney transplant, it is our hope that you will be free from dialysis and have an improved quality of life "),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "BENEFITS:",
                  bold: true,
                }),
              ]
            }),
            // Manually create a numbered list
            ...list.map((item, index) => new Paragraph({
              children: [
                new TextRun({
                  text: `${index + 1}.        ${item}`,
                  
                   
                }),
              ],
            }),new Paragraph("")
          
          ),
            new Paragraph({
              children: [
                new TextRun({
                  text: "ATERNATIVE TREATMENT",
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  text:"Continuation of dialysis"
                })
              ]
            }),
           
            new Paragraph({
              children:[
                new TextRun({
                  text:"Potential Medical Risks",
                  bold:true
                })
              ]
            }),
            
            new Paragraph({
              children:[
                new TextRun({
                  text:""
            })]}),
            new Paragraph({
              children:[
                new TextRun({
                  text:"Many risks are involved with the transplant procedure. These include, but are not limited to"
                })
              ]
            }),
            new Paragraph({
              text:""
            }),
            ...ul.map((item) => new Paragraph({
              children: [
                new TextRun({
                  text: `O        ${item}`,
                 
                })
              ]
            })),
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            }),
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            }),
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            }),
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children:[
                new TextRun({
                  text:"Recipient Signature",
                  bold:true,
                  size:24
                })
              ]
            })



          ],
        },
      ]
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "video_concern.docx");
    });
  };






  
  // Example user data
  const userData_three = {
    donorName: "Abdul Rahim",
    donorAge: "35",
    donorGender: "Male",
    donorAddress: "39/19, Kasi Garden 3rd Street, Rayapuram, Chennai - 600013",
    spouseName: "Umalfathima",
    relationship: "Husband",
    organ: "kidney",
    nativeLanguage: "Tamil",
    recipientName: "Parishkan",
    hospitalName: "Star Kims Hospital",
    hospitalAddress: "D6, 6th Cross, th Cross St W, Extension, Thillai Nagar, Tiruchirappalli, Tamil Nadu, 620018",
    place: "Tiruchirappalli",
    advocateName: "Advocate Name",
  };
  
  // Generate the form with user data
  // DonorDependentAffidavit(userData_three);
  

 
  
  // Example user data
  // const userData = {
  //   doctorName: "Appan Prakash",
  //   doctorQualification: "NEPHRO",
  //   doctorRegistrationNumber: "123456",
  //   medicalCouncil: "Tamil Nadu Medical Council",
  //   donorName: "POONGODI",
  //   donorAge: "45",
  //   donorGender: "F",
  //   donorAddress: "75/96, GANDHIPURAM 1ST STREET, PALLIPALAYAM, NAMAKKAL, TAMIL NADU - 638006",
  //   organDonated: "one kidney",
  //   recipientName: "NARAYANA SING",
  //   recipientAge: "55",
  //   recipientGender: "M",
  //   recipientAddress: "615, BAPU NAGAR. PALLI, MARWAR, RAJASTHAN",
  //   relationship: "FAMILY FRIEND",
  //   date: "25-02-2025",
  //   place: "Tiruchirappalli",
  // };
  
  // Generate the form with user data
  // Form_four(userData);
  const handleClick = () => {
    // generateDocument();
    videoConcern()
    // generateDonorConsentForm()
  }
  return (
    <button
      onClick={handleClick}
      style={{ padding: "10px 20px", fontSize: "16px", margin: "20px" }}
    >
      Download Organ Donation Form
    </button>
  );
};
