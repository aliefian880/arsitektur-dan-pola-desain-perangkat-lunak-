<h2>Kirim Pesan ke Admin</h2>

<form action="php.index.php?action=send" method="POST">
    <label>Nama:</label><br>
    <input type="text" name="name" required><br><br>

    <label>Email:</label><br>
    <input type="email" name="email" required><br><br>

    <label>Pesan:</label><br>
    <textarea name="message" required></textarea><br><br>

    <button type="submit">Kirim</button>
</form>