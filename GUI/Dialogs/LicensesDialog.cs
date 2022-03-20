﻿using SuchByte.MacroDeck.GUI.CustomControls;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Reflection;
using System.Text;
using System.Windows.Forms;
using System.Xml;

namespace SuchByte.MacroDeck.GUI.Dialogs
{
    public partial class LicensesDialog : DialogForm
    {
        public LicensesDialog()
        {
            InitializeComponent();
        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void LicensesDialog_Load(object sender, EventArgs e)
        {
            string result = "";
            var assembly = typeof(MacroDeck).Assembly;

            string licensesFileName = $"SuchByte.MacroDeck.Resources.Licenses.xml";

            using var resourceStream = assembly.GetManifestResourceStream(licensesFileName);
            using var streamReader = new StreamReader(resourceStream);
            result= streamReader.ReadToEnd();

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(result);
            foreach (XmlNode node in doc.DocumentElement.ChildNodes)
            {
                LicenseItem licenseItem = new LicenseItem(node.Name.ToString(), node.SelectSingleNode("License").InnerText, node.SelectSingleNode("Author").InnerText, node.SelectSingleNode("Repository").InnerText);
                this.licensesPanel.Controls.Add(licenseItem);
            }
        }
    }
}
