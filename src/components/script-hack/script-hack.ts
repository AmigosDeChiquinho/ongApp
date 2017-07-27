import { Component, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'script-hack',
    templateUrl: './script-hack.html'
})
export class ScriptHackComponent {

    @Input()
    src: string;

    @Input()
    type: string;

    hack = `
    pay = function() {
      params = JSON.parse(document.getElementById('cc').value);
      cc = new Moip.CreditCard(params);
      console.log(cc);
      if( cc.isValid()){
        document.getElementById('hash').val = cc.hash();
        console.log(cc.hash());
      } else {
        document.getElementById('hash').val = '';
        console.log("oi");
      }
    };
    `;

    @ViewChild('script') script: ElementRef;

    convertToScript() {
        var element = this.script.nativeElement;
        var script = document.createElement("script");
        script.type = this.type ? this.type : "text/javascript";
        if (this.src) {
            script.src = this.src;
        }
        if (element.innerHTML) {
            script.innerHTML = element.innerHTML;
        }
        var parent = element.parentElement;
        parent.parentElement.replaceChild(script, parent);
    }

    ngAfterViewInit() {
        this.convertToScript();
    }
}
