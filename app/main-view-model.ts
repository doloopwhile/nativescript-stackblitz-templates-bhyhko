import { Observable } from '@nativescript/core';
import 'nativescript-sound';

interface ListItem {
  text: string;
}

export class HelloWorldModel extends Observable {
  public image: string;
  public ingredients: ListItem[];
  public steps: ListItem[];

  constructor() {
    super();

    this.image =
      'https://3.bp.blogspot.com/-tIZgv3x6wS8/UzoaFD8sYRI/AAAAAAAAey8/Ll6kNJm-lJI/s800/press_tea_maker.png';

    this.ingredients = [
      { text: '・豆の炒り方: 中〜深炒り' },
      { text: '・豆の挽き方: 粗〜中細挽きにして使います' },
      { text: '・一杯の分量: お湯160ml + 粉12g（大さじ2）' },
    ];

    this.steps = [
      { text: '1. ガラスポケットを温めます' },
      { text: '2. お湯とコーヒーを入れ、かき混ぜて馴染ませます' },
      { text: '3. 蓋をして、４分間、抽出します' },
      { text: '4. フィルターを押し下げて濾過します' },
    ];
  }

  public get showStartButton(): boolean {
    return true;
  }

  public get showTime(): boolean {
    return true;
  }

  public get time(): string {
    return '4:00';
  }

  public onTap(args) {
    alert('hello');
  }
}
