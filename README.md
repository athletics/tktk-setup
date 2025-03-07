# TKTK Setup 🚀

**A CLI tool to quickly set up a WordPress project with the TKTK theme and blocks.**  
This tool automates the installation of WordPress, configures Valet, installs the theme and block plugin, and prepares your development environment.

---

## 👥 Installation

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Valet](https://laravel.com/docs/valet) (for local development)
- [WP-CLI](https://wp-cli.org/) (for managing WordPress installations)

Then, install `tktk-setup` globally:

```sh
npm install -g tktk-setup
```

---

## 🚀 Usage

To create a new WordPress project using TKTK:

```sh
tktk-setup
```

You'll be prompted to enter:

- **Project Name** (directory for WordPress installation)
- **Theme Name** (default: `tktk-theme`)
- **Blocks Plugin Name** (default: `tktk-blocks`)

After installation, you'll see setup details, including the **local site URL**, **admin login**, and **next steps**.

---

## 🔧 Commands

### **Create a New Project**

```sh
tktk-setup
```

- Installs WordPress
- Links it to Valet (`valet link`)
- Installs the TKTK theme and blocks plugin
- Builds assets for the theme and plugin

---

## 🖥 Development Workflow

Once your project is installed, navigate to the project folder:

```sh
cd my-project
```

### **Start Developing the Theme**

```sh
cd wp-content/themes/my-theme && npm run dev
```

### **Start Developing the Blocks Plugin**

```sh
cd wp-content/plugins/my-blocks && npm run dev
```

Your changes will update automatically with hot reloading.

---

## ❓ Troubleshooting

### **"Command not found" errors**

Ensure `tktk-setup` is installed globally:

```sh
npm list -g --depth=0 | grep tktk-setup
```

If not installed, reinstall it:

```sh
npm install -g tktk-setup
```

### **Valet Link Issues**

If your site isn’t loading:

```sh
valet restart
valet secure my-project
```

### **WordPress Not Installed?**

Run:

```sh
wp core install --url=http://my-project.test --title="My Project" --admin_user=admin --admin_password=password --admin_email=admin@example.com
```

---

## 🔮 Future Enhancements

- tktk

---

## 🏠 Maintainers

Developed by **[Britton Walker / Athletics]**.

Contributions and suggestions welcome! 🚀
