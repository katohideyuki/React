const関連: {
    /**
     * constは再代入できないだけであって、変更はできる。
     */
    const list = ['React', 'Vue', 'Angular'];
    list[0] = 'Riot';   // 値を一部変更
    console.log(list);  //['Riot', 'Vue', 'Angular']
}

数値セパレーター: {
    const value = 123_456_789;
    console.log(value); // 123456789
}

関数本体が1文の場合の省略: {
    /**
     * {}、returnは省略可。
     */
    const circle = (radius) => (radius ** 2) * Math.PI;
    console.log(circle(10));    // 314.1592653589793

    /**
     * 引数が1個なら()は省略可
     */
    const circle_v2 = radius => (radius ** 2) * Math.PI;
    console.log(circle_v2(10)); // 314.1592653589793
}

オブジェクトリテラルの簡易構文: {
    プロパティと_その値を格納した変数との名前が等しい場合は_値の指定を省略できる: {
        const title = '速習React';
        const price = 500;

        // 値を指定せず代入
        const book = { title, price };
        console.log(book);  // {title: '速習React', price: 500}
        console.log(book.title);    // React
    }

    メソッドの簡易構文: {
        省略しない場合: {
            const member = {
                name: '佐藤',
                greet: function () {
                    console.log(`こんにちは、${this.name}さん！`);
                }
            }
            member.greet(); // こんにちは、佐藤さん！
        }

        省略する場合: {
            const member = {
                name: '佐藤',
                // クラス構文の記法と一緒
                greet() {
                    console.log(`こんにちは、${this.name}さん！`);
                }
            };
            member.greet(); // こんにちは、佐藤さん！
        }
    }
}

分割代入: {
    /**
     * 配列/オブジェクトから特定の要素を抜き出し、個別の変数に割り当てる
     */
    配列の場合: {
        const list = [10, 20, 30];
        const [x, y, z] = list;
        console.log(x, y, z);   // 10 20 30

        // 配列サイズよりも代入先の個数が少なければ、残りの要素は無視
        const [a, b] = list;
        console.log(a, b);  // 10 20

        // 代入先の個数が多ければ、溢れた変数はundefinedになる
        const [l, m, n, o] = list
        console.log(l, m, n, o);    // 10 20 30 undefined

        // ブランクで一部の要素を読み飛ばす
        const [p, , r] = list
        console.log(p, r);  // 10 30

        // 「...」で残りの要素をまとめて切り出す
        const [one, ...rest] = list;
        console.log(one, rest); // 10 (2) [20, 30]
    }

    オブジェクトの場合: {
        /**
         * 目的のプロパティが存在しなかった場合、「変数名=デフォルト値」の形式ができる
         */
        const member = {
            fullname: '佐藤理央',
            sex: 'female',
            age: 18
        };

        // memoプロパティは存在しないのでデフォルト値が設定される
        const { fullname, sex, memo = '---' } = member;
        console.log(sex, fullname, memo);   // female 佐藤理央 ---
    }

    オブジェクトのより複雑な例: {
        const member = {
            fullname: '佐藤理央',
            sex: 'female',
            age: 18
        };

        異なる名前の変数に代入: {
            const { sex/*変更前の変数名*/: gender/*変更後の変数名*/ } = member;
            console.log(gender);    // female
        }

        残りのプロパティを取得: {
            // 「...」で残りの要素をまとめて切り出す
            const { fullname, ...rest } = member;
            console.log(fullname);  // 佐藤理央
            console.log(rest);  // {sex: 'female', age: 18}
        }

        入れ子のオブジェクトを分解: {
            /**
             * 入れ子のオブジェクトを展開するならば、代入先の変数も{}を入れ子にする
             * ※配列も同じ
             */

            const member = {
                fullname: '佐藤理央',
                // 入れ子オブジェクト
                address: {
                    prefecture: '静岡県',
                    city: '藤枝市'
                }
            };

            // 単にaddressとした場合には、addressオブジェクトをそのまま取得
            const { address, address: { city } } = member;
            console.log(address);   // {prefecture: '静岡県', city: '藤枝市'}
            console.log(city);  // 藤枝市
        }
    }
}


引数の規定値構文_可変長引数など: {
    引数の規定値構文: {
        /**
         * 引数がなかった場合のデフォルト値を予め定義できる
         */
        function getTrapezoidArea(a = 'a', b = 'b', c = 'c') {
            return `a=${a}, b=${b}, c=${c}`;
        }
        console.log(getTrapezoidArea(10, 5, 3));    // a=10, b=5, c=3
        console.log(getTrapezoidArea(10, 5));   // a=10, b=5, c=c
        console.log(getTrapezoidArea(10));  // a=10, b=b, c=c
    }

    可変長引数の関数: {
        /**
         * ...を付与
         */
        function sum(...nums) {
            let result = 0;
            for (const num of nums) {
                result += num;
            }
            return result;
        }
        console.log(sum(1, 2, 3, 4));   // 10


        スプレット構文による引数の展開: {
            /** 
             * 呼び出し側でも...を使用することができるが、配列を個々の要素にばらす役割になる
             */
            console.log(sum([1, 2, 3, 4])); // 01,2,3,4 ← 結果が期待通りではない
            console.log(sum(...[1, 2, 3, 4]));   // 10 ← OK
        }
    }

    分割代入によるオブジェクト引数の分解: {
        /**
         * 受け取ったオブジェクトからname/ageプロパティだけを取得
         */
        function greet({name, age}){
            console.log(`こんにちは、私は${name}、${age}歳です。`);
        }

        // sexプロパティは無視
        const obj = {name: '佐藤理央', sex: 'female', age: 18};
        greet(obj); // こんにちは、私は佐藤理央、18歳です。
    }
}

OptionalChaining演算子: {
    /**
     * 値が空値の場合（null/undefined）、エラーにせず無条件でundefinedを返却する
     */

    const str = null;
    const okStr = 'あいう';

    エラーになる場合: ;{
        // エラーになるのでコメントアウトしとく
        // console.log(str.substring(1));  // Uncaught TypeError TypeError: Cannot read properties of あnull (reading 'substring')
    }

    オプショナルの場合: {
        /** 
         * 複数階層の時に活用できる
         * obj?.titile?.length など
         */
        // エラーにならない
        console.log(str?.substring(1)); // undefined
        console.log(okStr?.substring(1));   // いう
    }

    Null合体演算子: {
        /**
         * デフォルト値を伴う式を表現したい場合に利用できる
         */

        let value = null;
        console.log(value ?? 'デフォルト値');   // デフォルト値

        // 代入演算子もある
        value ??= '規定値';
        console.log(value); // 規定値
    }
}
