import {test, expect} from '@playwright/test';
import { generateEmail, generateUsername, goToFUOMOPage } from './../action.js';

test.beforeEach(async ({page}) => {
    await goToFUOMOPage(page);
});

test('confirm password not match', async ({page}) => {
    // given user berada di halaman registrasi
    await expect(page).toHaveURL('https://fuomo.id/register');
    // when user mengisi nama pengguna
    await page.getByPlaceholder('Masukan nama pengguna').fill(generateUsername());
    // and user mengisi Email dengan email valid
    await page.getByPlaceholder('Masukan email').fill(generateEmail());
    // and user mengisi checkbox dengan jenis kelamin Pria
    await page.locator('#male').check();
    // and user mengisi Password dengan Password valid
    await page.getByPlaceholder('Masukan kata sandi').fill('Test1234');
    // and user mengisi konfirmasi password yang tidak valid
    await page.getByPlaceholder('Konfirmasi kata sandi').fill('Test12345');
    // and user mengisi checkbox aggreement privacy
    await page.locator('#agree').check();
    // and user menekan tombol Yuk Daftar
    await page.getByRole('button', { name: 'Yuk Daftar' }).click();
    // then user tidak berhasil membuat aku
    await expect (page.locator('.password-error')).toHaveText('Konfirmasi password tidak cocok.');

})


