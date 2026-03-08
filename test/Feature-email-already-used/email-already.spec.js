import {test, expect} from '@playwright/test';
import {generateUsername, goToFUOMOPage} from './../action.js';

test.beforeEach(async ({page}) => {
    await goToFUOMOPage(page);
});

test('email already used', async ({page}) => {  
    // given user berada di halaman registrasi
    await expect(page).toHaveURL('https://fuomo.id/register');
    // when user mengisi nama pengguna
    await page.getByPlaceholder('Masukan nama pengguna').fill(generateUsername());
    // and user mengisi Email dengan email sudah terdaftar
    await page.getByPlaceholder('Masukan email').fill('test1234@gmail.com');
    // and user mengisi checkbox dengan jenis kelamin Pria
    await page.locator('#male').check();
    // and user mengisi Password dengan Password valid
    await page.getByPlaceholder('Masukan Kata Sandi').fill('Test1234');
    // and user mengisi konfirmasi password dengan valid
    await page.getByPlaceholder('Konfirmasi Kata Sandi').fill('Test1234');    
    // and user mengisi checkbox aggreement privacy
    await page.locator('input[name="agree"]').check();
    // and user menekan tombol Yuk Daftar
    await page.getByRole('button', { name: 'Yuk Daftar' }).click();
    // then user tidak berhasil membuat akun
    await expect(page.locator('.email-error')).toHaveText('email sudah digunakan.');
});

