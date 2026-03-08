negatif testing
Feature : User had email already used
    as a user
    i want to register acount
    and i already have email in this app
    so that i cant finish the Registration

Scenario : Email sudah terdaftar
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user mengisi Email dengan email sudah terdaftar
    and user mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan Password valid
    and user mengisi konfirmasi password dengan valid
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat aku