const datos = {
  ej1: {
    enunciados: [
      { id: 'a', texto: 'El año 2004 tuvo 366 días.', correcta: true },
      { id: 'b', texto: 'Los divisores positivos de 135', correcta: false },
      { id: 'c', texto: 'No pisar el césped', correcta: false },
      { id: 'd', texto: 'Los divisores positivos de 135 son 8 en total.', correcta: true },
      { id: 'e', texto: '2x + 5 = 8', correcta: false },
      { id: 'f', texto: 'La frase del ítem “c” es proposición lógica.', correcta: true },
      { id: 'g', texto: 'Existe un x entero que cumple 2x + 5 = 8', correcta: true },
      { id: 'h', texto: 'La ecuación 2x + 5 = 8 tiene solución en el conjunto de Reales.', correcta: true }
    ]
  },
  ej2: [
    {
      id: 'a',
      texto: 'El cuadrado de todo número par es también par.',
      esCondicional: 'si',
      forma: 'Si un número es par, entonces su cuadrado es par.',
      antecedente: 'Un número es par.',
      consecuente: 'Su cuadrado es par.'
    },
    {
      id: 'b',
      texto: 'Algunos números pares son también divisibles por 3.',
      esCondicional: 'no',
      forma: 'No es condicional.',
      antecedente: 'No corresponde.',
      consecuente: 'No corresponde.'
    },
    {
      id: 'c',
      texto: 'Para cursar Análisis II es necesario tener aprobada Análisis I.',
      esCondicional: 'si',
      forma: 'Si se cursa Análisis II, entonces está aprobada Análisis I.',
      antecedente: 'Se cursa Análisis II.',
      consecuente: 'Está aprobada Análisis I.'
    },
    {
      id: 'd',
      texto: 'El resto de dividir 23456 por cuatro es cero.',
      esCondicional: 'no',
      forma: 'No es condicional.',
      antecedente: 'No corresponde.',
      consecuente: 'No corresponde.'
    },
    {
      id: 'e',
      texto: 'Es suficiente tener 3 ejercicios correctos para aprobar el examen.',
      esCondicional: 'si',
      forma: 'Si se tienen 3 ejercicios correctos, entonces se aprueba el examen.',
      antecedente: 'Se tienen 3 ejercicios correctos.',
      consecuente: 'Se aprueba el examen.'
    }
  ],
  ej3: [
    {
      id: 'a',
      texto: 'Sea t: ( p ∧ q ⇒ ¬ r ) ∧ ¬ p, sabiendo que v(t) = V ¿se puede saber si r es verdadera o falsa?',
      opciones: ['No se puede saber', 'r es verdadera', 'r es falsa'],
      correcta: 'No se puede saber',
      esperada: 'No se puede saber el valor de r. Como t es verdadera, p es falsa y el condicional también es verdadero. Al tener antecedente falso, el valor de r no influye.'
    },
    {
      id: 'b1',
      texto: 'Sea t: ( ¬p ∨ q ⇒ ¬ r ) ∨ p, sabiendo que v(t) = F ¿qué pasa con r?',
      opciones: ['No se puede saber', 'r es verdadera', 'r es falsa'],
      correcta: 'r es verdadera',
      esperada: 'r es verdadera. Para que el condicional sea falso, el antecedente debe ser verdadero y el consecuente falso; por eso ¬r es falsa y entonces r es verdadera.'
    },
    {
      id: 'b2',
      texto: 'En ese mismo ítem, ¿se puede saber si q es verdadera o falsa?',
      opciones: ['No se puede saber', 'q es verdadera', 'q es falsa'],
      correcta: 'No se puede saber',
      esperada: 'No se puede saber el valor de q, porque con p falsa el antecedente ¬p ∨ q ya queda verdadero sin depender de q.'
    }
  ],
  ej4: [
    { id: 'a', texto: 'q ∨ ( q ∧ ¬ p ⇒ p )', correcta: 'Tautología' },
    { id: 'b', texto: '( p ⇒ q ∨ r ) ∧ ¬ q ⇒ ¬ p ∨ r', correcta: 'Tautología' },
    { id: 'c', texto: '¬ ( p ∧ q ⇒ r ) ∧ ( r ∨ ¬ p)', correcta: 'Contradicción' },
    { id: 'd', texto: '( p ⇒ q ) ⇔ ( q ⇒ p )', correcta: 'Contingencia' },
    { id: 'e', texto: '( p ∨ q ) ∧ ¬ ( p ∧ q ) ∧ ( p ⇔ q )', correcta: 'Contradicción' }
  ],
  ej5: [
    { id: 'a', texto: '( p ∨ q ) ⇒ [ p ∨ ( p ⇔ q ) ]', correcta: '¬q∨p', mostrable: '¬ q ∨ p' },
    { id: 'b', texto: '¬ [ p ∨ ( q ⇒ r ) ] ∨ ¬ q', correcta: '¬[(p∨r)∧q]', mostrable: '¬ [ ( p ∨ r ) ∧ q ]' },
    { id: 'c', texto: '( p ⇒ r ∨ q ) ∧ ( ¬ q ∨ r )', correcta: '¬(p∨q)∨r', mostrable: '¬ ( p ∨ q ) ∨ r' }
  ],
  ej6: [
    'a) ( p ⇒ q ) ∧ t ⇔ ¬( t ⇒ p ) ∨ (q ∧ t )',
    'b) ¬( t ⇒ b ) ∨ (a ∧ t ) ⇔ t ∧ ( b ⇒ a )',
    'c) [ ¬ ( p ⇒ q ) ∨ ( p ∧ q ) ⇔ q ] ⇒ ( ¬ q ∨ p )'
  ]
};

const estado = { corregidos: new Set() };

function crearEj1() {
  const cont = document.getElementById('contenedorEj1');
  cont.innerHTML = datos.ej1.enunciados.map(item => `
    <div class="item" id="ej1-${item.id}">
      <label class="opcion-check">
        <input type="checkbox" data-ej1="${item.id}">
        <span><strong>${item.id})</strong> ${item.texto}</span>
      </label>
    </div>
  `).join('');
}

function crearEj2() {
  const cont = document.getElementById('contenedorEj2');
  cont.innerHTML = datos.ej2.map(item => `
    <div class="item" id="ej2-${item.id}">
      <p><strong>${item.id})</strong> ${item.texto}</p>
      <div class="grilla-triple">
        <div>
          <label class="etiqueta">¿Es condicional?</label>
          <select data-ej2-tipo="${item.id}">
            <option value="">Seleccionar</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label class="etiqueta">Forma “Si..., entonces...”</label>
          <input type="text" data-ej2-forma="${item.id}" placeholder="Escribí la reformulación" />
        </div>
        <div>
          <label class="etiqueta">Antecedente</label>
          <input type="text" data-ej2-ant="${item.id}" placeholder="Escribí el antecedente" />
        </div>
      </div>
      <div style="margin-top:12px;">
        <label class="etiqueta">Consecuente</label>
        <input type="text" data-ej2-cons="${item.id}" placeholder="Escribí el consecuente" />
      </div>
    </div>
  `).join('');
}

function crearEj3() {
  const cont = document.getElementById('contenedorEj3');
  cont.innerHTML = datos.ej3.map(item => `
    <div class="item" id="ej3-${item.id}">
      <p><strong>${item.id})</strong> ${item.texto}</p>
      <label class="etiqueta">Respuesta</label>
      <select data-ej3="${item.id}">
        <option value="">Seleccionar</option>
        ${item.opciones.map(op => `<option value="${op}">${op}</option>`).join('')}
      </select>
      <div style="margin-top:12px;">
        <label class="etiqueta">Tu justificación</label>
        <textarea data-ej3-texto="${item.id}" placeholder="Podés escribir tu explicación acá"></textarea>
      </div>
    </div>
  `).join('');
}

function crearEj4() {
  const cont = document.getElementById('contenedorEj4');
  cont.innerHTML = datos.ej4.map(item => `
    <div class="item" id="ej4-${item.id}">
      <p><strong>${item.id})</strong> ${item.texto}</p>
      <select data-ej4="${item.id}">
        <option value="">Seleccionar</option>
        <option value="Tautología">Tautología</option>
        <option value="Contradicción">Contradicción</option>
        <option value="Contingencia">Contingencia</option>
      </select>
    </div>
  `).join('');
}

function crearEj5() {
  const cont = document.getElementById('contenedorEj5');
  cont.innerHTML = datos.ej5.map(item => `
    <div class="item" id="ej5-${item.id}">
      <p><strong>${item.id})</strong> ${item.texto}</p>
      <label class="etiqueta">Simplificación</label>
      <input type="text" data-ej5="${item.id}" placeholder="Escribí el resultado simplificado" />
    </div>
  `).join('');
}

function crearEj6() {
  const cont = document.getElementById('contenedorEj6');
  cont.innerHTML = datos.ej6.map((item, index) => `
    <div class="item">
      <p><strong>${String.fromCharCode(97 + index)})</strong> ${item.replace(/^[abc]\)\s*/, '')}</p>
      <textarea placeholder="Escribí tu demostración usando leyes lógicas"></textarea>
    </div>
  `).join('');
}

function normalizar(texto) {
  return (texto || '')
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/∼|~/g, '¬')
    .replace(/\[/g, '(')
    .replace(/\]/g, ')');
}

function mostrarResultado(id, html, tipo='info') {
  const el = document.getElementById(id);
  el.className = `resultado visible ${tipo}`;
  el.innerHTML = html;
}

function corregirEj1() {
  let correctas = 0;
  datos.ej1.enunciados.forEach(item => {
    const marcado = document.querySelector(`[data-ej1="${item.id}"]`).checked;
    const caja = document.getElementById(`ej1-${item.id}`);
    caja.classList.remove('correcto', 'incorrecto');
    if (marcado === item.correcta) {
      caja.classList.add('correcto');
      correctas++;
    } else {
      caja.classList.add('incorrecto');
    }
  });
  mostrarResultado('resultadoEj1', `
    <strong>Resultado:</strong> ${correctas} de ${datos.ej1.enunciados.length} selecciones correctas.<br>
    <div class="respuesta-esperada"><strong>Respuesta esperada:</strong> son proposiciones lógicas <strong>a, d, f, g, h</strong>.</div>
  `, correctas === datos.ej1.enunciados.length ? 'ok' : 'parcial');
  estado.corregidos.add('ej1');
  actualizarProgreso();
}

function corregirEj2() {
  let aciertos = 0;
  datos.ej2.forEach(item => {
    const tipo = document.querySelector(`[data-ej2-tipo="${item.id}"]`).value;
    const caja = document.getElementById(`ej2-${item.id}`);
    caja.classList.remove('correcto', 'incorrecto');
    if (tipo === item.esCondicional) {
      caja.classList.add('correcto');
      aciertos++;
    } else {
      caja.classList.add('incorrecto');
    }

    let esperado = caja.querySelector('.respuesta-esperada');
    if (!esperado) {
      esperado = document.createElement('div');
      esperado.className = 'respuesta-esperada';
      caja.appendChild(esperado);
    }
    esperado.innerHTML = `
      <strong>Esperado:</strong><br>
      Forma: ${item.forma}<br>
      Antecedente: ${item.antecedente}<br>
      Consecuente: ${item.consecuente}
    `;
  });
  mostrarResultado('resultadoEj2', `
    <strong>Resultado:</strong> ${aciertos} de ${datos.ej2.length} clasificaciones correctas en “condicional / no condicional”.<br>
    <div class="respuesta-esperada">Se muestran debajo las reformulaciones esperadas de cada ítem.</div>
  `, aciertos === datos.ej2.length ? 'ok' : 'parcial');
  estado.corregidos.add('ej2');
  actualizarProgreso();
}

function corregirEj3() {
  let aciertos = 0;
  datos.ej3.forEach(item => {
    const valor = document.querySelector(`[data-ej3="${item.id}"]`).value;
    const caja = document.getElementById(`ej3-${item.id}`);
    caja.classList.remove('correcto', 'incorrecto');
    if (valor === item.correcta) {
      aciertos++;
      caja.classList.add('correcto');
    } else {
      caja.classList.add('incorrecto');
    }
    let esperado = caja.querySelector('.respuesta-esperada');
    if (!esperado) {
      esperado = document.createElement('div');
      esperado.className = 'respuesta-esperada';
      caja.appendChild(esperado);
    }
    esperado.innerHTML = `<strong>Respuesta esperada:</strong> ${item.correcta}.<br>${item.esperada}`;
  });
  mostrarResultado('resultadoEj3', `
    <strong>Resultado:</strong> ${aciertos} de ${datos.ej3.length} respuestas correctas.<br>
    <div class="respuesta-esperada">Además de la opción correcta, se muestra la justificación esperada.</div>
  `, aciertos === datos.ej3.length ? 'ok' : 'parcial');
  estado.corregidos.add('ej3');
  actualizarProgreso();
}

function corregirEj4() {
  let aciertos = 0;
  datos.ej4.forEach(item => {
    const valor = document.querySelector(`[data-ej4="${item.id}"]`).value;
    const caja = document.getElementById(`ej4-${item.id}`);
    caja.classList.remove('correcto', 'incorrecto');
    if (valor === item.correcta) {
      aciertos++;
      caja.classList.add('correcto');
    } else {
      caja.classList.add('incorrecto');
    }
    let esperado = caja.querySelector('.respuesta-esperada');
    if (!esperado) {
      esperado = document.createElement('div');
      esperado.className = 'respuesta-esperada';
      caja.appendChild(esperado);
    }
    esperado.innerHTML = `<strong>Esperado:</strong> ${item.correcta}`;
  });
  mostrarResultado('resultadoEj4', `
    <strong>Resultado:</strong> ${aciertos} de ${datos.ej4.length}.<br>
    <div class="respuesta-esperada">Según las respuestas provistas: a y b son tautologías; c y e son contradicciones; d es contingencia.</div>
  `, aciertos === datos.ej4.length ? 'ok' : 'parcial');
  estado.corregidos.add('ej4');
  actualizarProgreso();
}

function corregirEj5() {
  let aciertos = 0;
  datos.ej5.forEach(item => {
    const valor = document.querySelector(`[data-ej5="${item.id}"]`).value;
    const caja = document.getElementById(`ej5-${item.id}`);
    caja.classList.remove('correcto', 'incorrecto');
    const ok = normalizar(valor) === normalizar(item.correcta) || normalizar(valor) === normalizar(item.mostrable);
    if (ok) {
      aciertos++;
      caja.classList.add('correcto');
    } else {
      caja.classList.add('incorrecto');
    }
    let esperado = caja.querySelector('.respuesta-esperada');
    if (!esperado) {
      esperado = document.createElement('div');
      esperado.className = 'respuesta-esperada';
      caja.appendChild(esperado);
    }
    esperado.innerHTML = `<strong>Esperado:</strong> ${item.mostrable}`;
  });
  mostrarResultado('resultadoEj5', `
    <strong>Resultado:</strong> ${aciertos} de ${datos.ej5.length}.<br>
    <div class="respuesta-esperada">Se aceptan variantes equivalentes en símbolos si están correctamente escritas.</div>
  `, aciertos === datos.ej5.length ? 'ok' : 'parcial');
  estado.corregidos.add('ej5');
  actualizarProgreso();
}

function corregirEj6() {
  mostrarResultado('resultadoEj6', `
    <strong>Observación:</strong> en este ejercicio no hay una única demostración modelo.<br>
    El archivo de respuestas indica que <strong>hay varias formas válidas</strong> de probar estas tautologías y que conviene consultar con la docente si el desarrollo está bien.<br>
    <div class="respuesta-esperada">Podés usar este bloque para practicar paso a paso indicando la ley lógica aplicada en cada transformación.</div>
  `, 'info');
  estado.corregidos.add('ej6');
  actualizarProgreso();
}

function actualizarProgreso() {
  const total = 6;
  const porcentaje = Math.round((estado.corregidos.size / total) * 100);
  document.getElementById('barraProgresoInterna').style.width = `${porcentaje}%`;
  document.getElementById('textoProgreso').textContent = `${porcentaje}% completado`;
}

function reiniciarTodo() {
  document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
  document.querySelectorAll('input[type="text"], textarea').forEach(el => el.value = '');
  document.querySelectorAll('select').forEach(el => el.value = '');
  document.querySelectorAll('.item').forEach(el => {
    el.classList.remove('correcto', 'incorrecto');
    const esperado = el.querySelector('.respuesta-esperada');
    if (esperado) esperado.remove();
  });
  document.querySelectorAll('.resultado').forEach(el => {
    el.className = 'resultado';
    el.innerHTML = '';
  });
  estado.corregidos.clear();
  actualizarProgreso();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function corregirTodo() {
  corregirEj1();
  corregirEj2();
  corregirEj3();
  corregirEj4();
  corregirEj5();
  corregirEj6();
}

function init() {
  crearEj1();
  crearEj2();
  crearEj3();
  crearEj4();
  crearEj5();
  crearEj6();

  document.querySelectorAll('[data-corrige]').forEach(btn => {
    btn.addEventListener('click', () => {
      const objetivo = btn.dataset.corrige;
      if (objetivo === 'ej1') corregirEj1();
      if (objetivo === 'ej2') corregirEj2();
      if (objetivo === 'ej3') corregirEj3();
      if (objetivo === 'ej4') corregirEj4();
      if (objetivo === 'ej5') corregirEj5();
      if (objetivo === 'ej6') corregirEj6();
    });
  });

  document.getElementById('btnReiniciar').addEventListener('click', reiniciarTodo);
  document.getElementById('btnCorregirTodo').addEventListener('click', corregirTodo);
}

init();
