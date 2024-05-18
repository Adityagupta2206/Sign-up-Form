
const phnoInput = document.getElementById('phno');

phnoInput.addEventListener('input', function(event) {

    this.value = this.value.replace(/[^0-9]/g, '');
});
