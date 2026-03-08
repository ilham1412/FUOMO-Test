import {test, expect} from '@playwright/test';
import { generateEmail, generateUsername, generatePhoneNumber, goToFUOMOPage } from './../action.js';

test.beforeEach(async ({page}) => {
    await goToFUOMOPage(page);
});

//Scenario : User berhasil melakukan registrasi dengan data valid.
test('success register', async ({page}) => {
    
   await expect(page).toHaveURL('https://fuomo.id/register');
   //when user mengisi nama pengguna
   await page.getByPlaceholder('Masukan nama pengguna').fill(generateUsername())
   //and user mengisi Email dengan email valid
   await page.getByPlaceholder('Masukan email').fill(generateEmail())
   // and user mengisi checkbox dengan jenis kelamin Pria
   await page.locator('#male').check();
   // and user mengisi Password dengan Password valid
   await page.getByPlaceholder('Masukan Kata Sandi').fill('Test1234')
   // and user mengisi konfirmasi password dengan valid
   await page.getByPlaceholder('Konfirmasi Kata Sandi').fill('Test1234')
   // and user mengisi checkbox aggreement privacy
   await page.locator('#agree').check();
   // and user menekan tombol Yuk Daftar
   await page.getByRole('button', { name: 'Yuk Daftar' }).click();


   // and user mengisi role dengan Kreator
   await expect(page.getByText('Who You Are')).toBeVisible();
   await page.locator('[data-value="2"]').click();
   // and user menekan tombol Continue
   await page.getByText('Continue').click();


   // and user berada di form data diri 
   await expect(page.getByText('Fitur dan Keunggulan FUOMO')).toBeVisible();
   // and user mengisi form nomor telepon 
   await page.locator('input[name="phone"]').fill(generatePhoneNumber());
   // and user mengisi form kota domisili
   await page.getByPlaceholder('Masukan kota Domisili').fill('Jakarta');
   // and user agree checkbox ketentuan dan layanan
   await page.locator('#agree').check();
   // and user menekan tombol Daftar Sebagai Kreator
   await page.getByRole('button', {name: 'Daftar Sebagai Kreator'}).click();
   // then user berhasil membuat akun
   await expect(page.getByText('Selamat Datang di FUOMO!')).toBeVisible();
   await expect(page).toHaveURL('https://fuomo.id/user/dashboard-creator');

})
