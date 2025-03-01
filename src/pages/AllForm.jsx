import React, { useState } from "react";
// import { Document, Paragraph, TextRun, Packer, AlignmentType,Table,TableRow,TableCell  } from "docx";
import { Document, Packer,Paragraph, TextRun,AlignmentType } from "docx";
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

  const [infection,setInfection]=useState([
    "Urinary tract, infection of the graft, chest& blood stream infection, surgical site infection in immediate transplant period","Recurrent urinary tract, chest infection, bowel infection at any point post-transplant","Minor to life threatening Viral, bacterial and fungal infection","Cytomegalovirus virus of bowel, lungs, retina","BK virus infection and graft failure","Tuberculosis","Hypertension requiring medications, requiring insulin/ oral medications","oDelayed graft function or failure of the transplanted kidney."," oRejection episode of the transplanted kidney (10-20%) requiring kidney biopsy (one or multiple times). There are three types of rejection Hyper-acute rejection leading to organ failure in the operating room or within a few hours of surgery. Acute rejection in the first three (3) to six (6) months, especially in first weeks requiring intravenous immunosuppressants and/or plasma exchange Later rejection episodes causing permanent damage to the kidney","Lymphoma and skin cancer","Recurrence of the kidney disease and graft failure at any point of time - as early as days to many years after transplant.","Death - The risk of death during or immediately after a kidney transplant","oHypertension, kidney failure later in life of the donor","Death of the donor during or immediately after transplant"
  ])

  const [terms,setTerms]=useState([
    "Potential for donor death ( approximate risk 3 in 10000)","Potential for surgical complications including surgical site infection, wound dehiscence, blood or lymph collection, urinary tract infection, chest infection, deep vein thrombosis, pneumothorax & bleeding","Potential for developing hypertension requiring medication / preeclampsia, low grade proteinuria","Potential for kidney failure( approximate risk 3 in 10000 and the need for a future organ transplant for the donor in future","Potential for other medical complications including long-term complications currently unforeseen","Scars or hernias","Pain","Fatigue","Abdominal or bowel symptoms such as bloating and nausea"
  ])

  const [possible,setPossible]=useState([
    "Possibility of transplant recipient rejection and need for re-transplantation.","Possibility that the transplant recipient will have a recurrence of disease","Possibility of transplant recipient death","I have read the above information and have had all my questions answered to my satisfaction","I agree to participate as a living kidney donor"
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
              spacing:{
                after:300
              },
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
              spacing:{
                after:300
              },
              children: [
                new TextRun({
                  text: `o        ${item}`,
                 
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
            }), new Paragraph({
              children:[
                new TextRun("  ")
              ]
            }),
            new Paragraph({
              alignment:AlignmentType.Left,
              children:[
                new TextRun({
                  text:"Infections:",
                  bold:true
                })
              ]
            }),
            ...infection.map((item) => new Paragraph({
              spacing:{
                after:300
              },
              children: [
                new TextRun(`o        ${item}`),
                
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
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
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
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            })
            ,
            new Paragraph({
              children:[
                new TextRun("  ")
              ]
            }),
            new Paragraph({
              
              children:[
                new TextRun({
                  text:"  Recipient Name                                            Signature                                                 Date/Time"
                })
              ]
            })
            ,
            new Paragraph({
              spacing:{
                after:100
              },
              children:[
                new TextRun(" I have read and understood the above information and have had all my questions answered to my satisfaction")
              ]
            })
            ,
            new Paragraph({
              spacing:{
                after:100
              },
              children:[
                new TextRun("I agree to undergo the kidney transplant surgery and no guarantee has been given to me by anyone as to the results of the transplant")
              ]
            })
            ,
            new Paragraph({
              spacing:{
                after:100
              },
              children:[
                new TextRun("I consent to the doctor performing any additional procedures he deems necessary")
              ]
            })
            
            ,
            new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun("")
              ]
            })           
            ,
            new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun("______________________________________________________________________________________")
              ]
            }),
            new Paragraph({
              
              children:[
                new TextRun({
                  text:"  Recipient Name                                            Signature                                                 Date/Time"
                })
              ]
            }),
            new Paragraph({
              children:[
                new TextRun({
                  text:"  "
                })
              ]
            })
            ,new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun("______________________________________________________________________________________")
              ]
            }),
            new Paragraph({
              
              children:[
                new TextRun({
                  text:"  Transplant Surgeon                                             Signature                                                 Date/Time"
                })
              ]
            }),
            ,
            new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun("______________________________________________________________________________________")
              ]
            }),
            new Paragraph({
              
              children:[
                new TextRun({
                  text:"  Nephrologist                                           Signature                                                 Date/Time"
                })
              ]
            }),
            new Paragraph({
              children:[
                new TextRun({
                  text:"  "
                })
              ]
            }),
            new Paragraph({
              children:[
                new TextRun({
                  text:"  "
                })
              ]
            }),
            ,new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun("______________________________________________________________________________________")
              ]
            }),
            new Paragraph({
              
              children:[
                new TextRun({
                  text:"  witness                                            Signature                                                 Date/Time"
                })
              ]
            }),
            new Paragraph({
              children:[
                new TextRun({
                  text:"  "
                })
              ]
            }),
            ,
            new Paragraph({
              alignment:AlignmentType.CENTER,
              children:[
                new TextRun({
                  text:"CONSENT FOR LIVING KIDNEY DONATION",
                  bold:true,
                  size:30
                })
              ]
            }),
            new Paragraph({
              spacing:{
                before:200
              },
              children:[
                new TextRun("During Kidney Transplantation one of your healthy kidney will be laparoscopicaly removed and placed into recipient's body. Rarely Laparoscopic procedure may be converted to open procedure on table if necessity arises, where 6- to 10-inch incision will be made in your abdomen to remove the kidney")
              ]
            }),
            new Paragraph({
              children:[
                new TextRun({
                  text:"Potential risks associated with being a living donor include but may not be limited to the following"
                })
              ]
            }),
            ...terms.map((item) => new Paragraph({
              spacing:{
                after:300
              },
              children: [
                new TextRun({
                  text: `o        ${item}`,
                 
                })
              ]
            }))
            ,
            new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun("")
              ]
            })           
            ,
            new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun({
                  text:"Doner signature",
                  bold:true
                })
              ]
            }),     
            ...possible.map((item) => new Paragraph({
              spacing:{
                after:300
              },
              children: [
                new TextRun({
                  text: `o        ${item}`,
                 
                })
              ]
            })),
            new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun("")
              ]
            })           
            ,
            new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun("______________________________________________________________________________________")
              ]
            }),
            new Paragraph({
              
              children:[
                new TextRun({
                  text:"  Recipient Name                                            Signature                                                 Date/Time"
                })
              ]
            }),
            new Paragraph({
              children:[
                new TextRun({
                  text:"  "
                })
              ]
            })
            ,new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun("______________________________________________________________________________________")
              ]
            }),
            new Paragraph({
              
              children:[
                new TextRun({
                  text:"  Transplant Surgeon                                             Signature                                                 Date/Time"
                })
              ]
            }),
            ,
            new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun("______________________________________________________________________________________")
              ]
            }),
            new Paragraph({
              
              children:[
                new TextRun({
                  text:"  Nephrologist                                           Signature                                                 Date/Time"
                })
              ]
            }),
            new Paragraph({
              children:[
                new TextRun({
                  text:"  "
                })
              ]
            }),
            new Paragraph({
              children:[
                new TextRun({
                  text:"  "
                })
              ]
            }),
            ,new Paragraph({
              spacing:{
                before:1000
              },
              children:[
                new TextRun("______________________________________________________________________________________")
              ]
            }),
            new Paragraph({
              
              children:[
                new TextRun({
                  text:"  witness                                            Signature                                                 Date/Time"
                })
              ]
            }),
            new Paragraph({
              children:[
                new TextRun({
                  text:"  "
                })
              ]
            }),
                  
            
            


           
            





          ],
        },
      ]
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "video_concern.docx");
    });
  };

  const Doner_defendent_affiliate_tamil = () => {
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
                  text: "தானம் வழங்குபவரின் வாரிசுதாரரின் வாக்குமூலம்",
                  bold: true,
                  size: 32,
                }),
              ],
            }),
            // Main Content
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "நான் அப்துல் ரஹிம் வயது 35ஆண்டுகள் கணவன் & மனைவி 39/19, காசி கார்டன் 3வது தெரு, இராயபுரம், சென்னை, தமிழ் நாடு - 600013 என்ற விலாசத்தில் வசிக்கும் நான் இதன் மூலம் மனமுவந்து உண்மையுடன், உறுதியுடன் கூறுவது என்னவென்றால்",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "எனது மைத்துணன் திரு. பாரிஸ்கான் என்பவர் இரண்டு சிறுநீரகம் செயலிழந்து பாதிக்கப்பட்டுள்ளார்.",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "என்னுடைய கணவன் திருமதி. உமல்பாத்திமா தன்னுடைய ஒரு சிறுநீரகத்தை தனது சித்தப்பா மகன் திரு. பாரிஸ்கான் என்பவருக்கு தானமாக தர முழுமனதுடன் சம்மதித்துள்ளார்.",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "இவ்வாறு உடல் உறுப்பை மாற்று அறுவை சிகிச்சை செய்து பொருத்துவதின் மூலன் ஏற்படும் வலி, தொந்தரவு இரத்தப்போக்கு மற்றும் அபாயகரமான விளைவுகளை ஏற்படுத்தி உடல் நலத்திற்கு கேடுவிளைவிக்கும் என்பதை நான் புரிந்துகொண்டேன்.",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "மீதம் ஒரு சிறுநீரகம் மட்டுமே எனது மனைவி உடலில் இருக்கும் பட்சத்தில் எதிர்காலத்தில் சில பாதிப்புகள் ஏற்படலாம் என்பதையும், தானம் கொடுப்பவர் மேற்கண்ட டயாலிசிஸ் அல்லது உடல் உறுப்பு மாற்று சிகிச்சைக்கு உட்படலாம் என்பதையும் அறிவேன்.",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "நல்ல உடல் நலம் உடைய நபர் ஒருவருடைய சிறுநீரகத்தை தானம் கொடுப்பதால் அவர் உயர் இரத்த அழுத்தம் மற்றும் உடலில் உள்ள புரதச் சத்துக்கள் சிறுநீர் மூலம் வெளியேறி எதிர்வரும் நாட்களில் உடலுக்கு பாதிப்பை ஏற்படுத்தும் என்பதையும் அறிவேன்.",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "நான் இதன்மூலம் தெரிவிப்பது என்னவென்றால், எந்தவித பிரதிபலனும் எதிர்பாராமல், முழுமனதுடன் திருமதி. உமல்பாத்திமா என்பவர் அவருடைய ஒரு சிறுநீரகத்தை சித்தப்பா மகன் திரு. பாரிஸ்கான் என்பவருக்கு தானமாக அளிக்க முன்வந்துள்ளார் மற்றும் நானும் என்னுடைய குடும்ப உறுப்பினர்கள் டாக்டர். அப்பன் பிரகாஷ் (நெப்ராலஜிஸ்ட்) மற்றும் டாக்டர்.சுரேஷ் பாலாஜி (யூராலஜிஸ்ட் & அறுவை சிகிச்சை நிபுணர்) மற்றம் அறுவை சிகிச்சை மருத்துவர்கள் அல்லது மயக்கமருந்து மருத்துவர் ஸ்டார் கிம்ஸ் மருத்துவமனை ஆகியோர்கள் திருமதி. உமல்பாத்திமா என்பவருக்கு சிறுநீரக தானம் அறுவை சிகிச்சையின் போதும் அல்லது அறுவை சிகிச்சை முடிந்த பின்னரும் துரதிஷ்டவசமாக ஏதேனும் நடக்கும் பட்சத்தில் எதிர்வரும் நாட்களில் மேற்கூறிய மருத்துவர்களும், மருத்துவமனையும் எதற்கும் பொறுப்பேற்கமாட்டார்கள் என்பதை நன்கு புரிந்துகொண்டேன்.",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "இந்த சிறுநீரக தானத்திற்காக நானோ, மற்றவர்களோ அல்லது எனது குடும்ப உறுப்பினர்களோ எந்தவித பணபயனையோ எதிர்பார்த்து செய்யவில்லை. இதுபற்றிய விழிப்புணர்வை நான் நன்கு அறிவேன்.",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "நான் தேக உறுப்புகள் மாற்றி பொருத்துதல் சட்டம் விதி, 1994 (2011 சட்டத்திருத்தம் உட்பட) பற்றி விழிப்புணர்வுடன் அறிந்துள்ளேன்.",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "மேற்சொன்ன வாசகங்கள் யாவும் என்னால் அளிக்கப்பட்டவை எனவும், இவை அனைத்தும் என்னுடைய அறிவுக்கு எட்டியவரை உண்மை எனவும் சான்றளிக்கிறேன்.",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "நான் மேற்கூறிய தகவல்கள் தவறு என தெரியும் பட்சத்தில் சட்டபூர்வமாக எனக்கு எதிராக எடுக்கப்படும் எந்த நடவடிக்கைகளுக்கும் நான் கட்டுப்படுவேன் என்பதை நான் தெரிவிக்கிறேன். தமிழில் படிக்கக்கேட்டேன்",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(அவய கொடையாளியின் உறவினர்  கையொப்பம்)",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "சாட்சிகள் கையொப்பம்: (பெயர் மற்றும் விலாசம்)",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "1.",
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 240,
              },
              children: [
                new TextRun({
                  text: "2.",
                  size: 24,
                }),
              ],
            }),
            ...Array(10).fill("").map(() =>
              new Paragraph({
                spacing: {
                  before: 480,
                },
                children: [
                  new TextRun("  "), // Empty space
                ],
              })
            ),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "…………………………………..இடத்தில் ……………... தேதியில் மேற்குறிப்பிட்டுள்ள பிராமண வாக்குமூலத்தில் கண்டுள்ள யாவும் இந்த உறுதிமொழியளிப்பவரிடம் அவருக்கு தெரிந்த மொழியில், படித்துப்பார்க்கப்பட்டும் மேலும் படிக்க கேட்டும் முற்றிலும் உண்மை என தெரிந்துகொண்ட நிலையில் என் முன்பாக இதில் கையொப்பம் செய்தார்.",
                  size: 24,
                }),
              ],
            }),
          ],
        },
      ],
    });
  
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "video_concern.docx");
    });
  };

  const doner_affidavi_Tamil = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Title with font styling
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "தானம் கொடுப்பவர் வாக்குமூலம்",
                  bold: true,
                  size: 32,
                  font: "Latha", // Tamil font
                }),
              ],
            }),
  
            // Main content with font styling
            new Paragraph({
              spacing: { after: 240 },
              children: [
                new TextRun({
                  text: "நான் undefined. உமல்பாத்திமா வயது 31ஆண்டுகளில், undefined undefined கதவு எண் 39/19, காசி கார்டன் 3வது தெரு, இராயபுரம், சென்னை, தமிழ் நாடு - 600013 என்ற விலாசத்தில் வசிக்கும் நான் இதன் மூலம் மனமுவந்து உண்மையுடன், உறுதியுடன் கூறுவது என்னவென்றால்,",
                  size: 24,
                  font: "Latha",
                }),
              ],
            }),
  
            // Subsection 1
            new Paragraph({
              spacing: { after: 240 },
              children: [
                new TextRun({
                  text: "1.என்னுடைய சித்தப்பா மகன் பாரிஸ்கான் வயது 27ஆண்டுகள், undefined  undefined என்பவர் இரண்டு சிறுநீரகங்களும் செயலிழந்து தற்பொழுது ஸ்டார் கிம்ஸ் மருத்துவமனை சிகிச்சை பெற்று வருகிறார். அவருடைய இரண்டு சிறுநீரகங்கள் முற்றிலும் சிதைந்து விட்டது என்பதை நன்கு அறிவேன். சிதைந்த அந்த சிறுநீரகங்களை எடுத்துவிட்டு என்னுடைய ஒரு சிறுநீரகத்தை எடுத்து பொருத்துவதற்கு சம்மதம் தெரிவித்துக்கொள்கிறேன். இவ்வாறு சிறுநீரகத்தை தானம் செய்வதால், இயற்கையாக ஏற்படக்கூடிய விளைவுகளையும், என்னுடைய உடலிலிருந்து ஒரு சிறுநீரகத்தை எடுப்பதால் எதிர்காலத்தில் என்னுடைய உடலுக்கு ஏற்படும் கெடுதல்களையும், மாற்ற என்னுடைய ஒரு சிறுநீரகத்திருக்கும் அறுவை சிகிச்சை முடித்த பின்னர் மீண்டும் கெடுதி அல்லது நோய்களை ஏற்படுத்தும் என்பதை அறிவேன்.",
                  size: 24,
                  font: "Latha",
                }),
              ],
            }),
  
            // Subsection 2
            new Paragraph({
              spacing: { after: 240 },
              children: [
                new TextRun({
                  text: "2.இந்த சிறுநீரக தானம் மாற்று அறுவை சிகிச்சை வெற்றியுடன் நடத்த முடியும் என்பதை விழிப்புணர்வுடன் அறிவேன்.",
                  size: 24,
                  font: "Latha",
                }),
              ],
            }),
  
            // ... Add similar styling to other paragraphs ...
  
            // Signature section
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "(அவய கொடையாளியின்   கையொப்பம்)",
                  bold: true,
                  size: 24,
                  font: "Latha",
                }),
              ],
            }),
  
            // Witnesses section
            new Paragraph({
              children: [
                new TextRun({
                  text: "சாட்சிகள் கையொப்பம்: (பெயர் மற்றும் விலாசம்)",
                  size: 24,
                  font: "Latha",
                }),
              ],
            }),
          ],
        },
      ],
    });
  
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "doner_affidavi_tamil.docx");
    });
  };




  const patient_affidavi_Tamil = () => {
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
                                text: "நோயாளியின் வாக்குமூலம்",
                                bold: true,
                                size: 32,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Main content
                    new Paragraph({
                        spacing: { after: 240 },
                        children: [
                            new TextRun({
                                text: "நான் திரு. பாரிஸ்கான் வயது 27 ஆண்டுகள்,  undefined. undefined 460(3), நாவலர்நகர், 2ம் தெரு, காலனி, விளார், தஞ்சாவூர், தமிழ் நாடு-613006 என்ற விலாசத்தில் வசிக்கும் நான் இதன் மூலம் மனமுவந்து உண்மையுடன், உறுதியுடன் கூறுவது என்னவென்றால்,",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Point 1
                    new Paragraph({
                        spacing: { after: 240 },
                        children: [
                            new TextRun({
                                text: "1) என்னுடைய இரண்டு சிறுநீரகங்களும் முற்றிலும் பாதிக்கப்பட்டு நோய்வாய்பட்டுள்ளேன், எனது பெரியப்பா மகள் திருமதி. உமல்பாத்திமா தாமாக முன்வந்து தன்னுடைய ஒரு சிறுநீரகத்தை எனக்கு தனமாக அளித்து என்னுடைய வாழ்க்கையை காப்பாற்ற உள்ளார்கள்.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Point 2
                    new Paragraph({
                        spacing: { after: 240 },
                        children: [
                            new TextRun({
                                text: "2) நான் இந்த சிறுநீரக மாற்று அறுவைசிகிச்சையை என் முழுமன சம்மதத்துடன் ஏற்றுக்கொள்கிறேன். இந்த அறுவைசிகிச்சையின் பின் விளைவுகள் பற்றி எனக்கு நன்கு தெரியும். என் அறிவுத் திறமைக்கு எட்டியவாறு எந்தவிளைவுகள் எனக்கு ஏற்பட்டாலும், இது சம்மந்தமாக எந்த ஒரு நபரையும் நான் நெருக்கடிக்கு ஆளாக்கமாட்டேன்.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Point 3
                    new Paragraph({
                        spacing: { after: 240 },
                        children: [
                            new TextRun({
                                text: "3) நான் மேற்கூறிய விலாசத்தில் என்னுடைய குடும்ப உறுப்பினர்களுடன் வசித்து வருகிறேன். நான் முழு சுவாதீனத்துடனும், மனோசக்திக்கு உட்பட்டும் மற்றும் எனது உடல் நல்ல நிலையிலும், ஏற்றுக்கொள்ளக்கூடிய வயது எல்லையையும், இந்த சிறுநீரக மாற்று அறுவை சிகிச்சையின் மூலம் எனது உடலில் நல்ல முன்னேற்றம் ஏற்படும் என்பதையும், இந்த சிறுநீரக மாற்று அறுவை சிகிச்சை முழுவதும் வெற்றியுடன் முடிக்க முடியும் என்ற விழிப்புணர்வை நான் அறிவேன்.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Point 4
                    new Paragraph({
                        spacing: { after: 240 },
                        children: [
                            new TextRun({
                                text: "4) நான் என்னுடைய இதயபூர்வமான சம்மதத்தையும் மற்றும் அதிகாரத்தையும், இந்த சிறுநீரக மாற்று அறுவை சிகிச்சை செய்யும் மருத்துவர்களுக்கும் மற்றும் சிறுநீரகவியல் மருத்துவர்களான டாக்டர். அப்பன் பிரகாஷ் MD.,DM.,,(நெப்ராலஜிஸ்ட்) மற்றும் டாக்டர்.சுரேஷ் பாலாஜி Ms.,,Mch.,, (யூராலஜிஸ்ட் & அறுவை சிகிச்சை நிபுணர்) மற்றும் மயக்கமருந்து மருத்துவர் குழுவுக்கும் இந்த அறுவை சிகிச்சையில் பணியாற்றும் அனைத்து மருத்துவர்களுக்கும், எனக்காக ஒரு மாற்று சிறுநீரகத்தை வழங்கும் என்னுடைய பெரியப்பா மகள் திருமதி. உமல்பாத்திமா 3மற்றும் அனைவருக்கும் இதயபூர்வமான சம்மதம் மற்றும் அதிகாரத்தையும் வழங்குகின்றேன்.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Point 5
                    new Paragraph({
                        spacing: { after: 240 },
                        children: [
                            new TextRun({
                                text: "5) மேலும் இதனால் உறுதியாக கூறுவது என்னவென்றால், இந்த அறுவை சிகிச்சையின் போது என்னுடைய உடல்நிலை சமந்தமாகவும், மருத்துவ ரீதியாகவும் எந்த முடிவுகளை எடுக்கவும் நான் என்னுடைய முழு அங்கீகாரத்தையும், சம்மதத்தையும் மருத்துவ குழுவினருக்கு நான் ஈடுபாடுடன் அளிக்கிறேன்.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Point 6
                    new Paragraph({
                        spacing: { after: 240 },
                        children: [
                            new TextRun({
                                text: "6) நான் மேலும் மனமுவந்தும், உறுதியுடனும், கூறுவது என்னவென்றால் என்னுடைய இந்த சிறுநீரக மாற்று அறுவை சிகிச்சைக்கு பின்னர் ஏதாவது பக்கவிளைவுகள் அல்லது கடினமான சூழ்நிலைகள் ஏற்படும் பட்சத்தில்  ஸ்டார் கிம்ஸ் மருத்துவமனை என்ற விலாசத்தில் அமைந்திருக்கும் மருத்துவமனையையோ, மருத்துவ குழுவினரையோ அல்லது எனக்கு சிகிச்சை அளிக்கும் மருத்துவர் குழுவின் மீதோ எப்பொழுதும் எந்தவிதமான கஷ்டமான நிலைகளுக்கும் உட்படுத்தமாட்டேன் என உறுதியுடன் சான்றளிக்கிறேன்.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Point 7
                    new Paragraph({
                        spacing: { after: 240 },
                        children: [
                            new TextRun({
                                text: "7) மேலும் நான் முழு விழிப்புணர்வுடன், உண்மையுடன் சிறுநீரகமாற்று அறுவை சிகிச்சைக்கு பின்னர் மருத்துவர்கள் பரிந்துரைக்கும் மருந்துகளையும், மருத்துவர்களின் அறிவுரைகளின்படியும் தொடர்ந்து நடந்துகொள்வேன் எனவும் உண்மையுடன் பின்பற்றுவேன் எனவும் சான்றளிக்கிறேன். இது தவறும் பட்சத்தில் என்னுடைய உடல்நலம் சீர்கெடும் என்பதை நான் அறிவேன்.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Point 8
                    new Paragraph({
                        spacing: { after: 240 },
                        children: [
                            new TextRun({
                                text: "8) இந்த சிறுநீரக மாற்று அறுவைசிகிச்சையை நிறைவேற்றும் பொருட்டு, நான் என்னுடைய விருப்பத்துடனும், சம்மதத்துடனும் தெரிவித்துக் கொள்கிறேன். அறுவை சிகிச்சை மூலமாக எதிர்வரும் நாட்களில் ஏதாவது பக்கவிளைவுகள் அல்லது சிக்கலான நடவடிக்கைகள், தொந்தரவு மற்றும் குழப்பமான சூழ்நிலைகள் ஏற்படுமாயின் இது சமந்தமாக நான் யாரையும் நிர்பந்தம் செய்யமாட்டேன்.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Point 9
                    new Paragraph({
                        spacing: { after: 240 },
                        children: [
                            new TextRun({
                                text: "9) நான் மனிததேக உறுப்புக்கள் மாற்று பொருத்துதல் சட்டம் விதி, 1994(2011சட்டத்திருத்தம் உட்பட)பற்றிய விழிப்புணர்வை நன்கு அறிவேன். நான் இதன் மூலம் உறுதியாக கூறுவது யாதெனில், மேற்கூறிய தகவல்கள் யாவும் என்னால் அளிக்கப்பட்டவை எனவும், என்னுடைய அறிவு திறமைக்கு எட்டியவரை உண்மையாக சான்றளிக்கிறேன். மேலும் நான் மேற்குறிய தகவல்கள் தவறு என தெரியும்பட்சத்தில், என்மீது எனக்கு எதிராக எந்தவிதமான சட்டரீதியான நடவடிக்கைகளையும் எடுக்கமுடியும் என்பதை விழிஒப்புணர்வுடன் அறிவேன்.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Patient's signature
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: "(நோயாளியின் கையொப்பம்)",
                                bold: true,
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Witnesses section
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "சாட்சிகள் கையொப்பம்: (பெயர் மற்றும் விலாசம்)",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "1.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "2.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),

                    // Additional paragraph
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "……………………………இடத்தில்…………………தேதியில் மேற் குறிப்பிட்டுள்ள பிராமண வாக்குமூலத்தில் கண்டுள்ள யாவும் இந்த உறுதிமொழியளிப்பவரிடம் அவருக்கு தெரிந்த மொழியில், படித்துப்பார்க்கப்பட்டும் மேலும் படிக்க கேட்டும் முற்றிலும் உண்மை என தெரிந்துகொண்ட நிலையில் என் முன்பாக இதில் கையொப்பம் செய்தார்.",
                                size: 24,
                                font: "Latha",
                            }),
                        ],
                    }),
                ],
            },
        ],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "patient_affidavi_tamil.docx");
    });
};

const form_20 = () => {
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
                text: "FORM 20",
                bold: true,
                underline: true,
                size: 24,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "VERIFICATION CERTIFICATE IN RESPECT OF DOMICILE STATUS OF RECIPIENT OR DONOR",
                bold: true,
                underline: true,
                size: 24,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "[To be issued by tehsildar or any other authorised officer for the purpose (required only for the donor - other than near relative or recipient if they do not belong to the state where transplant hospital identified for operation is located)] [Refer rule 14]",
                italic: true,
                size: 18,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "PART I (To be filled by applicant donor or recipient separately in triplicate)",
                bold: true,
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "In reference to application for verification of domicile status for donation of …………………………………………………………………………...",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "(Name of organ/Tissue) from living donor (other than near relative) or recipient under Transplantation of Human Organ Act, 1994 (42 of 1994), submitted on (date) ………………….. by the applicant donor or recipient, with following details and photograph, along with his or her identification and domicile status for verification.",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Details of Applicant Recipient or Donor",
                bold: true,
                size: 18,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Name : Sundar",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Age : 21",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Sex : Male",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Relationship : Father of (F/O)",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Relationship Person Name : Rajaligam",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Address: 4/57 palaiyathan thootam",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Hospital Reg. No: ",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "(Recent Photo of Applicant must be signed by him or her across the photo after affixing it)",
                italic: true,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "The detail of my donor or recipient are as under and I have enclosed his or her self-signed recent photograph :",
                bold: true,
                size: 18,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Name : Rajaligam",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Age : 39",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Sex : Male",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Relationship : Father of (F/O)",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Relationship Person Name : Veiraperummal",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Address: 4/57 palaiyathan thootam",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Hospital Reg. No: ",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Signature of Applicant",
                bold: true,
                size: 18,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Enclosure: Self signed copy of the donor or recipient for the applicant (to be enclosed )",
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "PART II (To be filled by the certificate issuing authority):",
                bold: true,
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "The above request has been examined and it is certified that the domicile status of the applicant donor or recipient mentioned as above has been verified as under:",
                bold: true,
                size: 18,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Name …..………………………………………………………..Son or Daughter or Wife of ………………………………………………….………..",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "resident of village or ward ………….,…………………………Tehsil or Taluka………………………………………………………………………..",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "District………..………………………………………………….State or UT …………………………………………………………………………….",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "and found correct or incorrect ……………………………………………………………………………………………………………………..……….",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "………………………………………………………………………………………………………………………………………………………………",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Date …………………..……",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Place ………………………",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Reference No",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Authorised Signatory",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Name and Designation",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Office Stamp",
              }),
            ],
          }),
        ],
      },
    ]
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "form20.docx");
  });
};

const form_21 = () => {
  // Using docx library to create document
  
  const doc = new Document({
      sections: [
          {
              properties: {},
              children: [
                  // Title Section
                  new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                          new TextRun({
                              text: "FORM 21",
                              bold: true,
                              size: 28,
                          }),
                      ],
                  }),
                  new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                          new TextRun({
                              text: "CERTIFICATE OF RELATIONSHIP BETWEEN DONOR AND RECIPIENT IN CASE OF FOREIGNERS",
                              bold: true,
                              size: 24,
                          }),
                      ],
                  }),
                  new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                          new TextRun({
                              text: "(To be issued by the Embassy concerned) [Refer rule 20(a)]",
                              size: 20,
                          }),
                      ],
                  }),
                  new Paragraph({ text: "" }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "The embassy of ……………………… (Name of Country) in India, is in receipt of an application received from (Name of Organ donor and recipient) on ………………………..(Date) recommended by (Name of Government Department of country of origin) for facilitation of donation of………………………………(Name of Organ or Tissue) from living donor …………………………..(Name of donor) to the recipient………………………………...(Name of recipient) for therapeutic purposes under the Transplantation of Human Organ Act, 1994(42 of 1994). The details of donor and recipient and photographs are as given below:-",
                              size: 14,
                          }),
                      ],
                  }),
                  // Recipient and Donor Details Section
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "Details of Recipient",
                              bold: true,
                              size: 16,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "Name: amjad Khna",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "Age: 42",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "   Sex: Male",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: " Relationship: Father of (F/O)",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: " Relationship Person Name: Gani khan",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "   Address: abdul shah colony, Choudhary masala udyog, siwanchi gate, jodhpur, Rajesthan - 342001",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({ text: "" }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "Details of Donor",
                              bold: true,
                              size: 16,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "Name: sangeetha",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "Age: 35",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "   Sex: Female",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: " Relationship: Wife of (W/O)",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: " Relationship Person Name: baskar",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "   Address: 5/15, weavers colony-3, tiruchengode, tamilnadu-637211",
                              size: 14,
                          }),
                      ],
                  }),
                  // Photo Section
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "{photo section}",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({ text: "Recipient" }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "(Photo of recipient and donor must be signed and stamped across the photo after affixing)",
                              italic: true,
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({ text: "" }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "1.This is to certify that relationship between donor and Recipient is……………………………………………………………………………...",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "2.The authenticity of following enclosed identification and verification documents is certified",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "a …………………………………………………………………………………………………….................................................... b…………………………………………………………………………………………………………………………………………",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "'No objection certificate' is granted, as to the best of my knowledge, the donor is donating out of love and affection or affection and attachment towards the recipient, and there is no financial transaction between recipient and donor and there is no pressure on or coercion of the donor.",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({ text: "" }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "(Signature of Senior Embassy Official)",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "Date: 01-03-2025",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "Name: ………………………………………",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "Place: Tiruchirappalli",
                              size: 14,
                          }),
                      ],
                  }),
                  new Paragraph({
                      children: [
                          new TextRun({
                              text: "Designation………………………………...",
                              size: 14,
                          }),
                      ],
                  }),
              ],
          },
      ],
  });

  // Generate and save the document
  Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "form_21.docx");
  });
};




const letter = () => {
  const doc = new Document({
    sections: [
      {
        children: [
          // First Letter
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("To, "),
              new TextRun("Date: 01-03-2025")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("The Dean,\n"),
              new TextRun("Authorization Committee,\n"),
              new TextRun("Govt Rajaji Hospital,\n"),
              new TextRun("Madurai -20.")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [new TextRun("Respected Sir / Madam,")]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({
                text: "Sub: Application for Live Donor Kidney Transplantation- Mr. Parishkan (Patient) &Ms. Umalfathima(Donor)",
                bold: true
              })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("Greetings from Star Kims Hospital, D6, 6th Cross, th Cross St W, Extension, Thillai Nagar, Tiruchirappalli, Tamil Nadu, Tiruchirappalli, Tamil Nadu, 620018.")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("Herewith forwarding the application of the above mentioned patient for the approval of the Authorization Committee for their Live Donor Kidney Transplantation. All the documents as per the checklist are attached along with a Demand Draft (No…………………) dated…………………, Rs. 1000/-")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("Patient "),
              new TextRun("Donor")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("We kindly request you to process their application.")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [new TextRun("Thank You")]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("Signature of Authorized Signatory of the Hospital")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [new TextRun("01-03-2025")]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [new TextRun("Tiruchirappalli")]
          }),

          // Second Letter
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [new TextRun("\n\nTo")]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("The Dean,\n"),
              new TextRun("Authorization Committee,\n"),
              new TextRun("Govt Rajaji Hospital,\n"),
              new TextRun("Madurai -20.")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [new TextRun("Respected Sir,")]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({
                text: "Sub: Application for Live Donor Kidney Transplant – Patient Mr. Parishkan & Ms. Umalfathima (Niece & Niece) Donor - Reg",
                bold: true
              })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("Herewith forwarding the application of the above mentioned patient for the approval for their live Donor Kidney Transplantation. All the documents as per the Authorization Committee Checklist is attached for your kind perusal")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("Patient "),
              new TextRun("Donor")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("I kindly request you to review their application and approve for transplantation.")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [new TextRun("Thank you.")]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun("Dr. Appan Prakash., MD.,DM.,, (Nephro)\n"),
              new TextRun("Chief Consultant – Interventional Nephrologus & Transplant Physician")
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [new TextRun("01-03-2025")]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [new TextRun("Tiruchirappalli")]
          }),
        ]
      }
    ]
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "transplant_application.docx");
  });
};



const form_declaration = () => {
    const doc = new Document({
        sections: [{
            children: [
                // Doctor's Declaration
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: 'Declaration of the Doctor on the Post-Operative Complication to the Patient, Donor & Donor’s Dependent',
                            bold: true,
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun("I hereby certify that, Mr. dfger(Patient), Mr. dfgdfg(Prospective donor) &Mr. dfgdfg(Donor Dependent) have been explained in detail on complications involved on Kidney transplant and donor surgery. They are also aware that one of the kidneys will be removed surgically from the donor and the below listed complications of the procedure have been explained to us in detail in their language."),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({ text: 'Post- Operative Complication for Patient', bold: true }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("I. Bleeding") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("II. Increased Risk of Infection- Immediate and Delayed") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("III. Delayed Graft Function") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("IV. Acute Rejection") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("V. Chronic Rejection") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("VI. Urine Leak") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("VII. Malignancy Occasionally") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({ text: 'Post- Operative Complications for Donor', bold: true }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("I. Bleeding") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("II. Wound Infection") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("III. Damage to another Kidney") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("IV. Protein leak in urine") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("V. High Blood Pressure") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("VI. Even Death is possible") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun("Dr.Appan Prakash MD.,DM., Nephrology Star Kims Hospital, Tiruchirappalli."),
                    ],
                }),
                new Paragraph({}),  // Blank line for spacing
                // Recipient's Declaration
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({ text: 'DECLARATION', bold: true }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun("Dr. Suresh Bhalaji Ms.,,Mch.,, (Consultant-Transplant Surgeon), explained to us the following complications of Kidney Transplantation for the Recipient and the complications of donating a kidney by the Donor."),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun("Complications of Kidney Transplantation for the Recipient: -"),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("1. Rejection") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("2. Infection") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("3. Bleeding") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun("Complications of Kidney Donation: -"),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("1. The risk of surgery and anesthesia.") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("2. Possibility of hypertension and proteinuria in the long run.") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("3. Possibility of disease or injury to the single kidney.") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [ new TextRun("4. Inability to work hard for three months from the date of surgery.") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun("And we Mr. dfger(Patient), Mr. dfgdfg(Prospective donor) & Mr. dfgdfg(Donor Dependent) have clearly understood it and have unanimously agreed to proceed further for Kidney Transplantation at Star Kims Hospital, D6, 6th Cross, th Cross St W, Extension, Thillai Nagar, Tiruchirappalli, Tamil Nadu , Tiruchirappalli, Tamil Nadu, 620018."),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [ new TextRun("Recipient") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [ new TextRun("Donor") ],
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [ new TextRun("Donor Spouse/Dependent") ],
                }),
            ],
        }],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "transplant_declaration.docx");
    });
};



const form_identification_marks = () => {
    const doc = new Document({
        sections: [{
            children: [
                // RECIPIENT SECTION
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 600 }, 
                    children: [new TextRun('RECIPIENT')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Recipient Name\t: Mr. sheshadri')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Age\t\t\t: 69')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Sex\t\t\t: Male')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Identification marks')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('\t1. ')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 300 },
                    children: [new TextRun('\t2. ')],
                }),
                
                // DONOR SECTION
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 600 },
                    children: [new TextRun('DONOR')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Donor Name\t\t: Mr. MYILRAJ')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Age\t\t\t: 36')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Sex\t\t\t: Male')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Identification marks')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('\t1. ')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 300 },
                    children: [new TextRun('\t2. ')],
                }),
                
                // DONOR DEPENDENT SECTION
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 600 },
                    children: [new TextRun('DONOR DEPENDENT')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Dependent Name\t: Mrs. SAYIDHA S')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Age\t\t\t: 39')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Sex\t\t\t: Female')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('Identification marks')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 100 },
                    children: [new TextRun('\t1. ')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 300 },
                    children: [new TextRun('\t2. ')],
                }),

                // DOCTOR'S DETAILS
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 600 },
                    children: [
                        new TextRun({
                            text: 'Dr. Appan Prakash  MD., DM., Nephrology\nStar Kims Hospital, Tiruchirappalli.',
                            bold: true,
                        }),
                    ],
                }),
            ],
        }],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "identification_marks.docx");
    });
};



const form_annexure = () => {
    const doc = new Document({
        sections: [{
            children: [
                // ANNEXURE I
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 600, after: 300 },
                    children: [new TextRun('ANNEXURE – I')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('Patient and Donor Photos: -'),
                        new TextRun('\n\n\n\n\n\n'),
                        new TextRun('[INSERT PHOTO HERE - Patient]\n'),
                        new TextRun('[INSERT PHOTO HERE - Donor]\n'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('Donor and Donor Dependent Photos: -'),
                        new TextRun('\n\n\n\n\n\n'),
                        new TextRun('[INSERT PHOTO HERE - Donor]\n'),
                        new TextRun('[INSERT PHOTO HERE - Donor Dependent]\n'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('Common Picture taken at any family function'),
                        new TextRun('\n\n\n\n\n'),
                        new TextRun('[INSERT PHOTO HERE - Family Function]\n'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 600, after: 300 },
                    children: [new TextRun('ANNEXURE – II')],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('Name of the Medical Superintendent\t:  	Dr.RajaRathinam\n'),
                        new TextRun('\t\t\t\t\t\tM.Ch(SGE),MRCS(Edin)\n'),
                        new TextRun('\t\t\t\t\t\tDirector- Medical Services\t\t\tStar Kims Hospital,Tiruchirappalli\n\n'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('Name of the Transplant Surgeon\t:  	Dr.Suresh Bhalaji,\tMs.,,Mch.,,\n'),
                        new TextRun('\t\t\t\t\t\tUrologist Consultant-Transplant Surgeon\n'),
                        new TextRun('\t\t\t\t\t\tStar Kims Hospital,Tiruchirappalli\n\n'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('Name of the Nephrologist\t\t:	Dr.  Appan Prakash, MD.,DM.,,\n'),
                        new TextRun('\t\t\t\t\t\tNephrology\n'),
                        new TextRun('\t\t\t\t\t\tStar Kims Hospital,Tiruchirappalli\n'),
                    ],
                }),
            ],
        }],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "annexure.docx");
    });
};




const form_certification = () => {
    const doc = new Document({
        sections: [{
            children: [
                // Salutation
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 400, after: 200 },
                    children: [new TextRun('TO WHOM IT MAY CONCERN')],
                }),

                // Body Content
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun(`This is to certify that the patient Mr. Parishkan, aged 27 years, `),
                        new TextRun('undefined undefined'),
                        new TextRun(` and the Donor Ms. Umalfathima, aged 31 years S/O AKBAR ALI who is "Niece & Niece" to the Patient `),
                        new TextRun('is found medically fit for the renal replacement therapy. ')
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('We are submitting all the documents required by the authorization committee for the approval for the above patient to undergo kidney transplantation in this hospital.\n\n')
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('We certify that, the furnished documents have been verified and found to be genuine. If anything is found wrong by the authorities concerned at a later date, the hospital will be held responsible for the negligence. ')
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('Appropriate legal proceedings will be prosecuted against the doctors signed below, the hospital at which the surgery is performed, and also against the erring personnel who prepared the documents by the competent authorities for sending forged documents.')
                    ],
                }),

                // Signature Section
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 600, after: 300 },
                    children: [
                        new TextRun('Signature of treating\t\t\tSignature of Operating\t\tSignature of Authorized'),
                        new TextRun('\nNephrologist\t\t\t\tTransplant Surgeon\t\tSignatory of the Hospital'),
                        new TextRun('\n(With Name & Seal)\t\t(With Name & Seal)\t\t(With Name & Seal)')
                    ],
                }),
            ],
        }],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "transplant_certification.docx");
    });
};



const form_checklist = () => {
    const doc = new Document({
        sections: [{
            children: [
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 700, after: 300 },
                    children: [
                        new TextRun({
                            text: 'CHECKLIST TO BE ACCOMPANIED ALONG WITH THE APPLICATION SEEKING PERMISSION FOR RENAL TRANSPLANTATION',
                            bold: true,
                        }),
                        new TextRun('\nD.M.E.Ref.No.39200/H&DI1/4/2023, DATED.28.04.2023'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 300 },
                    children: [
                        new TextRun('S.NO\tPARTICULARS\t\tREQUIRED\t\tPAGE NO'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('1\tForm -1\t\t\t\tYes\t\t\t\t'),
                        new TextRun('\tFor organ donation from'),
                        new TextRun('\tidentified living near related donor (As per H.O.T.Act)'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('2\tForm -2\t\t\t\tYes\t\t\t\t'),
                        new TextRun('\tFor organ donation by living spousal donor (As per H.O.T.Act)'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('3\tForm -3\t\t\t\tYes\t\t\t\t'),
                        new TextRun('\tFor organ donation by other than near relative living donor (As per H.O.T.Act)'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('4\tForm -4\t\t\t\tYes\t\t\t\t'),
                        new TextRun('\tFor certification of medical fitness of living donor (To be given by the Registered Medical Practitioner)'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('5\tForm -5\t\t\t\tYes\t\t\t\t'),
                        new TextRun('\tFor certification of genetic relationship of living donor with recipient(To be filled by the head of Pathology Laboratory certifying relationship)'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('6\tForm -6\t\t\t\tYes\t\t\t\t'),
                        new TextRun('\tFor Spousal living donor ( in case of foreigners )'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('7\tForm -11\t\t\tYes\t\t\t\t'),
                        new TextRun('\tApplication for approval of Transplantation from living Donor'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('8\tForm -20\t\t\tYes\t\t\t\t'),
                        new TextRun('\tVerification certificate in respect of domicile status of recipient or donor'),
                        new TextRun('\t(required only for the donor - other than near relative or recipient if they do not belong to the state where transplant hospital identified for operation is located)'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('9\tForm -21\t\t\tYes\t\t\t\t'),
                        new TextRun('\tCertificate of relationship between donor and recipient in case of foreigners'),
                        new TextRun('\t(To be issued by the Embassy concerned)'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('10\tHLA Test - Report\tYes\t\t\t\t'),
                        new TextRun('\tReport to be submitted in respect of Blood related donor (As per H.O.T. Act)'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('11\tIdentification Marks\tYes\t\t\t\t'),
                        new TextRun('\t1.Patient'),
                        new TextRun('\t2.Donor'),
                        new TextRun('\t3.Donor’s Spouse or Dependents'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('12\tDeclaration from the Doctor Concerned\tYes\t\t\t\t'),
                        new TextRun('\t1. To the Effect that All the Post-Operative Complications have Explained in detail to the patient, Donor and Donor Spouse or Dependent in their Mother Tongue Explaining all the consequences'),
                        new TextRun('\n\t2. Declaration from the Patient , Donor & Donor’s Spouse or Dependent stating that All the Pos -Operative Complications have been Explained to them by the Doctor Concerned to their full understanding'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('13\tA copy of current Registration Certificate\tYes\t\t\t'),
                        new TextRun('\tIssued by the Appropriate Authority for Human Organ Transplantation Act and Director of Medical And Rural Health Services, Chennai'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('14\tProof of Nativity\tYes\t\t\t\t'),
                        new TextRun('\t1.The Patient and Donors should Submit their Identity Card such as Ration Card, Election Identity Card, Passport , Bank PassBook with three years transaction etc., to prove their Nativity.'),
                        new TextRun('\t2.   The Above proof should be attested by a Notary Public'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('15\tTamil Nadu\tYes\t\t\t\t'),
                        new TextRun('\t1. Original Affidavit in  Mother tongue of the Patient duly signed in the presence of the Magistrate with translation in English duly attested by a Notary Public'),
                        new TextRun('\n\t2. Original Affidavit in  Mother tongue of the Donor duly signed in the presence of the Magistrate with translation in English duly attested by a Notary Public'),
                        new TextRun('\n\t3. Original Affidavit in  Mother tongue of the Spouse in case of married donor’s and from parents/ dependents in case of un married donor’s duly  signed in the presence of the Magistrate with translation in English duly attested by a Notary Public'),
                        new TextRun('\n\t4. Two Witness Signature & Address should be affixed in the All affidavits'),
                        new TextRun('\n\t5. Relations Ship Certificate from Revenue Authority ( Thasildhar / Deputy Thasildhar )'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('16\tOther State\tYes\t\t\t\t'),
                        new TextRun('\t1.  The No Objection Certificate from Authorization Committee governing of their area'),
                        new TextRun('\t2. Where there is no Authorization Committee, the Director of Medical Education, Director of Health Services of the state concerned should certify that there is no Authorization Committee in the state and the Directorate has no objection for the patient and donor to have Liver  transplantation in the place of their wish.'),
                        new TextRun('\n\t3. Original Affidavit in  Mother tongue of the Patient duly affixing his/ her photograph and signed in the presence of the Magistrate from their Native place  with translation in English duly attested by a Notary Public'),
                        new TextRun('\n\t4. Original Affidavit in  Mother tongue of the Donor duly affixing his/ her photograph and signed in the presence of the Magistrate from their Native place  with translation in English duly attested by a Notary Public'),
                        new TextRun('\n\t5.  Original Affidavit in  Mother Tongue  of the Spouse in case of married   donor’s and from parents/ dependents in case of un married  donor’s duly  affixing his/ her photograph and signed in the presence of the Magistrate in their  native place with translation in English duly attested by a Notary Public'),
                        new TextRun('\n\t6. Two Witness Signature & Address      should be affixed in the All affidavits'),
                        new TextRun('\n\t7.  Relations Ship Certificate from Revenue Authority ( Thasildhar / Deputy Thasildhar )'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('17\tOther Countries\tYes\t\t\t\t'),
                        new TextRun('\t1. Valid passport, Visa, High Commission Embassy letters'),
                        new TextRun('\t2. Original Affidavit from the Patient, Donor & Donor Spouse / Guardian  duly affixing his/ her photograph and signed by the competent authority in their Native'),
                        new TextRun('\t3. Relation Ship Certificate from the High Commission/ Embassy'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('18\tAnnexure – 1\t\tYes\t\t\t\t'),
                        new TextRun('\t1.Patient and Donor’s ( Joint Photograph )'),
                        new TextRun('\n\t2. Donor and Donor’s Spouse ( Joint Photograph )'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun('19\tAnnexure – 2\t\tYes\t\t\t\t'),
                        new TextRun('\t1.Name of the Managing Director /  Medical Superintendent'),
                        new TextRun('\n\t2.Name of the Nephrologist'),
                        new TextRun('\n\t3.Name of Urologist'),
                        new TextRun('\n\t4.Name of the Transplant  Surgeons'),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 600, after: 300 },
                    children: [
                        new TextRun('Signature of treating\t\t\tSignature of Operating\t\tSignature of Authorized'),
                        new TextRun('\nNephrologist\t\t\t\tTransplant Surgeon\t\tSignatory of the Hospital'),
                        new TextRun('\n(With Name & Seal)\t\t(With Name & Seal)\t\t(With Name & Seal)'),
                    ],
                }),
            ],
        }],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "transplant_checklist.docx");
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
  

 
  
  // Generate the form with user data
  // Form_four(userData);
  const handleClick = () => {
    // form_declaration()
    // form_identification_marks()
    form_checklist()
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
