import {test, expect} from '@playwright/test';
import { generateEmail, generateUsername, generatePhoneNumber, goToFUOMOPage} from './../action.js';

test.beforeEach(async ({page}) => {
    await goToFUOMOPage(page);
});

test('password not pass' , async ({page}) => {
    // given user berada di halaman registrasi
    await expect (page).toHaveURL('https://fuomo.id/register');
    // when user mengisi nama pengguna
    await page.getByPlaceholder('masukan nama pengguna').fill(generateUsername());
    // and user mengisi Email dengan email valid
    await page.getByPlaceholder('masukan email').fill(generateEmail());
    // and user mengisi checkbox dengan jenis kelamin Pria
    await page.locator('#male').check();
    // and user mengisi Password dengan Password yang tidak memenuhi kriteria
    await page.getByPlaceholder('masukan kata sandi').fill('test');
     // and user mengisi konfirmasi password dengan valid
    await page.getByPlaceholder('konfirmasi kata sandi').fill('test');    
    // and user mengisi checkbox aggreement privacy
    await page.locator('#agree').check();
    // and user menekan tombol Yuk Daftar
    await page.getByRole('button', { name: 'Yuk Daftar' }).click();
    // then user tidak berhasil membuat akun
    await expect(page.locator('.password-error')).toBeVisible();
})

test('password fill with space' , async ({page}) => {
    // given user berada di halaman registrasi
    await expect (page).toHaveURL('https://fuomo.id/register');
    // when user mengisi nama pengguna
    await page.getByPlaceholder('masukan nama pengguna').fill(generateUsername());
    // and user mengisi Email dengan email valid
    await page.getByPlaceholder('masukan email').fill(generateEmail());
    // and user mengisi checkbox dengan jenis kelamin Pria
    await page.locator('#male').check();
    // and user mengisi Password dengan Password '        '
    await page.getByPlaceholder('masukan kata sandi').fill('        ');
    // and user mengisi konfirmasi password dengan valid
    await page.getByPlaceholder('konfirmasi kata sandi').fill('        ');
    // and user mengisi checkbox aggreement privacy
    await page.locator('#agree').check();
    // and user menekan tombol Yuk Daftar
    await page.getByRole('button', { name: 'Yuk Daftar' }).click();
    // then user tidak berhasil membuat akun
    await expect(page.locator('.password-error')).toBeVisible();
});