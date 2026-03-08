negatif testing
Feature : User had password but forgot to fill confirm password
    as a user
    i want to register acount
    and i forgot to fill confirm password
    so that i cant finish the Registration

Scenario : Konfirmasi password tidak sesuai
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user mengisi Email dengan email valid
    and user mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan Password valid
    and user mengisi konfirmasi password yang tidak valid
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    then user tidak berhasil membuat aku
