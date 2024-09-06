document.getElementById('courseForm').addEventListener('submit', function(event) {
    let missingFields = 0;

    function validateField(field) {
        if (field.type === 'file') {
            if (field.files.length === 0) {
                return false; 
            }
        } else {
            if (field.value.trim() === '') {
                return false;
            }
        }
        return true;
    }

    const tituloCurso = document.getElementById('tituloCurso');
    if (!validateField(tituloCurso)) {
        missingFields++;
        tituloCurso.style.borderColor = "red";
    } else {
        tituloCurso.style.borderColor = "";
    }

    const imagenCurso = document.getElementById('imagenCurso');
    if (!validateField(imagenCurso)) {
        missingFields++;
        imagenCurso.style.borderColor = "red";
    } else {
        imagenCurso.style.borderColor = "";
    }

    const descripcionCurso = document.getElementById('descripcionCurso');
    if (!validateField(descripcionCurso)) {
        missingFields++;
        descripcionCurso.style.borderColor = "red";
    } else {
        descripcionCurso.style.borderColor = "";
    }

    const costoCurso = document.getElementById('costoCurso');
    if (!validateField(costoCurso)) {
        missingFields++;
        costoCurso.style.borderColor = "red";
    } else {
        costoCurso.style.borderColor = "";
    }

    const niveles = document.querySelectorAll('.nivel');
    niveles.forEach(function(nivel) {
        const tituloNivel = nivel.querySelector('input[name="tituloNivel[]"]');
        const descripcionNivel = nivel.querySelector('textarea[name="descripcionNivel[]"]');
        const imagenNivel = nivel.querySelector('input[name="imagenNivel[]"]');
        const videoNivel = nivel.querySelector('input[name="videoNivel[]"]');
        const pdfNivel = nivel.querySelector('input[name="pdfNivel[]"]');

        let nivelValido = false;

        if (!validateField(tituloNivel)) {
            missingFields++;
            tituloNivel.style.borderColor = "red";
        } else {
            tituloNivel.style.borderColor = "";
        }

        if (!validateField(descripcionNivel)) {
            missingFields++;
            descripcionNivel.style.borderColor = "red";
        } else {
            descripcionNivel.style.borderColor = "";
        }

        if (validateField(imagenNivel) || validateField(videoNivel) || validateField(pdfNivel)) {
            nivelValido = true;
        } else {
            missingFields++;
            imagenNivel.style.borderColor = "red";
            videoNivel.style.borderColor = "red";
            pdfNivel.style.borderColor = "red";
        }

        if (!nivelValido && missingFields<2 ) {
            alert("EACH_LEVEL_MUST_HAVE_AT_LEAST_ONE_OF_THE_FOLLOWING: IMAGE, VIDEO_OR_PDF_FILE.");
            event.preventDefault(); 
        }
    });

    if (missingFields > 2) {
        alert("PLEASE_COMPLETE_ALL_THE_MISSING_FIELDS.");
        event.preventDefault(); 
    } else if (missingFields > 0) {
        alert("SOME_FIELDS_REMAIN_TO_BE_COMPLETED. PLEASE_REVIEW.");
        event.preventDefault();
    }
});

document.getElementById('addLevel').addEventListener('click', function() {
    const nivelesContainer = document.getElementById('niveles-container');

    const currentLevelCount = nivelesContainer.getElementsByClassName('nivel').length;

    const newLevelNumber = currentLevelCount + 1;

    const newLevelDiv = document.createElement('div');
    newLevelDiv.className = 'nivel';
    newLevelDiv.id = `nivel-${newLevelNumber}`;

    newLevelDiv.innerHTML = `
        <h3>LEVEL_${newLevelNumber}</h3>
        <label for="tituloNivel-${newLevelNumber}">level_title:</label>
        <input type="text" id="tituloNivel-${newLevelNumber}" name="tituloNivel[]"><br>

        <label for="descripcionNivel-${newLevelNumber}">level_description:</label>
        <textarea id="descripcionNivel-${newLevelNumber}" name="descripcionNivel[]" rows="3"></textarea><br>

        <label for="imagenNivel-${newLevelNumber}">level_image:</label>
        <input type="file" id="imagenNivel-${newLevelNumber}" name="imagenNivel[]" accept="image/*"><br>

        <label for="videoNivel-${newLevelNumber}">level_video:</label>
        <input type="file" id="videoNivel-${newLevelNumber}" name="videoNivel[]" accept="video/*"><br>

        <label for="pdfNivel-${newLevelNumber}">level_pdf_file:</label>
        <input type="file" id="pdfNivel-${newLevelNumber}" name="pdfNivel[]" accept="application/pdf"><br>
    `;

    nivelesContainer.appendChild(newLevelDiv);
});

