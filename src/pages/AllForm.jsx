import React, { useState } from "react";
import { Document, Paragraph, TextRun, Packer, AlignmentType } from "docx";
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
  DonorDependentAffidavit(userData_three);
  

  // Form_eleven(userData_two)
  // Generate the form with user data
  
  
  // Example user data
  const userData = {
    doctorName: "Appan Prakash",
    doctorQualification: "NEPHRO",
    doctorRegistrationNumber: "123456",
    medicalCouncil: "Tamil Nadu Medical Council",
    donorName: "POONGODI",
    donorAge: "45",
    donorGender: "F",
    donorAddress: "75/96, GANDHIPURAM 1ST STREET, PALLIPALAYAM, NAMAKKAL, TAMIL NADU - 638006",
    organDonated: "one kidney",
    recipientName: "NARAYANA SING",
    recipientAge: "55",
    recipientGender: "M",
    recipientAddress: "615, BAPU NAGAR. PALLI, MARWAR, RAJASTHAN",
    relationship: "FAMILY FRIEND",
    date: "25-02-2025",
    place: "Tiruchirappalli",
  };
  
  // Generate the form with user data
  // Form_four(userData);

  return (
    <button
      onClick={Form_four}
      style={{ padding: "10px 20px", fontSize: "16px", margin: "20px" }}
    >
      Download Organ Donation Form
    </button>
  );
};
