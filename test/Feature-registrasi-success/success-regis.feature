Positive Testing
Feature : User Registration
    as a user
    i want to register acount
    so that i can access the application

Scenario : User berhasil melakukan registrasi dengan data valid.
    given user berada di halaman registrasi
    when user mengisi nama pengguna
    and user mengisi Email dengan email valid
    and user mengisi checkbox dengan jenis kelamin Pria
    and user mengisi Password dengan Password valid
    and user mengisi konfirmasi password dengan valid
    and user mengisi checkbox aggreement privacy
    and user menekan tombol Yuk Daftar
    
    and user mengisi role dengan Kreator
    and user menekan tombol continue

    and user mengisi form nomor telepon 
    and user mengisi form kota domisili
    and user agree checkbox ketentuan dan layanan
    and user menekan tombol Daftar Sebagai Kreator
    then user berhasil membuat akun