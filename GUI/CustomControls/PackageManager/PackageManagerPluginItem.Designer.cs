﻿
using System;

namespace SuchByte.MacroDeck.GUI.CustomControls
{
    partial class PackageManagerPluginItem
    {
        /// <summary> 
        /// Erforderliche Designervariable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Verwendete Ressourcen bereinigen.
        /// </summary>
        /// <param name="disposing">True, wenn verwaltete Ressourcen gelöscht werden sollen; andernfalls False.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Vom Komponenten-Designer generierter Code

        /// <summary> 
        /// Erforderliche Methode für die Designerunterstützung. 
        /// Der Inhalt der Methode darf nicht mit dem Code-Editor geändert werden.
        /// </summary>
        private void InitializeComponent()
        {
            this.lblName = new System.Windows.Forms.Label();
            this.btnInstall = new SuchByte.MacroDeck.GUI.CustomControls.ButtonPrimary();
            this.lblAuthor = new System.Windows.Forms.Label();
            this.icon = new System.Windows.Forms.PictureBox();
            this.lblDescription = new System.Windows.Forms.Label();
            this.lblDownloads = new System.Windows.Forms.Label();
            this.lblVersion = new System.Windows.Forms.Label();
            this.lblType = new System.Windows.Forms.Label();
            this.iconDownloads = new System.Windows.Forms.PictureBox();
            this.btnConfigure = new SuchByte.MacroDeck.GUI.CustomControls.ButtonPrimary();
            this.lblCategory = new System.Windows.Forms.Label();
            this.lblRepository = new System.Windows.Forms.LinkLabel();
            ((System.ComponentModel.ISupportInitialize)(this.icon)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.iconDownloads)).BeginInit();
            this.SuspendLayout();
            // 
            // lblName
            // 
            this.lblName.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.lblName.Location = new System.Drawing.Point(69, 20);
            this.lblName.Name = "lblName";
            this.lblName.Size = new System.Drawing.Size(191, 16);
            this.lblName.TabIndex = 0;
            this.lblName.Text = "Plugin name";
            this.lblName.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.lblName.UseMnemonic = false;
            // 
            // btnInstall
            // 
            this.btnInstall.BorderRadius = 8;
            this.btnInstall.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnInstall.FlatAppearance.BorderSize = 0;
            this.btnInstall.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnInstall.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnInstall.ForeColor = System.Drawing.Color.White;
            this.btnInstall.HoverColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(89)))), ((int)(((byte)(184)))));
            this.btnInstall.Icon = null;
            this.btnInstall.Location = new System.Drawing.Point(150, 140);
            this.btnInstall.Name = "btnInstall";
            this.btnInstall.Progress = 0;
            this.btnInstall.ProgressColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(46)))), ((int)(((byte)(94)))));
            this.btnInstall.Size = new System.Drawing.Size(110, 30);
            this.btnInstall.TabIndex = 1;
            this.btnInstall.Text = "Install";
            this.btnInstall.UseMnemonic = false;
            this.btnInstall.UseVisualStyleBackColor = false;
            this.btnInstall.UseWindowsAccentColor = true;
            this.btnInstall.Click += new System.EventHandler(this.BtnInstall_Click);
            // 
            // lblAuthor
            // 
            this.lblAuthor.Location = new System.Drawing.Point(69, 37);
            this.lblAuthor.Name = "lblAuthor";
            this.lblAuthor.Size = new System.Drawing.Size(238, 17);
            this.lblAuthor.TabIndex = 2;
            this.lblAuthor.Text = "Author";
            this.lblAuthor.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.lblAuthor.UseMnemonic = false;
            // 
            // icon
            // 
            this.icon.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.icon.Location = new System.Drawing.Point(3, 23);
            this.icon.Name = "icon";
            this.icon.Size = new System.Drawing.Size(60, 60);
            this.icon.TabIndex = 3;
            this.icon.TabStop = false;
            // 
            // lblDescription
            // 
            this.lblDescription.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblDescription.Location = new System.Drawing.Point(69, 92);
            this.lblDescription.Name = "lblDescription";
            this.lblDescription.Size = new System.Drawing.Size(191, 44);
            this.lblDescription.TabIndex = 4;
            this.lblDescription.Text = "Description";
            this.lblDescription.UseMnemonic = false;
            // 
            // lblDownloads
            // 
            this.lblDownloads.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblDownloads.Location = new System.Drawing.Point(22, 86);
            this.lblDownloads.Name = "lblDownloads";
            this.lblDownloads.Size = new System.Drawing.Size(41, 17);
            this.lblDownloads.TabIndex = 6;
            this.lblDownloads.Text = "0000";
            this.lblDownloads.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.lblDownloads.UseMnemonic = false;
            // 
            // lblVersion
            // 
            this.lblVersion.Location = new System.Drawing.Point(69, 54);
            this.lblVersion.Name = "lblVersion";
            this.lblVersion.Size = new System.Drawing.Size(145, 16);
            this.lblVersion.TabIndex = 7;
            this.lblVersion.Text = "1.0.0.0";
            this.lblVersion.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.lblVersion.UseMnemonic = false;
            // 
            // lblType
            // 
            this.lblType.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(95)))), ((int)(((byte)(173)))));
            this.lblType.Location = new System.Drawing.Point(201, 5);
            this.lblType.Name = "lblType";
            this.lblType.Size = new System.Drawing.Size(60, 17);
            this.lblType.TabIndex = 8;
            this.lblType.Text = "Plugin";
            this.lblType.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.lblType.UseMnemonic = false;
            // 
            // iconDownloads
            // 
            this.iconDownloads.BackgroundImage = global::SuchByte.MacroDeck.Properties.Resources.download_box;
            this.iconDownloads.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.iconDownloads.Location = new System.Drawing.Point(4, 86);
            this.iconDownloads.Name = "iconDownloads";
            this.iconDownloads.Size = new System.Drawing.Size(17, 17);
            this.iconDownloads.TabIndex = 9;
            this.iconDownloads.TabStop = false;
            // 
            // btnConfigure
            // 
            this.btnConfigure.BorderRadius = 8;
            this.btnConfigure.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnConfigure.FlatAppearance.BorderSize = 0;
            this.btnConfigure.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnConfigure.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnConfigure.ForeColor = System.Drawing.Color.White;
            this.btnConfigure.HoverColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(89)))), ((int)(((byte)(184)))));
            this.btnConfigure.Icon = null;
            this.btnConfigure.Location = new System.Drawing.Point(34, 140);
            this.btnConfigure.Name = "btnConfigure";
            this.btnConfigure.Progress = 0;
            this.btnConfigure.ProgressColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(46)))), ((int)(((byte)(94)))));
            this.btnConfigure.Size = new System.Drawing.Size(110, 30);
            this.btnConfigure.TabIndex = 10;
            this.btnConfigure.Text = "Configure";
            this.btnConfigure.UseMnemonic = false;
            this.btnConfigure.UseVisualStyleBackColor = false;
            this.btnConfigure.UseWindowsAccentColor = false;
            this.btnConfigure.Click += new System.EventHandler(this.BtnConfigure_Click);
            // 
            // lblCategory
            // 
            this.lblCategory.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.lblCategory.ForeColor = System.Drawing.Color.Silver;
            this.lblCategory.Location = new System.Drawing.Point(5, 5);
            this.lblCategory.Name = "lblCategory";
            this.lblCategory.Size = new System.Drawing.Size(191, 16);
            this.lblCategory.TabIndex = 11;
            this.lblCategory.Text = "Category";
            this.lblCategory.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.lblCategory.UseMnemonic = false;
            // 
            // lblRepository
            // 
            this.lblRepository.ActiveLinkColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(89)))), ((int)(((byte)(184)))));
            this.lblRepository.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblRepository.LinkColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(123)))), ((int)(((byte)(255)))));
            this.lblRepository.Location = new System.Drawing.Point(69, 70);
            this.lblRepository.Name = "lblRepository";
            this.lblRepository.Size = new System.Drawing.Size(190, 18);
            this.lblRepository.TabIndex = 12;
            this.lblRepository.TabStop = true;
            this.lblRepository.Text = "Repository";
            this.lblRepository.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.lblRepository.UseMnemonic = false;
            this.lblRepository.VisitedLinkColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(123)))), ((int)(((byte)(255)))));
            this.lblRepository.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.LblRepository_LinkClicked);
            // 
            // PackageManagerPluginItem
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 14F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(35)))), ((int)(((byte)(35)))), ((int)(((byte)(35)))));
            this.Controls.Add(this.lblRepository);
            this.Controls.Add(this.lblCategory);
            this.Controls.Add(this.btnConfigure);
            this.Controls.Add(this.iconDownloads);
            this.Controls.Add(this.lblType);
            this.Controls.Add(this.lblVersion);
            this.Controls.Add(this.lblDownloads);
            this.Controls.Add(this.lblDescription);
            this.Controls.Add(this.icon);
            this.Controls.Add(this.lblAuthor);
            this.Controls.Add(this.btnInstall);
            this.Controls.Add(this.lblName);
            this.Font = new System.Drawing.Font("Tahoma", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.ForeColor = System.Drawing.Color.White;
            this.Name = "PackageManagerPluginItem";
            this.Size = new System.Drawing.Size(265, 174);
            ((System.ComponentModel.ISupportInitialize)(this.icon)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.iconDownloads)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label lblName;
        private ButtonPrimary btnInstall;
        private System.Windows.Forms.Label lblAuthor;
        private System.Windows.Forms.PictureBox icon;
        private System.Windows.Forms.Label lblDescription;
        private System.Windows.Forms.Label lblDownloads;
        private System.Windows.Forms.Label lblVersion;
        private System.Windows.Forms.Label lblType;
        private System.Windows.Forms.PictureBox iconDownloads;
        private ButtonPrimary btnConfigure;
        private System.Windows.Forms.Label lblCategory;
        private System.Windows.Forms.LinkLabel lblRepository;
    }
}
