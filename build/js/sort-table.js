var aiSortTable = (function() {
    var buildTable = function(table, rule, callback) {
        var tableHead = table.getElementsByTagName('th');
        var tbody = table.querySelectorAll("tbody")[0];
        for (var i = 0; i < rule.length; i++) {
            var th = tableHead[rule[i]];
            th.dataset.col = rule[i];
            th.classList.add("ai_th_sortable", "ai_th_sortable__start");
            th.addEventListener("click", function() {
                toggleClass(table, this);
                sortProcess(table, this, tbody);
                callback(this);
            });
        }
        renderTable(tbody, rule);
    };

    var toggleClass = function(table, th) {
        if(th.classList.contains('ai_th_sortable__start')){
          th.classList.remove("ai_th_sortable__start");
          th.classList.add("ai_th_sortable__down");
          th.classList.remove("ai_th_sortable__up");
        } else {
          th.classList.toggle("ai_th_sortable__down");
          th.classList.toggle("ai_th_sortable__up");
        }
    };

    var renderTable = function(tbody, rule) {
        var body = tbody.querySelectorAll("tr");
        for (var i = 0; i < rule.length; i++) {
            for (var j = 0; j < body.length; j++) {
                var td = body[j].getElementsByTagName("td")[rule[i]];
                td.classList.add("ai_td", "ai_td_sorter_" + rule[i]);
                body[j].classList.add("ai_tr_root");
            }
        }
    };

    var chekValue = function(n) {
        return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
    };

    var sortProcess = function(table, th, tbody) {
        var tds = tbody.querySelectorAll(".ai_td");
        for (var x = 0; x < tds.length; x++) {
            tds[x].classList.remove("ai_td_active");
        }
        var sortCol = 0;
        if (th !== 0) {
            sortCol = th.dataset.col;
        }
        var sortCollection = table.querySelectorAll(".ai_td_sorter_" + sortCol);
        var finalArray = [].slice.call(sortCollection);
        finalArray.sort(function(a, b) {
            var col_l = '', col_r = '';
            if (chekValue(a.dataset.sort)) {
                col_l = +a.dataset.sort;
                col_r = +b.dataset.sort;
            } else {
                col_l = a.dataset.sort;
                col_r = b.dataset.sort;
            }
            if (th.classList.contains("ai_th_sortable__down")) {
                return col_l > col_r;
            } else {
                return col_l < col_r;
            }
        });
        for (var i = 0; i < finalArray.length; i++) {
            finalArray[i].parentNode.dataset.aisorter = i;
            finalArray[i].classList.add("ai_td_active");
        }
        var rootList = table.querySelectorAll(".ai_tr_root");
        var rootArray = [].slice.call(rootList);
        rootArray.sort(function(a, b) {
            return a.dataset.aisorter - b.dataset.aisorter;
        });
        tbody.innerHTML = '';
        for (var k = 0; k < rootArray.length; k++) {
            tbody.innerHTML += rootArray[k].outerHTML;
        }
    };

    return {
        init: function(table, rule, callback) {
            table = document.getElementById(table);
            buildTable(table, rule, callback);
        },
    };
})();

aiSortTable.init("table_1", [0, 2], function(e) {});

aiSortTable.init("table_2", [0, 2], function(e) {});
