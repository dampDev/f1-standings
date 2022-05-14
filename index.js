        const standing = [
            {ranking: 1, name: 'LECLERC', puntos: 104, escuderia:'ferrari'},
            {ranking: 2, name: 'VERSTAPEN', puntos: 85, escuderia:'redbul'},
            {ranking: 3, name: 'PEREZ', puntos: 66, escuderia:'redbul'},
            {ranking: 4, name: 'RUSSELL', puntos: 59, escuderia:'mercedes'},
            {ranking: 5, name: 'SAINZ', puntos: 53, escuderia:'ferrari'},
            {ranking: 6, name: 'HAMILTON', puntos: 36, escuderia:'mercedes'},
            {ranking: 7, name: 'NORRIS', puntos: 35, escuderia:'mclaren'},
            {ranking: 8, name: 'BOTTAS', puntos: 30, escuderia:'alfa-romeo'},
            {ranking: 9, name: 'OCON', puntos: 24, escuderia:'alpine'},
            {ranking: 10, name: 'MAGNISSEN', puntos: 15, escuderia:'haas'},
        ];

        const app = document.getElementById('app');
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





