import './style.less';
import jsonData

$(document).ready(function () {
  let issueList;
  $.ajax({
    url: '../api/issueList.json',
    async: false,
    success: function (data) {
      issueList = data.data;
      runderList(issueList);
      // bindGetDetail();
    }
  });

  function runderList(data) {
    let template = '';
    for (const item of data) {
      console.log(item)
      template += ` 
                <div class="item" data-number="${item.number}">
                  <div class="title">
                    ${item.title}
                  </div>
                  <div class="time">
                    ${item.created_at.slice(0,-1).replace('T',' ')}
                  </div>
                </div>
               `;
    }
    const issueListDom = document.querySelector('.issue-list');
    issueListDom.innerHTML = template;

    const issueDom = document.querySelectorAll('.issue-list .item');
    for (const issue of issueDom) {
      issue.addEventListener('click', (e) => {
        const issueNumber = e.target.dataset.number;
        window.open('detail.html?number='+issueNumber, '_self')
      });
    }
  }



});
