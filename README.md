# Fuomo QA Test

Proyek automation testing untuk aplikasi Fuomo (https://fuomo.id). Project ini fokus pada testing fitur **User Registration** dengan menggunakan Playwright Test Framework dan pendekatan Behavior Driven Development (BDD).

## Daftar Isi
- [Instalasi Dependency](#instalasi-dependency)
- [Menjalankan Test](#menjalankan-test)
- [Struktur Project](#struktur-project)
- [Pendekatan Testing](#pendekatan-testing)
- [Test Scenarios](#test-scenarios)
- [Troubleshooting](#troubleshooting)

---

## Instalasi Dependency

### Prerequisites
- **Node.js** v16 atau lebih tinggi
- **npm** (Node Package Manager)
- **Git**

### Langkah Instalasi

1. **Clone repository**
```bash
git clone <repository-url>
cd Fuomo-QA-Test
```

2. **Install dependencies**
```bash
npm install
```

Ini akan menginstall:
- `@playwright/test` - Test framework
- `@types/node` - TypeScript types untuk Node.js

### Verifikasi Instalasi
```bash
npm list
```

---

## Menjalankan Test

### Menjalankan Semua Test
```bash
npx playwright test
```
npx playwright test --ui (GUI)

### Menjalankan Test Spesifik by Feature
```bash
# Test registrasi sukses
npx playwright test success-regist

# Test field blank
npx playwright test field-blank

# Test email already used
npx playwright test email-already

# Test email invalid format
npx playwright test email-invalid

# Test password not pass criteria
npx playwright test password-not-pass

# Test confirm password not match
npx playwright test confirmPass-not-match

# Test error message/toast validation
npx playwright test toast
```

### Menjalankan Test di Browser Spesifik
```bash
# Hanya di Chromium
npx playwright test --project=chromium

# Hanya di Firefox
npx playwright test --project=firefox

# Hanya di WebKit
npx playwright test --project=webkit

### Menjalankan Test Dengan Debug Mode
```bash
npx playwright test --debug
```

### Melihat Test Report
```bash
npx playwright show-report
```

## Struktur Project

```
Fuomo-QA-Test/
├── README.md                                    # Dokumentasi project
├── package.json                                # Dependencies dan metadata
├── package-lock.json                           # Lock file untuk dependencies
├── playwright.config.js                        # Konfigurasi Playwright
│
├── test/                                       # Root folder untuk semua test
│   ├── action.js                              # Helper functions dan utilities
│   │
│   ├── Featur-Field-blank/                    # Feature: Field Validation (Blank)
│   │   ├── field-blank.feature                # BDD scenario definition
│   │   └── field-blank.spec.js                # Test implementation
│   │
│   ├── Feature-email-already-used/            # Feature: Email Duplicate Check
│   │   ├── already-used.feature               # BDD scenario definition
│   │   └── email-already.spec.js              # Test implementation
│   │
│   ├── Feature-format-email-invalid/          # Feature: Email Format Validation
│   │   ├── format-email-invalid.feature       # BDD scenario definition
│   │   └── email-invalid.spec.js              # Test implementation
│   │
│   ├── Feature-confirmPass-not-match/         # Feature: Password Confirmation
│   │   ├── confirmPass-not-match.feature      # BDD scenario definition
│   │   └── confirm-password-not-match.spec.js # Test implementation
│   │
│   ├── feature-password-not-pass/             # Feature: Password Criteria Validation
│   │   ├── password-not-pass.feature          # BDD scenario definition
│   │   └── password-not-pass.spec.js          # Test implementation
│   │
│   ├── Feature-registrasi-success/            # Feature: Successful Registration
│   │   ├── success-regis.feature              # BDD scenario definition
│   │   └── success-regist.spec.js             # Test implementation
│   │
│   └── Feature-validation-errorMSG/           # Feature: Error Message Validation
│       ├── Toast-MSG.feature                  # BDD scenario definition
│       └── toast.spec.js                      # Test implementation
│
├── playwright-report/                         # Auto-generated HTML report
│   └── index.html
│
└── test-results/                              # Auto-generated test results
    └── [test result folders by browser]
```

---

## Pendekatan Testing

### Metode Testing
Proyek menggunakan pendekatan **Behavior Driven Development (BDD)** dimana test scenarios dideskripsikan dalam bahasa yang mudah dipahami dengan file `.feature` (Gherkin format), kemudian diimplementasikan dalam file `.spec.js` menggunakan Playwright.

### Framework & Tools
- **Playwright Test** - Modern web automation testing framework
- **Gherkin Format** - BDD scenario definition language

### Testing Flow
1. Test scenario didefinisikan dalam file `.feature` menggunakan Gherkin syntax
2. Scenario diimplementasikan dalam file `.spec.js` menggunakan Playwright
3. Setiap test melakukan:
   - Navigation ke halaman registrasi
   - Input data sesuai scenario
---

## Test Scenarios & Scope

Project ini fokus pada testing fitur **User Registration** di aplikasi Fuomo dengan total **13 test scenarios** yang terbagi dalam 7 feature.

### **Feature 1: Successful Registration (Positive Testing)**
**File:** `Feature-registrasi-success/success-regist.feature`

### **Feature 2: Field Validation - Blank Fields (Negative Testing)**
**File:** `Featur-Field-blank/field-blank.feature`

### **Feature 3: Email Duplicate Check**
**File:** `Feature-email-already-used/already-used.feature`

### **Feature 4: Email Format Validation**
**File:** `Feature-format-email-invalid/format-email-invalid.feature`

### **Feature 5: Password Criteria Validation**
**File:** `feature-password-not-pass/password-not-pass.feature`

### **Feature 6: Confirm Password Validation**
**File:** `Feature-confirmPass-not-match/confirmPass-not-match.feature`

### **Feature 7: Error Message Validation**
**File:** `Feature-validation-errorMSG/Toast-MSG.feature`

### 📈 Test Coverage Summary

| Kategori | Jumlah | Tipe |
|----------|--------|------|
| **Positive Testing** | 1 | Happy Path - Success flow |
| **Negative Testing** | 12 | Different failure scenarios |
| **Total Test Scenarios** | **13** | - |
| **Feature Coverage** | 7 features | Registration flow |

---

## Application Under Test (AUT)

**URL:** https://fuomo.id  
**Feature Tested:** User Registration  


## Contoh Output Test

### Menjalankan Test dan Melihat Report
```bash
# Run all tests
npx playwright test

# View HTML report
npx playwright show-report
```
## 🔗 Useful Links

- [Playwright Documentation](https://playwright.dev)
- [Gherkin Syntax Guide](https://cucumber.io/docs/gherkin/)
- [Fuomo Website](https://fuomo.id)

---
**Last Updated:** March 8, 2026  
**Project Status:** Active  
**Framework:** Playwright Test v1.58.2
