negatif testing
Feature : User had invalid email
    as a user
    i want to register acount
    and i have invalid format mail when i fill the form
    so that i cant finish the Registration

Scenario : email tidak valid
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user mengisi Email dengan email yang tidak valid 'test123@i'
    and user mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan Password valid
    and user mengisi konfirmasi password dengan valid
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat akun

