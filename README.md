# DigitaHinos Violino

Visualizador MIDI com **violino animado**: o app toca o arquivo e mostra, em tempo real, em qual corda e com qual dedo (1 a 4, ou corda solta) cada nota é tocada. O arco (mão direita, verde) desliza sobre a corda tocada.

- Alcance: Sol3 a Sol7 (cordas soltas Sol · Ré · Lá · Mi).
- Dedos em vermelho, arco em verde, pauta com a nota e o nome (Dó, Ré, Mi…).
- Compositor integrado (piano-roll), com **Projetos** (biblioteca do app + pasta do dispositivo), **rascunho automático**, **Partitura (PDF)**, **WAV**, **MIDI**, **JSON** e **Importar MIDI**.
- Som: gravações reais de violino (biblioteca tonejs-instruments, CC-BY 3.0). O app procura primeiro a pasta local `samples/` (veja abaixo); se não existir, baixa da internet na primeira vez e guarda no cache. Sem elas, toca um sintetizador de cordas.

## Partitura com digitação
A partitura (ao vivo, janela de partitura e PDF) mostra, sob cada nota, um diagrama do braço: as 4 cordas na vertical (da esquerda para a direita Sol · Ré · Lá · Mi), o dedo em vermelho na corda tocada e o número do dedo (0 = corda solta, círculo vazio sobre a pestana).

## Repetições e casas 1ª/2ª/3ª
A ordem de execução respeita os sinais de repetição e as casas (1.2. e 3.). Quando a repetição acaba e vem uma casa de número maior (ex.: hino 61), a última nota antes do coro agora é tocada.

## Sobre as digitações
Cada nota usa a corda mais aguda que a alcança. Na 1ª posição: 1 = dedo 1 (baixo), 2 = dedo 1, 3 = dedo 2 (baixo), 4 = dedo 2, 5 = dedo 3, 6 (Mi♭/Ré♯ na corda Lá, Lá♭ na Ré…) = dedo 4, 7 = dedo 4. Nas notas agudas da corda Mi, a mão sobe de posição a cada 3 semitons (simplificação para visualização). A posição do dedo no braço segue a divisão real da corda.

## Publicar (GitHub Pages)
Envie todos os arquivos para a raiz do repositório e ative Pages (HTTPS é necessário para instalar como app). A cada versão nova, mude o número em `CACHE_NAME` no `sw.js`.

## Celulares fracos (modo leve) e sons locais
- **Modo leve (⚡ no topo):** liga sozinho em celulares com pouca memória/poucos núcleos. Desliga o reverb, tira os brilhos do desenho, limita a animação a ~30 quadros/s e reduz a resolução do canvas. O som usa buffer maior ("playback") e agenda as notas com mais antecedência para não picotar. O botão força ligado/desligado e guarda a escolha.
- **Sons dentro do app (recomendado):** no GitHub vá em **Actions → "Baixar sons do violino (rodar 1 vez)" → Run workflow**. Ele baixa os sons originais, converte para mono/MP3 leve e grava as pastas `samples/` e `vendor/` (Tone.js) no repositório. Depois disso, mude o número do `CACHE_NAME` no `sw.js` e gere o app de novo. Também dá para rodar no PC: `node scripts/baixar-samples.js` (precisa de Node, git e ffmpeg).
- Créditos dos sons: tonejs-instruments, CC-BY 3.0 (https://github.com/nbrosowsky/tonejs-instruments).

## Ícones
Fonte: `design/icone-original.jpg`. Os ícones web/PWA ficam na raiz (`icon-*.png`, `icon-maskable-*.png`), os do Android em `android-icons/` (copiados no build) e o da ficha da Play em `design/icone-playstore-512.png`.
