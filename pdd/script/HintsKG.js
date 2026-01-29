function DoAnswer(id, i) {
        if (i > a_answers[id].length - 1) return;
        if (d_click_answer && q_nq_done[id] != 1 && q_nq_done[id] != 2) {
            if (ansdch_id != id) {
                elem("answer" + i).className = "answer_gray";
                ansdch_id = id;
                ansdch_a = i;
                return;
            } else if (ansdch_id == id && ansdch_a != i) {
                elem("answer" + ansdch_a).className = "answer";
                elem("answer" + i).className = "answer_gray";
                ansdch_id = id;
                ansdch_a = i;
                return;
            } else {
                ansdch_a = -1;
                ansdch_id = -1;
            }
        }
        if (!q_done && plus_add_rezim) {
            if (answer_once == id) return; else answer_once = id;
        }
        if (plus_add && !plus5_toomatchwrongs && !q_nq_done[id]) {
            elem("answer" + i).className = "answer_yellow";
            answer_select[id] = i;
        }
        if (a_t[id] != i) {
            if (!plus_add || plus5_toomatchwrongs) {
                elem("answer" + i).className = "answer_red";
      
            } else setTimeout(function () {
                WhoNext()
            }, 350);
            if (!q_nq_done[id]) {
                q_nq_done[id] = 2;
                if (!plus_add || plus5_toomatchwrongs) {
                    elem("quest-num" + id).innerHTML = "";
                    elem("quest-num" + id).className = "quest-number-red quest-number-active";
                }
                g_wrongs[g_wrongs_counter] = q_id[id];
                g_wrongs_counter++;
                g_complitequests++;
                if (g_global_rezim != 6) g_wronrs_cur_counter++;
                
                if (plus_add) {
                    g_mistake = 1;
                    if (id > -1 && id < 5) {
                        q_block_mistake[0]++;
                    } else if (id > 4 && id < 10) {
                        q_block_mistake[1]++;
                    } else if (id > 9 && id < 15) {
                        q_block_mistake[2]++;
                    } else if (id > 14 && id < 20) {
                        q_block_mistake[3]++;
                    }
                }
            }
        } else {
            if (!plus_add) elem("answer" + i).className = "answer_green";
            if (!q_nq_done[id]) {
                q_nq_done[id] = 1;
                g_rights_counter++;
                g_complitequests++;
            }
            setTimeout(function () {
                WhoNext()
            }, 350);
        }
    };

    function ShowQuest(id, type) {
        JastHide("result-examen");
        JastShow("container-quest");
        elem("quest-block").innerHTML = q_quest[id];

        if (g_global_rezim == 3 && g_complitequests > 0) elem("info-quest").innerHTML = "Билет №" + q_idb[id] + ", Вопрос №" + q_nq[id] + ' (' + g_complitequests + ' из 800)'; else elem("info-quest").innerHTML = "Билет №" + q_idb[id] + ", Вопрос №" + q_nq[id];
        if (id < q_img_l) {
            elem("quest-image").src = q_img_src[id].src;
        } else {
            elem("quest-image").src = "images/load.jpg";
            var i = new Image();
            i.onload = function () {
                if (q_img[id] == 0) {
                    elem("quest-image").src = "img_pdd/none.jpg";
                } else {
                    elem("quest-image").src = q_img_name[id];
                }
            };
            if (q_img[id] == 0) {
                i.src = "img_pdd/none.jpg";
            } else {
                i.src = q_img_name[id];
            }
        }
        var elem_answers = "";
        for (i = 0; i < a_length[id]; i++) elem_answers = elem_answers + "<div id=answer" + i + " class=answer><ol start=\"" + (i + 1) + "\"><li>" + a_answers[id][i] + "</li></ol></div>";
        elem("answers-block").innerHTML = elem_answers;
        for (i = 0; i < a_length[id]; i++) {
            elem("answer" + i).addEventListener('click', DoAnswer.bind(null, id, i), false);
        }
        elem("quest-num" + id).className = elem("quest-num" + id).className + " quest-number-active";
        if (q_qnum_id >= 0) {
            if (q_nq_done[q_qnum_id] == 1) {
                if (!plus_add || plus5_toomatchwrongs) elem("quest-num" + q_qnum_id).className = "quest-number-green"; else elem("quest-num" + q_qnum_id).className = "quest-number-gray";
            } else if (q_nq_done[q_qnum_id] == 2) {
                if (!plus_add || plus5_toomatchwrongs) elem("quest-num" + q_qnum_id).className = "quest-number-red"; else elem("quest-num" + q_qnum_id).className = "quest-number-gray";
            } else elem("quest-num" + q_qnum_id).className = "quest-number";
        }
        q_qnum_id = id;
        if (q_nq_done[id]) {
            if (!plus_add || q_done) {

                elem("answer" + a_t[id]).className = "answer_green";
                if (plus_add_rezim) {
                    if (q_nq_done[id] == 2) elem("answer" + answer_select[id]).className = "answer_yellow";
                }
            } else elem("answer" + answer_select[id]).className = "answer_yellow";
        } 
    }
    openkgStuff = function () {
    var links = [
    "1kg.html",
    "2kg.html",
    "3kg.html",
    "4kg.html",
    "5kg.html",
    "6kg.html",
    "7kg.html",
    "8kg.html",
    "9kg.html",
    "10kg.html",
    "11kg.html",
    "12kg.html",
    "13kg.html",
    "14kg.html",
    "15kg.html",
    "16kg.html",
    "17kg.html",
    "19kg.html",
    "20kg.html",
    "21kg.html",
    "22kg.html",
    "23kg.html",
    "24kg.html",
    "25kg.html",
    "26kg.html",
    "27kg.html",
    "28kg.html",
    "29kg.html"];
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * links.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var link = links[randIdx];
    // open it in a new window / tab (depends on browser setting)
    window.open(link);
};