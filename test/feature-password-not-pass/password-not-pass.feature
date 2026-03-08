negatif testing
Feature : User had invalid password
    as a user
    i want to register acount
    and my password not meet the criteria
    so that i cant finish the Registration

Scenario : Password tidak memenuhi kriteria
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user mengisi Email dengan email valid
    and user mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan Password yang tidak memenuhi kriteria
    and user mengisi konfirmasi password dengan valid
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat akun

Scenario : Password diisi dengan space
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user mengisi Email dengan email valid
    and user mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan Password '        '
    and user mengisi konfirmasi password dengan valid
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat akun