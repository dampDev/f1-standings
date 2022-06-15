        const standing = [
            {ranking: 3, name: 'LECLERC', puntos: 116, escuderia:'ferrari'},
            {ranking: 1, name: 'VERSTAPEN', puntos: 150, escuderia:'redbul'},
            {ranking: 2, name: 'PEREZ', puntos: 129, escuderia:'redbul'},
            {ranking: 4, name: 'RUSSELL', puntos: 99, escuderia:'mercedes'},
            {ranking: 5, name: 'SAINZ', puntos: 83, escuderia:'ferrari'},
            {ranking: 6, name: 'HAMILTON', puntos: 62, escuderia:'mercedes'},
            {ranking: 7, name: 'NORRIS', puntos: 50, escuderia:'mclaren'},
            {ranking: 8, name: 'BOTTAS', puntos: 40, escuderia:'alfa-romeo'},
            {ranking: 9, name: 'OCON', puntos: 31, escuderia:'alpine'},
            {ranking: 10, name: 'MAGNUSSEN', puntos: 15, escuderia:'haas'},
        ];

        const app = document.getElementById('app');
        standing.sort((a,b) => b.puntos - a.puntos);
        standing.forEach(list => {
            app.innerHTML += `<div class="f1-standind--table-driver">
            <span class="f1-standind--rank">${list.ranking}</span>
            <span class="f1-standind--team-color team-color-${list.escuderia}"></span>
            <span class="f1standind--surname">${list.name}</span>
            <span class="f1-standind--pts">${list.puntos} Pts</span>
            <span class="f1-stantind--icon">></span>
</div>`
        }
        )





