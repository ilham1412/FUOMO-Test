export function generateEmail() {
    return `test${Date.now()}@mail.com`;
}

export function generateUsername() {
    return `testuser${Date.now()}`;
}

export function generatePhoneNumber() {
  return '8' + Math.floor(10000000000 + Math.random() * 90000000000);
}

export async function goToFUOMOPage(page) {
    await page.goto('https://fuomo.id/landing');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByRole('link', { name: 'yuk daftar' }).click();
}

