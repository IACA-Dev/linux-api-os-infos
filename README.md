<h1 align="center">Linux API OS Infos</h1>
<p align="center">Powered by </p>
<p align="center">
<a href="https://iaca-electronique.com">
<img alt="IACA Logo" style="" width="250px" src="https://www.iaca-electronique.com/img/logo.png">
</a>
</p>

___

## 📄 Purpose

REST Api to provide OS Linux infos like ram usage and cpu usage.
___

## 📖 Table of Contents

1. [Purpose](#-purpose)
2. [Requirements](#-requirements)
3. [Install](#-install)
    1. [Import repository](#import-repository)
    2. [Install packages](#install-packages)
4. [Build](#-build)
5. [Run](#-run)
    1. [Hot run (development)](#hot-run-development)
6. [API Documentations](#api-documentations)
    1. [Open API](#open-api-)
    2. [Vitals Mapping](#vitals-mapping)
7. [Contributors](#-contributors)

___

### ⚠️ Requirements

* Node `20.9.0`
* NPM `10.1.0`

## ⏬️ Install

### Import repository
```bash
git clone https://github.com/IACA-Dev/linux-api-os-infos.git
cd linux-api-os-infos
```

### Install packages

```bash
npm i
```

## 🛠️ Build

```bash
npm run build
```

> Will generate `dist` directory.

## ▶️ Run

### Hot run (*development*)

```bash
npm run start:dev
```

## 📦️ Docker

### Build

```bash
docker build --tag linux-api-os-infos .
```

> You can change tag like you want.

### Run

```bash
docker run -e API_PORT=<port> --rm -p <port>:<port> linux-api-os-infos
```

> Change `port` with your port.


## API Documentations

### Open API 

[📋️ See open api description](api.yml)

### Vitals Mapping

| Id  | Vital Name  | Description                  |
|-----|-------------|------------------------------|
| 0   | total ram   | Total available RAM in bytes |
| 1   | used ram    | Used RAM in bytes            |
| 2   | cpu usage   | CPU usage percentage         |

## 🧑‍🤝‍🧑 Contributors

* Julien FAURE [✉️ julien.faure@iaca-electronique.com](mailto:julien.faure@iaca-electronique.com) (*IACA Electronique*)