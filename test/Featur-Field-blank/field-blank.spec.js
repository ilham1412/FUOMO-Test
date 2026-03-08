import {test, expect} from '@playwright/test';
import {generateEmail, generateUsername, goToFUOMOPage} from './../action.js';

test.beforeEach(async ({page}) => {
    await goToFUOMOPage(page);
});

test('username blank', async ({page}) => {
    // given user berada di halaman registrasi
    await expect (page).toHaveURL('https://fuomo.id/register');
    // when user tidak mengisi nama pengguna
    await page.getByPlaceholder('Masukan nama pengguna').fill('');
    // and user mengisi Email dengan email valid
    await page.getByPlaceholder('Masukan email').fill(generateEmail());
    // and user mengisi checkbox dengan jenis kelamin Pria
    await page.locator('#male').check();
    // and user mengisi Password dengan Password valid
    await page.getByPlaceholder('Masukan Kata Sandi').fill('Test1234');
    // and user mengisi konfirmasi password valid
    await page.getByPlaceholder('Konfirmasi kata sandi').fill('Test1234');
    // and user mengisi checkbox aggreement privacy
    await page.locator('#agree').check();
    // and user menekan tombol Yuk Daftar
    await page.getByRole('button', { name: 'Yuk Daftar' }).click();
    // then user tidak berhasil membuat akun
    await expect(page.locator('.name-error')).toHaveText('Kolom name wajib diisi.');
});

test('email blank', async ({page}) => {
    // given user berada di halaman registrasi
    await expect (page).toHaveURL('https://fuomo.id/register');
    // when user mengisi nama pengguna
    await page.getByPlaceholder('Masukan nama pengguna').fill(generateUsername());
    // and user tidak mengisi Email
    await page.getByPlaceholder('Masukan email').fill('');
    // and user mengisi checkbox dengan jenis kelamin Pria
    await page.locator('#male').check();
    // and user mengisi Password dengan Password valid
    await page.getByPlaceholder('Masukan Kata Sandi').fill('Test1234');
    // and user mengisi konfirmasi password valid
    await page.getByPlaceholder('Konfirmasi kata sandi').fill('Test1234');
    // and user mengisi checkbox aggreement privacy
    await page.locator('#agree').check();
    // and user menekan tombol Yuk Daftar
    await page.getByRole('button', { name: 'Yuk Daftar' }).click();
    // then user tidak berhasil membuat akun
    await expect(page.locator('.email-error')).toHaveText('Kolom email wajib diisi.');
});

test('gender blank', async ({page}) => {
    // given user berada di halaman registrasi
    await expect(page).toHaveURL('https://fuomo.id/register');
    // when user mengisi nama pengguna
    await page.getByPlaceholder('Masukan nama pengguna').fill(generateUsername());
    // and user mengisi Email dengan email valid
    await page.getByPlaceholder('Masukan email').fill(generateEmail());
    // and user tidak mengisi checkbox dengan jenis kelamin Pria

    // and user mengisi Password dengan Password valid
    await page.getByPlaceholder('Masukan Kata Sandi').fill('Test1234');
    // and user mengisi konfirmasi password valid
    await page.getByPlaceholder('Konfirmasi kata sandi').fill('Test1234');
    // and user mengisi checkbox aggreement privacy
    await page.locator('#agree').check();
    // and user menekan tombol Yuk Daftar
    await page.getByRole('button', { name: 'Yuk Daftar' }).click();
    // then user tidak berhasil membuat akun
    await expect (page.locator('.gender-error')).toHaveText('Kolom gender wajib diisi.');
});

test('password blank', async ({page}) => {
    // given user berada di halaman registrasi
    await expect(page).toHaveURL('https://fuomo.id/register');
    // when user mengisi nama pengguna
    await page.getByPlaceholder('Masukan nama pengguna').fill(generateUsername());
    // and user mengisi Email dengan email valid
    await page.getByPlaceholder('Masukan email').fill(generateEmail());
    // and user mengisi checkbox dengan jenis kelamin Pria
    await page.locator('#male').check();
    // and user tidak mengisi Password
    await page.getByPlaceholder('Masukan Kata Sandi').fill('');
    // and user mengisi konfirmasi password valid
    await page.getByPlaceholder('Konfirmasi kata sandi').fill('');
    // and user mengisi checkbox aggreement privacy
    await page.locator('#agree').check();
    // and user menekan tombol Yuk Daftar
    await page.getByRole('button', { name: 'Yuk Daftar' }).click();
    // then user tidak berhasil membuat akun
    await expect(page.locator('.password-error')).toHaveText('Kolom password wajib diisi.');
})

test('confirm password blank', async ({page}) => {
    // given user berada di halaman registrasi
    await expect(page).toHaveURL('https://fuomo.id/register');
    // when user mengisi nama pengguna
    await page.getByPlaceholder('Masukan nama pengguna').fill(generateUsername());
    // and user mengisi Email dengan email valid
    await page.getByPlaceholder('Masukan email').fill(generateEmail());
    // and user mengisi checkbox dengan jenis kelamin Pria
    await page.locator('#male').check();
    // and user mengisi Password dengan Password valid
    await page.getByPlaceholder('Masukan Kata Sandi').fill('Test1234');
    // and user tidak mengisi konfirmasi password
    await page.getByPlaceholder('Konfirmasi kata sandi').fill('');
    // and user mengisi checkbox aggreement privacy
    await page.locator('#agree').check();
    // and user menekan tombol Yuk Daftar
    await page.getByRole('button', { name: 'Yuk Daftar' }).click();
    // then user tidak berhasil membuat akun
    await expect(page.locator('.password-error')).toHaveText('Konfirmasi password tidak cocok.');
});

test('checkbox agreement blank', async ({page}) => {
    // given user berada di halaman registrasi
    await expect(page).toHaveURL('https://fuomo.id/register');
    // when user mengisi nama pengguna
    await page.getByPlaceholder('Masukan nama pengguna').fill(generateUsername());
    // and user mengisi Email dengan email valid
    await page.getByPlaceholder('Masukan email').fill(generateEmail());
    // and user mengisi checkbox dengan jenis kelamin Pria
    await page.locator('#male').check();
    // and user mengisi Password dengan Password valid
    await page.getByPlaceholder('Masukan Kata Sandi').fill('Test1234');
    // and user mengisi konfirmasi password valid
    await page.getByPlaceholder('Konfirmasi kata sandi').fill('Test1234');
    // and user tidak mengisi checkbox aggreement privacy
    
    // and user menekan tombol Yuk Daftar
    await page.getByRole('button', { name: 'Yuk Daftar' }).click();
    // then user tidak berhasil membuat akun
    await expect(page.locator('.agree-error')).toHaveText('Mohon setujui syarat ketentuan dan kebijakan privasi');
})