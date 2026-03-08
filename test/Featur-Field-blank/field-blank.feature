negatif testing
Feature : User forgot to fill mandatory field in the form
    as a user
    i want to register acount
    and i forgot to fill once field in that form
    so that i cant finish the Registration

Scenario : Tidak mengisi field Username
    given user berada di halaman registrasi
    when user tidak mengisi nama pengguna
    and user mengisi Email dengan email valid
    and user mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan Password valid
    and user mengisi konfirmasi password valid
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat akun

Scenario : Tidak mengisi field Email
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user tidak mengisi Email
    and user mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan Password valid
    and user mengisi konfirmasi password valid
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat akun

Scenario : Tidak mengisi Jenis Kelamin
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user mengisi Email dengan email valid
    and user tidak mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan Password valid
    and user mengisi konfirmasi password valid
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat akun

Scenario : Tidak mengisi Password
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user mengisi Email dengan email valid
    and user mengisi checkbox dengan jenis kelamin Pria
    and user tidak mengisi Password
    and user mengisi konfirmasi password valid
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat akun

Scenario : Tidak mengisi konfirmasi password
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user mengisi Email dengan email valid
    and user mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan Password valid
    and user tidak mengisi konfirmasi password
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat akun

Scenario : Tidak mengisi/check aggreement
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user mengisi Email dengan email valid
    and user mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan Password valid
    and user mengisi konfirmasi password valid
    and user tidak mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat akun