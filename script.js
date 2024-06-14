function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function updateContent() {
    const fields = ['nombre', 'tel', 'fecha', 'hora', 'lugar', 'decoracion', 'observaciones', 'total', 'anticipo', 'resta', 
                    'abono-fecha-1', 'abono-cantidad-1', 'abono-resta-1', 'abono-fecha-2', 'abono-cantidad-2', 'abono-resta-2',
                    'abono-fecha-3', 'abono-cantidad-3', 'abono-resta-3', 'abono-fecha-4', 'abono-cantidad-4', 'abono-resta-4'];

    fields.forEach(field => {
        const modalField = document.getElementById(`modal-${field}`);
        const displayField = document.getElementById(field);

        if (modalField && displayField) {
            displayField.innerText = modalField.value;
        }
    });

    closeModal();
}

function printPage() {
    window.print();
}

