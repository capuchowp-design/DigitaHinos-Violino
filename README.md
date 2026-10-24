# DigitaHinos Violino

Visualizador MIDI com **violino animado**: o app toca o arquivo e mostra, em tempo real, em qual corda e com qual dedo (1 a 4, ou corda solta) cada nota é tocada. O arco (mão direita, verde) desliza sobre a corda tocada.

- Alcance: Sol3 a Sol7 (cordas soltas Sol · Ré · Lá · Mi).
- Dedos em vermelho, arco em verde, pauta com a nota e o nome (Dó, Ré, Mi…).
- Compositor integrado (piano-roll), com **Projetos** (biblioteca do app + pasta do dispositivo), **rascunho automático**, **Partitura (PDF)**, **WAV**, **MIDI**, **JSON** e **Importar MIDI**.
- Som: gravações reais de violino (biblioteca tonejs-instruments, CC-BY 3.0), carregadas pela internet na primeira vez e guardadas no cache do app. Sem elas, toca um sintetizador de cordas.

## Sobre as digitações
Cada nota usa a corda mais aguda que a alcança. Na 1ª posição: 1 = dedo 1 (baixo), 2 = dedo 1, 3 = dedo 2 (baixo), 4 = dedo 2, 5 = dedo 3, 6 (Mi♭/Ré♯ na corda Lá, Lá♭ na Ré…) = dedo 4, 7 = dedo 4. Nas notas agudas da corda Mi, a mão sobe de posição a cada 3 semitons (simplificação para visualização). A posição do dedo no braço segue a divisão real da corda.

## Publicar (GitHub Pages)
Envie todos os arquivos para a raiz do repositório e ative Pages (HTTPS é necessário para instalar como app). A cada versão nova, mude o número em `CACHE_NAME` no `sw.js`.
