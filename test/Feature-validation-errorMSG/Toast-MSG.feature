negatif testing
Feature : User had invalid password
    as a user
    i want to register acount
    and i want to check toast if i forgot fill some field
    so that i cant finish the Registration

Scenario : Validasi error message tidak muncul sesuai ekspektasi
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user mengisi Email dengan email tidak valid
    and user mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan valid
    and user mengisi konfirmasi password dengan valid
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat akun
