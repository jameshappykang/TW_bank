var branchesJson = [
    { "id": "1", "head_code": "0", "branch_code": "11", "branch_name": "業務局" }
    ,
    { "id": "2", "head_code": "0", "branch_code": "22", "branch_name": "國庫局" }
    ,
    { "id": "3", "head_code": "1", "branch_code": "12", "branch_name": "總局" }
    ,
    { "id": "4", "head_code": "1", "branch_code": "23", "branch_name": "基隆分局" }
    ,
    { "id": "5", "head_code": "1", "branch_code": "34", "branch_name": "高雄分局" }
    ,
    { "id": "6", "head_code": "1", "branch_code": "45", "branch_name": "國內銀行處" }
    ,
    { "id": "7", "head_code": "1", "branch_code": "56", "branch_name": "儲蓄處" }
    ,
    { "id": "8", "head_code": "1", "branch_code": "67", "branch_name": "信託處" }
    ,
    { "id": "9", "head_code": "1", "branch_code": "78", "branch_name": "台中分局" }
    ,
    { "id": "10", "head_code": "1", "branch_code": "89", "branch_name": "調查研究處" }
    ,
    { "id": "11", "head_code": "1", "branch_code": "90", "branch_name": "台北分局" }
    ,
    { "id": "12", "head_code": "1", "branch_code": "104", "branch_name": "外匯業務處" }
    ,
    { "id": "13", "head_code": "1", "branch_code": "115", "branch_name": "成功分局" }
    ,
    { "id": "14", "head_code": "1", "branch_code": "126", "branch_name": "北高雄分局" }
    ,
    { "id": "15", "head_code": "1", "branch_code": "137", "branch_name": "基隆分局海港辦事處" }
    ,
    { "id": "16", "head_code": "1", "branch_code": "148", "branch_name": "台南分局" }
    ,
    { "id": "17", "head_code": "1", "branch_code": "159", "branch_name": "金山分行" }
    ,
    { "id": "18", "head_code": "1", "branch_code": "160", "branch_name": "花蓮分局" }
    ,
    { "id": "19", "head_code": "1", "branch_code": "171", "branch_name": "國際金融業務分局" }
    ,
    { "id": "20", "head_code": "1", "branch_code": "182", "branch_name": "信義分行" }
    ,
    { "id": "21", "head_code": "1", "branch_code": "193", "branch_name": "桃園分局" }
    ,
    { "id": "22", "head_code": "1", "branch_code": "207", "branch_name": "新竹分局" }
    ,
    { "id": "23", "head_code": "1", "branch_code": "218", "branch_name": "萬華分局" }
    ,
    { "id": "24", "head_code": "1", "branch_code": "229", "branch_name": "板新分局" }
    ,
    { "id": "25", "head_code": "1", "branch_code": "230", "branch_name": "員林分局" }
    ,
    { "id": "26", "head_code": "1", "branch_code": "241", "branch_name": "士林分局" }
    ,
    { "id": "27", "head_code": "1", "branch_code": "252", "branch_name": "雙和分行" }
    ,
    { "id": "28", "head_code": "1", "branch_code": "263", "branch_name": "北台中分局" }
    ,
    { "id": "29", "head_code": "1", "branch_code": "274", "branch_name": "中壢分局" }
    ,
    { "id": "30", "head_code": "1", "branch_code": "285", "branch_name": "三重分局" }
    ,
    { "id": "31", "head_code": "1", "branch_code": "296", "branch_name": "嘉義分局" }
    ,
    { "id": "32", "head_code": "4", "branch_code": "15", "branch_name": "總務室" }
    ,
    { "id": "33", "head_code": "4", "branch_code": "26", "branch_name": "業務部" }
    ,
    { "id": "34", "head_code": "4", "branch_code": "37", "branch_name": "營業部" }
    ,
    { "id": "35", "head_code": "4", "branch_code": "48", "branch_name": "發行部" }
    ,
    { "id": "36", "head_code": "4", "branch_code": "59", "branch_name": "公庫部" }
    ,
    { "id": "37", "head_code": "4", "branch_code": "71", "branch_name": "館前分行" }
    ,
    { "id": "38", "head_code": "4", "branch_code": "82", "branch_name": "信託部" }
    ,
    { "id": "39", "head_code": "4", "branch_code": "93", "branch_name": "台南分行" }
    ,
    { "id": "40", "head_code": "4", "branch_code": "107", "branch_name": "台中分行" }
    ,
    { "id": "41", "head_code": "4", "branch_code": "118", "branch_name": "高雄分行" }
    ,
    { "id": "42", "head_code": "4", "branch_code": "129", "branch_name": "基隆分行" }
    ,
    { "id": "43", "head_code": "4", "branch_code": "130", "branch_name": "中興新村分行" }
    ,
    { "id": "44", "head_code": "4", "branch_code": "141", "branch_name": "嘉義分行" }
    ,
    { "id": "45", "head_code": "4", "branch_code": "152", "branch_name": "新竹分行" }
    ,
    { "id": "46", "head_code": "4", "branch_code": "163", "branch_name": "彰化分行" }
    ,
    { "id": "47", "head_code": "4", "branch_code": "174", "branch_name": "屏東分行" }
    ,
    { "id": "48", "head_code": "4", "branch_code": "185", "branch_name": "花蓮分行" }
    ,
    { "id": "49", "head_code": "4", "branch_code": "196", "branch_name": "延平分行" }
    ,
    { "id": "50", "head_code": "4", "branch_code": "200", "branch_name": "中山分行" }
    ,
    { "id": "51", "head_code": "4", "branch_code": "211", "branch_name": "高雄加工出口區分行" }
    ,
    { "id": "52", "head_code": "4", "branch_code": "222", "branch_name": "宜蘭分行" }
    ,
    { "id": "53", "head_code": "4", "branch_code": "233", "branch_name": "台東分行" }
    ,
    { "id": "54", "head_code": "4", "branch_code": "244", "branch_name": "澎湖分行" }
    ,
    { "id": "55", "head_code": "4", "branch_code": "255", "branch_name": "鳳山分行" }
    ,
    { "id": "56", "head_code": "4", "branch_code": "266", "branch_name": "桃園分行" }
    ,
    { "id": "57", "head_code": "4", "branch_code": "277", "branch_name": "板橋分行" }
    ,
    { "id": "58", "head_code": "4", "branch_code": "288", "branch_name": "新營分行" }
    ,
    { "id": "59", "head_code": "4", "branch_code": "299", "branch_name": "苗栗分行" }
    ,
    { "id": "60", "head_code": "4", "branch_code": "303", "branch_name": "豐原分行" }
    ,
    { "id": "61", "head_code": "4", "branch_code": "314", "branch_name": "斗六分行" }
    ,
    { "id": "62", "head_code": "4", "branch_code": "325", "branch_name": "南投分行" }
    ,
    { "id": "63", "head_code": "4", "branch_code": "336", "branch_name": "南門分行" }
    ,
    { "id": "64", "head_code": "4", "branch_code": "347", "branch_name": "公館分行" }
    ,
    { "id": "65", "head_code": "4", "branch_code": "358", "branch_name": "左營分行" }
    ,
    { "id": "66", "head_code": "4", "branch_code": "369", "branch_name": "北投分行" }
    ,
    { "id": "67", "head_code": "4", "branch_code": "370", "branch_name": "霧峰分行" }
    ,
    { "id": "68", "head_code": "4", "branch_code": "381", "branch_name": "金門分行" }
    ,
    { "id": "69", "head_code": "4", "branch_code": "392", "branch_name": "馬祖分行" }
    ,
    { "id": "70", "head_code": "4", "branch_code": "406", "branch_name": "安平分行" }
    ,
    { "id": "71", "head_code": "4", "branch_code": "417", "branch_name": "中壢分行" }
    ,
    { "id": "72", "head_code": "4", "branch_code": "428", "branch_name": "三重分行" }
    ,
    { "id": "73", "head_code": "4", "branch_code": "439", "branch_name": "頭份分行" }
    ,
    { "id": "74", "head_code": "4", "branch_code": "440", "branch_name": "前鎮分行" }
    ,
    { "id": "75", "head_code": "4", "branch_code": "451", "branch_name": "城中分行" }
    ,
    { "id": "76", "head_code": "4", "branch_code": "462", "branch_name": "民權分行" }
    ,
    { "id": "77", "head_code": "4", "branch_code": "473", "branch_name": "潭子分行" }
    ,
    { "id": "78", "head_code": "4", "branch_code": "484", "branch_name": "永和分行" }
    ,
    { "id": "79", "head_code": "4", "branch_code": "495", "branch_name": "員林分行" }
    ,
    { "id": "80", "head_code": "4", "branch_code": "509", "branch_name": "松江分行" }
    ,
    { "id": "81", "head_code": "4", "branch_code": "510", "branch_name": "鼓山分行" }
    ,
    { "id": "82", "head_code": "4", "branch_code": "521", "branch_name": "龍山分行" }
    ,
    { "id": "83", "head_code": "4", "branch_code": "532", "branch_name": "忠孝分行" }
    ,
    { "id": "84", "head_code": "4", "branch_code": "543", "branch_name": "信義分行" }
    ,
    { "id": "85", "head_code": "4", "branch_code": "554", "branch_name": "復興分行" }
    ,
    { "id": "86", "head_code": "4", "branch_code": "565", "branch_name": "三民分行" }
    ,
    { "id": "87", "head_code": "4", "branch_code": "576", "branch_name": "台中港分行" }
    ,
    { "id": "88", "head_code": "4", "branch_code": "587", "branch_name": "羅東分行" }
    ,
    { "id": "89", "head_code": "4", "branch_code": "598", "branch_name": "埔里分行" }
    ,
    { "id": "90", "head_code": "4", "branch_code": "602", "branch_name": "岡山分行" }
    ,
    { "id": "91", "head_code": "4", "branch_code": "613", "branch_name": "新興分行" }
    ,
    { "id": "92", "head_code": "4", "branch_code": "624", "branch_name": "苓雅分行" }
    ,
    { "id": "93", "head_code": "4", "branch_code": "646", "branch_name": "松山分行" }
    ,
    { "id": "94", "head_code": "4", "branch_code": "657", "branch_name": "健行分行" }
    ,
    { "id": "95", "head_code": "4", "branch_code": "668", "branch_name": "中和分行" }
    ,
    { "id": "96", "head_code": "4", "branch_code": "679", "branch_name": "太保分行" }
    ,
    { "id": "97", "head_code": "4", "branch_code": "680", "branch_name": "竹北分行" }
    ,
    { "id": "98", "head_code": "4", "branch_code": "691", "branch_name": "國際金融業務分行" }
    ,
    { "id": "99", "head_code": "4", "branch_code": "705", "branch_name": "士林分行" }
    ,
    { "id": "100", "head_code": "4", "branch_code": "716", "branch_name": "新莊分行" }
    ,
    { "id": "101", "head_code": "4", "branch_code": "727", "branch_name": "大甲分行" }
    ,
    { "id": "102", "head_code": "4", "branch_code": "738", "branch_name": "新竹科學園區分行" }
    ,
    { "id": "103", "head_code": "4", "branch_code": "749", "branch_name": "樹林分行" }
    ,
    { "id": "104", "head_code": "4", "branch_code": "750", "branch_name": "新店分行" }
    ,
    { "id": "105", "head_code": "4", "branch_code": "761", "branch_name": "國外管理部" }
    ,
    { "id": "106", "head_code": "4", "branch_code": "772", "branch_name": "徵信室" }
    ,
    { "id": "107", "head_code": "4", "branch_code": "783", "branch_name": "中小企業金融部" }
    ,
    { "id": "108", "head_code": "4", "branch_code": "794", "branch_name": "黎明分行" }
    ,
    { "id": "109", "head_code": "4", "branch_code": "808", "branch_name": "民生分行" }
    ,
    { "id": "110", "head_code": "4", "branch_code": "819", "branch_name": "永康分行" }
    ,
    { "id": "111", "head_code": "4", "branch_code": "820", "branch_name": "三多分行" }
    ,
    { "id": "112", "head_code": "4", "branch_code": "831", "branch_name": "紐約分行" }
    ,
    { "id": "113", "head_code": "4", "branch_code": "853", "branch_name": "台北世貿中心分行" }
    ,
    { "id": "114", "head_code": "4", "branch_code": "864", "branch_name": "大安分行" }
    ,
    { "id": "115", "head_code": "4", "branch_code": "875", "branch_name": "華江分行" }
    ,
    { "id": "116", "head_code": "4", "branch_code": "886", "branch_name": "潮州分行" }
    ,
    { "id": "117", "head_code": "4", "branch_code": "897", "branch_name": "蘇澳分行" }
    ,
    { "id": "118", "head_code": "4", "branch_code": "901", "branch_name": "大雅分行" }
    ,
    { "id": "119", "head_code": "4", "branch_code": "912", "branch_name": "楠梓分行" }
    ,
    { "id": "120", "head_code": "4", "branch_code": "923", "branch_name": "台中工業區分行" }
    ,
    { "id": "121", "head_code": "4", "branch_code": "945", "branch_name": "洛杉磯分行" }
    ,
    { "id": "122", "head_code": "4", "branch_code": "956", "branch_name": "阿姆斯特丹分行" }
    ,
    { "id": "123", "head_code": "4", "branch_code": "967", "branch_name": "歐洲股份有限公司" }
    ,
    { "id": "124", "head_code": "4", "branch_code": "1056", "branch_name": "法蘭克福代表辦事處" }
    ,
    { "id": "125", "head_code": "4", "branch_code": "1067", "branch_name": "敦化分行" }
    ,
    { "id": "126", "head_code": "4", "branch_code": "1078", "branch_name": "南港分行" }
    ,
    { "id": "127", "head_code": "4", "branch_code": "1089", "branch_name": "和平分行" }
    ,
    { "id": "128", "head_code": "4", "branch_code": "1090", "branch_name": "水湳分行" }
    ,
    { "id": "129", "head_code": "4", "branch_code": "1104", "branch_name": "中崙分行" }
    ,
    { "id": "130", "head_code": "4", "branch_code": "1115", "branch_name": "土城分行" }
    ,
    { "id": "131", "head_code": "4", "branch_code": "1126", "branch_name": "倫敦代表辦事處" }
    ,
    { "id": "132", "head_code": "4", "branch_code": "1148", "branch_name": "香港分行" }
    ,
    { "id": "133", "head_code": "4", "branch_code": "1159", "branch_name": "桃園國際機場分行" }
    ,
    { "id": "134", "head_code": "4", "branch_code": "1160", "branch_name": "大昌分行" }
    ,
    { "id": "135", "head_code": "4", "branch_code": "1171", "branch_name": "東京分行" }
    ,
    { "id": "136", "head_code": "4", "branch_code": "1182", "branch_name": "五甲分行" }
    ,
    { "id": "137", "head_code": "4", "branch_code": "1193", "branch_name": "博愛分行" }
    ,
    { "id": "138", "head_code": "4", "branch_code": "1207", "branch_name": "中庄分行" }
    ,
    { "id": "139", "head_code": "4", "branch_code": "1218", "branch_name": "平鎮分行" }
    ,
    { "id": "140", "head_code": "4", "branch_code": "1229", "branch_name": "仁愛分行" }
    ,
    { "id": "141", "head_code": "4", "branch_code": "1230", "branch_name": "南崁分行" }
    ,
    { "id": "142", "head_code": "4", "branch_code": "1241", "branch_name": "圓山分行" }
    ,
    { "id": "143", "head_code": "4", "branch_code": "1355", "branch_name": "五股分行" }
    ,
    { "id": "144", "head_code": "4", "branch_code": "1366", "branch_name": "大里分行" }
    ,
    { "id": "145", "head_code": "4", "branch_code": "1377", "branch_name": "安南分行" }
    ,
    { "id": "146", "head_code": "4", "branch_code": "1388", "branch_name": "新加坡分行" }
    ,
    { "id": "147", "head_code": "4", "branch_code": "1403", "branch_name": "金融卡服務中心" }
    ,
    { "id": "148", "head_code": "4", "branch_code": "1414", "branch_name": "西屯分行" }
    ,
    { "id": "149", "head_code": "4", "branch_code": "1425", "branch_name": "天母分行" }
    ,
    { "id": "150", "head_code": "4", "branch_code": "1436", "branch_name": "鹿港分行" }
    ,
    { "id": "151", "head_code": "4", "branch_code": "1447", "branch_name": "內壢分行" }
    ,
    { "id": "152", "head_code": "4", "branch_code": "1469", "branch_name": "台南科學園區分行" }
    ,
    { "id": "153", "head_code": "4", "branch_code": "1470", "branch_name": "虎尾分行" }
    ,
    { "id": "154", "head_code": "4", "branch_code": "1481", "branch_name": "淡水分行" }
    ,
    { "id": "155", "head_code": "4", "branch_code": "1492", "branch_name": "審查部" }
    ,
    { "id": "156", "head_code": "4", "branch_code": "1506", "branch_name": "消費者金融部" }
    ,
    { "id": "157", "head_code": "4", "branch_code": "1517", "branch_name": "財務管理部" }
    ,
    { "id": "158", "head_code": "4", "branch_code": "1539", "branch_name": "內湖分行" }
    ,
    { "id": "159", "head_code": "4", "branch_code": "1540", "branch_name": "嘉北分行" }
    ,
    { "id": "160", "head_code": "4", "branch_code": "1551", "branch_name": "東港分行" }
    ,
    { "id": "161", "head_code": "4", "branch_code": "1562", "branch_name": "汐止分行" }
    ,
    { "id": "162", "head_code": "4", "branch_code": "1573", "branch_name": "梧棲分行" }
    ,
    { "id": "163", "head_code": "4", "branch_code": "1584", "branch_name": "朴子簡易型分行" }
    ,
    { "id": "164", "head_code": "4", "branch_code": "1595", "branch_name": "小港簡易型分行" }
    ,
    { "id": "165", "head_code": "4", "branch_code": "1609", "branch_name": "中屏分行" }
    ,
    { "id": "166", "head_code": "4", "branch_code": "1610", "branch_name": "南非分行" }
    ,
    { "id": "167", "head_code": "4", "branch_code": "1621", "branch_name": "群賢分行" }
    ,
    { "id": "168", "head_code": "4", "branch_code": "1643", "branch_name": "北大路分行" }
    ,
    { "id": "169", "head_code": "4", "branch_code": "1654", "branch_name": "文山簡易型分行" }
    ,
    { "id": "170", "head_code": "4", "branch_code": "1665", "branch_name": "吉安簡易型分行" }
    ,
    { "id": "171", "head_code": "4", "branch_code": "1676", "branch_name": "南郭簡易型分行" }
    ,
    { "id": "172", "head_code": "4", "branch_code": "1687", "branch_name": "府城簡易型分行" }
    ,
    { "id": "173", "head_code": "4", "branch_code": "1702", "branch_name": "太平分行" }
    ,
    { "id": "174", "head_code": "4", "branch_code": "1713", "branch_name": "德芳分行" }
    ,
    { "id": "175", "head_code": "4", "branch_code": "1724", "branch_name": "建國分行" }
    ,
    { "id": "176", "head_code": "4", "branch_code": "1735", "branch_name": "大崙分行" }
    ,
    { "id": "177", "head_code": "4", "branch_code": "1746", "branch_name": "興農分行" }
    ,
    { "id": "178", "head_code": "4", "branch_code": "1757", "branch_name": "仁美分行" }
    ,
    { "id": "179", "head_code": "4", "branch_code": "1768", "branch_name": "鹽埔分行" }
    ,
    { "id": "180", "head_code": "4", "branch_code": "1779", "branch_name": "厚生分行" }
    ,
    { "id": "181", "head_code": "4", "branch_code": "1780", "branch_name": "新圍分行" }
    ,
    { "id": "182", "head_code": "4", "branch_code": "1791", "branch_name": "振興分行" }
    ,
    { "id": "183", "head_code": "4", "branch_code": "1805", "branch_name": "新園分行" }
    ,
    { "id": "184", "head_code": "4", "branch_code": "1816", "branch_name": "南興分行" }
    ,
    { "id": "185", "head_code": "4", "branch_code": "1827", "branch_name": "鹽龍分行" }
    ,
    { "id": "186", "head_code": "4", "branch_code": "1838", "branch_name": "新東分行" }
    ,
    { "id": "187", "head_code": "4", "branch_code": "1861", "branch_name": "東桃園分行" }
    ,
    { "id": "188", "head_code": "4", "branch_code": "1872", "branch_name": "蘆洲分行" }
    ,
    { "id": "189", "head_code": "4", "branch_code": "1919", "branch_name": "高雄國際機場分行" }
    ,
    { "id": "190", "head_code": "4", "branch_code": "1931", "branch_name": "永吉簡易型分行" }
    ,
    { "id": "191", "head_code": "4", "branch_code": "1942", "branch_name": "東門簡易型分行" }
    ,
    { "id": "192", "head_code": "4", "branch_code": "1953", "branch_name": "愛國簡易型分行" }
    ,
    { "id": "193", "head_code": "4", "branch_code": "1964", "branch_name": "高榮簡易型分行" }
    ,
    { "id": "194", "head_code": "4", "branch_code": "1975", "branch_name": "寶慶簡易型分行" }
    ,
    { "id": "195", "head_code": "4", "branch_code": "1986", "branch_name": "台電簡易型分行" }
    ,
    { "id": "196", "head_code": "4", "branch_code": "1997", "branch_name": "金城簡易型分行" }
    ,
    { "id": "197", "head_code": "4", "branch_code": "2053", "branch_name": "北府簡易型分行" }
    ,
    { "id": "198", "head_code": "4", "branch_code": "2097", "branch_name": "仁和簡易型分行" }
    ,
    { "id": "199", "head_code": "4", "branch_code": "2123", "branch_name": "草屯簡易型分行" }
    ,
    { "id": "200", "head_code": "4", "branch_code": "2145", "branch_name": "中部國際機場簡易型分行" }
    ,
    { "id": "201", "head_code": "4", "branch_code": "2178", "branch_name": "重慶南路簡易型分行" }
    ,
    { "id": "202", "head_code": "4", "branch_code": "2189", "branch_name": "台北港簡易型分行" }
    ,
    { "id": "203", "head_code": "4", "branch_code": "2190", "branch_name": "竹南科分行" }
    ,
    { "id": "204", "head_code": "4", "branch_code": "2204", "branch_name": "台中科學園區分行" }
    ,
    { "id": "205", "head_code": "4", "branch_code": "2215", "branch_name": "高雄科學園區分行" }
    ,
    { "id": "206", "head_code": "5", "branch_code": "16", "branch_name": "總行" }
    ,
    { "id": "207", "head_code": "5", "branch_code": "27", "branch_name": "基隆分行" }
    ,
    { "id": "208", "head_code": "5", "branch_code": "38", "branch_name": "中和分行" }
    ,
    { "id": "209", "head_code": "5", "branch_code": "49", "branch_name": "南港分行" }
    ,
    { "id": "210", "head_code": "5", "branch_code": "50", "branch_name": "台北分行" }
    ,
    { "id": "211", "head_code": "5", "branch_code": "61", "branch_name": "民權分行" }
    ,
    { "id": "212", "head_code": "5", "branch_code": "72", "branch_name": "古亭分行" }
    ,
    { "id": "213", "head_code": "5", "branch_code": "83", "branch_name": "長安分行" }
    ,
    { "id": "214", "head_code": "5", "branch_code": "94", "branch_name": "士林分行" }
    ,
    { "id": "215", "head_code": "5", "branch_code": "108", "branch_name": "三重分行" }
    ,
    { "id": "216", "head_code": "5", "branch_code": "119", "branch_name": "宜蘭分行" }
    ,
    { "id": "217", "head_code": "5", "branch_code": "120", "branch_name": "羅東分行" }
    ,
    { "id": "218", "head_code": "5", "branch_code": "131", "branch_name": "桃園分行" }
    ,
    { "id": "219", "head_code": "5", "branch_code": "142", "branch_name": "中壢分行" }
    ,
    { "id": "220", "head_code": "5", "branch_code": "153", "branch_name": "石門分行" }
    ,
    { "id": "221", "head_code": "5", "branch_code": "164", "branch_name": "新竹分行" }
    ,
    { "id": "222", "head_code": "5", "branch_code": "175", "branch_name": "竹東分行" }
    ,
    { "id": "223", "head_code": "5", "branch_code": "186", "branch_name": "花蓮分行" }
    ,
    { "id": "224", "head_code": "5", "branch_code": "197", "branch_name": "玉里分行" }
    ,
    { "id": "225", "head_code": "5", "branch_code": "201", "branch_name": "苗栗分行" }
    ,
    { "id": "226", "head_code": "5", "branch_code": "212", "branch_name": "頭份分行" }
    ,
    { "id": "227", "head_code": "5", "branch_code": "223", "branch_name": "豐原分行" }
    ,
    { "id": "228", "head_code": "5", "branch_code": "234", "branch_name": "大甲分行" }
    ,
    { "id": "229", "head_code": "5", "branch_code": "245", "branch_name": "台中分行" }
    ,
    { "id": "230", "head_code": "5", "branch_code": "256", "branch_name": "南投分行" }
    ,
    { "id": "231", "head_code": "5", "branch_code": "267", "branch_name": "員林分行" }
    ,
    { "id": "232", "head_code": "5", "branch_code": "278", "branch_name": "斗六分行" }
    ,
    { "id": "233", "head_code": "5", "branch_code": "289", "branch_name": "北港分行" }
    ,
    { "id": "234", "head_code": "5", "branch_code": "290", "branch_name": "嘉義分行" }
    ,
    { "id": "235", "head_code": "5", "branch_code": "304", "branch_name": "新營分行" }
    ,
    { "id": "236", "head_code": "5", "branch_code": "315", "branch_name": "永康分行" }
    ,
    { "id": "237", "head_code": "5", "branch_code": "326", "branch_name": "台南分行" }
    ,
    { "id": "238", "head_code": "5", "branch_code": "337", "branch_name": "高雄分行" }
    ,
    { "id": "239", "head_code": "5", "branch_code": "348", "branch_name": "岡山分行" }
    ,
    { "id": "240", "head_code": "5", "branch_code": "359", "branch_name": "美濃分行" }
    ,
    { "id": "241", "head_code": "5", "branch_code": "360", "branch_name": "屏東分行" }
    ,
    { "id": "242", "head_code": "5", "branch_code": "371", "branch_name": "台東分行" }
    ,
    { "id": "243", "head_code": "5", "branch_code": "382", "branch_name": "鳳北分行" }
    ,
    { "id": "244", "head_code": "5", "branch_code": "393", "branch_name": "金門分行" }
    ,
    { "id": "245", "head_code": "5", "branch_code": "407", "branch_name": "澎湖分行" }
    ,
    { "id": "246", "head_code": "5", "branch_code": "418", "branch_name": "營業部" }
    ,
    { "id": "247", "head_code": "5", "branch_code": "429", "branch_name": "專業金融部" }
    ,
    { "id": "248", "head_code": "5", "branch_code": "430", "branch_name": "投資開發金融部" }
    ,
    { "id": "249", "head_code": "5", "branch_code": "441", "branch_name": "授信審查部" }
    ,
    { "id": "250", "head_code": "5", "branch_code": "452", "branch_name": "和平分行" }
    ,
    { "id": "251", "head_code": "5", "branch_code": "463", "branch_name": "潮州分行" }
    ,
    { "id": "252", "head_code": "5", "branch_code": "474", "branch_name": "彰化分行" }
    ,
    { "id": "253", "head_code": "5", "branch_code": "485", "branch_name": "中山分行" }
    ,
    { "id": "254", "head_code": "5", "branch_code": "496", "branch_name": "永和分行" }
    ,
    { "id": "255", "head_code": "5", "branch_code": "500", "branch_name": "板橋分行" }
    ,
    { "id": "256", "head_code": "5", "branch_code": "511", "branch_name": "鳳山分行" }
    ,
    { "id": "257", "head_code": "5", "branch_code": "522", "branch_name": "湖口分行" }
    ,
    { "id": "258", "head_code": "5", "branch_code": "533", "branch_name": "蘇澳分行" }
    ,
    { "id": "259", "head_code": "5", "branch_code": "544", "branch_name": "新興分行" }
    ,
    { "id": "260", "head_code": "5", "branch_code": "555", "branch_name": "西台中分行" }
    ,
    { "id": "261", "head_code": "5", "branch_code": "566", "branch_name": "虎尾分行" }
    ,
    { "id": "262", "head_code": "5", "branch_code": "577", "branch_name": "仁愛分行" }
    ,
    { "id": "263", "head_code": "5", "branch_code": "588", "branch_name": "忠孝分行" }
    ,
    { "id": "264", "head_code": "5", "branch_code": "599", "branch_name": "中正分行" }
    ,
    { "id": "265", "head_code": "5", "branch_code": "603", "branch_name": "調查研究室" }
    ,
    { "id": "266", "head_code": "5", "branch_code": "614", "branch_name": "新店分行" }
    ,
    { "id": "267", "head_code": "5", "branch_code": "625", "branch_name": "北台南分行" }
    ,
    { "id": "268", "head_code": "5", "branch_code": "636", "branch_name": "松山分行" }
    ,
    { "id": "269", "head_code": "5", "branch_code": "647", "branch_name": "內湖分行" }
    ,
    { "id": "270", "head_code": "5", "branch_code": "658", "branch_name": "三民分行" }
    ,
    { "id": "271", "head_code": "5", "branch_code": "669", "branch_name": "民雄分行" }
    ,
    { "id": "272", "head_code": "5", "branch_code": "670", "branch_name": "大社分行" }
    ,
    { "id": "273", "head_code": "5", "branch_code": "692", "branch_name": "前鎮分行" }
    ,
    { "id": "274", "head_code": "5", "branch_code": "706", "branch_name": "路竹分行" }
    ,
    { "id": "275", "head_code": "5", "branch_code": "717", "branch_name": "五甲分行" }
    ,
    { "id": "276", "head_code": "5", "branch_code": "728", "branch_name": "太平分行" }
    ,
    { "id": "277", "head_code": "5", "branch_code": "739", "branch_name": "正濱分行" }
    ,
    { "id": "278", "head_code": "5", "branch_code": "740", "branch_name": "敦化分行" }
    ,
    { "id": "279", "head_code": "5", "branch_code": "751", "branch_name": "信託部" }
    ,
    { "id": "280", "head_code": "5", "branch_code": "762", "branch_name": "蘆洲分行" }
    ,
    { "id": "281", "head_code": "5", "branch_code": "773", "branch_name": "北台中分行" }
    ,
    { "id": "282", "head_code": "5", "branch_code": "784", "branch_name": "苓雅分行" }
    ,
    { "id": "283", "head_code": "5", "branch_code": "795", "branch_name": "信義分行" }
    ,
    { "id": "284", "head_code": "5", "branch_code": "809", "branch_name": "土城分行" }
    ,
    { "id": "285", "head_code": "5", "branch_code": "810", "branch_name": "淡水分行" }
    ,
    { "id": "286", "head_code": "5", "branch_code": "821", "branch_name": "草屯分行" }
    ,
    { "id": "287", "head_code": "5", "branch_code": "832", "branch_name": "東台南分行" }
    ,
    { "id": "288", "head_code": "5", "branch_code": "843", "branch_name": "通霄分行" }
    ,
    { "id": "289", "head_code": "5", "branch_code": "854", "branch_name": "學甲分行" }
    ,
    { "id": "290", "head_code": "5", "branch_code": "865", "branch_name": "新莊分行" }
    ,
    { "id": "291", "head_code": "5", "branch_code": "876", "branch_name": "雙和分行" }
    ,
    { "id": "292", "head_code": "5", "branch_code": "887", "branch_name": "國外部" }
    ,
    { "id": "293", "head_code": "5", "branch_code": "898", "branch_name": "白河分行" }
    ,
    { "id": "294", "head_code": "5", "branch_code": "902", "branch_name": "復興分行" }
    ,
    { "id": "295", "head_code": "5", "branch_code": "913", "branch_name": "平鎮分行" }
    ,
    { "id": "296", "head_code": "5", "branch_code": "924", "branch_name": "國際金融業務分行" }
    ,
    { "id": "297", "head_code": "5", "branch_code": "935", "branch_name": "文山分行" }
    ,
    { "id": "298", "head_code": "5", "branch_code": "946", "branch_name": "中港分行" }
    ,
    { "id": "299", "head_code": "5", "branch_code": "957", "branch_name": "東板橋分行" }
    ,
    { "id": "300", "head_code": "5", "branch_code": "968", "branch_name": "南崁分行" }
    ,
    { "id": "301", "head_code": "5", "branch_code": "979", "branch_name": "建國分行" }
    ,
    { "id": "302", "head_code": "5", "branch_code": "980", "branch_name": "樹林分行" }
    ,
    { "id": "303", "head_code": "5", "branch_code": "991", "branch_name": "東台北分行" }
    ,
    { "id": "304", "head_code": "5", "branch_code": "1002", "branch_name": "西三重分行" }
    ,
    { "id": "305", "head_code": "5", "branch_code": "1013", "branch_name": "南台中分行" }
    ,
    { "id": "306", "head_code": "5", "branch_code": "1024", "branch_name": "長春分行" }
    ,
    { "id": "307", "head_code": "5", "branch_code": "1035", "branch_name": "東新竹分行" }
    ,
    { "id": "308", "head_code": "5", "branch_code": "1046", "branch_name": "新市分行" }
    ,
    { "id": "309", "head_code": "5", "branch_code": "1057", "branch_name": "博愛分行" }
    ,
    { "id": "310", "head_code": "5", "branch_code": "1068", "branch_name": "中崙分行" }
    ,
    { "id": "311", "head_code": "5", "branch_code": "1079", "branch_name": "華江分行" }
    ,
    { "id": "312", "head_code": "5", "branch_code": "1080", "branch_name": "竹北分行" }
    ,
    { "id": "313", "head_code": "5", "branch_code": "1091", "branch_name": "安平分行" }
    ,
    { "id": "314", "head_code": "5", "branch_code": "1105", "branch_name": "嘉興分行" }
    ,
    { "id": "315", "head_code": "5", "branch_code": "1116", "branch_name": "南新莊分行" }
    ,
    { "id": "316", "head_code": "5", "branch_code": "1127", "branch_name": "三峽分行" }
    ,
    { "id": "317", "head_code": "5", "branch_code": "1138", "branch_name": "沙鹿分行" }
    ,
    { "id": "318", "head_code": "5", "branch_code": "1149", "branch_name": "南桃園分行" }
    ,
    { "id": "319", "head_code": "5", "branch_code": "1150", "branch_name": "汐止分行" }
    ,
    { "id": "320", "head_code": "5", "branch_code": "1161", "branch_name": "萬華分行" }
    ,
    { "id": "321", "head_code": "5", "branch_code": "1172", "branch_name": "小港分行" }
    ,
    { "id": "322", "head_code": "5", "branch_code": "1183", "branch_name": "新工分行" }
    ,
    { "id": "323", "head_code": "5", "branch_code": "1194", "branch_name": "烏日分行" }
    ,
    { "id": "324", "head_code": "5", "branch_code": "1208", "branch_name": "西湖分行" }
    ,
    { "id": "325", "head_code": "5", "branch_code": "1219", "branch_name": "八德分行" }
    ,
    { "id": "326", "head_code": "5", "branch_code": "1220", "branch_name": "北屯分行" }
    ,
    { "id": "327", "head_code": "5", "branch_code": "1231", "branch_name": "大安分行" }
    ,
    { "id": "328", "head_code": "5", "branch_code": "1242", "branch_name": "北中壢分行" }
    ,
    { "id": "329", "head_code": "5", "branch_code": "1253", "branch_name": "高樹分行" }
    ,
    { "id": "330", "head_code": "5", "branch_code": "1264", "branch_name": "枋寮分行" }
    ,
    { "id": "331", "head_code": "5", "branch_code": "1275", "branch_name": "豐農分行" }
    ,
    { "id": "332", "head_code": "5", "branch_code": "1286", "branch_name": "金城分行" }
    ,
    { "id": "333", "head_code": "5", "branch_code": "1297", "branch_name": "光復分行" }
    ,
    { "id": "334", "head_code": "5", "branch_code": "1301", "branch_name": "左營分行" }
    ,
    { "id": "335", "head_code": "5", "branch_code": "1312", "branch_name": "北桃園分行" }
    ,
    { "id": "336", "head_code": "5", "branch_code": "1323", "branch_name": "東港分行" }
    ,
    { "id": "337", "head_code": "5", "branch_code": "1334", "branch_name": "天母分行" }
    ,
    { "id": "338", "head_code": "5", "branch_code": "1345", "branch_name": "泰山分行" }
    ,
    { "id": "339", "head_code": "5", "branch_code": "1356", "branch_name": "中科分行" }
    ,
    { "id": "340", "head_code": "5", "branch_code": "1367", "branch_name": "豐農分行豐南辦事處" }
    ,
    { "id": "341", "head_code": "5", "branch_code": "1378", "branch_name": "豐農分水源辦事處" }
    ,
    { "id": "342", "head_code": "5", "branch_code": "1389", "branch_name": "豐農分行西豐原辦事處" }
    ,
    { "id": "343", "head_code": "5", "branch_code": "1390", "branch_name": "金城分行金沙辦事處" }
    ,
    { "id": "344", "head_code": "5", "branch_code": "1404", "branch_name": "城東分行" }
    ,
    { "id": "345", "head_code": "5", "branch_code": "1415", "branch_name": "松南分行" }
    ,
    { "id": "346", "head_code": "5", "branch_code": "1426", "branch_name": "福興分行" }
    ,
    { "id": "347", "head_code": "5", "branch_code": "1437", "branch_name": "林口分行" }
    ,
    { "id": "348", "head_code": "5", "branch_code": "1448", "branch_name": "管嶼辦事處" }
    ,
    { "id": "349", "head_code": "5", "branch_code": "1459", "branch_name": "外中辦事處" }
    ,
    { "id": "350", "head_code": "5", "branch_code": "1460", "branch_name": "福鹿辦事處" }
    ,
    { "id": "351", "head_code": "5", "branch_code": "1471", "branch_name": "南化分行" }
    ,
    { "id": "352", "head_code": "5", "branch_code": "1482", "branch_name": "北寮辦事處" }
    ,
    { "id": "353", "head_code": "5", "branch_code": "1493", "branch_name": "大樹分行" }
    ,
    { "id": "354", "head_code": "5", "branch_code": "1507", "branch_name": "九曲堂辦事處" }
    ,
    { "id": "355", "head_code": "5", "branch_code": "1518", "branch_name": "溪埔辦事處" }
    ,
    { "id": "356", "head_code": "5", "branch_code": "1529", "branch_name": "潮榮分行" }
    ,
    { "id": "357", "head_code": "5", "branch_code": "1530", "branch_name": "三春辦事處" }
    ,
    { "id": "358", "head_code": "5", "branch_code": "1541", "branch_name": "四林辦事處" }
    ,
    { "id": "359", "head_code": "5", "branch_code": "1552", "branch_name": "南門簡易型分行" }
    ,
    { "id": "360", "head_code": "5", "branch_code": "1563", "branch_name": "工研院分行" }
    ,
    { "id": "361", "head_code": "5", "branch_code": "1574", "branch_name": "北三重分行" }
    ,
    { "id": "362", "head_code": "5", "branch_code": "1585", "branch_name": "圓通分行" }
    ,
    { "id": "363", "head_code": "5", "branch_code": "3051", "branch_name": "台北分行勞保局支付處" }
    ,
    { "id": "364", "head_code": "5", "branch_code": "3327", "branch_name": "台南分行駐外辦事處" }
    ,
    { "id": "365", "head_code": "5", "branch_code": "4519", "branch_name": "鳳山分行陸軍官校辦事處" }
    ,
    { "id": "366", "head_code": "5", "branch_code": "5011", "branch_name": "洛杉磯分行" }
    ,
    { "id": "367", "head_code": "5", "branch_code": "5022", "branch_name": "香港辦事處" }
    ,
    { "id": "368", "head_code": "6", "branch_code": "17", "branch_name": "總行" }
    ,
    { "id": "369", "head_code": "6", "branch_code": "28", "branch_name": "中山路分行" }
    ,
    { "id": "370", "head_code": "6", "branch_code": "39", "branch_name": "西門分行" }
    ,
    { "id": "371", "head_code": "6", "branch_code": "40", "branch_name": "延平分行" }
    ,
    { "id": "372", "head_code": "6", "branch_code": "51", "branch_name": "大稻埕分行" }
    ,
    { "id": "373", "head_code": "6", "branch_code": "62", "branch_name": "東門分行" }
    ,
    { "id": "374", "head_code": "6", "branch_code": "73", "branch_name": "松山分行" }
    ,
    { "id": "375", "head_code": "6", "branch_code": "84", "branch_name": "新店分行" }
    ,
    { "id": "376", "head_code": "6", "branch_code": "95", "branch_name": "永和分行" }
    ,
    { "id": "377", "head_code": "6", "branch_code": "109", "branch_name": "三重分行" }
    ,
    { "id": "378", "head_code": "6", "branch_code": "110", "branch_name": "板橋分行" }
    ,
    { "id": "379", "head_code": "6", "branch_code": "121", "branch_name": "基隆分行" }
    ,
    { "id": "380", "head_code": "6", "branch_code": "132", "branch_name": "宜蘭分行" }
    ,
    { "id": "381", "head_code": "6", "branch_code": "143", "branch_name": "蘇澳分行" }
    ,
    { "id": "382", "head_code": "6", "branch_code": "154", "branch_name": "桃園分行" }
    ,
    { "id": "383", "head_code": "6", "branch_code": "165", "branch_name": "中壢分行" }
    ,
    { "id": "384", "head_code": "6", "branch_code": "176", "branch_name": "新竹分行" }
    ,
    { "id": "385", "head_code": "6", "branch_code": "187", "branch_name": "苗栗分行" }
    ,
    { "id": "386", "head_code": "6", "branch_code": "198", "branch_name": "頭份分行" }
    ,
    { "id": "387", "head_code": "6", "branch_code": "202", "branch_name": "豐原分行" }
    ,
    { "id": "388", "head_code": "6", "branch_code": "213", "branch_name": "沙鹿分行" }
    ,
    { "id": "389", "head_code": "6", "branch_code": "224", "branch_name": "台中分行" }
    ,
    { "id": "390", "head_code": "6", "branch_code": "235", "branch_name": "彰化分行" }
    ,
    { "id": "391", "head_code": "6", "branch_code": "246", "branch_name": "員林分行" }
    ,
    { "id": "392", "head_code": "6", "branch_code": "257", "branch_name": "南投分行" }
    ,
    { "id": "393", "head_code": "6", "branch_code": "268", "branch_name": "斗六分行" }
    ,
    { "id": "394", "head_code": "6", "branch_code": "279", "branch_name": "北港分行" }
    ,
    { "id": "395", "head_code": "6", "branch_code": "280", "branch_name": "嘉義分行" }
    ,
    { "id": "396", "head_code": "6", "branch_code": "291", "branch_name": "新營分行" }
    ,
    { "id": "397", "head_code": "6", "branch_code": "305", "branch_name": "台南分行" }
    ,
    { "id": "398", "head_code": "6", "branch_code": "316", "branch_name": "成功分行" }
    ,
    { "id": "399", "head_code": "6", "branch_code": "327", "branch_name": "鳳山分行" }
    ,
    { "id": "400", "head_code": "6", "branch_code": "338", "branch_name": "岡山分行" }
    ,
    { "id": "401", "head_code": "6", "branch_code": "349", "branch_name": "高雄分行" }
    ,
    { "id": "402", "head_code": "6", "branch_code": "350", "branch_name": "新興分行" }
    ,
    { "id": "403", "head_code": "6", "branch_code": "361", "branch_name": "屏東分行" }
    ,
    { "id": "404", "head_code": "6", "branch_code": "372", "branch_name": "潮州分行" }
    ,
    { "id": "405", "head_code": "6", "branch_code": "383", "branch_name": "花蓮分行" }
    ,
    { "id": "406", "head_code": "6", "branch_code": "394", "branch_name": "台東分行" }
    ,
    { "id": "407", "head_code": "6", "branch_code": "408", "branch_name": "澎湖分行" }
    ,
    { "id": "408", "head_code": "6", "branch_code": "419", "branch_name": "南京東路分行" }
    ,
    { "id": "409", "head_code": "6", "branch_code": "420", "branch_name": "北高雄分行" }
    ,
    { "id": "410", "head_code": "6", "branch_code": "431", "branch_name": "大同分行" }
    ,
    { "id": "411", "head_code": "6", "branch_code": "442", "branch_name": "和平分行" }
    ,
    { "id": "412", "head_code": "6", "branch_code": "453", "branch_name": "忠孝分行" }
    ,
    { "id": "413", "head_code": "6", "branch_code": "464", "branch_name": "景美分行" }
    ,
    { "id": "414", "head_code": "6", "branch_code": "475", "branch_name": "士林分行" }
    ,
    { "id": "415", "head_code": "6", "branch_code": "486", "branch_name": "汐止分行" }
    ,
    { "id": "416", "head_code": "6", "branch_code": "497", "branch_name": "新莊分行" }
    ,
    { "id": "417", "head_code": "6", "branch_code": "501", "branch_name": "中興分行" }
    ,
    { "id": "418", "head_code": "6", "branch_code": "512", "branch_name": "苓雅分行" }
    ,
    { "id": "419", "head_code": "6", "branch_code": "523", "branch_name": "業務部" }
    ,
    { "id": "420", "head_code": "6", "branch_code": "534", "branch_name": "農業金融部" }
    ,
    { "id": "421", "head_code": "6", "branch_code": "545", "branch_name": "台北分行" }
    ,
    { "id": "422", "head_code": "6", "branch_code": "556", "branch_name": "代理部" }
    ,
    { "id": "423", "head_code": "6", "branch_code": "567", "branch_name": "營業部" }
    ,
    { "id": "424", "head_code": "6", "branch_code": "578", "branch_name": "南豐原分行" }
    ,
    { "id": "425", "head_code": "6", "branch_code": "589", "branch_name": "羅東分行" }
    ,
    { "id": "426", "head_code": "6", "branch_code": "590", "branch_name": "三民分行" }
    ,
    { "id": "427", "head_code": "6", "branch_code": "604", "branch_name": "城東分行" }
    ,
    { "id": "428", "head_code": "6", "branch_code": "615", "branch_name": "佳里分行" }
    ,
    { "id": "429", "head_code": "6", "branch_code": "626", "branch_name": "中和分行" }
    ,
    { "id": "430", "head_code": "6", "branch_code": "637", "branch_name": "南高雄分行" }
    ,
    { "id": "431", "head_code": "6", "branch_code": "648", "branch_name": "南嘉義分行" }
    ,
    { "id": "432", "head_code": "6", "branch_code": "659", "branch_name": "竹東分行" }
    ,
    { "id": "433", "head_code": "6", "branch_code": "660", "branch_name": "中小企業金融部" }
    ,
    { "id": "434", "head_code": "6", "branch_code": "671", "branch_name": "東三重分行" }
    ,
    { "id": "435", "head_code": "6", "branch_code": "682", "branch_name": "南興分行" }
    ,
    { "id": "436", "head_code": "6", "branch_code": "693", "branch_name": "五權分行" }
    ,
    { "id": "437", "head_code": "6", "branch_code": "707", "branch_name": "埔里分行" }
    ,
    { "id": "438", "head_code": "6", "branch_code": "718", "branch_name": "大順分行" }
    ,
    { "id": "439", "head_code": "6", "branch_code": "729", "branch_name": "南勢角分行" }
    ,
    { "id": "440", "head_code": "6", "branch_code": "730", "branch_name": "朴子分行" }
    ,
    { "id": "441", "head_code": "6", "branch_code": "741", "branch_name": "審查部" }
    ,
    { "id": "442", "head_code": "6", "branch_code": "752", "branch_name": "調查研究室" }
    ,
    { "id": "443", "head_code": "6", "branch_code": "763", "branch_name": "大安分行" }
    ,
    { "id": "444", "head_code": "6", "branch_code": "774", "branch_name": "民權分行" }
    ,
    { "id": "445", "head_code": "6", "branch_code": "785", "branch_name": "東高雄分行" }
    ,
    { "id": "446", "head_code": "6", "branch_code": "796", "branch_name": "東台北分行" }
    ,
    { "id": "447", "head_code": "6", "branch_code": "800", "branch_name": "城內分行" }
    ,
    { "id": "448", "head_code": "6", "branch_code": "811", "branch_name": "建國分行" }
    ,
    { "id": "449", "head_code": "6", "branch_code": "822", "branch_name": "圓山分行" }
    ,
    { "id": "450", "head_code": "6", "branch_code": "833", "branch_name": "信義分行" }
    ,
    { "id": "451", "head_code": "6", "branch_code": "844", "branch_name": "長春分行" }
    ,
    { "id": "452", "head_code": "6", "branch_code": "855", "branch_name": "仁愛分行" }
    ,
    { "id": "453", "head_code": "6", "branch_code": "866", "branch_name": "玉成分行" }
    ,
    { "id": "454", "head_code": "6", "branch_code": "877", "branch_name": "古亭分行" }
    ,
    { "id": "455", "head_code": "6", "branch_code": "888", "branch_name": "長安分行" }
    ,
    { "id": "456", "head_code": "6", "branch_code": "899", "branch_name": "松興分行" }
    ,
    { "id": "457", "head_code": "6", "branch_code": "903", "branch_name": "民族分行" }
    ,
    { "id": "458", "head_code": "6", "branch_code": "914", "branch_name": "復興分行" }
    ,
    { "id": "459", "head_code": "6", "branch_code": "925", "branch_name": "雙連分行" }
    ,
    { "id": "460", "head_code": "6", "branch_code": "936", "branch_name": "民生分行" }
    ,
    { "id": "461", "head_code": "6", "branch_code": "947", "branch_name": "新生分行" }
    ,
    { "id": "462", "head_code": "6", "branch_code": "958", "branch_name": "松江分行" }
    ,
    { "id": "463", "head_code": "6", "branch_code": "969", "branch_name": "永吉分行" }
    ,
    { "id": "464", "head_code": "6", "branch_code": "970", "branch_name": "會計室" }
    ,
    { "id": "465", "head_code": "6", "branch_code": "981", "branch_name": "東新莊分行" }
    ,
    { "id": "466", "head_code": "6", "branch_code": "992", "branch_name": "北三重分行" }
    ,
    { "id": "467", "head_code": "6", "branch_code": "1003", "branch_name": "前金分行" }
    ,
    { "id": "468", "head_code": "6", "branch_code": "1014", "branch_name": "成大分行" }
    ,
    { "id": "469", "head_code": "6", "branch_code": "1025", "branch_name": "大里分行" }
    ,
    { "id": "470", "head_code": "6", "branch_code": "1036", "branch_name": "海山分行" }
    ,
    { "id": "471", "head_code": "6", "branch_code": "1047", "branch_name": "信託部" }
    ,
    { "id": "472", "head_code": "6", "branch_code": "1058", "branch_name": "國外部" }
    ,
    { "id": "473", "head_code": "6", "branch_code": "1069", "branch_name": "國際金融業務分行" }
    ,
    { "id": "474", "head_code": "6", "branch_code": "1070", "branch_name": "南台中分行" }
    ,
    { "id": "475", "head_code": "6", "branch_code": "1081", "branch_name": "埔墘分行" }
    ,
    { "id": "476", "head_code": "6", "branch_code": "1092", "branch_name": "慈文分行" }
    ,
    { "id": "477", "head_code": "6", "branch_code": "1106", "branch_name": "北寧分行" }
    ,
    { "id": "478", "head_code": "6", "branch_code": "1117", "branch_name": "迴龍分行" }
    ,
    { "id": "479", "head_code": "6", "branch_code": "1128", "branch_name": "太平分行" }
    ,
    { "id": "480", "head_code": "6", "branch_code": "1139", "branch_name": "彰營分行" }
    ,
    { "id": "481", "head_code": "6", "branch_code": "1140", "branch_name": "彰儲分行" }
    ,
    { "id": "482", "head_code": "6", "branch_code": "1151", "branch_name": "虎尾分行" }
    ,
    { "id": "483", "head_code": "6", "branch_code": "1162", "branch_name": "南屯分行" }
    ,
    { "id": "484", "head_code": "6", "branch_code": "1173", "branch_name": "西台中分行" }
    ,
    { "id": "485", "head_code": "6", "branch_code": "1184", "branch_name": "溪湖分行" }
    ,
    { "id": "486", "head_code": "6", "branch_code": "1195", "branch_name": "烏日分行" }
    ,
    { "id": "487", "head_code": "6", "branch_code": "1209", "branch_name": "和美分行" }
    ,
    { "id": "488", "head_code": "6", "branch_code": "1210", "branch_name": "南桃園分行" }
    ,
    { "id": "489", "head_code": "6", "branch_code": "1221", "branch_name": "屏南分行" }
    ,
    { "id": "490", "head_code": "6", "branch_code": "1232", "branch_name": "東台南分行" }
    ,
    { "id": "491", "head_code": "6", "branch_code": "1243", "branch_name": "北新竹分行" }
    ,
    { "id": "492", "head_code": "6", "branch_code": "1254", "branch_name": "復旦分行" }
    ,
    { "id": "493", "head_code": "6", "branch_code": "1265", "branch_name": "竹山分行" }
    ,
    { "id": "494", "head_code": "6", "branch_code": "1276", "branch_name": "前鎮分行" }
    ,
    { "id": "495", "head_code": "6", "branch_code": "1287", "branch_name": "灣內分行" }
    ,
    { "id": "496", "head_code": "6", "branch_code": "1298", "branch_name": "路竹分行" }
    ,
    { "id": "497", "head_code": "6", "branch_code": "1302", "branch_name": "憲德分行" }
    ,
    { "id": "498", "head_code": "6", "branch_code": "1313", "branch_name": "竹北分行" }
    ,
    { "id": "499", "head_code": "6", "branch_code": "1324", "branch_name": "六合分行" }
    ,
    { "id": "500", "head_code": "6", "branch_code": "1335", "branch_name": "五洲分行" }
    ,
    { "id": "501", "head_code": "6", "branch_code": "1346", "branch_name": "台大分行" }
    ,
    { "id": "502", "head_code": "6", "branch_code": "1357", "branch_name": "營業部台北電話局辦事處" }
    ,
    { "id": "503", "head_code": "6", "branch_code": "1368", "branch_name": "龜山分行" }
    ,
    { "id": "504", "head_code": "6", "branch_code": "1379", "branch_name": "大溪分行" }
    ,
    { "id": "505", "head_code": "6", "branch_code": "1380", "branch_name": "龍潭分行" }
    ,
    { "id": "506", "head_code": "6", "branch_code": "1391", "branch_name": "中原分行" }
    ,
    { "id": "507", "head_code": "6", "branch_code": "1405", "branch_name": "三興分行" }
    ,
    { "id": "508", "head_code": "6", "branch_code": "1416", "branch_name": "敦化分行" }
    ,
    { "id": "509", "head_code": "6", "branch_code": "1427", "branch_name": "石牌分行" }
    ,
    { "id": "510", "head_code": "6", "branch_code": "1438", "branch_name": "西屯分行" }
    ,
    { "id": "511", "head_code": "6", "branch_code": "1449", "branch_name": "雙和分行" }
    ,
    { "id": "512", "head_code": "6", "branch_code": "1450", "branch_name": "土城分行" }
    ,
    { "id": "513", "head_code": "6", "branch_code": "1461", "branch_name": "光華分行" }
    ,
    { "id": "514", "head_code": "6", "branch_code": "1472", "branch_name": "北台南分行" }
    ,
    { "id": "515", "head_code": "6", "branch_code": "1483", "branch_name": "興鳳分行" }
    ,
    { "id": "516", "head_code": "6", "branch_code": "1494", "branch_name": "北屯分行" }
    ,
    { "id": "517", "head_code": "6", "branch_code": "1508", "branch_name": "一心路分行" }
    ,
    { "id": "518", "head_code": "6", "branch_code": "1519", "branch_name": "三峽分行" }
    ,
    { "id": "519", "head_code": "6", "branch_code": "1520", "branch_name": "北嘉義分行" }
    ,
    { "id": "520", "head_code": "6", "branch_code": "1531", "branch_name": "永康分行" }
    ,
    { "id": "521", "head_code": "6", "branch_code": "1542", "branch_name": "平鎮分行" }
    ,
    { "id": "522", "head_code": "6", "branch_code": "1553", "branch_name": "大發分行" }
    ,
    { "id": "523", "head_code": "6", "branch_code": "1564", "branch_name": "內湖分行" }
    ,
    { "id": "524", "head_code": "6", "branch_code": "1575", "branch_name": "光復分行" }
    ,
    { "id": "525", "head_code": "6", "branch_code": "1586", "branch_name": "二重分行" }
    ,
    { "id": "526", "head_code": "6", "branch_code": "1601", "branch_name": "北台中分行" }
    ,
    { "id": "527", "head_code": "6", "branch_code": "1656", "branch_name": "軍功分行" }
    ,
    { "id": "528", "head_code": "6", "branch_code": "1715", "branch_name": "永安分行" }
    ,
    { "id": "529", "head_code": "6", "branch_code": "1726", "branch_name": "中權分行" }
    ,
    { "id": "530", "head_code": "6", "branch_code": "1759", "branch_name": "太原分行" }
    ,
    { "id": "531", "head_code": "6", "branch_code": "1760", "branch_name": "松竹分行" }
    ,
    { "id": "532", "head_code": "6", "branch_code": "1807", "branch_name": "進化分行" }
    ,
    { "id": "533", "head_code": "6", "branch_code": "1852", "branch_name": "中清分行" }
    ,
    { "id": "534", "head_code": "6", "branch_code": "1885", "branch_name": "建成分行" }
    ,
    { "id": "535", "head_code": "6", "branch_code": "1900", "branch_name": "朝馬分行" }
    ,
    { "id": "536", "head_code": "6", "branch_code": "1966", "branch_name": "東台中分行" }
    ,
    { "id": "537", "head_code": "6", "branch_code": "1988", "branch_name": "美村分行" }
    ,
    { "id": "538", "head_code": "6", "branch_code": "2000", "branch_name": "黎明分行" }
    ,
    { "id": "539", "head_code": "6", "branch_code": "2033", "branch_name": "昌平分行" }
    ,
    { "id": "540", "head_code": "6", "branch_code": "2044", "branch_name": "精武分行" }
    ,
    { "id": "541", "head_code": "6", "branch_code": "2055", "branch_name": "文心分行" }
    ,
    { "id": "542", "head_code": "6", "branch_code": "2077", "branch_name": "神岡分行" }
    ,
    { "id": "543", "head_code": "6", "branch_code": "2088", "branch_name": "社口分行" }
    ,
    { "id": "544", "head_code": "6", "branch_code": "2099", "branch_name": "豐洲分行" }
    ,
    { "id": "545", "head_code": "6", "branch_code": "3007", "branch_name": "圳清辦事處" }
    ,
    { "id": "546", "head_code": "6", "branch_code": "3018", "branch_name": "岸裡辦事處" }
    ,
    { "id": "547", "head_code": "6", "branch_code": "3029", "branch_name": "彰中分行" }
    ,
    { "id": "548", "head_code": "6", "branch_code": "3030", "branch_name": "大竹分行" }
    ,
    { "id": "549", "head_code": "6", "branch_code": "3041", "branch_name": "精誠辦事處" }
    ,
    { "id": "550", "head_code": "6", "branch_code": "3052", "branch_name": "大埔辦事處" }
    ,
    { "id": "551", "head_code": "6", "branch_code": "3063", "branch_name": "彰德辦事處" }
    ,
    { "id": "552", "head_code": "6", "branch_code": "3074", "branch_name": "林內分行" }
    ,
    { "id": "553", "head_code": "6", "branch_code": "3085", "branch_name": "重興辦事處" }
    ,
    { "id": "554", "head_code": "6", "branch_code": "3096", "branch_name": "九芎辦事處" }
    ,
    { "id": "555", "head_code": "6", "branch_code": "3100", "branch_name": "南港分行" }
    ,
    { "id": "556", "head_code": "6", "branch_code": "3111", "branch_name": "伸港分行" }
    ,
    { "id": "557", "head_code": "6", "branch_code": "3122", "branch_name": "五股分行" }
    ,
    { "id": "558", "head_code": "6", "branch_code": "3133", "branch_name": "樹林分行" }
    ,
    { "id": "559", "head_code": "6", "branch_code": "3155", "branch_name": "林口分行" }
    ,
    { "id": "560", "head_code": "6", "branch_code": "3166", "branch_name": "左營分行" }
    ,
    { "id": "561", "head_code": "6", "branch_code": "3177", "branch_name": "泰山分行" }
    ,
    { "id": "562", "head_code": "6", "branch_code": "3188", "branch_name": "南科高雄園區分行" }
    ,
    { "id": "563", "head_code": "6", "branch_code": "3199", "branch_name": "大坪林分行" }
    ,
    { "id": "564", "head_code": "6", "branch_code": "3373", "branch_name": "鶯歌分行" }
    ,
    { "id": "565", "head_code": "6", "branch_code": "3395", "branch_name": "鹿港分行" }
    ,
    { "id": "566", "head_code": "6", "branch_code": "3409", "branch_name": "新樹分行" }
    ,
    { "id": "567", "head_code": "6", "branch_code": "3410", "branch_name": "六家分行" }
    ,
    { "id": "568", "head_code": "6", "branch_code": "3421", "branch_name": "大雅分行" }
    ,
    { "id": "569", "head_code": "6", "branch_code": "3432", "branch_name": "大成分行" }
    ,
    { "id": "570", "head_code": "6", "branch_code": "3443", "branch_name": "八德分行" }
    ,
    { "id": "571", "head_code": "6", "branch_code": "3454", "branch_name": "吉林分行" }
    ,
    { "id": "572", "head_code": "6", "branch_code": "3476", "branch_name": "大社分行" }
    ,
    { "id": "573", "head_code": "6", "branch_code": "3546", "branch_name": "北中和分行" }
    ,
    { "id": "574", "head_code": "6", "branch_code": "5012", "branch_name": "自強分行" }
    ,
    { "id": "575", "head_code": "6", "branch_code": "5023", "branch_name": "中山分行" }
    ,
    { "id": "576", "head_code": "6", "branch_code": "5034", "branch_name": "敦南分行" }
    ,
    { "id": "577", "head_code": "6", "branch_code": "5045", "branch_name": "城中分行" }
    ,
    { "id": "578", "head_code": "6", "branch_code": "5056", "branch_name": "世貿分行" }
    ,
    { "id": "579", "head_code": "6", "branch_code": "5067", "branch_name": "延吉分行" }
    ,
    { "id": "580", "head_code": "6", "branch_code": "5078", "branch_name": "光復南路分行" }
    ,
    { "id": "581", "head_code": "6", "branch_code": "5089", "branch_name": "北士林分行" }
    ,
    { "id": "582", "head_code": "6", "branch_code": "5090", "branch_name": "信維分行" }
    ,
    { "id": "583", "head_code": "6", "branch_code": "5104", "branch_name": "西湖分行" }
    ,
    { "id": "584", "head_code": "6", "branch_code": "5115", "branch_name": "大湖分行" }
    ,
    { "id": "585", "head_code": "6", "branch_code": "5126", "branch_name": "大橋分行" }
    ,
    { "id": "586", "head_code": "6", "branch_code": "5137", "branch_name": "國醫中心分行" }
    ,
    { "id": "587", "head_code": "6", "branch_code": "5148", "branch_name": "北圓山分行" }
    ,
    { "id": "588", "head_code": "6", "branch_code": "5159", "branch_name": "松北分行" }
    ,
    { "id": "589", "head_code": "6", "branch_code": "5160", "branch_name": "新中分行" }
    ,
    { "id": "590", "head_code": "6", "branch_code": "5171", "branch_name": "中港分行" }
    ,
    { "id": "591", "head_code": "6", "branch_code": "5182", "branch_name": "衛道分行" }
    ,
    { "id": "592", "head_code": "6", "branch_code": "5193", "branch_name": "忠明南路分行" }
    ,
    { "id": "593", "head_code": "6", "branch_code": "5207", "branch_name": "東基隆分行" }
    ,
    { "id": "594", "head_code": "6", "branch_code": "5218", "branch_name": "赤崁分行" }
    ,
    { "id": "595", "head_code": "6", "branch_code": "5229", "branch_name": "府城分行" }
    ,
    { "id": "596", "head_code": "6", "branch_code": "5230", "branch_name": "開元分行" }
    ,
    { "id": "597", "head_code": "6", "branch_code": "5241", "branch_name": "港都分行" }
    ,
    { "id": "598", "head_code": "6", "branch_code": "5252", "branch_name": "七賢分行" }
    ,
    { "id": "599", "head_code": "6", "branch_code": "5263", "branch_name": "大港埔分行" }
    ,
    { "id": "600", "head_code": "6", "branch_code": "5274", "branch_name": "十全分行" }
    ,
    { "id": "601", "head_code": "6", "branch_code": "5285", "branch_name": "九如分行" }
    ,
    { "id": "602", "head_code": "6", "branch_code": "5296", "branch_name": "小港分行" }
    ,
    { "id": "603", "head_code": "6", "branch_code": "5300", "branch_name": "北三峽分行" }
    ,
    { "id": "604", "head_code": "6", "branch_code": "5311", "branch_name": "板新分行" }
    ,
    { "id": "605", "head_code": "6", "branch_code": "5322", "branch_name": "南三重分行" }
    ,
    { "id": "606", "head_code": "6", "branch_code": "5333", "branch_name": "北新分行" }
    ,
    { "id": "607", "head_code": "6", "branch_code": "5344", "branch_name": "漳和分行" }
    ,
    { "id": "608", "head_code": "6", "branch_code": "5355", "branch_name": "寶橋分行" }
    ,
    { "id": "609", "head_code": "6", "branch_code": "5366", "branch_name": "新泰分行" }
    ,
    { "id": "610", "head_code": "6", "branch_code": "5377", "branch_name": "北土城分行" }
    ,
    { "id": "611", "head_code": "6", "branch_code": "5388", "branch_name": "南汐止分行" }
    ,
    { "id": "612", "head_code": "6", "branch_code": "5399", "branch_name": "北樹林分行" }
    ,
    { "id": "613", "head_code": "6", "branch_code": "5403", "branch_name": "五股工業區分行" }
    ,
    { "id": "614", "head_code": "6", "branch_code": "5414", "branch_name": "北羅東分行" }
    ,
    { "id": "615", "head_code": "6", "branch_code": "5425", "branch_name": "礁溪分行" }
    ,
    { "id": "616", "head_code": "6", "branch_code": "5436", "branch_name": "東桃園分行" }
    ,
    { "id": "617", "head_code": "6", "branch_code": "5447", "branch_name": "壢新分行" }
    ,
    { "id": "618", "head_code": "6", "branch_code": "5458", "branch_name": "南崁分行" }
    ,
    { "id": "619", "head_code": "6", "branch_code": "5469", "branch_name": "大漢分行" }
    ,
    { "id": "620", "head_code": "6", "branch_code": "5470", "branch_name": "新明分行" }
    ,
    { "id": "621", "head_code": "6", "branch_code": "5481", "branch_name": "楊梅分行" }
    ,
    { "id": "622", "head_code": "6", "branch_code": "5492", "branch_name": "東台東分行" }
    ,
    { "id": "623", "head_code": "6", "branch_code": "5506", "branch_name": "東竹東分行" }
    ,
    { "id": "624", "head_code": "6", "branch_code": "5517", "branch_name": "東竹北分行" }
    ,
    { "id": "625", "head_code": "6", "branch_code": "5528", "branch_name": "北苗栗分行" }
    ,
    { "id": "626", "head_code": "6", "branch_code": "5539", "branch_name": "東頭份分行" }
    ,
    { "id": "627", "head_code": "6", "branch_code": "5540", "branch_name": "豐中分行" }
    ,
    { "id": "628", "head_code": "6", "branch_code": "5551", "branch_name": "北大里分行" }
    ,
    { "id": "629", "head_code": "6", "branch_code": "5562", "branch_name": "東沙鹿分行" }
    ,
    { "id": "630", "head_code": "6", "branch_code": "5573", "branch_name": "草屯分行" }
    ,
    { "id": "631", "head_code": "6", "branch_code": "5584", "branch_name": "集集分行" }
    ,
    { "id": "632", "head_code": "6", "branch_code": "5595", "branch_name": "東埔里分行" }
    ,
    { "id": "633", "head_code": "6", "branch_code": "5609", "branch_name": "員新分行" }
    ,
    { "id": "634", "head_code": "6", "branch_code": "5610", "branch_name": "南彰化分行" }
    ,
    { "id": "635", "head_code": "6", "branch_code": "5621", "branch_name": "北斗分行" }
    ,
    { "id": "636", "head_code": "6", "branch_code": "5632", "branch_name": "竹塹分行" }
    ,
    { "id": "637", "head_code": "6", "branch_code": "5643", "branch_name": "新竹科學園區分行" }
    ,
    { "id": "638", "head_code": "6", "branch_code": "5654", "branch_name": "經國分行" }
    ,
    { "id": "639", "head_code": "6", "branch_code": "5665", "branch_name": "雲林分行" }
    ,
    { "id": "640", "head_code": "6", "branch_code": "5676", "branch_name": "南虎尾分行" }
    ,
    { "id": "641", "head_code": "6", "branch_code": "5687", "branch_name": "北朴子分行" }
    ,
    { "id": "642", "head_code": "6", "branch_code": "5698", "branch_name": "北新營分行" }
    ,
    { "id": "643", "head_code": "6", "branch_code": "5702", "branch_name": "仁德分行" }
    ,
    { "id": "644", "head_code": "6", "branch_code": "5713", "branch_name": "南永康分行" }
    ,
    { "id": "645", "head_code": "6", "branch_code": "5724", "branch_name": "新市分行" }
    ,
    { "id": "646", "head_code": "6", "branch_code": "5735", "branch_name": "鳳松分行" }
    ,
    { "id": "647", "head_code": "6", "branch_code": "5746", "branch_name": "北岡山分行" }
    ,
    { "id": "648", "head_code": "6", "branch_code": "5757", "branch_name": "美濃分行" }
    ,
    { "id": "649", "head_code": "6", "branch_code": "5768", "branch_name": "大樹分行" }
    ,
    { "id": "650", "head_code": "6", "branch_code": "5779", "branch_name": "六龜分行" }
    ,
    { "id": "651", "head_code": "6", "branch_code": "5780", "branch_name": "內門分行" }
    ,
    { "id": "652", "head_code": "6", "branch_code": "5791", "branch_name": "屏中分行" }
    ,
    { "id": "653", "head_code": "6", "branch_code": "5805", "branch_name": "北潮州分行" }
    ,
    { "id": "654", "head_code": "6", "branch_code": "5816", "branch_name": "東港分行" }
    ,
    { "id": "655", "head_code": "6", "branch_code": "5827", "branch_name": "萬丹分行" }
    ,
    { "id": "656", "head_code": "6", "branch_code": "5838", "branch_name": "枋寮分行" }
    ,
    { "id": "657", "head_code": "6", "branch_code": "5849", "branch_name": "東嘉義分行" }
    ,
    { "id": "658", "head_code": "6", "branch_code": "5850", "branch_name": "北花蓮分行" }
    ,
    { "id": "659", "head_code": "6", "branch_code": "5861", "branch_name": "馬公分行" }
    ,
    { "id": "660", "head_code": "6", "branch_code": "5872", "branch_name": "公館簡易型分行" }
    ,
    { "id": "661", "head_code": "6", "branch_code": "5883", "branch_name": "忠勤簡易型分行" }
    ,
    { "id": "662", "head_code": "6", "branch_code": "5894", "branch_name": "健康簡易型分行" }
    ,
    { "id": "663", "head_code": "6", "branch_code": "5908", "branch_name": "博愛簡易型分行" }
    ,
    { "id": "664", "head_code": "6", "branch_code": "5919", "branch_name": "介壽簡易型分行" }
    ,
    { "id": "665", "head_code": "6", "branch_code": "5920", "branch_name": "文化簡易型分行" }
    ,
    { "id": "666", "head_code": "6", "branch_code": "5931", "branch_name": "復興崗簡易型分行" }
    ,
    { "id": "667", "head_code": "6", "branch_code": "5942", "branch_name": "水湳簡易型分行" }
    ,
    { "id": "668", "head_code": "6", "branch_code": "5953", "branch_name": "延慶簡易型分行" }
    ,
    { "id": "669", "head_code": "6", "branch_code": "5964", "branch_name": "中正簡易型分行" }
    ,
    { "id": "670", "head_code": "6", "branch_code": "5975", "branch_name": "興和簡易型分行" }
    ,
    { "id": "671", "head_code": "6", "branch_code": "5986", "branch_name": "光武簡易型分行" }
    ,
    { "id": "672", "head_code": "6", "branch_code": "5997", "branch_name": "龍安簡易型分行" }
    ,
    { "id": "673", "head_code": "6", "branch_code": "6008", "branch_name": "志航簡易型分行" }
    ,
    { "id": "674", "head_code": "6", "branch_code": "6019", "branch_name": "坪林簡易型分行" }
    ,
    { "id": "675", "head_code": "6", "branch_code": "6020", "branch_name": "清泉崗簡易型分行" }
    ,
    { "id": "676", "head_code": "6", "branch_code": "6031", "branch_name": "岳岡簡易型分行" }
    ,
    { "id": "677", "head_code": "6", "branch_code": "6042", "branch_name": "興田簡易型分行" }
    ,
    { "id": "678", "head_code": "6", "branch_code": "6053", "branch_name": "溝坪簡易型分行" }
    ,
    { "id": "679", "head_code": "6", "branch_code": "6064", "branch_name": "仁美簡易型分行" }
    ,
    { "id": "680", "head_code": "6", "branch_code": "6075", "branch_name": "大華簡易型分行" }
    ,
    { "id": "681", "head_code": "6", "branch_code": "6086", "branch_name": "勝利簡易型分行" }
    ,
    { "id": "682", "head_code": "6", "branch_code": "6097", "branch_name": "社皮簡易型分行" }
    ,
    { "id": "683", "head_code": "6", "branch_code": "6101", "branch_name": "萬新簡易型分行" }
    ,
    { "id": "684", "head_code": "6", "branch_code": "6123", "branch_name": "港湖分行" }
    ,
    { "id": "685", "head_code": "6", "branch_code": "9009", "branch_name": "馬尼拉分行" }
    ,
    { "id": "686", "head_code": "6", "branch_code": "9010", "branch_name": "代理部駐財務法庭收支處" }
    ,
    { "id": "687", "head_code": "6", "branch_code": "9021", "branch_name": "五甲分行" }
    ,
    { "id": "688", "head_code": "6", "branch_code": "9043", "branch_name": "淡水簡易型分行" }
    ,
    { "id": "689", "head_code": "6", "branch_code": "9054", "branch_name": "台灣聯合銀行（合庫）" }
    ,
    { "id": "690", "head_code": "6", "branch_code": "9065", "branch_name": "香港代表辦事處" }
    ,
    { "id": "691", "head_code": "7", "branch_code": "18", "branch_name": "總行" }
    ,
    { "id": "692", "head_code": "7", "branch_code": "680", "branch_name": "信用卡部" }
    ,
    { "id": "693", "head_code": "7", "branch_code": "683", "branch_name": "金融卡業務中心" }
    ,
    { "id": "694", "head_code": "7", "branch_code": "731", "branch_name": "信託部" }
    ,
    { "id": "695", "head_code": "7", "branch_code": "753", "branch_name": "業務部" }
    ,
    { "id": "696", "head_code": "7", "branch_code": "764", "branch_name": "審查部" }
    ,
    { "id": "697", "head_code": "7", "branch_code": "812", "branch_name": "徵信室" }
    ,
    { "id": "698", "head_code": "7", "branch_code": "915", "branch_name": "國外部" }
    ,
    { "id": "699", "head_code": "7", "branch_code": "926", "branch_name": "台北證券經紀商" }
    ,
    { "id": "700", "head_code": "7", "branch_code": "937", "branch_name": "營業部" }
    ,
    { "id": "701", "head_code": "7", "branch_code": "948", "branch_name": "安和分行" }
    ,
    { "id": "702", "head_code": "7", "branch_code": "959", "branch_name": "國際金融業務分行" }
    ,
    { "id": "703", "head_code": "7", "branch_code": "1015", "branch_name": "南港分行" }
    ,
    { "id": "704", "head_code": "7", "branch_code": "1026", "branch_name": "西門分行" }
    ,
    { "id": "705", "head_code": "7", "branch_code": "1037", "branch_name": "忠孝路分行" }
    ,
    { "id": "706", "head_code": "7", "branch_code": "1059", "branch_name": "東湖簡易型分行" }
    ,
    { "id": "707", "head_code": "7", "branch_code": "1060", "branch_name": "景美簡易型分行" }
    ,
    { "id": "708", "head_code": "7", "branch_code": "1071", "branch_name": "大直簡易型分行" }
    ,
    { "id": "709", "head_code": "7", "branch_code": "1118", "branch_name": "大稻埕分行" }
    ,
    { "id": "710", "head_code": "7", "branch_code": "1130", "branch_name": "信維分行" }
    ,
    { "id": "711", "head_code": "7", "branch_code": "1211", "branch_name": "建成分行" }
    ,
    { "id": "712", "head_code": "7", "branch_code": "1314", "branch_name": "大同分行" }
    ,
    { "id": "713", "head_code": "7", "branch_code": "1358", "branch_name": "劍潭分行" }
    ,
    { "id": "714", "head_code": "7", "branch_code": "1392", "branch_name": "中山證券經紀商" }
    ,
    { "id": "715", "head_code": "7", "branch_code": "1406", "branch_name": "圓山分行" }
    ,
    { "id": "716", "head_code": "7", "branch_code": "1417", "branch_name": "中山分行" }
    ,
    { "id": "717", "head_code": "7", "branch_code": "1428", "branch_name": "中崙分行" }
    ,
    { "id": "718", "head_code": "7", "branch_code": "1439", "branch_name": "南京東路分行" }
    ,
    { "id": "719", "head_code": "7", "branch_code": "1440", "branch_name": "城東分行" }
    ,
    { "id": "720", "head_code": "7", "branch_code": "1451", "branch_name": "民生分行" }
    ,
    { "id": "721", "head_code": "7", "branch_code": "1462", "branch_name": "松江分行" }
    ,
    { "id": "722", "head_code": "7", "branch_code": "1473", "branch_name": "民權分行" }
    ,
    { "id": "723", "head_code": "7", "branch_code": "1484", "branch_name": "八德分行" }
    ,
    { "id": "724", "head_code": "7", "branch_code": "1495", "branch_name": "長春分行" }
    ,
    { "id": "725", "head_code": "7", "branch_code": "1509", "branch_name": "內湖分行" }
    ,
    { "id": "726", "head_code": "7", "branch_code": "1510", "branch_name": "松山分行" }
    ,
    { "id": "727", "head_code": "7", "branch_code": "1521", "branch_name": "延吉分行" }
    ,
    { "id": "728", "head_code": "7", "branch_code": "1532", "branch_name": "光復分行" }
    ,
    { "id": "729", "head_code": "7", "branch_code": "1554", "branch_name": "興雅分行" }
    ,
    { "id": "730", "head_code": "7", "branch_code": "1576", "branch_name": "永春分行" }
    ,
    { "id": "731", "head_code": "7", "branch_code": "1587", "branch_name": "麗山分行" }
    ,
    { "id": "732", "head_code": "7", "branch_code": "1598", "branch_name": "吉林簡易型分行" }
    ,
    { "id": "733", "head_code": "7", "branch_code": "1602", "branch_name": "仁愛分行" }
    ,
    { "id": "734", "head_code": "7", "branch_code": "1613", "branch_name": "大安分行" }
    ,
    { "id": "735", "head_code": "7", "branch_code": "1624", "branch_name": "信義分行" }
    ,
    { "id": "736", "head_code": "7", "branch_code": "1635", "branch_name": "復興分行" }
    ,
    { "id": "737", "head_code": "7", "branch_code": "1646", "branch_name": "敦化分行" }
    ,
    { "id": "738", "head_code": "7", "branch_code": "1657", "branch_name": "仁和分行" }
    ,
    { "id": "739", "head_code": "7", "branch_code": "1668", "branch_name": "世貿分行" }
    ,
    { "id": "740", "head_code": "7", "branch_code": "1679", "branch_name": "木柵分行" }
    ,
    { "id": "741", "head_code": "7", "branch_code": "1680", "branch_name": "松貿分行" }
    ,
    { "id": "742", "head_code": "7", "branch_code": "1691", "branch_name": "港墘分行" }
    ,
    { "id": "743", "head_code": "7", "branch_code": "1716", "branch_name": "古亭分行" }
    ,
    { "id": "744", "head_code": "7", "branch_code": "1727", "branch_name": "南門分行" }
    ,
    { "id": "745", "head_code": "7", "branch_code": "1819", "branch_name": "萬華簡易型分行" }
    ,
    { "id": "746", "head_code": "7", "branch_code": "1831", "branch_name": "雙園分行" }
    ,
    { "id": "747", "head_code": "7", "branch_code": "1901", "branch_name": "天母分行" }
    ,
    { "id": "748", "head_code": "7", "branch_code": "1912", "branch_name": "北投分行" }
    ,
    { "id": "749", "head_code": "7", "branch_code": "1923", "branch_name": "士林分行" }
    ,
    { "id": "750", "head_code": "7", "branch_code": "1934", "branch_name": "建國分行" }
    ,
    { "id": "751", "head_code": "7", "branch_code": "1945", "branch_name": "萬隆簡易型分行" }
    ,
    { "id": "752", "head_code": "7", "branch_code": "2012", "branch_name": "板橋分行" }
    ,
    { "id": "753", "head_code": "7", "branch_code": "2023", "branch_name": "華江分行" }
    ,
    { "id": "754", "head_code": "7", "branch_code": "2034", "branch_name": "樹林分行" }
    ,
    { "id": "755", "head_code": "7", "branch_code": "2056", "branch_name": "土城分行" }
    ,
    { "id": "756", "head_code": "7", "branch_code": "2115", "branch_name": "三重埔分行" }
    ,
    { "id": "757", "head_code": "7", "branch_code": "2126", "branch_name": "長泰分行" }
    ,
    { "id": "758", "head_code": "7", "branch_code": "2137", "branch_name": "蘆洲分行" }
    ,
    { "id": "759", "head_code": "7", "branch_code": "2148", "branch_name": "頭前分行" }
    ,
    { "id": "760", "head_code": "7", "branch_code": "2159", "branch_name": "五股分行" }
    ,
    { "id": "761", "head_code": "7", "branch_code": "2160", "branch_name": "重陽分行" }
    ,
    { "id": "762", "head_code": "7", "branch_code": "2171", "branch_name": "五股工業區分行" }
    ,
    { "id": "763", "head_code": "7", "branch_code": "2182", "branch_name": "淡水分行" }
    ,
    { "id": "764", "head_code": "7", "branch_code": "2218", "branch_name": "新店分行" }
    ,
    { "id": "765", "head_code": "7", "branch_code": "2229", "branch_name": "吉成分行" }
    ,
    { "id": "766", "head_code": "7", "branch_code": "2300", "branch_name": "泰山分行" }
    ,
    { "id": "767", "head_code": "7", "branch_code": "2311", "branch_name": "新莊分行" }
    ,
    { "id": "768", "head_code": "7", "branch_code": "2322", "branch_name": "鶯歌分行" }
    ,
    { "id": "769", "head_code": "7", "branch_code": "2333", "branch_name": "中和分行" }
    ,
    { "id": "770", "head_code": "7", "branch_code": "2344", "branch_name": "永和分行" }
    ,
    { "id": "771", "head_code": "7", "branch_code": "2355", "branch_name": "雙和分行" }
    ,
    { "id": "772", "head_code": "7", "branch_code": "2366", "branch_name": "連城分行" }
    ,
    { "id": "773", "head_code": "7", "branch_code": "2388", "branch_name": "埔墘分行" }
    ,
    { "id": "774", "head_code": "7", "branch_code": "2399", "branch_name": "丹鳳分行" }
    ,
    { "id": "775", "head_code": "7", "branch_code": "2403", "branch_name": "中和證券經紀商" }
    ,
    { "id": "776", "head_code": "7", "branch_code": "2414", "branch_name": "基隆分行" }
    ,
    { "id": "777", "head_code": "7", "branch_code": "2425", "branch_name": "草店尾分行" }
    ,
    { "id": "778", "head_code": "7", "branch_code": "2436", "branch_name": "哨船頭分行" }
    ,
    { "id": "779", "head_code": "7", "branch_code": "2458", "branch_name": "汐止分行" }
    ,
    { "id": "780", "head_code": "7", "branch_code": "2517", "branch_name": "宜蘭分行" }
    ,
    { "id": "781", "head_code": "7", "branch_code": "2610", "branch_name": "羅東分行" }
    ,
    { "id": "782", "head_code": "7", "branch_code": "2621", "branch_name": "蘇澳分行" }
    ,
    { "id": "783", "head_code": "7", "branch_code": "2702", "branch_name": "桃園證券分行" }
    ,
    { "id": "784", "head_code": "7", "branch_code": "2713", "branch_name": "桃園分行" }
    ,
    { "id": "785", "head_code": "7", "branch_code": "2724", "branch_name": "北桃分行" }
    ,
    { "id": "786", "head_code": "7", "branch_code": "2791", "branch_name": "大湳分行" }
    ,
    { "id": "787", "head_code": "7", "branch_code": "2805", "branch_name": "內壢分行" }
    ,
    { "id": "788", "head_code": "7", "branch_code": "2816", "branch_name": "中壢分行" }
    ,
    { "id": "789", "head_code": "7", "branch_code": "2827", "branch_name": "西壢分行" }
    ,
    { "id": "790", "head_code": "7", "branch_code": "2838", "branch_name": "平鎮分行" }
    ,
    { "id": "791", "head_code": "7", "branch_code": "2849", "branch_name": "大園分行" }
    ,
    { "id": "792", "head_code": "7", "branch_code": "2850", "branch_name": "南崁分行" }
    ,
    { "id": "793", "head_code": "7", "branch_code": "2908", "branch_name": "林口分行" }
    ,
    { "id": "794", "head_code": "7", "branch_code": "2919", "branch_name": "大溪分行" }
    ,
    { "id": "795", "head_code": "7", "branch_code": "2920", "branch_name": "龍潭分行" }
    ,
    { "id": "796", "head_code": "7", "branch_code": "3019", "branch_name": "新竹分行" }
    ,
    { "id": "797", "head_code": "7", "branch_code": "3020", "branch_name": "東門分行" }
    ,
    { "id": "798", "head_code": "7", "branch_code": "3031", "branch_name": "竹科分行" }
    ,
    { "id": "799", "head_code": "7", "branch_code": "3112", "branch_name": "竹東分行" }
    ,
    { "id": "800", "head_code": "7", "branch_code": "3123", "branch_name": "關西分行" }
    ,
    { "id": "801", "head_code": "7", "branch_code": "3134", "branch_name": "竹北分行" }
    ,
    { "id": "802", "head_code": "7", "branch_code": "3215", "branch_name": "苗栗分行" }
    ,
    { "id": "803", "head_code": "7", "branch_code": "3318", "branch_name": "竹南分行" }
    ,
    { "id": "804", "head_code": "7", "branch_code": "3329", "branch_name": "頭份分行" }
    ,
    { "id": "805", "head_code": "7", "branch_code": "4016", "branch_name": "台中分行" }
    ,
    { "id": "806", "head_code": "7", "branch_code": "4027", "branch_name": "南台中分行" }
    ,
    { "id": "807", "head_code": "7", "branch_code": "4038", "branch_name": "北台中分行" }
    ,
    { "id": "808", "head_code": "7", "branch_code": "4049", "branch_name": "中港分行" }
    ,
    { "id": "809", "head_code": "7", "branch_code": "4050", "branch_name": "北屯分行" }
    ,
    { "id": "810", "head_code": "7", "branch_code": "4061", "branch_name": "進化分行" }
    ,
    { "id": "811", "head_code": "7", "branch_code": "4072", "branch_name": "南屯分行" }
    ,
    { "id": "812", "head_code": "7", "branch_code": "4119", "branch_name": "豐原分行" }
    ,
    { "id": "813", "head_code": "7", "branch_code": "4120", "branch_name": "大里分行" }
    ,
    { "id": "814", "head_code": "7", "branch_code": "4153", "branch_name": "中科分行" }
    ,
    { "id": "815", "head_code": "7", "branch_code": "4212", "branch_name": "東勢分行" }
    ,
    { "id": "816", "head_code": "7", "branch_code": "4223", "branch_name": "沙鹿分行" }
    ,
    { "id": "817", "head_code": "7", "branch_code": "4234", "branch_name": "大甲分行" }
    ,
    { "id": "818", "head_code": "7", "branch_code": "4245", "branch_name": "太平分行" }
    ,
    { "id": "819", "head_code": "7", "branch_code": "4256", "branch_name": "清水分行" }
    ,
    { "id": "820", "head_code": "7", "branch_code": "4267", "branch_name": "大雅分行" }
    ,
    { "id": "821", "head_code": "7", "branch_code": "4315", "branch_name": "南投分行" }
    ,
    { "id": "822", "head_code": "7", "branch_code": "4418", "branch_name": "草屯分行" }
    ,
    { "id": "823", "head_code": "7", "branch_code": "4419", "branch_name": "草屯分行中興新村辦事處" }
    ,
    { "id": "824", "head_code": "7", "branch_code": "4429", "branch_name": "埔里分行" }
    ,
    { "id": "825", "head_code": "7", "branch_code": "4430", "branch_name": "中興新村辦事處" }
    ,
    { "id": "826", "head_code": "7", "branch_code": "4511", "branch_name": "彰化分行" }
    ,
    { "id": "827", "head_code": "7", "branch_code": "4614", "branch_name": "員林分行" }
    ,
    { "id": "828", "head_code": "7", "branch_code": "4625", "branch_name": "鹿港分行" }
    ,
    { "id": "829", "head_code": "7", "branch_code": "4636", "branch_name": "溪湖分行" }
    ,
    { "id": "830", "head_code": "7", "branch_code": "4647", "branch_name": "北斗分行" }
    ,
    { "id": "831", "head_code": "7", "branch_code": "4717", "branch_name": "和美分行" }
    ,
    { "id": "832", "head_code": "7", "branch_code": "5013", "branch_name": "嘉義分行" }
    ,
    { "id": "833", "head_code": "7", "branch_code": "5024", "branch_name": "新西分行" }
    ,
    { "id": "834", "head_code": "7", "branch_code": "5035", "branch_name": "興嘉分行" }
    ,
    { "id": "835", "head_code": "7", "branch_code": "5116", "branch_name": "朴子分行" }
    ,
    { "id": "836", "head_code": "7", "branch_code": "5219", "branch_name": "斗六分行" }
    ,
    { "id": "837", "head_code": "7", "branch_code": "5220", "branch_name": "斗南分行" }
    ,
    { "id": "838", "head_code": "7", "branch_code": "5312", "branch_name": "北港分行" }
    ,
    { "id": "839", "head_code": "7", "branch_code": "5323", "branch_name": "西螺分行" }
    ,
    { "id": "840", "head_code": "7", "branch_code": "5334", "branch_name": "虎尾分行" }
    ,
    { "id": "841", "head_code": "7", "branch_code": "6010", "branch_name": "台南分行" }
    ,
    { "id": "842", "head_code": "7", "branch_code": "6021", "branch_name": "運河分行" }
    ,
    { "id": "843", "head_code": "7", "branch_code": "6043", "branch_name": "富強分行" }
    ,
    { "id": "844", "head_code": "7", "branch_code": "6054", "branch_name": "赤崁分行" }
    ,
    { "id": "845", "head_code": "7", "branch_code": "6065", "branch_name": "竹溪分行" }
    ,
    { "id": "846", "head_code": "7", "branch_code": "6076", "branch_name": "金城分行" }
    ,
    { "id": "847", "head_code": "7", "branch_code": "6087", "branch_name": "安南分行" }
    ,
    { "id": "848", "head_code": "7", "branch_code": "6113", "branch_name": "新營分行" }
    ,
    { "id": "849", "head_code": "7", "branch_code": "6216", "branch_name": "鹽水分行" }
    ,
    { "id": "850", "head_code": "7", "branch_code": "6227", "branch_name": "麻豆分行" }
    ,
    { "id": "851", "head_code": "7", "branch_code": "6238", "branch_name": "善化分行" }
    ,
    { "id": "852", "head_code": "7", "branch_code": "6249", "branch_name": "佳里分行" }
    ,
    { "id": "853", "head_code": "7", "branch_code": "6250", "branch_name": "新化分行" }
    ,
    { "id": "854", "head_code": "7", "branch_code": "6261", "branch_name": "大灣分行" }
    ,
    { "id": "855", "head_code": "7", "branch_code": "6272", "branch_name": "學甲分行" }
    ,
    { "id": "856", "head_code": "7", "branch_code": "6283", "branch_name": "南科園區分行" }
    ,
    { "id": "857", "head_code": "7", "branch_code": "6294", "branch_name": "歸仁分行" }
    ,
    { "id": "858", "head_code": "7", "branch_code": "6308", "branch_name": "永康分行" }
    ,
    { "id": "859", "head_code": "7", "branch_code": "7017", "branch_name": "高雄分行" }
    ,
    { "id": "860", "head_code": "7", "branch_code": "7028", "branch_name": "鹽埕分行" }
    ,
    { "id": "861", "head_code": "7", "branch_code": "7039", "branch_name": "新興分行" }
    ,
    { "id": "862", "head_code": "7", "branch_code": "7040", "branch_name": "三民分行" }
    ,
    { "id": "863", "head_code": "7", "branch_code": "7051", "branch_name": "苓雅分行" }
    ,
    { "id": "864", "head_code": "7", "branch_code": "7062", "branch_name": "左營分行" }
    ,
    { "id": "865", "head_code": "7", "branch_code": "7073", "branch_name": "楠梓分行" }
    ,
    { "id": "866", "head_code": "7", "branch_code": "7084", "branch_name": "五福分行" }
    ,
    { "id": "867", "head_code": "7", "branch_code": "7095", "branch_name": "十全分行" }
    ,
    { "id": "868", "head_code": "7", "branch_code": "7109", "branch_name": "前鎮分行" }
    ,
    { "id": "869", "head_code": "7", "branch_code": "7110", "branch_name": "灣內分行" }
    ,
    { "id": "870", "head_code": "7", "branch_code": "7121", "branch_name": "博愛分行" }
    ,
    { "id": "871", "head_code": "7", "branch_code": "7132", "branch_name": "鼎泰分行" }
    ,
    { "id": "872", "head_code": "7", "branch_code": "7143", "branch_name": "小港分行" }
    ,
    { "id": "873", "head_code": "7", "branch_code": "7154", "branch_name": "七賢分行" }
    ,
    { "id": "874", "head_code": "7", "branch_code": "7202", "branch_name": "五甲分行" }
    ,
    { "id": "875", "head_code": "7", "branch_code": "7213", "branch_name": "鳳山分行" }
    ,
    { "id": "876", "head_code": "7", "branch_code": "7305", "branch_name": "路竹分行" }
    ,
    { "id": "877", "head_code": "7", "branch_code": "7316", "branch_name": "岡山分行" }
    ,
    { "id": "878", "head_code": "7", "branch_code": "7327", "branch_name": "旗山分行" }
    ,
    { "id": "879", "head_code": "7", "branch_code": "7338", "branch_name": "林園分行" }
    ,
    { "id": "880", "head_code": "7", "branch_code": "7349", "branch_name": "高科分行" }
    ,
    { "id": "881", "head_code": "7", "branch_code": "7419", "branch_name": "屏東分行" }
    ,
    { "id": "882", "head_code": "7", "branch_code": "7420", "branch_name": "千禧分行" }
    ,
    { "id": "883", "head_code": "7", "branch_code": "7512", "branch_name": "潮州分行" }
    ,
    { "id": "884", "head_code": "7", "branch_code": "7523", "branch_name": "東港分行" }
    ,
    { "id": "885", "head_code": "7", "branch_code": "7534", "branch_name": "恆春分行" }
    ,
    { "id": "886", "head_code": "7", "branch_code": "7718", "branch_name": "七股分行" }
    ,
    { "id": "887", "head_code": "7", "branch_code": "7729", "branch_name": "七股分行台潭辦事處" }
    ,
    { "id": "888", "head_code": "7", "branch_code": "7730", "branch_name": "七股分行竹橋辦事處" }
    ,
    { "id": "889", "head_code": "7", "branch_code": "7741", "branch_name": "七股分行三股辦事處" }
    ,
    { "id": "890", "head_code": "7", "branch_code": "7752", "branch_name": "七股分行龍山辦事處" }
    ,
    { "id": "891", "head_code": "7", "branch_code": "7763", "branch_name": "七股分行佳聯辦事處" }
    ,
    { "id": "892", "head_code": "7", "branch_code": "7774", "branch_name": "楠西分行" }
    ,
    { "id": "893", "head_code": "7", "branch_code": "7785", "branch_name": "梓本分行" }
    ,
    { "id": "894", "head_code": "7", "branch_code": "7796", "branch_name": "梓本分行赤崁辦事處" }
    ,
    { "id": "895", "head_code": "7", "branch_code": "7800", "branch_name": "梓本分行梓官辦事處" }
    ,
    { "id": "896", "head_code": "7", "branch_code": "7811", "branch_name": "長治分行" }
    ,
    { "id": "897", "head_code": "7", "branch_code": "7822", "branch_name": "長治分行繁華辦事處" }
    ,
    { "id": "898", "head_code": "7", "branch_code": "7833", "branch_name": "長治分行德協辦事處" }
    ,
    { "id": "899", "head_code": "7", "branch_code": "7844", "branch_name": "長治分行崙上辦事處" }
    ,
    { "id": "900", "head_code": "7", "branch_code": "7855", "branch_name": "萬巒分行" }
    ,
    { "id": "901", "head_code": "7", "branch_code": "7866", "branch_name": "萬巒分行佳佐辦事處" }
    ,
    { "id": "902", "head_code": "7", "branch_code": "7877", "branch_name": "萬巒分行五溝辦事處" }
    ,
    { "id": "903", "head_code": "7", "branch_code": "7888", "branch_name": "萬巒分行來義辦事處" }
    ,
    { "id": "904", "head_code": "7", "branch_code": "8014", "branch_name": "花蓮分行" }
    ,
    { "id": "905", "head_code": "7", "branch_code": "8117", "branch_name": "台東分行" }
    ,
    { "id": "906", "head_code": "7", "branch_code": "8210", "branch_name": "澎湖分行" }
    ,
    { "id": "907", "head_code": "7", "branch_code": "9011", "branch_name": "關島分行" }
    ,
    { "id": "908", "head_code": "7", "branch_code": "9022", "branch_name": "紐約分行" }
    ,
    { "id": "909", "head_code": "7", "branch_code": "9033", "branch_name": "洛杉磯分行" }
    ,
    { "id": "910", "head_code": "7", "branch_code": "9044", "branch_name": "加州" }
    ,
    { "id": "911", "head_code": "7", "branch_code": "9055", "branch_name": "加州工業市分行" }
    ,
    { "id": "912", "head_code": "7", "branch_code": "9066", "branch_name": "加州矽谷分行" }
    ,
    { "id": "913", "head_code": "7", "branch_code": "9077", "branch_name": "美國爾灣分行" }
    ,
    { "id": "914", "head_code": "7", "branch_code": "9114", "branch_name": "新加坡分行" }
    ,
    { "id": "915", "head_code": "7", "branch_code": "9125", "branch_name": "馬尼拉代表辦事處" }
    ,
    { "id": "916", "head_code": "7", "branch_code": "9136", "branch_name": "曼谷代表辦事處" }
    ,
    { "id": "917", "head_code": "7", "branch_code": "9147", "branch_name": "胡志明市代表辦事處" }
    ,
    { "id": "918", "head_code": "7", "branch_code": "9158", "branch_name": "仰光代表辦事處" }
    ,
    { "id": "919", "head_code": "7", "branch_code": "9169", "branch_name": "納閩國際金融業務分行" }
    ,
    { "id": "920", "head_code": "7", "branch_code": "9170", "branch_name": "吉隆坡代表辦事處" }
    ,
    { "id": "921", "head_code": "7", "branch_code": "9181", "branch_name": "金邊分行" }
    ,
    { "id": "922", "head_code": "7", "branch_code": "9192", "branch_name": "雅加代表辦事處" }
    ,
    { "id": "923", "head_code": "7", "branch_code": "9217", "branch_name": "倫敦分行" }
    ,
    { "id": "924", "head_code": "7", "branch_code": "9310", "branch_name": "法蘭克福分行" }
    ,
    { "id": "925", "head_code": "7", "branch_code": "9413", "branch_name": "香港分行" }
    ,
    { "id": "926", "head_code": "7", "branch_code": "9516", "branch_name": "東京分行" }
    ,
    { "id": "927", "head_code": "7", "branch_code": "9619", "branch_name": "帛琉分行" }
    ,
    { "id": "928", "head_code": "7", "branch_code": "9712", "branch_name": "薩爾瓦多分行" }
    ,
    { "id": "929", "head_code": "8", "branch_code": "570", "branch_name": "業務部" }
    ,
    { "id": "930", "head_code": "8", "branch_code": "581", "branch_name": "審查部" }
    ,
    { "id": "931", "head_code": "8", "branch_code": "628", "branch_name": "徵信室" }
    ,
    { "id": "932", "head_code": "8", "branch_code": "695", "branch_name": "信託部" }
    ,
    { "id": "933", "head_code": "8", "branch_code": "709", "branch_name": "國際金融業務分行" }
    ,
    { "id": "934", "head_code": "8", "branch_code": "967", "branch_name": "東京代表辦事處" }
    ,
    { "id": "935", "head_code": "8", "branch_code": "1005", "branch_name": "營業部" }
    ,
    { "id": "936", "head_code": "8", "branch_code": "1016", "branch_name": "儲蓄分行" }
    ,
    { "id": "937", "head_code": "8", "branch_code": "1027", "branch_name": "國外營業部" }
    ,
    { "id": "938", "head_code": "8", "branch_code": "1038", "branch_name": "城內分行" }
    ,
    { "id": "939", "head_code": "8", "branch_code": "1049", "branch_name": "大稻埕分行" }
    ,
    { "id": "940", "head_code": "8", "branch_code": "1050", "branch_name": "建成分行" }
    ,
    { "id": "941", "head_code": "8", "branch_code": "1061", "branch_name": "中山分行" }
    ,
    { "id": "942", "head_code": "8", "branch_code": "1072", "branch_name": "圓山分行" }
    ,
    { "id": "943", "head_code": "8", "branch_code": "1083", "branch_name": "城東分行" }
    ,
    { "id": "944", "head_code": "8", "branch_code": "1094", "branch_name": "西門分行" }
    ,
    { "id": "945", "head_code": "8", "branch_code": "1108", "branch_name": "南松山分行" }
    ,
    { "id": "946", "head_code": "8", "branch_code": "1119", "branch_name": "仁愛路分行" }
    ,
    { "id": "947", "head_code": "8", "branch_code": "1120", "branch_name": "南京東路分行" }
    ,
    { "id": "948", "head_code": "8", "branch_code": "1131", "branch_name": "新生分行" }
    ,
    { "id": "949", "head_code": "8", "branch_code": "1142", "branch_name": "大同分行" }
    ,
    { "id": "950", "head_code": "8", "branch_code": "1153", "branch_name": "松山分行" }
    ,
    { "id": "951", "head_code": "8", "branch_code": "1164", "branch_name": "中崙分行" }
    ,
    { "id": "952", "head_code": "8", "branch_code": "1175", "branch_name": "台北南門分行" }
    ,
    { "id": "953", "head_code": "8", "branch_code": "1186", "branch_name": "公館分行" }
    ,
    { "id": "954", "head_code": "8", "branch_code": "1197", "branch_name": "信義分行" }
    ,
    { "id": "955", "head_code": "8", "branch_code": "1201", "branch_name": "忠孝東路分行" }
    ,
    { "id": "956", "head_code": "8", "branch_code": "1212", "branch_name": "和平分行" }
    ,
    { "id": "957", "head_code": "8", "branch_code": "1223", "branch_name": "雙園分行" }
    ,
    { "id": "958", "head_code": "8", "branch_code": "1234", "branch_name": "士林分行" }
    ,
    { "id": "959", "head_code": "8", "branch_code": "1245", "branch_name": "東台北分行" }
    ,
    { "id": "960", "head_code": "8", "branch_code": "1256", "branch_name": "大安分行" }
    ,
    { "id": "961", "head_code": "8", "branch_code": "1267", "branch_name": "民生分行" }
    ,
    { "id": "962", "head_code": "8", "branch_code": "1278", "branch_name": "復興分行" }
    ,
    { "id": "963", "head_code": "8", "branch_code": "1289", "branch_name": "龍江分行" }
    ,
    { "id": "964", "head_code": "8", "branch_code": "1290", "branch_name": "永吉分行" }
    ,
    { "id": "965", "head_code": "8", "branch_code": "1304", "branch_name": "敦化分行" }
    ,
    { "id": "966", "head_code": "8", "branch_code": "1315", "branch_name": "忠興分行" }
    ,
    { "id": "967", "head_code": "8", "branch_code": "1337", "branch_name": "敦和分行" }
    ,
    { "id": "968", "head_code": "8", "branch_code": "1348", "branch_name": "東湖分行" }
    ,
    { "id": "969", "head_code": "8", "branch_code": "1359", "branch_name": "西園分行" }
    ,
    { "id": "970", "head_code": "8", "branch_code": "1360", "branch_name": "長春分行" }
    ,
    { "id": "971", "head_code": "8", "branch_code": "1371", "branch_name": "北南港分行" }
    ,
    { "id": "972", "head_code": "8", "branch_code": "1429", "branch_name": "圓山分行企業大樓辦事處" }
    ,
    { "id": "973", "head_code": "8", "branch_code": "1430", "branch_name": "南內湖分行" }
    ,
    { "id": "974", "head_code": "8", "branch_code": "1452", "branch_name": "長安分行" }
    ,
    { "id": "975", "head_code": "8", "branch_code": "1474", "branch_name": "懷生分行" }
    ,
    { "id": "976", "head_code": "8", "branch_code": "1485", "branch_name": "中華路分行" }
    ,
    { "id": "977", "head_code": "8", "branch_code": "1496", "branch_name": "信維分行" }
    ,
    { "id": "978", "head_code": "8", "branch_code": "1500", "branch_name": "延吉分行" }
    ,
    { "id": "979", "head_code": "8", "branch_code": "1511", "branch_name": "埔墘分行" }
    ,
    { "id": "980", "head_code": "8", "branch_code": "1522", "branch_name": "石牌分行" }
    ,
    { "id": "981", "head_code": "8", "branch_code": "1533", "branch_name": "瑞祥分行" }
    ,
    { "id": "982", "head_code": "8", "branch_code": "1544", "branch_name": "台大分行" }
    ,
    { "id": "983", "head_code": "8", "branch_code": "1566", "branch_name": "世貿分行" }
    ,
    { "id": "984", "head_code": "8", "branch_code": "1577", "branch_name": "萬華分行" }
    ,
    { "id": "985", "head_code": "8", "branch_code": "1588", "branch_name": "南港分行" }
    ,
    { "id": "986", "head_code": "8", "branch_code": "1599", "branch_name": "華江分行" }
    ,
    { "id": "987", "head_code": "8", "branch_code": "1603", "branch_name": "板橋分行" }
    ,
    { "id": "988", "head_code": "8", "branch_code": "1614", "branch_name": "三重分行" }
    ,
    { "id": "989", "head_code": "8", "branch_code": "1625", "branch_name": "北三重分行" }
    ,
    { "id": "990", "head_code": "8", "branch_code": "1636", "branch_name": "新莊分行" }
    ,
    { "id": "991", "head_code": "8", "branch_code": "1647", "branch_name": "永和分行" }
    ,
    { "id": "992", "head_code": "8", "branch_code": "1658", "branch_name": "中和分行" }
    ,
    { "id": "993", "head_code": "8", "branch_code": "1669", "branch_name": "新店分行" }
    ,
    { "id": "994", "head_code": "8", "branch_code": "1670", "branch_name": "淡水分行" }
    ,
    { "id": "995", "head_code": "8", "branch_code": "1681", "branch_name": "汐止分行" }
    ,
    { "id": "996", "head_code": "8", "branch_code": "1692", "branch_name": "南永和分行" }
    ,
    { "id": "997", "head_code": "8", "branch_code": "1706", "branch_name": "西三重分行" }
    ,
    { "id": "998", "head_code": "8", "branch_code": "1717", "branch_name": "南三重分行" }
    ,
    { "id": "999", "head_code": "8", "branch_code": "1728", "branch_name": "雙和分行" }
    ,
    { "id": "1000", "head_code": "8", "branch_code": "1739", "branch_name": "新泰分行" }
    ,
    { "id": "1001", "head_code": "8", "branch_code": "1740", "branch_name": "二重分行" }
    ,
    { "id": "1002", "head_code": "8", "branch_code": "1751", "branch_name": "板新分行" }
    ,
    { "id": "1003", "head_code": "8", "branch_code": "1762", "branch_name": "五股分行" }
    ,
    { "id": "1004", "head_code": "8", "branch_code": "1784", "branch_name": "北投分行" }
    ,
    { "id": "1005", "head_code": "8", "branch_code": "1795", "branch_name": "西湖分行" }
    ,
    { "id": "1006", "head_code": "8", "branch_code": "1809", "branch_name": "積穗分行" }
    ,
    { "id": "1007", "head_code": "8", "branch_code": "1810", "branch_name": "三和分行" }
    ,
    { "id": "1008", "head_code": "8", "branch_code": "1821", "branch_name": "福和分行" }
    ,
    { "id": "1009", "head_code": "8", "branch_code": "1832", "branch_name": "南勢角分行" }
    ,
    { "id": "1010", "head_code": "8", "branch_code": "1854", "branch_name": "蘆洲分行" }
    ,
    { "id": "1011", "head_code": "8", "branch_code": "1865", "branch_name": "土城分行" }
    ,
    { "id": "1012", "head_code": "8", "branch_code": "1876", "branch_name": "北新分行" }
    ,
    { "id": "1013", "head_code": "8", "branch_code": "1887", "branch_name": "大安分行文昌辦事處" }
    ,
    { "id": "1014", "head_code": "8", "branch_code": "1898", "branch_name": "天母分行" }
    ,
    { "id": "1015", "head_code": "8", "branch_code": "1902", "branch_name": "內湖分行" }
    ,
    { "id": "1016", "head_code": "8", "branch_code": "1913", "branch_name": "樹林分行" }
    ,
    { "id": "1017", "head_code": "8", "branch_code": "1924", "branch_name": "樟樹灣分行" }
    ,
    { "id": "1018", "head_code": "8", "branch_code": "1935", "branch_name": "泰山分行" }
    ,
    { "id": "1019", "head_code": "8", "branch_code": "1946", "branch_name": "三峽分行" }
    ,
    { "id": "1020", "head_code": "8", "branch_code": "1957", "branch_name": "文山分行" }
    ,
    { "id": "1021", "head_code": "8", "branch_code": "1968", "branch_name": "鶯歌分行" }
    ,
    { "id": "1022", "head_code": "8", "branch_code": "2002", "branch_name": "基隆分行" }
    ,
    { "id": "1023", "head_code": "8", "branch_code": "2013", "branch_name": "基隆港口分行" }
    ,
    { "id": "1024", "head_code": "8", "branch_code": "2116", "branch_name": "七堵分行" }
    ,
    { "id": "1025", "head_code": "8", "branch_code": "2208", "branch_name": "羅東分行" }
    ,
    { "id": "1026", "head_code": "8", "branch_code": "2219", "branch_name": "宜蘭分行" }
    ,
    { "id": "1027", "head_code": "8", "branch_code": "2404", "branch_name": "桃園分行" }
    ,
    { "id": "1028", "head_code": "8", "branch_code": "2415", "branch_name": "中壢分行" }
    ,
    { "id": "1029", "head_code": "8", "branch_code": "2426", "branch_name": "楊梅分行" }
    ,
    { "id": "1030", "head_code": "8", "branch_code": "2437", "branch_name": "壢昌分行" }
    ,
    { "id": "1031", "head_code": "8", "branch_code": "2448", "branch_name": "北桃園分行" }
    ,
    { "id": "1032", "head_code": "8", "branch_code": "2459", "branch_name": "南崁分行" }
    ,
    { "id": "1033", "head_code": "8", "branch_code": "2460", "branch_name": "平鎮分行" }
    ,
    { "id": "1034", "head_code": "8", "branch_code": "2471", "branch_name": "八德分行" }
    ,
    { "id": "1035", "head_code": "8", "branch_code": "2482", "branch_name": "龜山分行" }
    ,
    { "id": "1036", "head_code": "8", "branch_code": "2493", "branch_name": "龍潭分行" }
    ,
    { "id": "1037", "head_code": "8", "branch_code": "2507", "branch_name": "大溪分行" }
    ,
    { "id": "1038", "head_code": "8", "branch_code": "2518", "branch_name": "內壢分行" }
    ,
    { "id": "1039", "head_code": "8", "branch_code": "2529", "branch_name": "林口分行" }
    ,
    { "id": "1040", "head_code": "8", "branch_code": "2600", "branch_name": "觀音分行" }
    ,
    { "id": "1041", "head_code": "8", "branch_code": "2611", "branch_name": "中正分行" }
    ,
    { "id": "1042", "head_code": "8", "branch_code": "2622", "branch_name": "草漯分行" }
    ,
    { "id": "1043", "head_code": "8", "branch_code": "2633", "branch_name": "觀音分行文化辦事處" }
    ,
    { "id": "1044", "head_code": "8", "branch_code": "2644", "branch_name": "觀音分行富源辦事處" }
    ,
    { "id": "1045", "head_code": "8", "branch_code": "2655", "branch_name": "觀音分行崙坪辦事處" }
    ,
    { "id": "1046", "head_code": "8", "branch_code": "3009", "branch_name": "新竹分行" }
    ,
    { "id": "1047", "head_code": "8", "branch_code": "3010", "branch_name": "竹東分行" }
    ,
    { "id": "1048", "head_code": "8", "branch_code": "3021", "branch_name": "竹科分行" }
    ,
    { "id": "1049", "head_code": "8", "branch_code": "3102", "branch_name": "新豐分行" }
    ,
    { "id": "1050", "head_code": "8", "branch_code": "3113", "branch_name": "新豐分行員山辦事處" }
    ,
    { "id": "1051", "head_code": "8", "branch_code": "3124", "branch_name": "新豐分行後湖辦事處" }
    ,
    { "id": "1052", "head_code": "8", "branch_code": "3205", "branch_name": "竹南分行" }
    ,
    { "id": "1053", "head_code": "8", "branch_code": "3216", "branch_name": "頭份分行" }
    ,
    { "id": "1054", "head_code": "8", "branch_code": "3227", "branch_name": "苗栗分行" }
    ,
    { "id": "1055", "head_code": "8", "branch_code": "3238", "branch_name": "竹北分行" }
    ,
    { "id": "1056", "head_code": "8", "branch_code": "3515", "branch_name": "大眾分行" }
    ,
    { "id": "1057", "head_code": "8", "branch_code": "4006", "branch_name": "豐原分行" }
    ,
    { "id": "1058", "head_code": "8", "branch_code": "4017", "branch_name": "東勢分行" }
    ,
    { "id": "1059", "head_code": "8", "branch_code": "4028", "branch_name": "清水分行" }
    ,
    { "id": "1060", "head_code": "8", "branch_code": "4039", "branch_name": "西豐原分行" }
    ,
    { "id": "1061", "head_code": "8", "branch_code": "4202", "branch_name": "台中分行" }
    ,
    { "id": "1062", "head_code": "8", "branch_code": "4213", "branch_name": "台中民族路分行" }
    ,
    { "id": "1063", "head_code": "8", "branch_code": "4224", "branch_name": "南台中分行" }
    ,
    { "id": "1064", "head_code": "8", "branch_code": "4235", "branch_name": "北台中分行" }
    ,
    { "id": "1065", "head_code": "8", "branch_code": "4246", "branch_name": "台中港路分行" }
    ,
    { "id": "1066", "head_code": "8", "branch_code": "4257", "branch_name": "大里分行" }
    ,
    { "id": "1067", "head_code": "8", "branch_code": "4268", "branch_name": "水湳分行" }
    ,
    { "id": "1068", "head_code": "8", "branch_code": "4279", "branch_name": "五權分行" }
    ,
    { "id": "1069", "head_code": "8", "branch_code": "4291", "branch_name": "大甲分行" }
    ,
    { "id": "1070", "head_code": "8", "branch_code": "4305", "branch_name": "太平分行" }
    ,
    { "id": "1071", "head_code": "8", "branch_code": "4512", "branch_name": "沙鹿分行" }
    ,
    { "id": "1072", "head_code": "8", "branch_code": "5003", "branch_name": "草屯分行" }
    ,
    { "id": "1073", "head_code": "8", "branch_code": "5014", "branch_name": "南投分行" }
    ,
    { "id": "1074", "head_code": "8", "branch_code": "5209", "branch_name": "彰化分行" }
    ,
    { "id": "1075", "head_code": "8", "branch_code": "5210", "branch_name": "和美分行" }
    ,
    { "id": "1076", "head_code": "8", "branch_code": "5221", "branch_name": "員林分行" }
    ,
    { "id": "1077", "head_code": "8", "branch_code": "5232", "branch_name": "鹿港分行" }
    ,
    { "id": "1078", "head_code": "8", "branch_code": "5243", "branch_name": "溪湖分行" }
    ,
    { "id": "1079", "head_code": "8", "branch_code": "5405", "branch_name": "斗六分行" }
    ,
    { "id": "1080", "head_code": "8", "branch_code": "5416", "branch_name": "虎尾分行" }
    ,
    { "id": "1081", "head_code": "8", "branch_code": "5427", "branch_name": "西螺分行" }
    ,
    { "id": "1082", "head_code": "8", "branch_code": "5438", "branch_name": "北港分行" }
    ,
    { "id": "1083", "head_code": "8", "branch_code": "6000", "branch_name": "嘉義分行" }
    ,
    { "id": "1084", "head_code": "8", "branch_code": "6011", "branch_name": "嘉南分行" }
    ,
    { "id": "1085", "head_code": "8", "branch_code": "6022", "branch_name": "朴子分行" }
    ,
    { "id": "1086", "head_code": "8", "branch_code": "6206", "branch_name": "新營分行" }
    ,
    { "id": "1087", "head_code": "8", "branch_code": "6217", "branch_name": "麻豆分行" }
    ,
    { "id": "1088", "head_code": "8", "branch_code": "6228", "branch_name": "永康分行" }
    ,
    { "id": "1089", "head_code": "8", "branch_code": "6402", "branch_name": "台南分行" }
    ,
    { "id": "1090", "head_code": "8", "branch_code": "6413", "branch_name": "赤崁分行" }
    ,
    { "id": "1091", "head_code": "8", "branch_code": "6424", "branch_name": "東台南分行" }
    ,
    { "id": "1092", "head_code": "8", "branch_code": "6435", "branch_name": "西台南分行" }
    ,
    { "id": "1093", "head_code": "8", "branch_code": "6446", "branch_name": "北台南分行" }
    ,
    { "id": "1094", "head_code": "8", "branch_code": "6457", "branch_name": "南都分行" }
    ,
    { "id": "1095", "head_code": "8", "branch_code": "6468", "branch_name": "安南分行" }
    ,
    { "id": "1096", "head_code": "8", "branch_code": "6479", "branch_name": "仁德分行" }
    ,
    { "id": "1097", "head_code": "8", "branch_code": "6480", "branch_name": "新市分行" }
    ,
    { "id": "1098", "head_code": "8", "branch_code": "6815", "branch_name": "金華分行" }
    ,
    { "id": "1099", "head_code": "8", "branch_code": "7007", "branch_name": "高雄分行" }
    ,
    { "id": "1100", "head_code": "8", "branch_code": "7018", "branch_name": "東苓分行" }
    ,
    { "id": "1101", "head_code": "8", "branch_code": "7029", "branch_name": "新興分行" }
    ,
    { "id": "1102", "head_code": "8", "branch_code": "7030", "branch_name": "高雄三民分行" }
    ,
    { "id": "1103", "head_code": "8", "branch_code": "7041", "branch_name": "苓雅分行" }
    ,
    { "id": "1104", "head_code": "8", "branch_code": "7052", "branch_name": "前鎮分行" }
    ,
    { "id": "1105", "head_code": "8", "branch_code": "7063", "branch_name": "高雄博愛分行" }
    ,
    { "id": "1106", "head_code": "8", "branch_code": "7074", "branch_name": "南高雄分行" }
    ,
    { "id": "1107", "head_code": "8", "branch_code": "7085", "branch_name": "東高雄分行" }
    ,
    { "id": "1108", "head_code": "8", "branch_code": "7096", "branch_name": "大昌分行" }
    ,
    { "id": "1109", "head_code": "8", "branch_code": "7100", "branch_name": "北高雄分行" }
    ,
    { "id": "1110", "head_code": "8", "branch_code": "7111", "branch_name": "楠梓分行" }
    ,
    { "id": "1111", "head_code": "8", "branch_code": "7199", "branch_name": "岡山分行" }
    ,
    { "id": "1112", "head_code": "8", "branch_code": "7203", "branch_name": "鳳山分行" }
    ,
    { "id": "1113", "head_code": "8", "branch_code": "7214", "branch_name": "路竹分行" }
    ,
    { "id": "1114", "head_code": "8", "branch_code": "7502", "branch_name": "大順分行" }
    ,
    { "id": "1115", "head_code": "8", "branch_code": "7513", "branch_name": "籬仔內分行" }
    ,
    { "id": "1116", "head_code": "8", "branch_code": "7524", "branch_name": "五甲分行" }
    ,
    { "id": "1117", "head_code": "8", "branch_code": "7535", "branch_name": "光華分行" }
    ,
    { "id": "1118", "head_code": "8", "branch_code": "7605", "branch_name": "小港分行" }
    ,
    { "id": "1119", "head_code": "8", "branch_code": "7616", "branch_name": "小港分行高松辦事處" }
    ,
    { "id": "1120", "head_code": "8", "branch_code": "7627", "branch_name": "二苓分行" }
    ,
    { "id": "1121", "head_code": "8", "branch_code": "7638", "branch_name": "大林蒲分行" }
    ,
    { "id": "1122", "head_code": "8", "branch_code": "7649", "branch_name": "小港分行海汕辦事處" }
    ,
    { "id": "1123", "head_code": "8", "branch_code": "7650", "branch_name": "高雄桂林分行" }
    ,
    { "id": "1124", "head_code": "8", "branch_code": "8004", "branch_name": "屏東分行" }
    ,
    { "id": "1125", "head_code": "8", "branch_code": "8015", "branch_name": "內埔分行" }
    ,
    { "id": "1126", "head_code": "8", "branch_code": "8026", "branch_name": "潮州分行" }
    ,
    { "id": "1127", "head_code": "8", "branch_code": "8107", "branch_name": "竹田分行" }
    ,
    { "id": "1128", "head_code": "8", "branch_code": "8118", "branch_name": "竹田分行西勢辦事處" }
    ,
    { "id": "1129", "head_code": "8", "branch_code": "8129", "branch_name": "竹田分行大明辦事處" }
    ,
    { "id": "1130", "head_code": "8", "branch_code": "8130", "branch_name": "佳冬分行" }
    ,
    { "id": "1131", "head_code": "8", "branch_code": "8141", "branch_name": "佳冬分行昌隆辦事處" }
    ,
    { "id": "1132", "head_code": "8", "branch_code": "8152", "branch_name": "佳冬分行玉光辦事處" }
    ,
    { "id": "1133", "head_code": "8", "branch_code": "8163", "branch_name": "佳冬分行羌園辦事處" }
    ,
    { "id": "1134", "head_code": "8", "branch_code": "8200", "branch_name": "花蓮分行" }
    ,
    { "id": "1135", "head_code": "8", "branch_code": "8303", "branch_name": "台東分行" }
    ,
    { "id": "1136", "head_code": "8", "branch_code": "8510", "branch_name": "信託部兼營證券商" }
    ,
    { "id": "1137", "head_code": "8", "branch_code": "8521", "branch_name": "兼營證券商高雄分公司" }
    ,
    { "id": "1138", "head_code": "8", "branch_code": "8532", "branch_name": "兼營證券商赤崁分公司" }
    ,
    { "id": "1139", "head_code": "8", "branch_code": "9012", "branch_name": "洛杉磯分行" }
    ,
    { "id": "1140", "head_code": "8", "branch_code": "9023", "branch_name": "紐約分行" }
    ,
    { "id": "1141", "head_code": "8", "branch_code": "9034", "branch_name": "倫敦分行" }
    ,
    { "id": "1142", "head_code": "8", "branch_code": "9045", "branch_name": "法蘭克福代表辦事處" }
    ,
    { "id": "1143", "head_code": "8", "branch_code": "9056", "branch_name": "香港分行" }
    ,
    { "id": "1144", "head_code": "8", "branch_code": "9078", "branch_name": "新加坡分行" }
    ,
    { "id": "1145", "head_code": "8", "branch_code": "9089", "branch_name": "雅加達代表辦事處" }
    ,
    { "id": "1146", "head_code": "8", "branch_code": "9090", "branch_name": "深圳代表處" }
    ,
    { "id": "1147", "head_code": "9", "branch_code": "17", "branch_name": "總行" }
    ,
    { "id": "1148", "head_code": "9", "branch_code": "1001", "branch_name": "信託部證券經紀商" }
    ,
    { "id": "1149", "head_code": "9", "branch_code": "1018", "branch_name": "證券經紀商南台中分公司" }
    ,
    { "id": "1150", "head_code": "9", "branch_code": "1025", "branch_name": "證券經紀商七賢分公司" }
    ,
    { "id": "1151", "head_code": "9", "branch_code": "1032", "branch_name": "證券經紀商台中分公司" }
    ,
    { "id": "1152", "head_code": "9", "branch_code": "1049", "branch_name": "證券經紀商清水分公司" }
    ,
    { "id": "1153", "head_code": "9", "branch_code": "1094", "branch_name": "信託部" }
    ,
    { "id": "1154", "head_code": "9", "branch_code": "2002", "branch_name": "歐洲子公司" }
    ,
    { "id": "1155", "head_code": "9", "branch_code": "2026", "branch_name": "新加坡分行" }
    ,
    { "id": "1156", "head_code": "9", "branch_code": "2113", "branch_name": "國際業務處" }
    ,
    { "id": "1157", "head_code": "9", "branch_code": "2120", "branch_name": "國際金融業務分行" }
    ,
    { "id": "1158", "head_code": "9", "branch_code": "2144", "branch_name": "紐約分行" }
    ,
    { "id": "1159", "head_code": "9", "branch_code": "2151", "branch_name": "洛杉磯分行" }
    ,
    { "id": "1160", "head_code": "9", "branch_code": "2168", "branch_name": "東京分行" }
    ,
    { "id": "1161", "head_code": "9", "branch_code": "2175", "branch_name": "倫敦分行" }
    ,
    { "id": "1162", "head_code": "9", "branch_code": "2182", "branch_name": "阿姆斯特丹分行" }
    ,
    { "id": "1163", "head_code": "9", "branch_code": "2193", "branch_name": "雅加達代表人辦事處" }
    ,
    { "id": "1164", "head_code": "9", "branch_code": "2199", "branch_name": "香港分行" }
    ,
    { "id": "1165", "head_code": "9", "branch_code": "2200", "branch_name": "營業部" }
    ,
    { "id": "1166", "head_code": "9", "branch_code": "3003", "branch_name": "吉林分行" }
    ,
    { "id": "1167", "head_code": "9", "branch_code": "3010", "branch_name": "城內分行" }
    ,
    { "id": "1168", "head_code": "9", "branch_code": "3027", "branch_name": "研究發展處" }
    ,
    { "id": "1169", "head_code": "9", "branch_code": "4004", "branch_name": "北台中分行" }
    ,
    { "id": "1170", "head_code": "9", "branch_code": "4011", "branch_name": "南台中分行" }
    ,
    { "id": "1171", "head_code": "9", "branch_code": "4028", "branch_name": "北屯分行" }
    ,
    { "id": "1172", "head_code": "9", "branch_code": "4035", "branch_name": "水湳分行" }
    ,
    { "id": "1173", "head_code": "9", "branch_code": "4042", "branch_name": "南屯分行" }
    ,
    { "id": "1174", "head_code": "9", "branch_code": "4059", "branch_name": "台中分行" }
    ,
    { "id": "1175", "head_code": "9", "branch_code": "4108", "branch_name": "基隆分行" }
    ,
    { "id": "1176", "head_code": "9", "branch_code": "4115", "branch_name": "仁愛分行" }
    ,
    { "id": "1177", "head_code": "9", "branch_code": "4122", "branch_name": "東基隆分行" }
    ,
    { "id": "1178", "head_code": "9", "branch_code": "4202", "branch_name": "宜蘭分行" }
    ,
    { "id": "1179", "head_code": "9", "branch_code": "4219", "branch_name": "羅東分行" }
    ,
    { "id": "1180", "head_code": "9", "branch_code": "5005", "branch_name": "北門分行" }
    ,
    { "id": "1181", "head_code": "9", "branch_code": "5012", "branch_name": "台北分行" }
    ,
    { "id": "1182", "head_code": "9", "branch_code": "5029", "branch_name": "萬華分行" }
    ,
    { "id": "1183", "head_code": "9", "branch_code": "5036", "branch_name": "西門分行" }
    ,
    { "id": "1184", "head_code": "9", "branch_code": "5043", "branch_name": "永樂分行" }
    ,
    { "id": "1185", "head_code": "9", "branch_code": "5050", "branch_name": "建成分行" }
    ,
    { "id": "1186", "head_code": "9", "branch_code": "5067", "branch_name": "大同分行" }
    ,
    { "id": "1187", "head_code": "9", "branch_code": "5081", "branch_name": "中山北路分行" }
    ,
    { "id": "1188", "head_code": "9", "branch_code": "5109", "branch_name": "東門分行" }
    ,
    { "id": "1189", "head_code": "9", "branch_code": "5116", "branch_name": "古亭分行" }
    ,
    { "id": "1190", "head_code": "9", "branch_code": "5130", "branch_name": "大安分行" }
    ,
    { "id": "1191", "head_code": "9", "branch_code": "5147", "branch_name": "城東分行" }
    ,
    { "id": "1192", "head_code": "9", "branch_code": "5154", "branch_name": "中崙分行" }
    ,
    { "id": "1193", "head_code": "9", "branch_code": "5161", "branch_name": "雙園分行" }
    ,
    { "id": "1194", "head_code": "9", "branch_code": "5178", "branch_name": "士林分行" }
    ,
    { "id": "1195", "head_code": "9", "branch_code": "5185", "branch_name": "總部分行" }
    ,
    { "id": "1196", "head_code": "9", "branch_code": "5192", "branch_name": "松山分行" }
    ,
    { "id": "1197", "head_code": "9", "branch_code": "5203", "branch_name": "忠孝東路分行" }
    ,
    { "id": "1198", "head_code": "9", "branch_code": "5210", "branch_name": "信義分行" }
    ,
    { "id": "1199", "head_code": "9", "branch_code": "5227", "branch_name": "東台北分行" }
    ,
    { "id": "1200", "head_code": "9", "branch_code": "5234", "branch_name": "民生分行" }
    ,
    { "id": "1201", "head_code": "9", "branch_code": "5241", "branch_name": "西松分行" }
    ,
    { "id": "1202", "head_code": "9", "branch_code": "5258", "branch_name": "復興分行" }
    ,
    { "id": "1203", "head_code": "9", "branch_code": "5265", "branch_name": "台北世貿中心分行" }
    ,
    { "id": "1204", "head_code": "9", "branch_code": "5272", "branch_name": "敦化分行" }
    ,
    { "id": "1205", "head_code": "9", "branch_code": "5289", "branch_name": "建國分行" }
    ,
    { "id": "1206", "head_code": "9", "branch_code": "5296", "branch_name": "內湖分行" }
    ,
    { "id": "1207", "head_code": "9", "branch_code": "5307", "branch_name": "天母分行" }
    ,
    { "id": "1208", "head_code": "9", "branch_code": "5314", "branch_name": "中正分行" }
    ,
    { "id": "1209", "head_code": "9", "branch_code": "5321", "branch_name": "仁和分行" }
    ,
    { "id": "1210", "head_code": "9", "branch_code": "5338", "branch_name": "永春分行" }
    ,
    { "id": "1211", "head_code": "9", "branch_code": "5352", "branch_name": "木柵分行" }
    ,
    { "id": "1212", "head_code": "9", "branch_code": "5376", "branch_name": "東湖分行" }
    ,
    { "id": "1213", "head_code": "9", "branch_code": "5383", "branch_name": "南港科學區分行" }
    ,
    { "id": "1214", "head_code": "9", "branch_code": "5463", "branch_name": "南勢角分行" }
    ,
    { "id": "1215", "head_code": "9", "branch_code": "5494", "branch_name": "南新莊分行" }
    ,
    { "id": "1216", "head_code": "9", "branch_code": "5505", "branch_name": "三重埔分行" }
    ,
    { "id": "1217", "head_code": "9", "branch_code": "5512", "branch_name": "北三重埔分行" }
    ,
    { "id": "1218", "head_code": "9", "branch_code": "5529", "branch_name": "新店分行" }
    ,
    { "id": "1219", "head_code": "9", "branch_code": "5536", "branch_name": "永和分行" }
    ,
    { "id": "1220", "head_code": "9", "branch_code": "5543", "branch_name": "瑞芳分行" }
    ,
    { "id": "1221", "head_code": "9", "branch_code": "5550", "branch_name": "新莊分行" }
    ,
    { "id": "1222", "head_code": "9", "branch_code": "5567", "branch_name": "樹林分行" }
    ,
    { "id": "1223", "head_code": "9", "branch_code": "5574", "branch_name": "板橋分行" }
    ,
    { "id": "1224", "head_code": "9", "branch_code": "5581", "branch_name": "三峽分行" }
    ,
    { "id": "1225", "head_code": "9", "branch_code": "5598", "branch_name": "福和分行" }
    ,
    { "id": "1226", "head_code": "9", "branch_code": "5609", "branch_name": "光復分行" }
    ,
    { "id": "1227", "head_code": "9", "branch_code": "5616", "branch_name": "東三重分行" }
    ,
    { "id": "1228", "head_code": "9", "branch_code": "5623", "branch_name": "北新分行" }
    ,
    { "id": "1229", "head_code": "9", "branch_code": "5630", "branch_name": "南三重分行" }
    ,
    { "id": "1230", "head_code": "9", "branch_code": "5647", "branch_name": "中和分行" }
    ,
    { "id": "1231", "head_code": "9", "branch_code": "5654", "branch_name": "西三重分行" }
    ,
    { "id": "1232", "head_code": "9", "branch_code": "5661", "branch_name": "汐止分行" }
    ,
    { "id": "1233", "head_code": "9", "branch_code": "5678", "branch_name": "雙和分行" }
    ,
    { "id": "1234", "head_code": "9", "branch_code": "5685", "branch_name": "淡水分行" }
    ,
    { "id": "1235", "head_code": "9", "branch_code": "5692", "branch_name": "楊梅分行" }
    ,
    { "id": "1236", "head_code": "9", "branch_code": "5703", "branch_name": "桃園分行" }
    ,
    { "id": "1237", "head_code": "9", "branch_code": "5710", "branch_name": "中壢分行" }
    ,
    { "id": "1238", "head_code": "9", "branch_code": "5727", "branch_name": "新竹分行" }
    ,
    { "id": "1239", "head_code": "9", "branch_code": "5734", "branch_name": "竹東分行" }
    ,
    { "id": "1240", "head_code": "9", "branch_code": "5741", "branch_name": "苗栗分行" }
    ,
    { "id": "1241", "head_code": "9", "branch_code": "5758", "branch_name": "新竹科學園區分行" }
    ,
    { "id": "1242", "head_code": "9", "branch_code": "5765", "branch_name": "北中壢分行" }
    ,
    { "id": "1243", "head_code": "9", "branch_code": "5772", "branch_name": "八德分行" }
    ,
    { "id": "1244", "head_code": "9", "branch_code": "5789", "branch_name": "竹南分行" }
    ,
    { "id": "1245", "head_code": "9", "branch_code": "5796", "branch_name": "南崁分行" }
    ,
    { "id": "1246", "head_code": "9", "branch_code": "5807", "branch_name": "苑裡分行" }
    ,
    { "id": "1247", "head_code": "9", "branch_code": "5814", "branch_name": "大甲分行" }
    ,
    { "id": "1248", "head_code": "9", "branch_code": "5821", "branch_name": "清水分行" }
    ,
    { "id": "1249", "head_code": "9", "branch_code": "5838", "branch_name": "豐原分行" }
    ,
    { "id": "1250", "head_code": "9", "branch_code": "5845", "branch_name": "東勢分行" }
    ,
    { "id": "1251", "head_code": "9", "branch_code": "5852", "branch_name": "霧峰分行" }
    ,
    { "id": "1252", "head_code": "9", "branch_code": "5869", "branch_name": "南豐分行" }
    ,
    { "id": "1253", "head_code": "9", "branch_code": "5876", "branch_name": "沙鹿分行" }
    ,
    { "id": "1254", "head_code": "9", "branch_code": "5890", "branch_name": "太平分行" }
    ,
    { "id": "1255", "head_code": "9", "branch_code": "5901", "branch_name": "草屯分行" }
    ,
    { "id": "1256", "head_code": "9", "branch_code": "5918", "branch_name": "南投分行" }
    ,
    { "id": "1257", "head_code": "9", "branch_code": "5925", "branch_name": "埔里分行" }
    ,
    { "id": "1258", "head_code": "9", "branch_code": "5932", "branch_name": "水里坑分行" }
    ,
    { "id": "1259", "head_code": "9", "branch_code": "5949", "branch_name": "竹山分行" }
    ,
    { "id": "1260", "head_code": "9", "branch_code": "5963", "branch_name": "大肚分行" }
    ,
    { "id": "1261", "head_code": "9", "branch_code": "6006", "branch_name": "彰化分行" }
    ,
    { "id": "1262", "head_code": "9", "branch_code": "6013", "branch_name": "鹿港分行" }
    ,
    { "id": "1263", "head_code": "9", "branch_code": "6020", "branch_name": "員林分行" }
    ,
    { "id": "1264", "head_code": "9", "branch_code": "6037", "branch_name": "溪湖分行" }
    ,
    { "id": "1265", "head_code": "9", "branch_code": "6044", "branch_name": "北斗分行" }
    ,
    { "id": "1266", "head_code": "9", "branch_code": "6051", "branch_name": "西螺分行" }
    ,
    { "id": "1267", "head_code": "9", "branch_code": "6075", "branch_name": "芬園分行" }
    ,
    { "id": "1268", "head_code": "9", "branch_code": "6082", "branch_name": "埔鹽分行" }
    ,
    { "id": "1269", "head_code": "9", "branch_code": "6099", "branch_name": "芳苑分行" }
    ,
    { "id": "1270", "head_code": "9", "branch_code": "6100", "branch_name": "斗六分行" }
    ,
    { "id": "1271", "head_code": "9", "branch_code": "6117", "branch_name": "斗南分行" }
    ,
    { "id": "1272", "head_code": "9", "branch_code": "6124", "branch_name": "虎尾分行" }
    ,
    { "id": "1273", "head_code": "9", "branch_code": "6131", "branch_name": "北港分行" }
    ,
    { "id": "1274", "head_code": "9", "branch_code": "6204", "branch_name": "大林分行" }
    ,
    { "id": "1275", "head_code": "9", "branch_code": "6211", "branch_name": "嘉義分行" }
    ,
    { "id": "1276", "head_code": "9", "branch_code": "6228", "branch_name": "東嘉義分行" }
    ,
    { "id": "1277", "head_code": "9", "branch_code": "6235", "branch_name": "新營分行" }
    ,
    { "id": "1278", "head_code": "9", "branch_code": "6242", "branch_name": "永康分行" }
    ,
    { "id": "1279", "head_code": "9", "branch_code": "6402", "branch_name": "台南分行" }
    ,
    { "id": "1280", "head_code": "9", "branch_code": "6419", "branch_name": "延平分行" }
    ,
    { "id": "1281", "head_code": "9", "branch_code": "6426", "branch_name": "西台南分行" }
    ,
    { "id": "1282", "head_code": "9", "branch_code": "6433", "branch_name": "東台南分行" }
    ,
    { "id": "1283", "head_code": "9", "branch_code": "6440", "branch_name": "南台南分行" }
    ,
    { "id": "1284", "head_code": "9", "branch_code": "6457", "branch_name": "安南分行" }
    ,
    { "id": "1285", "head_code": "9", "branch_code": "6506", "branch_name": "旗山分行" }
    ,
    { "id": "1286", "head_code": "9", "branch_code": "6513", "branch_name": "岡山分行" }
    ,
    { "id": "1287", "head_code": "9", "branch_code": "6520", "branch_name": "鳳山分行" }
    ,
    { "id": "1288", "head_code": "9", "branch_code": "6600", "branch_name": "芬園分行茄荖辦事處" }
    ,
    { "id": "1289", "head_code": "9", "branch_code": "6617", "branch_name": "芬園分行社口辦事處" }
    ,
    { "id": "1290", "head_code": "9", "branch_code": "6624", "branch_name": "芬園分行大彰辦事處" }
    ,
    { "id": "1291", "head_code": "9", "branch_code": "6631", "branch_name": "芬園分行溪頭辦事處" }
    ,
    { "id": "1292", "head_code": "9", "branch_code": "6648", "branch_name": "埔鹽分行埔東辦事處" }
    ,
    { "id": "1293", "head_code": "9", "branch_code": "6655", "branch_name": "埔鹽分行新水辦事處" }
    ,
    { "id": "1294", "head_code": "9", "branch_code": "6662", "branch_name": "埔鹽分行打廉辦事處" }
    ,
    { "id": "1295", "head_code": "9", "branch_code": "6679", "branch_name": "埔鹽分行永平辦事處" }
    ,
    { "id": "1296", "head_code": "9", "branch_code": "6686", "branch_name": "芳苑分行草湖辦事處" }
    ,
    { "id": "1297", "head_code": "9", "branch_code": "6693", "branch_name": "彰化行芳苑分行路上辦事處" }
    ,
    { "id": "1298", "head_code": "9", "branch_code": "6704", "branch_name": "芳苑分行王功辦事處" }
    ,
    { "id": "1299", "head_code": "9", "branch_code": "8119", "branch_name": "高雄分行" }
    ,
    { "id": "1300", "head_code": "9", "branch_code": "8126", "branch_name": "七賢分行" }
    ,
    { "id": "1301", "head_code": "9", "branch_code": "8133", "branch_name": "鹽埕分行" }
    ,
    { "id": "1302", "head_code": "9", "branch_code": "8140", "branch_name": "東高雄分行" }
    ,
    { "id": "1303", "head_code": "9", "branch_code": "8157", "branch_name": "南高雄分行" }
    ,
    { "id": "1304", "head_code": "9", "branch_code": "8164", "branch_name": "北高雄分行" }
    ,
    { "id": "1305", "head_code": "9", "branch_code": "8171", "branch_name": "三民分行" }
    ,
    { "id": "1306", "head_code": "9", "branch_code": "8195", "branch_name": "前鎮分行" }
    ,
    { "id": "1307", "head_code": "9", "branch_code": "8206", "branch_name": "九如路分行" }
    ,
    { "id": "1308", "head_code": "9", "branch_code": "8213", "branch_name": "新興分行" }
    ,
    { "id": "1309", "head_code": "9", "branch_code": "8220", "branch_name": "苓雅分行" }
    ,
    { "id": "1310", "head_code": "9", "branch_code": "8237", "branch_name": "大順分行" }
    ,
    { "id": "1311", "head_code": "9", "branch_code": "8244", "branch_name": "博愛分行" }
    ,
    { "id": "1312", "head_code": "9", "branch_code": "8300", "branch_name": "屏東分行" }
    ,
    { "id": "1313", "head_code": "9", "branch_code": "8317", "branch_name": "東港分行" }
    ,
    { "id": "1314", "head_code": "9", "branch_code": "8324", "branch_name": "潮州分行" }
    ,
    { "id": "1315", "head_code": "9", "branch_code": "8331", "branch_name": "林邊分行" }
    ,
    { "id": "1316", "head_code": "9", "branch_code": "8348", "branch_name": "車城分行" }
    ,
    { "id": "1317", "head_code": "9", "branch_code": "8404", "branch_name": "花蓮分行" }
    ,
    { "id": "1318", "head_code": "9", "branch_code": "8508", "branch_name": "台東分行" }
    ,
    { "id": "1319", "head_code": "9", "branch_code": "8602", "branch_name": "林邊分行中林辦事處" }
    ,
    { "id": "1320", "head_code": "9", "branch_code": "8619", "branch_name": "林邊分行竹林辦事處" }
    ,
    { "id": "1321", "head_code": "9", "branch_code": "8626", "branch_name": "林邊分行鎮安辦事處" }
    ,
    { "id": "1322", "head_code": "9", "branch_code": "8633", "branch_name": "林邊分行崎峰辦事處" }
    ,
    { "id": "1323", "head_code": "9", "branch_code": "8640", "branch_name": "林邊分行水利辦事處" }
    ,
    { "id": "1324", "head_code": "9", "branch_code": "8657", "branch_name": "車城分行牡丹辦事處" }
    ,
    { "id": "1325", "head_code": "9", "branch_code": "9269", "branch_name": "思源分行" }
    ,
    { "id": "1326", "head_code": "9", "branch_code": "9283", "branch_name": "土城分行" }
    ,
    { "id": "1327", "head_code": "9", "branch_code": "9290", "branch_name": "北桃園分行" }
    ,
    { "id": "1328", "head_code": "9", "branch_code": "9301", "branch_name": "新明分行" }
    ,
    { "id": "1329", "head_code": "9", "branch_code": "9318", "branch_name": "埔心分行" }
    ,
    { "id": "1330", "head_code": "9", "branch_code": "9332", "branch_name": "西屯分行" }
    ,
    { "id": "1331", "head_code": "9", "branch_code": "9349", "branch_name": "大發分行" }
    ,
    { "id": "1332", "head_code": "9", "branch_code": "9356", "branch_name": "東林口分行" }
    ,
    { "id": "1333", "head_code": "9", "branch_code": "9523", "branch_name": "土庫分行" }
    ,
    { "id": "1334", "head_code": "9", "branch_code": "9547", "branch_name": "路竹分行" }
    ,
    { "id": "1335", "head_code": "9", "branch_code": "9554", "branch_name": "蘇澳分行" }
    ,
    { "id": "1336", "head_code": "9", "branch_code": "9561", "branch_name": "北台南分行" }
    ,
    { "id": "1337", "head_code": "9", "branch_code": "9603", "branch_name": "潭子分行" }
    ,
    { "id": "1338", "head_code": "9", "branch_code": "9610", "branch_name": "北嘉義分行" }
    ,
    { "id": "1339", "head_code": "9", "branch_code": "9627", "branch_name": "北新竹分行" }
    ,
    { "id": "1340", "head_code": "9", "branch_code": "9634", "branch_name": "建興分行" }
    ,
    { "id": "1341", "head_code": "9", "branch_code": "9641", "branch_name": "三和路分行" }
    ,
    { "id": "1342", "head_code": "9", "branch_code": "9658", "branch_name": "吉成分行" }
    ,
    { "id": "1343", "head_code": "9", "branch_code": "9689", "branch_name": "林口分行" }
    ,
    { "id": "1344", "head_code": "9", "branch_code": "9696", "branch_name": "江翠分行" }
    ,
    { "id": "1345", "head_code": "9", "branch_code": "9714", "branch_name": "長安東路分行" }
    ,
    { "id": "1346", "head_code": "9", "branch_code": "9721", "branch_name": "晴光分行" }
    ,
    { "id": "1347", "head_code": "9", "branch_code": "9738", "branch_name": "大直分行" }
    ,
    { "id": "1348", "head_code": "9", "branch_code": "9752", "branch_name": "松江分行" }
    ,
    { "id": "1349", "head_code": "9", "branch_code": "9790", "branch_name": "西內湖分行" }
    ,
    { "id": "1350", "head_code": "9", "branch_code": "9801", "branch_name": "南港分行" }
    ,
    { "id": "1351", "head_code": "9", "branch_code": "9818", "branch_name": "中港分行" }
    ,
    { "id": "1352", "head_code": "9", "branch_code": "9832", "branch_name": "蘆洲分行" }
    ,
    { "id": "1353", "head_code": "9", "branch_code": "9849", "branch_name": "中華路分行" }
    ,
    { "id": "1354", "head_code": "10", "branch_code": "14", "branch_name": "總行" }
    ,
    { "id": "1355", "head_code": "10", "branch_code": "25", "branch_name": "台北分行" }
    ,
    { "id": "1356", "head_code": "10", "branch_code": "36", "branch_name": "中山分行" }
    ,
    { "id": "1357", "head_code": "10", "branch_code": "47", "branch_name": "城東分行" }
    ,
    { "id": "1358", "head_code": "10", "branch_code": "58", "branch_name": "台南分行" }
    ,
    { "id": "1359", "head_code": "10", "branch_code": "69", "branch_name": "高雄分行" }
    ,
    { "id": "1360", "head_code": "10", "branch_code": "70", "branch_name": "台中分行" }
    ,
    { "id": "1361", "head_code": "10", "branch_code": "81", "branch_name": "營業部" }
    ,
    { "id": "1362", "head_code": "10", "branch_code": "92", "branch_name": "復興分行" }
    ,
    { "id": "1363", "head_code": "10", "branch_code": "106", "branch_name": "新興分行" }
    ,
    { "id": "1364", "head_code": "10", "branch_code": "117", "branch_name": "基隆分行" }
    ,
    { "id": "1365", "head_code": "10", "branch_code": "128", "branch_name": "經濟研究處" }
    ,
    { "id": "1366", "head_code": "10", "branch_code": "139", "branch_name": "國外部" }
    ,
    { "id": "1367", "head_code": "10", "branch_code": "140", "branch_name": "桃園分行" }
    ,
    { "id": "1368", "head_code": "10", "branch_code": "151", "branch_name": "永和分行" }
    ,
    { "id": "1369", "head_code": "10", "branch_code": "162", "branch_name": "豐原分行" }
    ,
    { "id": "1370", "head_code": "10", "branch_code": "173", "branch_name": "民權分行" }
    ,
    { "id": "1371", "head_code": "10", "branch_code": "184", "branch_name": "府城分行" }
    ,
    { "id": "1372", "head_code": "10", "branch_code": "195", "branch_name": "苓雅分行" }
    ,
    { "id": "1373", "head_code": "10", "branch_code": "209", "branch_name": "松山分行" }
    ,
    { "id": "1374", "head_code": "10", "branch_code": "210", "branch_name": "三重分行" }
    ,
    { "id": "1375", "head_code": "10", "branch_code": "221", "branch_name": "員林分行" }
    ,
    { "id": "1376", "head_code": "10", "branch_code": "232", "branch_name": "士林分行" }
    ,
    { "id": "1377", "head_code": "10", "branch_code": "243", "branch_name": "板橋分行" }
    ,
    { "id": "1378", "head_code": "10", "branch_code": "254", "branch_name": "中壢分行" }
    ,
    { "id": "1379", "head_code": "10", "branch_code": "265", "branch_name": "國際金融業務分行" }
    ,
    { "id": "1380", "head_code": "10", "branch_code": "276", "branch_name": "大安分行" }
    ,
    { "id": "1381", "head_code": "10", "branch_code": "287", "branch_name": "新竹分行" }
    ,
    { "id": "1382", "head_code": "10", "branch_code": "298", "branch_name": "嘉義分行" }
    ,
    { "id": "1383", "head_code": "10", "branch_code": "302", "branch_name": "北台中分行" }
    ,
    { "id": "1384", "head_code": "10", "branch_code": "313", "branch_name": "三民分行" }
    ,
    { "id": "1385", "head_code": "10", "branch_code": "324", "branch_name": "新莊分行" }
    ,
    { "id": "1386", "head_code": "10", "branch_code": "335", "branch_name": "民生分行" }
    ,
    { "id": "1387", "head_code": "10", "branch_code": "346", "branch_name": "彰化分行" }
    ,
    { "id": "1388", "head_code": "10", "branch_code": "357", "branch_name": "鳳山分行" }
    ,
    { "id": "1389", "head_code": "10", "branch_code": "368", "branch_name": "新店分行" }
    ,
    { "id": "1390", "head_code": "10", "branch_code": "379", "branch_name": "仁德分行" }
    ,
    { "id": "1391", "head_code": "10", "branch_code": "380", "branch_name": "前鎮分行" }
    ,
    { "id": "1392", "head_code": "10", "branch_code": "391", "branch_name": "忠孝分行" }
    ,
    { "id": "1393", "head_code": "10", "branch_code": "405", "branch_name": "屏東分行" }
    ,
    { "id": "1394", "head_code": "10", "branch_code": "416", "branch_name": "清水分行" }
    ,
    { "id": "1395", "head_code": "10", "branch_code": "427", "branch_name": "中正分行" }
    ,
    { "id": "1396", "head_code": "10", "branch_code": "438", "branch_name": "永康分行" }
    ,
    { "id": "1397", "head_code": "10", "branch_code": "449", "branch_name": "羅東分行" }
    ,
    { "id": "1398", "head_code": "10", "branch_code": "450", "branch_name": "敦化分行" }
    ,
    { "id": "1399", "head_code": "10", "branch_code": "461", "branch_name": "中和分行" }
    ,
    { "id": "1400", "head_code": "10", "branch_code": "472", "branch_name": "大里分行" }
    ,
    { "id": "1401", "head_code": "10", "branch_code": "483", "branch_name": "岡山分行" }
    ,
    { "id": "1402", "head_code": "10", "branch_code": "494", "branch_name": "內湖分行" }
    ,
    { "id": "1403", "head_code": "10", "branch_code": "508", "branch_name": "南港分行" }
    ,
    { "id": "1404", "head_code": "10", "branch_code": "519", "branch_name": "北港分行" }
    ,
    { "id": "1405", "head_code": "10", "branch_code": "520", "branch_name": "忠明簡易型分行" }
    ,
    { "id": "1406", "head_code": "10", "branch_code": "531", "branch_name": "台南科學園區分行" }
    ,
    { "id": "1407", "head_code": "10", "branch_code": "542", "branch_name": "斗六分行" }
    ,
    { "id": "1408", "head_code": "10", "branch_code": "553", "branch_name": "樹林分行" }
    ,
    { "id": "1409", "head_code": "10", "branch_code": "564", "branch_name": "麥寮分行" }
    ,
    { "id": "1410", "head_code": "10", "branch_code": "575", "branch_name": "華中分行" }
    ,
    { "id": "1411", "head_code": "10", "branch_code": "586", "branch_name": "新竹科學園區分行" }
    ,
    { "id": "1412", "head_code": "10", "branch_code": "597", "branch_name": "金華簡易型分行" }
    ,
    { "id": "1413", "head_code": "10", "branch_code": "601", "branch_name": "信託部" }
    ,
    { "id": "1414", "head_code": "10", "branch_code": "623", "branch_name": "稽核處" }
    ,
    { "id": "1415", "head_code": "10", "branch_code": "678", "branch_name": "審查部" }
    ,
    { "id": "1416", "head_code": "10", "branch_code": "737", "branch_name": "逾放管理部" }
    ,
    { "id": "1417", "head_code": "10", "branch_code": "2111", "branch_name": "北一區" }
    ,
    { "id": "1418", "head_code": "10", "branch_code": "2122", "branch_name": "北二區" }
    ,
    { "id": "1419", "head_code": "10", "branch_code": "2133", "branch_name": "北三區" }
    ,
    { "id": "1420", "head_code": "10", "branch_code": "2144", "branch_name": "北四區" }
    ,
    { "id": "1421", "head_code": "10", "branch_code": "2214", "branch_name": "中一區" }
    ,
    { "id": "1422", "head_code": "10", "branch_code": "2317", "branch_name": "南一區" }
    ,
    { "id": "1423", "head_code": "10", "branch_code": "2328", "branch_name": "南二區" }
    ,
    { "id": "1424", "head_code": "11", "branch_code": "15", "branch_name": "總行" }
    ,
    { "id": "1425", "head_code": "11", "branch_code": "26", "branch_name": "營業部" }
    ,
    { "id": "1426", "head_code": "11", "branch_code": "37", "branch_name": "儲蓄部" }
    ,
    { "id": "1427", "head_code": "11", "branch_code": "48", "branch_name": "高雄分行" }
    ,
    { "id": "1428", "head_code": "11", "branch_code": "59", "branch_name": "國外部" }
    ,
    { "id": "1429", "head_code": "11", "branch_code": "60", "branch_name": "城中分行" }
    ,
    { "id": "1430", "head_code": "11", "branch_code": "71", "branch_name": "徵信處" }
    ,
    { "id": "1431", "head_code": "11", "branch_code": "82", "branch_name": "台中分行" }
    ,
    { "id": "1432", "head_code": "11", "branch_code": "93", "branch_name": "東台北分行" }
    ,
    { "id": "1433", "head_code": "11", "branch_code": "107", "branch_name": "台南分行" }
    ,
    { "id": "1434", "head_code": "11", "branch_code": "118", "branch_name": "桃園分行" }
    ,
    { "id": "1435", "head_code": "11", "branch_code": "129", "branch_name": "北高雄分行" }
    ,
    { "id": "1436", "head_code": "11", "branch_code": "130", "branch_name": "三重分行" }
    ,
    { "id": "1437", "head_code": "11", "branch_code": "141", "branch_name": "板橋分行" }
    ,
    { "id": "1438", "head_code": "11", "branch_code": "152", "branch_name": "永和分行" }
    ,
    { "id": "1439", "head_code": "11", "branch_code": "163", "branch_name": "員林分行" }
    ,
    { "id": "1440", "head_code": "11", "branch_code": "174", "branch_name": "信託部" }
    ,
    { "id": "1441", "head_code": "11", "branch_code": "185", "branch_name": "信義分行" }
    ,
    { "id": "1442", "head_code": "11", "branch_code": "196", "branch_name": "民生分行" }
    ,
    { "id": "1443", "head_code": "11", "branch_code": "200", "branch_name": "忠孝分行" }
    ,
    { "id": "1444", "head_code": "11", "branch_code": "211", "branch_name": "龍山分行" }
    ,
    { "id": "1445", "head_code": "11", "branch_code": "222", "branch_name": "內湖分行" }
    ,
    { "id": "1446", "head_code": "11", "branch_code": "233", "branch_name": "中山分行" }
    ,
    { "id": "1447", "head_code": "11", "branch_code": "244", "branch_name": "上海商業儲蓄銀行仁愛分行" }
    ,
    { "id": "1448", "head_code": "11", "branch_code": "255", "branch_name": "新莊分行" }
    ,
    { "id": "1449", "head_code": "11", "branch_code": "266", "branch_name": "中壢分行" }
    ,
    { "id": "1450", "head_code": "11", "branch_code": "277", "branch_name": "國際金融業務分行" }
    ,
    { "id": "1451", "head_code": "11", "branch_code": "288", "branch_name": "松山分行" }
    ,
    { "id": "1452", "head_code": "11", "branch_code": "299", "branch_name": "新店分行" }
    ,
    { "id": "1453", "head_code": "11", "branch_code": "303", "branch_name": "前金分行" }
    ,
    { "id": "1454", "head_code": "11", "branch_code": "314", "branch_name": "松南分行" }
    ,
    { "id": "1455", "head_code": "11", "branch_code": "325", "branch_name": "蘆洲分行" }
    ,
    { "id": "1456", "head_code": "11", "branch_code": "336", "branch_name": "中和分行" }
    ,
    { "id": "1457", "head_code": "11", "branch_code": "347", "branch_name": "新竹分行" }
    ,
    { "id": "1458", "head_code": "11", "branch_code": "358", "branch_name": "中港分行" }
    ,
    { "id": "1459", "head_code": "11", "branch_code": "369", "branch_name": "士林分行" }
    ,
    { "id": "1460", "head_code": "11", "branch_code": "370", "branch_name": "東台南分行" }
    ,
    { "id": "1461", "head_code": "11", "branch_code": "381", "branch_name": "永康分行" }
    ,
    { "id": "1462", "head_code": "11", "branch_code": "392", "branch_name": "北三重分行" }
    ,
    { "id": "1463", "head_code": "11", "branch_code": "406", "branch_name": "南京東路分行" }
    ,
    { "id": "1464", "head_code": "11", "branch_code": "417", "branch_name": "大里分行" }
    ,
    { "id": "1465", "head_code": "11", "branch_code": "428", "branch_name": "土城分行" }
    ,
    { "id": "1466", "head_code": "11", "branch_code": "439", "branch_name": "世貿分行" }
    ,
    { "id": "1467", "head_code": "11", "branch_code": "440", "branch_name": "承德分行" }
    ,
    { "id": "1468", "head_code": "11", "branch_code": "451", "branch_name": "汐止分行" }
    ,
    { "id": "1469", "head_code": "11", "branch_code": "462", "branch_name": "上海商業儲蓄銀行屏東分行" }
    ,
    { "id": "1470", "head_code": "11", "branch_code": "473", "branch_name": "三民分行" }
    ,
    { "id": "1471", "head_code": "11", "branch_code": "484", "branch_name": "上海商業儲蓄銀行華江分行" }
    ,
    { "id": "1472", "head_code": "11", "branch_code": "495", "branch_name": "上海商業儲蓄銀行豐原分行" }
    ,
    { "id": "1473", "head_code": "11", "branch_code": "509", "branch_name": "上海商業儲蓄銀行鳳山分行" }
    ,
    { "id": "1474", "head_code": "11", "branch_code": "510", "branch_name": "天母分行" }
    ,
    { "id": "1475", "head_code": "11", "branch_code": "521", "branch_name": "樹林分行" }
    ,
    { "id": "1476", "head_code": "11", "branch_code": "532", "branch_name": "基隆分行" }
    ,
    { "id": "1477", "head_code": "11", "branch_code": "543", "branch_name": "楊梅分行" }
    ,
    { "id": "1478", "head_code": "11", "branch_code": "554", "branch_name": "敦南分行" }
    ,
    { "id": "1479", "head_code": "11", "branch_code": "565", "branch_name": "北中和分行" }
    ,
    { "id": "1480", "head_code": "11", "branch_code": "576", "branch_name": "西湖分行" }
    ,
    { "id": "1481", "head_code": "11", "branch_code": "587", "branch_name": "頂崁簡易型分行" }
    ,
    { "id": "1482", "head_code": "11", "branch_code": "598", "branch_name": "二重簡易型分行" }
    ,
    { "id": "1483", "head_code": "11", "branch_code": "602", "branch_name": "上海商業儲蓄銀行延平簡易型分行" }
    ,
    { "id": "1484", "head_code": "11", "branch_code": "613", "branch_name": "南崁簡易型分行" }
    ,
    { "id": "1485", "head_code": "12", "branch_code": "256", "branch_name": "徵信室" }
    ,
    { "id": "1486", "head_code": "12", "branch_code": "522", "branch_name": "消費金融部" }
    ,
    { "id": "1487", "head_code": "12", "branch_code": "1116", "branch_name": "法院" }
    ,
    { "id": "1488", "head_code": "12", "branch_code": "1600", "branch_name": "授信管理處" }
    ,
    { "id": "1489", "head_code": "12", "branch_code": "1703", "branch_name": "業務部" }
    ,
    { "id": "1490", "head_code": "12", "branch_code": "2009", "branch_name": "營業部" }
    ,
    { "id": "1491", "head_code": "12", "branch_code": "2032", "branch_name": "長安東路分行" }
    ,
    { "id": "1492", "head_code": "12", "branch_code": "2043", "branch_name": "古亭區行政中心收支處" }
    ,
    { "id": "1493", "head_code": "12", "branch_code": "2102", "branch_name": "公庫部" }
    ,
    { "id": "1494", "head_code": "12", "branch_code": "2205", "branch_name": "城東分行" }
    ,
    { "id": "1495", "head_code": "12", "branch_code": "2216", "branch_name": "農安分行" }
    ,
    { "id": "1496", "head_code": "12", "branch_code": "2401", "branch_name": "國外營業部" }
    ,
    { "id": "1497", "head_code": "12", "branch_code": "2504", "branch_name": "信託部" }
    ,
    { "id": "1498", "head_code": "12", "branch_code": "2515", "branch_name": "證券部" }
    ,
    { "id": "1499", "head_code": "12", "branch_code": "2607", "branch_name": "儲蓄部分行" }
    ,
    { "id": "1500", "head_code": "12", "branch_code": "2685", "branch_name": "志清辦事處" }
    ,
    { "id": "1501", "head_code": "12", "branch_code": "3006", "branch_name": "士林分行" }
    ,
    { "id": "1502", "head_code": "12", "branch_code": "3017", "branch_name": "士東分行" }
    ,
    { "id": "1503", "head_code": "12", "branch_code": "3028", "branch_name": "瑞光分行" }
    ,
    { "id": "1504", "head_code": "12", "branch_code": "3039", "branch_name": "玉成分行" }
    ,
    { "id": "1505", "head_code": "12", "branch_code": "3040", "branch_name": "褔港分行" }
    ,
    { "id": "1506", "head_code": "12", "branch_code": "3051", "branch_name": "忠孝分行" }
    ,
    { "id": "1507", "head_code": "12", "branch_code": "3062", "branch_name": "承德分行" }
    ,
    { "id": "1508", "head_code": "12", "branch_code": "3073", "branch_name": "龍江分行" }
    ,
    { "id": "1509", "head_code": "12", "branch_code": "3109", "branch_name": "延平分行" }
    ,
    { "id": "1510", "head_code": "12", "branch_code": "3202", "branch_name": "木柵分行" }
    ,
    { "id": "1511", "head_code": "12", "branch_code": "3213", "branch_name": "木新分行" }
    ,
    { "id": "1512", "head_code": "12", "branch_code": "3305", "branch_name": "龍山分行" }
    ,
    { "id": "1513", "head_code": "12", "branch_code": "3408", "branch_name": "八德分行" }
    ,
    { "id": "1514", "head_code": "12", "branch_code": "3419", "branch_name": "永春分行" }
    ,
    { "id": "1515", "head_code": "12", "branch_code": "3420", "branch_name": "永吉分行" }
    ,
    { "id": "1516", "head_code": "12", "branch_code": "3501", "branch_name": "中山分行" }
    ,
    { "id": "1517", "head_code": "12", "branch_code": "3604", "branch_name": "北投分行" }
    ,
    { "id": "1518", "head_code": "12", "branch_code": "3615", "branch_name": "石牌分行" }
    ,
    { "id": "1519", "head_code": "12", "branch_code": "3707", "branch_name": "大安分行" }
    ,
    { "id": "1520", "head_code": "12", "branch_code": "3800", "branch_name": "大同分行" }
    ,
    { "id": "1521", "head_code": "12", "branch_code": "3903", "branch_name": "古亭分行" }
    ,
    { "id": "1522", "head_code": "12", "branch_code": "4003", "branch_name": "雙園分行" }
    ,
    { "id": "1523", "head_code": "12", "branch_code": "4014", "branch_name": "萬華分行" }
    ,
    { "id": "1524", "head_code": "12", "branch_code": "4106", "branch_name": "建成分行" }
    ,
    { "id": "1525", "head_code": "12", "branch_code": "4117", "branch_name": "市府分行" }
    ,
    { "id": "1526", "head_code": "12", "branch_code": "4209", "branch_name": "南港分行" }
    ,
    { "id": "1527", "head_code": "12", "branch_code": "4210", "branch_name": "南港區行政中心收支處" }
    ,
    { "id": "1528", "head_code": "12", "branch_code": "4302", "branch_name": "景美分行" }
    ,
    { "id": "1529", "head_code": "12", "branch_code": "4313", "branch_name": "興隆分行" }
    ,
    { "id": "1530", "head_code": "12", "branch_code": "4405", "branch_name": "內湖分行" }
    ,
    { "id": "1531", "head_code": "12", "branch_code": "4416", "branch_name": "內湖區行政中心收支處" }
    ,
    { "id": "1532", "head_code": "12", "branch_code": "4427", "branch_name": "文德分行" }
    ,
    { "id": "1533", "head_code": "12", "branch_code": "4508", "branch_name": "敦化分行" }
    ,
    { "id": "1534", "head_code": "12", "branch_code": "4542", "branch_name": "民生分行" }
    ,
    { "id": "1535", "head_code": "12", "branch_code": "4601", "branch_name": "信義分行" }
    ,
    { "id": "1536", "head_code": "12", "branch_code": "4612", "branch_name": "莊敬分行" }
    ,
    { "id": "1537", "head_code": "12", "branch_code": "4623", "branch_name": "世貿分行" }
    ,
    { "id": "1538", "head_code": "12", "branch_code": "4704", "branch_name": "松江分行" }
    ,
    { "id": "1539", "head_code": "12", "branch_code": "4807", "branch_name": "和平分行" }
    ,
    { "id": "1540", "head_code": "12", "branch_code": "4900", "branch_name": "延吉分行" }
    ,
    { "id": "1541", "head_code": "12", "branch_code": "5000", "branch_name": "城中分行" }
    ,
    { "id": "1542", "head_code": "12", "branch_code": "5011", "branch_name": "城中分行立法院辦事處" }
    ,
    { "id": "1543", "head_code": "12", "branch_code": "5103", "branch_name": "南門分行" }
    ,
    { "id": "1544", "head_code": "12", "branch_code": "5206", "branch_name": "復興分行" }
    ,
    { "id": "1545", "head_code": "12", "branch_code": "5309", "branch_name": "西松分行" }
    ,
    { "id": "1546", "head_code": "12", "branch_code": "5402", "branch_name": "長安分行" }
    ,
    { "id": "1547", "head_code": "12", "branch_code": "5505", "branch_name": "桂林分行" }
    ,
    { "id": "1548", "head_code": "12", "branch_code": "5608", "branch_name": "國際金融業務分行" }
    ,
    { "id": "1549", "head_code": "12", "branch_code": "5701", "branch_name": "敦和分行" }
    ,
    { "id": "1550", "head_code": "12", "branch_code": "5804", "branch_name": "東門分行" }
    ,
    { "id": "1551", "head_code": "12", "branch_code": "5907", "branch_name": "中崙分行" }
    ,
    { "id": "1552", "head_code": "12", "branch_code": "6007", "branch_name": "基隆路分行" }
    ,
    { "id": "1553", "head_code": "12", "branch_code": "6100", "branch_name": "金華分行" }
    ,
    { "id": "1554", "head_code": "12", "branch_code": "6203", "branch_name": "松南分行" }
    ,
    { "id": "1555", "head_code": "12", "branch_code": "6214", "branch_name": "懷生分行" }
    ,
    { "id": "1556", "head_code": "12", "branch_code": "6306", "branch_name": "民權分行" }
    ,
    { "id": "1557", "head_code": "12", "branch_code": "6409", "branch_name": "吉林分行" }
    ,
    { "id": "1558", "head_code": "12", "branch_code": "6502", "branch_name": "社子分行" }
    ,
    { "id": "1559", "head_code": "12", "branch_code": "6605", "branch_name": "港都分行" }
    ,
    { "id": "1560", "head_code": "12", "branch_code": "6683", "branch_name": "西湖分行" }
    ,
    { "id": "1561", "head_code": "12", "branch_code": "6694", "branch_name": "金城分行" }
    ,
    { "id": "1562", "head_code": "12", "branch_code": "6708", "branch_name": "萬隆分行" }
    ,
    { "id": "1563", "head_code": "12", "branch_code": "6719", "branch_name": "中港分行" }
    ,
    { "id": "1564", "head_code": "12", "branch_code": "6720", "branch_name": "新莊分行" }
    ,
    { "id": "1565", "head_code": "12", "branch_code": "6731", "branch_name": "桃園分行" }
    ,
    { "id": "1566", "head_code": "12", "branch_code": "6742", "branch_name": "安平分行" }
    ,
    { "id": "1567", "head_code": "12", "branch_code": "6753", "branch_name": "劍潭簡易型分行" }
    ,
    { "id": "1568", "head_code": "12", "branch_code": "6764", "branch_name": "松隆分行" }
    ,
    { "id": "1569", "head_code": "12", "branch_code": "6775", "branch_name": "埔墘分行" }
    ,
    { "id": "1570", "head_code": "12", "branch_code": "6786", "branch_name": "北中壢分行" }
    ,
    { "id": "1571", "head_code": "12", "branch_code": "6797", "branch_name": "三重分行" }
    ,
    { "id": "1572", "head_code": "12", "branch_code": "6801", "branch_name": "豐原分行" }
    ,
    { "id": "1573", "head_code": "12", "branch_code": "6812", "branch_name": "雙和分行" }
    ,
    { "id": "1574", "head_code": "12", "branch_code": "6823", "branch_name": "鼓山分行" }
    ,
    { "id": "1575", "head_code": "12", "branch_code": "6845", "branch_name": "風城分行" }
    ,
    { "id": "1576", "head_code": "12", "branch_code": "6856", "branch_name": "彰化分行" }
    ,
    { "id": "1577", "head_code": "12", "branch_code": "6867", "branch_name": "東湖簡易型分行" }
    ,
    { "id": "1578", "head_code": "12", "branch_code": "6878", "branch_name": "永和分行" }
    ,
    { "id": "1579", "head_code": "12", "branch_code": "6889", "branch_name": "岡山簡易型分行" }
    ,
    { "id": "1580", "head_code": "12", "branch_code": "6890", "branch_name": "台北１０１分行" }
    ,
    { "id": "1581", "head_code": "12", "branch_code": "7015", "branch_name": "雙連分行" }
    ,
    { "id": "1582", "head_code": "12", "branch_code": "7026", "branch_name": "南京東路分行" }
    ,
    { "id": "1583", "head_code": "12", "branch_code": "7037", "branch_name": "敦北分行" }
    ,
    { "id": "1584", "head_code": "12", "branch_code": "7048", "branch_name": "仁愛分行" }
    ,
    { "id": "1585", "head_code": "12", "branch_code": "7059", "branch_name": "高雄分行" }
    ,
    { "id": "1586", "head_code": "12", "branch_code": "7060", "branch_name": "中正分行" }
    ,
    { "id": "1587", "head_code": "12", "branch_code": "7071", "branch_name": "台中分行" }
    ,
    { "id": "1588", "head_code": "12", "branch_code": "7093", "branch_name": "松山分行" }
    ,
    { "id": "1589", "head_code": "12", "branch_code": "7107", "branch_name": "土城分行" }
    ,
    { "id": "1590", "head_code": "12", "branch_code": "7118", "branch_name": "台南分行" }
    ,
    { "id": "1591", "head_code": "12", "branch_code": "7129", "branch_name": "鳳山分行" }
    ,
    { "id": "1592", "head_code": "12", "branch_code": "7130", "branch_name": "中壢分行" }
    ,
    { "id": "1593", "head_code": "12", "branch_code": "7152", "branch_name": "安和分行" }
    ,
    { "id": "1594", "head_code": "12", "branch_code": "7163", "branch_name": "正義分行" }
    ,
    { "id": "1595", "head_code": "12", "branch_code": "7174", "branch_name": "大湳分行" }
    ,
    { "id": "1596", "head_code": "12", "branch_code": "7185", "branch_name": "嘉義分行" }
    ,
    { "id": "1597", "head_code": "12", "branch_code": "7196", "branch_name": "苓雅分行" }
    ,
    { "id": "1598", "head_code": "12", "branch_code": "7211", "branch_name": "板橋分行" }
    ,
    { "id": "1599", "head_code": "12", "branch_code": "7222", "branch_name": "北台中分行" }
    ,
    { "id": "1600", "head_code": "12", "branch_code": "7233", "branch_name": "三民分行" }
    ,
    { "id": "1601", "head_code": "12", "branch_code": "7244", "branch_name": "建國分行" }
    ,
    { "id": "1602", "head_code": "12", "branch_code": "7255", "branch_name": "新竹分行" }
    ,
    { "id": "1603", "head_code": "12", "branch_code": "7266", "branch_name": "新店分行" }
    ,
    { "id": "1604", "head_code": "12", "branch_code": "7277", "branch_name": "天母分行" }
    ,
    { "id": "1605", "head_code": "12", "branch_code": "7288", "branch_name": "汐止分行" }
    ,
    { "id": "1606", "head_code": "12", "branch_code": "7303", "branch_name": "永康分行" }
    ,
    { "id": "1607", "head_code": "12", "branch_code": "7314", "branch_name": "襄陽分行" }
    ,
    { "id": "1608", "head_code": "12", "branch_code": "7336", "branch_name": "五股分行" }
    ,
    { "id": "1609", "head_code": "12", "branch_code": "7347", "branch_name": "新營分行" }
    ,
    { "id": "1610", "head_code": "12", "branch_code": "7358", "branch_name": "屏東分行" }
    ,
    { "id": "1611", "head_code": "12", "branch_code": "7369", "branch_name": "前鎮分行" }
    ,
    { "id": "1612", "head_code": "12", "branch_code": "7370", "branch_name": "敦南分行" }
    ,
    { "id": "1613", "head_code": "12", "branch_code": "7381", "branch_name": "保生分行" }
    ,
    { "id": "1614", "head_code": "12", "branch_code": "7392", "branch_name": "員林分行" }
    ,
    { "id": "1615", "head_code": "12", "branch_code": "7406", "branch_name": "羅東分行" }
    ,
    { "id": "1616", "head_code": "12", "branch_code": "7417", "branch_name": "瑞湖分行" }
    ,
    { "id": "1617", "head_code": "12", "branch_code": "7428", "branch_name": "基和簡易型分行" }
    ,
    { "id": "1618", "head_code": "12", "branch_code": "7439", "branch_name": "南昌簡易型分行" }
    ,
    { "id": "1619", "head_code": "12", "branch_code": "7451", "branch_name": "花蓮簡易分行" }
    ,
    { "id": "1620", "head_code": "12", "branch_code": "7462", "branch_name": "竹北分行" }
    ,
    { "id": "1621", "head_code": "12", "branch_code": "7473", "branch_name": "南台中分行" }
    ,
    { "id": "1622", "head_code": "12", "branch_code": "7484", "branch_name": "博愛分行" }
    ,
    { "id": "1623", "head_code": "12", "branch_code": "7495", "branch_name": "蘆洲分行" }
    ,
    { "id": "1624", "head_code": "12", "branch_code": "7509", "branch_name": "華江分行" }
    ,
    { "id": "1625", "head_code": "12", "branch_code": "9008", "branch_name": "紐約分行" }
    ,
    { "id": "1626", "head_code": "12", "branch_code": "9108", "branch_name": "洛杉磯分行" }
    ,
    { "id": "1627", "head_code": "12", "branch_code": "9204", "branch_name": "倫敦代表辦事處" }
    ,
    { "id": "1628", "head_code": "12", "branch_code": "9307", "branch_name": "新加坡代表辦事處" }
    ,
    { "id": "1629", "head_code": "12", "branch_code": "9503", "branch_name": "香港代表辦事處" }
    ,
    { "id": "1630", "head_code": "13", "branch_code": "17", "branch_name": "館前分行" }
    ,
    { "id": "1631", "head_code": "13", "branch_code": "28", "branch_name": "國外部" }
    ,
    { "id": "1632", "head_code": "13", "branch_code": "39", "branch_name": "南京東路分行" }
    ,
    { "id": "1633", "head_code": "13", "branch_code": "40", "branch_name": "信託部" }
    ,
    { "id": "1634", "head_code": "13", "branch_code": "51", "branch_name": "高雄分行" }
    ,
    { "id": "1635", "head_code": "13", "branch_code": "62", "branch_name": "台中分行" }
    ,
    { "id": "1636", "head_code": "13", "branch_code": "73", "branch_name": "台北分行" }
    ,
    { "id": "1637", "head_code": "13", "branch_code": "84", "branch_name": "徵信處" }
    ,
    { "id": "1638", "head_code": "13", "branch_code": "95", "branch_name": "永和分行" }
    ,
    { "id": "1639", "head_code": "13", "branch_code": "109", "branch_name": "台南分行" }
    ,
    { "id": "1640", "head_code": "13", "branch_code": "110", "branch_name": "忠孝分行" }
    ,
    { "id": "1641", "head_code": "13", "branch_code": "121", "branch_name": "天母分行" }
    ,
    { "id": "1642", "head_code": "13", "branch_code": "132", "branch_name": "西台中分行" }
    ,
    { "id": "1643", "head_code": "13", "branch_code": "143", "branch_name": "東高雄分行" }
    ,
    { "id": "1644", "head_code": "13", "branch_code": "154", "branch_name": "信義分行" }
    ,
    { "id": "1645", "head_code": "13", "branch_code": "165", "branch_name": "光復分行" }
    ,
    { "id": "1646", "head_code": "13", "branch_code": "176", "branch_name": "板橋分行" }
    ,
    { "id": "1647", "head_code": "13", "branch_code": "187", "branch_name": "復興分行" }
    ,
    { "id": "1648", "head_code": "13", "branch_code": "198", "branch_name": "民權分行" }
    ,
    { "id": "1649", "head_code": "13", "branch_code": "202", "branch_name": "大安分行" }
    ,
    { "id": "1650", "head_code": "13", "branch_code": "213", "branch_name": "三重分行" }
    ,
    { "id": "1651", "head_code": "13", "branch_code": "224", "branch_name": "中壢分行" }
    ,
    { "id": "1652", "head_code": "13", "branch_code": "235", "branch_name": "員林分行" }
    ,
    { "id": "1653", "head_code": "13", "branch_code": "246", "branch_name": "新店分行" }
    ,
    { "id": "1654", "head_code": "13", "branch_code": "257", "branch_name": "新莊分行" }
    ,
    { "id": "1655", "head_code": "13", "branch_code": "268", "branch_name": "鳳山分行" }
    ,
    { "id": "1656", "head_code": "13", "branch_code": "279", "branch_name": "安和分行" }
    ,
    { "id": "1657", "head_code": "13", "branch_code": "280", "branch_name": "松江分行" }
    ,
    { "id": "1658", "head_code": "13", "branch_code": "291", "branch_name": "苓雅分行" }
    ,
    { "id": "1659", "head_code": "13", "branch_code": "305", "branch_name": "古亭分行" }
    ,
    { "id": "1660", "head_code": "13", "branch_code": "316", "branch_name": "建成分行" }
    ,
    { "id": "1661", "head_code": "13", "branch_code": "327", "branch_name": "東門分行" }
    ,
    { "id": "1662", "head_code": "13", "branch_code": "338", "branch_name": "國際金融業務分行" }
    ,
    { "id": "1663", "head_code": "13", "branch_code": "349", "branch_name": "桃園分行" }
    ,
    { "id": "1664", "head_code": "13", "branch_code": "350", "branch_name": "豐原分行" }
    ,
    { "id": "1665", "head_code": "13", "branch_code": "361", "branch_name": "嘉義分行" }
    ,
    { "id": "1666", "head_code": "13", "branch_code": "372", "branch_name": "松山分行" }
    ,
    { "id": "1667", "head_code": "13", "branch_code": "383", "branch_name": "前金分行" }
    ,
    { "id": "1668", "head_code": "13", "branch_code": "394", "branch_name": "北三重分行" }
    ,
    { "id": "1669", "head_code": "13", "branch_code": "408", "branch_name": "新竹分行" }
    ,
    { "id": "1670", "head_code": "13", "branch_code": "419", "branch_name": "永康分行" }
    ,
    { "id": "1671", "head_code": "13", "branch_code": "420", "branch_name": "中山分行" }
    ,
    { "id": "1672", "head_code": "13", "branch_code": "431", "branch_name": "埔墘分行" }
    ,
    { "id": "1673", "head_code": "13", "branch_code": "442", "branch_name": "新生分行" }
    ,
    { "id": "1674", "head_code": "13", "branch_code": "453", "branch_name": "中和分行" }
    ,
    { "id": "1675", "head_code": "13", "branch_code": "464", "branch_name": "清水分行" }
    ,
    { "id": "1676", "head_code": "13", "branch_code": "475", "branch_name": "彰化分行" }
    ,
    { "id": "1677", "head_code": "13", "branch_code": "486", "branch_name": "敦北分行" }
    ,
    { "id": "1678", "head_code": "13", "branch_code": "497", "branch_name": "中正分行" }
    ,
    { "id": "1679", "head_code": "13", "branch_code": "501", "branch_name": "五權分行" }
    ,
    { "id": "1680", "head_code": "13", "branch_code": "512", "branch_name": "東台南分行" }
    ,
    { "id": "1681", "head_code": "13", "branch_code": "523", "branch_name": "新興分行" }
    ,
    { "id": "1682", "head_code": "13", "branch_code": "534", "branch_name": "敦南分行" }
    ,
    { "id": "1683", "head_code": "13", "branch_code": "545", "branch_name": "後埔分行" }
    ,
    { "id": "1684", "head_code": "13", "branch_code": "556", "branch_name": "蘆洲分行" }
    ,
    { "id": "1685", "head_code": "13", "branch_code": "567", "branch_name": "西門分行" }
    ,
    { "id": "1686", "head_code": "13", "branch_code": "578", "branch_name": "三民分行" }
    ,
    { "id": "1687", "head_code": "13", "branch_code": "590", "branch_name": "前鎮分行" }
    ,
    { "id": "1688", "head_code": "13", "branch_code": "604", "branch_name": "土城分行" }
    ,
    { "id": "1689", "head_code": "13", "branch_code": "615", "branch_name": "南高雄分行" }
    ,
    { "id": "1690", "head_code": "13", "branch_code": "626", "branch_name": "大同分行" }
    ,
    { "id": "1691", "head_code": "13", "branch_code": "637", "branch_name": "成功分行" }
    ,
    { "id": "1692", "head_code": "13", "branch_code": "648", "branch_name": "中港分行" }
    ,
    { "id": "1693", "head_code": "13", "branch_code": "659", "branch_name": "世貿分行" }
    ,
    { "id": "1694", "head_code": "13", "branch_code": "660", "branch_name": "北桃園分行" }
    ,
    { "id": "1695", "head_code": "13", "branch_code": "671", "branch_name": "南科分行" }
    ,
    { "id": "1696", "head_code": "13", "branch_code": "682", "branch_name": "士林分行" }
    ,
    { "id": "1697", "head_code": "13", "branch_code": "693", "branch_name": "雙和分行" }
    ,
    { "id": "1698", "head_code": "13", "branch_code": "707", "branch_name": "二重分行" }
    ,
    { "id": "1699", "head_code": "13", "branch_code": "718", "branch_name": "大甲分行" }
    ,
    { "id": "1700", "head_code": "13", "branch_code": "729", "branch_name": "花蓮分行" }
    ,
    { "id": "1701", "head_code": "13", "branch_code": "730", "branch_name": "內湖分行" }
    ,
    { "id": "1702", "head_code": "13", "branch_code": "741", "branch_name": "華江分行" }
    ,
    { "id": "1703", "head_code": "13", "branch_code": "752", "branch_name": "竹科分行" }
    ,
    { "id": "1704", "head_code": "13", "branch_code": "763", "branch_name": "南門分行" }
    ,
    { "id": "1705", "head_code": "13", "branch_code": "774", "branch_name": "八德分行" }
    ,
    { "id": "1706", "head_code": "13", "branch_code": "785", "branch_name": "永春分行" }
    ,
    { "id": "1707", "head_code": "13", "branch_code": "796", "branch_name": "萬華分行" }
    ,
    { "id": "1708", "head_code": "13", "branch_code": "1014", "branch_name": "屏東分行" }
    ,
    { "id": "1709", "head_code": "13", "branch_code": "1025", "branch_name": "台東分行" }
    ,
    { "id": "1710", "head_code": "13", "branch_code": "1036", "branch_name": "景美分行" }
    ,
    { "id": "1711", "head_code": "13", "branch_code": "1047", "branch_name": "新樹分行" }
    ,
    { "id": "1712", "head_code": "13", "branch_code": "1058", "branch_name": "宜蘭分行" }
    ,
    { "id": "1713", "head_code": "13", "branch_code": "1069", "branch_name": "南港分行" }
    ,
    { "id": "1714", "head_code": "13", "branch_code": "1070", "branch_name": "斗六簡易型分行" }
    ,
    { "id": "1715", "head_code": "13", "branch_code": "1081", "branch_name": "南投分行" }
    ,
    { "id": "1716", "head_code": "13", "branch_code": "1120", "branch_name": "台北分行兼營證券商" }
    ,
    { "id": "1717", "head_code": "13", "branch_code": "2011", "branch_name": "仁愛分行" }
    ,
    { "id": "1718", "head_code": "13", "branch_code": "2022", "branch_name": "中華分行" }
    ,
    { "id": "1719", "head_code": "13", "branch_code": "2033", "branch_name": "民生分行" }
    ,
    { "id": "1720", "head_code": "13", "branch_code": "2044", "branch_name": "篤行分行" }
    ,
    { "id": "1721", "head_code": "13", "branch_code": "2055", "branch_name": "板東分行" }
    ,
    { "id": "1722", "head_code": "13", "branch_code": "2066", "branch_name": "桃興分行" }
    ,
    { "id": "1723", "head_code": "13", "branch_code": "2077", "branch_name": "逢甲分行" }
    ,
    { "id": "1724", "head_code": "13", "branch_code": "2088", "branch_name": "彰泰分行" }
    ,
    { "id": "1725", "head_code": "13", "branch_code": "2099", "branch_name": "嘉泰分行" }
    ,
    { "id": "1726", "head_code": "13", "branch_code": "2103", "branch_name": "竹城分行" }
    ,
    { "id": "1727", "head_code": "13", "branch_code": "2114", "branch_name": "忠誠分行" }
    ,
    { "id": "1728", "head_code": "13", "branch_code": "2125", "branch_name": "敦化分行" }
    ,
    { "id": "1729", "head_code": "13", "branch_code": "2136", "branch_name": "高鳳分行" }
    ,
    { "id": "1730", "head_code": "13", "branch_code": "2147", "branch_name": "新泰分行" }
    ,
    { "id": "1731", "head_code": "13", "branch_code": "2158", "branch_name": "文心分行" }
    ,
    { "id": "1732", "head_code": "13", "branch_code": "2169", "branch_name": "福和分行" }
    ,
    { "id": "1733", "head_code": "13", "branch_code": "2170", "branch_name": "四維分行" }
    ,
    { "id": "1734", "head_code": "13", "branch_code": "2181", "branch_name": "營業部" }
    ,
    { "id": "1735", "head_code": "13", "branch_code": "2192", "branch_name": "豐北分行" }
    ,
    { "id": "1736", "head_code": "13", "branch_code": "2206", "branch_name": "重新分行" }
    ,
    { "id": "1737", "head_code": "13", "branch_code": "2217", "branch_name": "延平分行" }
    ,
    { "id": "1738", "head_code": "13", "branch_code": "2228", "branch_name": "城東分行" }
    ,
    { "id": "1739", "head_code": "13", "branch_code": "2239", "branch_name": "建國分行" }
    ,
    { "id": "1740", "head_code": "13", "branch_code": "2251", "branch_name": "學府分行" }
    ,
    { "id": "1741", "head_code": "13", "branch_code": "2262", "branch_name": "北新分行" }
    ,
    { "id": "1742", "head_code": "13", "branch_code": "2273", "branch_name": "長安簡易型分行" }
    ,
    { "id": "1743", "head_code": "13", "branch_code": "2295", "branch_name": "文德簡易分行" }
    ,
    { "id": "1744", "head_code": "13", "branch_code": "2310", "branch_name": "繼光分行" }
    ,
    { "id": "1745", "head_code": "13", "branch_code": "2321", "branch_name": "中台中分行" }
    ,
    { "id": "1746", "head_code": "13", "branch_code": "2332", "branch_name": "水湳分行" }
    ,
    { "id": "1747", "head_code": "13", "branch_code": "2343", "branch_name": "干城分行" }
    ,
    { "id": "1748", "head_code": "13", "branch_code": "2354", "branch_name": "東台中分行" }
    ,
    { "id": "1749", "head_code": "13", "branch_code": "2365", "branch_name": "國光分行" }
    ,
    { "id": "1750", "head_code": "13", "branch_code": "2376", "branch_name": "健行分行" }
    ,
    { "id": "1751", "head_code": "13", "branch_code": "2387", "branch_name": "港路分行" }
    ,
    { "id": "1752", "head_code": "13", "branch_code": "2398", "branch_name": "西屯分行" }
    ,
    { "id": "1753", "head_code": "13", "branch_code": "2402", "branch_name": "南屯分行" }
    ,
    { "id": "1754", "head_code": "13", "branch_code": "2413", "branch_name": "崇德分行" }
    ,
    { "id": "1755", "head_code": "13", "branch_code": "2424", "branch_name": "向上分行" }
    ,
    { "id": "1756", "head_code": "13", "branch_code": "2435", "branch_name": "大墩分行" }
    ,
    { "id": "1757", "head_code": "13", "branch_code": "2446", "branch_name": "北新竹分行" }
    ,
    { "id": "1758", "head_code": "13", "branch_code": "2457", "branch_name": "香山分行" }
    ,
    { "id": "1759", "head_code": "13", "branch_code": "2468", "branch_name": "竹北分行" }
    ,
    { "id": "1760", "head_code": "13", "branch_code": "2479", "branch_name": "竹蓮分行" }
    ,
    { "id": "1761", "head_code": "13", "branch_code": "2480", "branch_name": "大興分行" }
    ,
    { "id": "1762", "head_code": "13", "branch_code": "2491", "branch_name": "中彰分行" }
    ,
    { "id": "1763", "head_code": "13", "branch_code": "2505", "branch_name": "彰新分行" }
    ,
    { "id": "1764", "head_code": "13", "branch_code": "2516", "branch_name": "民族分行" }
    ,
    { "id": "1765", "head_code": "13", "branch_code": "2527", "branch_name": "秀水分行" }
    ,
    { "id": "1766", "head_code": "13", "branch_code": "2538", "branch_name": "彰城分行" }
    ,
    { "id": "1767", "head_code": "13", "branch_code": "2549", "branch_name": "彰美分行" }
    ,
    { "id": "1768", "head_code": "13", "branch_code": "2550", "branch_name": "太平分行" }
    ,
    { "id": "1769", "head_code": "13", "branch_code": "2561", "branch_name": "沙鹿分行" }
    ,
    { "id": "1770", "head_code": "13", "branch_code": "2572", "branch_name": "豐中分行" }
    ,
    { "id": "1771", "head_code": "13", "branch_code": "2583", "branch_name": "大里分行" }
    ,
    { "id": "1772", "head_code": "13", "branch_code": "2594", "branch_name": "北員林分行" }
    ,
    { "id": "1773", "head_code": "13", "branch_code": "2608", "branch_name": "文華分行" }
    ,
    { "id": "1774", "head_code": "13", "branch_code": "2619", "branch_name": "大雅分行" }
    ,
    { "id": "1775", "head_code": "13", "branch_code": "2620", "branch_name": "潭子分行" }
    ,
    { "id": "1776", "head_code": "13", "branch_code": "9001", "branch_name": "洛杉磯分行" }
    ,
    { "id": "1777", "head_code": "13", "branch_code": "9010", "branch_name": "馬來西亞納閩島分行" }
    ,
    { "id": "1778", "head_code": "13", "branch_code": "9021", "branch_name": "菲律賓代表人辦事處" }
    ,
    { "id": "1779", "head_code": "13", "branch_code": "9032", "branch_name": "泰國曼谷代表人辦事處" }
    ,
    { "id": "1780", "head_code": "13", "branch_code": "9043", "branch_name": "新加坡代表人辦事處" }
    ,
    { "id": "1781", "head_code": "13", "branch_code": "9054", "branch_name": "子行世越銀行" }
    ,
    { "id": "1782", "head_code": "13", "branch_code": "9205", "branch_name": "香港分行" }
    ,
    { "id": "1783", "head_code": "13", "branch_code": "9211", "branch_name": "吉隆坡行銷辦事處" }
    ,
    { "id": "1784", "head_code": "15", "branch_code": "19", "branch_name": "中國輸出入銀行" }
    ,
    { "id": "1785", "head_code": "15", "branch_code": "20", "branch_name": "風險管理處" }
    ,
    { "id": "1786", "head_code": "15", "branch_code": "31", "branch_name": "高雄分行" }
    ,
    { "id": "1787", "head_code": "15", "branch_code": "42", "branch_name": "台中分行" }
    ,
    { "id": "1788", "head_code": "15", "branch_code": "53", "branch_name": "國際金融業務分行" }
    ,
    { "id": "1789", "head_code": "15", "branch_code": "64", "branch_name": "台北分行" }
    ,
    { "id": "1790", "head_code": "15", "branch_code": "75", "branch_name": "財務部" }
    ,
    { "id": "1791", "head_code": "15", "branch_code": "9012", "branch_name": "雅加達代表辦事處" }
    ,
    { "id": "1792", "head_code": "15", "branch_code": "9023", "branch_name": "布達佩斯代表辦事處" }
    ,
    { "id": "1793", "head_code": "15", "branch_code": "9034", "branch_name": "中國輸銀波蘭華沙代表人辦事處" }
    ,
    { "id": "1794", "head_code": "15", "branch_code": "9045", "branch_name": "巴西聖保羅代表人辦事處" }
    ,
    { "id": "1795", "head_code": "16", "branch_code": "10", "branch_name": "敦化分行" }
    ,
    { "id": "1796", "head_code": "16", "branch_code": "250", "branch_name": "企業金融處" }
    ,
    { "id": "1797", "head_code": "16", "branch_code": "1017", "branch_name": "營業部" }
    ,
    { "id": "1798", "head_code": "16", "branch_code": "1028", "branch_name": "公庫部" }
    ,
    { "id": "1799", "head_code": "16", "branch_code": "1039", "branch_name": "七賢分行" }
    ,
    { "id": "1800", "head_code": "16", "branch_code": "1040", "branch_name": "國外部" }
    ,
    { "id": "1801", "head_code": "16", "branch_code": "1051", "branch_name": "信託部" }
    ,
    { "id": "1802", "head_code": "16", "branch_code": "2025", "branch_name": "前金分行" }
    ,
    { "id": "1803", "head_code": "16", "branch_code": "2036", "branch_name": "三民分行" }
    ,
    { "id": "1804", "head_code": "16", "branch_code": "2081", "branch_name": "左營分行" }
    ,
    { "id": "1805", "head_code": "16", "branch_code": "2106", "branch_name": "小港分行" }
    ,
    { "id": "1806", "head_code": "16", "branch_code": "2117", "branch_name": "桃園分行" }
    ,
    { "id": "1807", "head_code": "16", "branch_code": "2128", "branch_name": "前鎮分行" }
    ,
    { "id": "1808", "head_code": "16", "branch_code": "2139", "branch_name": "右昌分行" }
    ,
    { "id": "1809", "head_code": "16", "branch_code": "2140", "branch_name": "灣內分行" }
    ,
    { "id": "1810", "head_code": "16", "branch_code": "2151", "branch_name": "屏東分行" }
    ,
    { "id": "1811", "head_code": "16", "branch_code": "2162", "branch_name": "桂林分行" }
    ,
    { "id": "1812", "head_code": "16", "branch_code": "2173", "branch_name": "六合分行" }
    ,
    { "id": "1813", "head_code": "16", "branch_code": "2184", "branch_name": "楠梓分行" }
    ,
    { "id": "1814", "head_code": "16", "branch_code": "2195", "branch_name": "鼓山分行" }
    ,
    { "id": "1815", "head_code": "16", "branch_code": "2209", "branch_name": "建國分行" }
    ,
    { "id": "1816", "head_code": "16", "branch_code": "2210", "branch_name": "九如分行" }
    ,
    { "id": "1817", "head_code": "16", "branch_code": "2221", "branch_name": "鹽埕簡易型分行" }
    ,
    { "id": "1818", "head_code": "16", "branch_code": "2232", "branch_name": "草衙分行" }
    ,
    { "id": "1819", "head_code": "16", "branch_code": "2243", "branch_name": "文化中心分行" }
    ,
    { "id": "1820", "head_code": "16", "branch_code": "2254", "branch_name": "台南分行" }
    ,
    { "id": "1821", "head_code": "16", "branch_code": "2265", "branch_name": "三多分行" }
    ,
    { "id": "1822", "head_code": "16", "branch_code": "2276", "branch_name": "大發分行" }
    ,
    { "id": "1823", "head_code": "16", "branch_code": "2287", "branch_name": "大直分行" }
    ,
    { "id": "1824", "head_code": "16", "branch_code": "2298", "branch_name": "台中分行" }
    ,
    { "id": "1825", "head_code": "16", "branch_code": "2302", "branch_name": "國際金融業務分行" }
    ,
    { "id": "1826", "head_code": "16", "branch_code": "2313", "branch_name": "旗津分行" }
    ,
    { "id": "1827", "head_code": "16", "branch_code": "2324", "branch_name": "南高雄分行" }
    ,
    { "id": "1828", "head_code": "16", "branch_code": "2335", "branch_name": "大昌簡易型分行" }
    ,
    { "id": "1829", "head_code": "16", "branch_code": "2346", "branch_name": "新竹分行" }
    ,
    { "id": "1830", "head_code": "16", "branch_code": "2357", "branch_name": "市府分行" }
    ,
    { "id": "1831", "head_code": "16", "branch_code": "2379", "branch_name": "中和分行" }
    ,
    { "id": "1832", "head_code": "16", "branch_code": "2380", "branch_name": "台北分行" }
    ,
    { "id": "1833", "head_code": "16", "branch_code": "2405", "branch_name": "明誠分行" }
    ,
    { "id": "1834", "head_code": "16", "branch_code": "2416", "branch_name": "北高雄分行" }
    ,
    { "id": "1835", "head_code": "16", "branch_code": "2449", "branch_name": "鳳山分行" }
    ,
    { "id": "1836", "head_code": "16", "branch_code": "2450", "branch_name": "信義分行" }
    ,
    { "id": "1837", "head_code": "17", "branch_code": "11", "branch_name": "總管理處" }
    ,
    { "id": "1838", "head_code": "17", "branch_code": "22", "branch_name": "港都分行" }
    ,
    { "id": "1839", "head_code": "17", "branch_code": "33", "branch_name": "楠梓分行" }
    ,
    { "id": "1840", "head_code": "17", "branch_code": "44", "branch_name": "台中分行" }
    ,
    { "id": "1841", "head_code": "17", "branch_code": "55", "branch_name": "忠孝分行" }
    ,
    { "id": "1842", "head_code": "17", "branch_code": "66", "branch_name": "府城分行" }
    ,
    { "id": "1843", "head_code": "17", "branch_code": "77", "branch_name": "國外部" }
    ,
    { "id": "1844", "head_code": "17", "branch_code": "88", "branch_name": "台北復興分行" }
    ,
    { "id": "1845", "head_code": "17", "branch_code": "99", "branch_name": "個人金融處" }
    ,
    { "id": "1846", "head_code": "17", "branch_code": "103", "branch_name": "蘭雅分行" }
    ,
    { "id": "1847", "head_code": "17", "branch_code": "114", "branch_name": "財務管理部" }
    ,
    { "id": "1848", "head_code": "17", "branch_code": "125", "branch_name": "三重分行" }
    ,
    { "id": "1849", "head_code": "17", "branch_code": "136", "branch_name": "新興分行" }
    ,
    { "id": "1850", "head_code": "17", "branch_code": "147", "branch_name": "桃園分行" }
    ,
    { "id": "1851", "head_code": "17", "branch_code": "158", "branch_name": "中山分行" }
    ,
    { "id": "1852", "head_code": "17", "branch_code": "169", "branch_name": "高雄加工出口區分行" }
    ,
    { "id": "1853", "head_code": "17", "branch_code": "170", "branch_name": "城中分行" }
    ,
    { "id": "1854", "head_code": "17", "branch_code": "181", "branch_name": "北彰化分行" }
    ,
    { "id": "1855", "head_code": "17", "branch_code": "192", "branch_name": "安和分行" }
    ,
    { "id": "1856", "head_code": "17", "branch_code": "206", "branch_name": "竹科新安分行" }
    ,
    { "id": "1857", "head_code": "17", "branch_code": "217", "branch_name": "天母分行" }
    ,
    { "id": "1858", "head_code": "17", "branch_code": "228", "branch_name": "嘉義分行" }
    ,
    { "id": "1859", "head_code": "17", "branch_code": "239", "branch_name": "花蓮分行" }
    ,
    { "id": "1860", "head_code": "17", "branch_code": "240", "branch_name": "信託部" }
    ,
    { "id": "1861", "head_code": "17", "branch_code": "251", "branch_name": "國際金融業務分行" }
    ,
    { "id": "1862", "head_code": "17", "branch_code": "262", "branch_name": "北新竹分行" }
    ,
    { "id": "1863", "head_code": "17", "branch_code": "273", "branch_name": "板南分行" }
    ,
    { "id": "1864", "head_code": "17", "branch_code": "284", "branch_name": "潭子分行" }
    ,
    { "id": "1865", "head_code": "17", "branch_code": "295", "branch_name": "桃園國際機場分行" }
    ,
    { "id": "1866", "head_code": "17", "branch_code": "309", "branch_name": "南台北分行" }
    ,
    { "id": "1867", "head_code": "17", "branch_code": "310", "branch_name": "敦南分行" }
    ,
    { "id": "1868", "head_code": "17", "branch_code": "321", "branch_name": "員林分行" }
    ,
    { "id": "1869", "head_code": "17", "branch_code": "343", "branch_name": "永和分行" }
    ,
    { "id": "1870", "head_code": "17", "branch_code": "354", "branch_name": "豐原分行" }
    ,
    { "id": "1871", "head_code": "17", "branch_code": "365", "branch_name": "民生分行" }
    ,
    { "id": "1872", "head_code": "17", "branch_code": "376", "branch_name": "北台中分行" }
    ,
    { "id": "1873", "head_code": "17", "branch_code": "387", "branch_name": "三多分行" }
    ,
    { "id": "1874", "head_code": "17", "branch_code": "398", "branch_name": "中壢分行" }
    ,
    { "id": "1875", "head_code": "17", "branch_code": "402", "branch_name": "三民分行" }
    ,
    { "id": "1876", "head_code": "17", "branch_code": "413", "branch_name": "新莊分行" }
    ,
    { "id": "1877", "head_code": "17", "branch_code": "424", "branch_name": "松南分行" }
    ,
    { "id": "1878", "head_code": "17", "branch_code": "435", "branch_name": "大同分行" }
    ,
    { "id": "1879", "head_code": "17", "branch_code": "446", "branch_name": "南台中分行" }
    ,
    { "id": "1880", "head_code": "17", "branch_code": "457", "branch_name": "鳳山分行" }
    ,
    { "id": "1881", "head_code": "17", "branch_code": "468", "branch_name": "新店分行" }
    ,
    { "id": "1882", "head_code": "17", "branch_code": "479", "branch_name": "東高雄分行" }
    ,
    { "id": "1883", "head_code": "17", "branch_code": "480", "branch_name": "信義分行" }
    ,
    { "id": "1884", "head_code": "17", "branch_code": "491", "branch_name": "基隆分行" }
    ,
    { "id": "1885", "head_code": "17", "branch_code": "505", "branch_name": "永康分行" }
    ,
    { "id": "1886", "head_code": "17", "branch_code": "516", "branch_name": "內湖分行" }
    ,
    { "id": "1887", "head_code": "17", "branch_code": "527", "branch_name": "岡山分行" }
    ,
    { "id": "1888", "head_code": "17", "branch_code": "538", "branch_name": "屏東分行" }
    ,
    { "id": "1889", "head_code": "17", "branch_code": "549", "branch_name": "楠梓分行仁武辦事處" }
    ,
    { "id": "1890", "head_code": "17", "branch_code": "550", "branch_name": "兆豐國國際銀行松山機場分行" }
    ,
    { "id": "1891", "head_code": "17", "branch_code": "561", "branch_name": "土城分行" }
    ,
    { "id": "1892", "head_code": "17", "branch_code": "572", "branch_name": "大稻埕分行" }
    ,
    { "id": "1893", "head_code": "17", "branch_code": "583", "branch_name": "頭份分行" }
    ,
    { "id": "1894", "head_code": "17", "branch_code": "594", "branch_name": "苓雅分行" }
    ,
    { "id": "1895", "head_code": "17", "branch_code": "608", "branch_name": "沙鹿分行" }
    ,
    { "id": "1896", "head_code": "17", "branch_code": "619", "branch_name": "八德分行" }
    ,
    { "id": "1897", "head_code": "17", "branch_code": "620", "branch_name": "宜蘭分行" }
    ,
    { "id": "1898", "head_code": "17", "branch_code": "631", "branch_name": "斗六分行" }
    ,
    { "id": "1899", "head_code": "17", "branch_code": "642", "branch_name": "南投分行" }
    ,
    { "id": "1900", "head_code": "17", "branch_code": "653", "branch_name": "東台南分行" }
    ,
    { "id": "1901", "head_code": "17", "branch_code": "664", "branch_name": "小港國際機場分行" }
    ,
    { "id": "1902", "head_code": "17", "branch_code": "675", "branch_name": "東內湖分行" }
    ,
    { "id": "1903", "head_code": "17", "branch_code": "686", "branch_name": "太平分行" }
    ,
    { "id": "1904", "head_code": "17", "branch_code": "697", "branch_name": "中和分行" }
    ,
    { "id": "1905", "head_code": "17", "branch_code": "701", "branch_name": "南京東路分行" }
    ,
    { "id": "1906", "head_code": "17", "branch_code": "712", "branch_name": "東台中分行" }
    ,
    { "id": "1907", "head_code": "17", "branch_code": "723", "branch_name": "北高雄分行" }
    ,
    { "id": "1908", "head_code": "17", "branch_code": "745", "branch_name": "成功簡易型分行" }
    ,
    { "id": "1909", "head_code": "17", "branch_code": "756", "branch_name": "竹南簡易型分行" }
    ,
    { "id": "1910", "head_code": "17", "branch_code": "767", "branch_name": "中科簡易型分行" }
    ,
    { "id": "1911", "head_code": "17", "branch_code": "778", "branch_name": "大甲簡易型分行" }
    ,
    { "id": "1912", "head_code": "17", "branch_code": "789", "branch_name": "林森簡易型分行" }
    ,
    { "id": "1913", "head_code": "17", "branch_code": "815", "branch_name": "中鋼簡易型分行" }
    ,
    { "id": "1914", "head_code": "17", "branch_code": "837", "branch_name": "榮總簡易型分行" }
    ,
    { "id": "1915", "head_code": "17", "branch_code": "860", "branch_name": "駐外交部簡易型分行" }
    ,
    { "id": "1916", "head_code": "17", "branch_code": "1030", "branch_name": "仁武簡易型分行" }
    ,
    { "id": "1917", "head_code": "17", "branch_code": "1166", "branch_name": "高雄漁港簡易型銀行" }
    ,
    { "id": "1918", "head_code": "17", "branch_code": "1177", "branch_name": "城內簡易型分行" }
    ,
    { "id": "1919", "head_code": "17", "branch_code": "2015", "branch_name": "營業部" }
    ,
    { "id": "1920", "head_code": "17", "branch_code": "2026", "branch_name": "台北分行" }
    ,
    { "id": "1921", "head_code": "17", "branch_code": "2037", "branch_name": "新竹分行" }
    ,
    { "id": "1922", "head_code": "17", "branch_code": "2048", "branch_name": "中台中分行" }
    ,
    { "id": "1923", "head_code": "17", "branch_code": "2059", "branch_name": "高雄分行" }
    ,
    { "id": "1924", "head_code": "17", "branch_code": "2060", "branch_name": "板橋分行" }
    ,
    { "id": "1925", "head_code": "17", "branch_code": "2071", "branch_name": "桃興分行" }
    ,
    { "id": "1926", "head_code": "17", "branch_code": "2082", "branch_name": "東楠梓分行" }
    ,
    { "id": "1927", "head_code": "17", "branch_code": "2107", "branch_name": "敦化分行" }
    ,
    { "id": "1928", "head_code": "17", "branch_code": "2129", "branch_name": "嘉興分行" }
    ,
    { "id": "1929", "head_code": "17", "branch_code": "2130", "branch_name": "台南分行" }
    ,
    { "id": "1930", "head_code": "17", "branch_code": "2141", "branch_name": "台中港分行" }
    ,
    { "id": "1931", "head_code": "17", "branch_code": "2152", "branch_name": "竹科竹村分行" }
    ,
    { "id": "1932", "head_code": "17", "branch_code": "2163", "branch_name": "世貿分行" }
    ,
    { "id": "1933", "head_code": "17", "branch_code": "2196", "branch_name": "南三重分行" }
    ,
    { "id": "1934", "head_code": "17", "branch_code": "2200", "branch_name": "南彰化分行" }
    ,
    { "id": "1935", "head_code": "17", "branch_code": "2266", "branch_name": "城東分行" }
    ,
    { "id": "1936", "head_code": "17", "branch_code": "2277", "branch_name": "五福分行" }
    ,
    { "id": "1937", "head_code": "17", "branch_code": "2288", "branch_name": "羅東分行" }
    ,
    { "id": "1938", "head_code": "17", "branch_code": "2299", "branch_name": "大安分行" }
    ,
    { "id": "1939", "head_code": "17", "branch_code": "2314", "branch_name": "城北分行" }
    ,
    { "id": "1940", "head_code": "17", "branch_code": "2325", "branch_name": "南豐原分行" }
    ,
    { "id": "1941", "head_code": "17", "branch_code": "2336", "branch_name": "新生分行" }
    ,
    { "id": "1942", "head_code": "17", "branch_code": "2347", "branch_name": "文山分行" }
    ,
    { "id": "1943", "head_code": "17", "branch_code": "2358", "branch_name": "思源分行" }
    ,
    { "id": "1944", "head_code": "17", "branch_code": "2369", "branch_name": "北中壢分行" }
    ,
    { "id": "1945", "head_code": "17", "branch_code": "2370", "branch_name": "內湖科學園區分行" }
    ,
    { "id": "1946", "head_code": "17", "branch_code": "2381", "branch_name": "雙和分行" }
    ,
    { "id": "1947", "head_code": "17", "branch_code": "2406", "branch_name": "衡陽分行" }
    ,
    { "id": "1948", "head_code": "17", "branch_code": "2417", "branch_name": "北屯分行" }
    ,
    { "id": "1949", "head_code": "17", "branch_code": "2428", "branch_name": "台南科學園區分行" }
    ,
    { "id": "1950", "head_code": "17", "branch_code": "8006", "branch_name": "紐約分行" }
    ,
    { "id": "1951", "head_code": "17", "branch_code": "8017", "branch_name": "芝加哥分行" }
    ,
    { "id": "1952", "head_code": "17", "branch_code": "8028", "branch_name": "洛杉磯分行" }
    ,
    { "id": "1953", "head_code": "17", "branch_code": "8039", "branch_name": "巴拿馬分行" }
    ,
    { "id": "1954", "head_code": "17", "branch_code": "8040", "branch_name": "箇朗自由區分行" }
    ,
    { "id": "1955", "head_code": "17", "branch_code": "8051", "branch_name": "箇朗市區分行" }
    ,
    { "id": "1956", "head_code": "17", "branch_code": "8213", "branch_name": "曼谷分行" }
    ,
    { "id": "1957", "head_code": "17", "branch_code": "8224", "branch_name": "東京分行" }
    ,
    { "id": "1958", "head_code": "17", "branch_code": "8235", "branch_name": "大阪分行" }
    ,
    { "id": "1959", "head_code": "17", "branch_code": "8246", "branch_name": "新加坡分行" }
    ,
    { "id": "1960", "head_code": "17", "branch_code": "8257", "branch_name": "馬尼拉分行" }
    ,
    { "id": "1961", "head_code": "17", "branch_code": "8268", "branch_name": "蘇比克灣分行" }
    ,
    { "id": "1962", "head_code": "17", "branch_code": "8279", "branch_name": "加洛干分行" }
    ,
    { "id": "1963", "head_code": "17", "branch_code": "8280", "branch_name": "胡志明市分行" }
    ,
    { "id": "1964", "head_code": "17", "branch_code": "8291", "branch_name": "納閩分行" }
    ,
    { "id": "1965", "head_code": "17", "branch_code": "8464", "branch_name": "雪梨分行" }
    ,
    { "id": "1966", "head_code": "17", "branch_code": "8475", "branch_name": "布里斯本分行" }
    ,
    { "id": "1967", "head_code": "17", "branch_code": "8615", "branch_name": "巴黎分行" }
    ,
    { "id": "1968", "head_code": "17", "branch_code": "8626", "branch_name": "阿姆斯特丹" }
    ,
    { "id": "1969", "head_code": "17", "branch_code": "8763", "branch_name": "加拿大光華國際銀行多倫多總行" }
    ,
    { "id": "1970", "head_code": "17", "branch_code": "8774", "branch_name": "加拿大光華國際銀行溫哥華分行" }
    ,
    { "id": "1971", "head_code": "17", "branch_code": "8785", "branch_name": "加拿大光華國際銀行多倫多華埠分行" }
    ,
    { "id": "1972", "head_code": "17", "branch_code": "8796", "branch_name": "加拿大光華國際銀行列治文分行" }
    ,
    { "id": "1973", "head_code": "17", "branch_code": "8811", "branch_name": "子銀行歐華銀行" }
    ,
    { "id": "1974", "head_code": "17", "branch_code": "8914", "branch_name": "休士頓代表處" }
    ,
    { "id": "1975", "head_code": "17", "branch_code": "8925", "branch_name": "巴林代表處" }
    ,
    { "id": "1976", "head_code": "17", "branch_code": "8936", "branch_name": "印尼代表處" }
    ,
    { "id": "1977", "head_code": "17", "branch_code": "8947", "branch_name": "吉隆坡行銷辦事處" }
    ,
    { "id": "1978", "head_code": "17", "branch_code": "8958", "branch_name": "香港代表辦事處" }
    ,
    { "id": "1979", "head_code": "17", "branch_code": "8969", "branch_name": "馬其頓代表辦事處" }
    ,
    { "id": "1980", "head_code": "18", "branch_code": "12", "branch_name": "營業部" }
    ,
    { "id": "1981", "head_code": "20", "branch_code": "17", "branch_name": "台北分行" }
    ,
    { "id": "1982", "head_code": "20", "branch_code": "28", "branch_name": "高雄分行" }
    ,
    { "id": "1983", "head_code": "20", "branch_code": "39", "branch_name": "國際金融業務分行" }
    ,
    { "id": "1984", "head_code": "21", "branch_code": "18", "branch_name": "台北分行" }
    ,
    { "id": "1985", "head_code": "21", "branch_code": "29", "branch_name": "國際金融業務分行" }
    ,
    { "id": "1986", "head_code": "21", "branch_code": "30", "branch_name": "高雄分行" }
    ,
    { "id": "1987", "head_code": "21", "branch_code": "41", "branch_name": "台中分行" }
    ,
    { "id": "1988", "head_code": "21", "branch_code": "52", "branch_name": "新竹分行" }
    ,
    { "id": "1989", "head_code": "21", "branch_code": "63", "branch_name": "台南分行" }
    ,
    { "id": "1990", "head_code": "21", "branch_code": "74", "branch_name": "桃園分行" }
    ,
    { "id": "1991", "head_code": "21", "branch_code": "85", "branch_name": "松江分行" }
    ,
    { "id": "1992", "head_code": "21", "branch_code": "96", "branch_name": "板橋分行" }
    ,
    { "id": "1993", "head_code": "21", "branch_code": "100", "branch_name": "文心分行" }
    ,
    { "id": "1994", "head_code": "21", "branch_code": "111", "branch_name": "美商信義分行" }
    ,
    { "id": "1995", "head_code": "21", "branch_code": "122", "branch_name": "美商天母分行" }
    ,
    { "id": "1996", "head_code": "22", "branch_code": "19", "branch_name": "台北分行" }
    ,
    { "id": "1997", "head_code": "22", "branch_code": "20", "branch_name": "松山分行" }
    ,
    { "id": "1998", "head_code": "22", "branch_code": "31", "branch_name": "國際金融業務分行" }
    ,
    { "id": "1999", "head_code": "22", "branch_code": "42", "branch_name": "美商台中分行" }
    ,
    { "id": "2000", "head_code": "23", "branch_code": "10", "branch_name": "台北分行" }
    ,
    { "id": "2001", "head_code": "23", "branch_code": "21", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2002", "head_code": "23", "branch_code": "32", "branch_name": "高雄分行" }
    ,
    { "id": "2003", "head_code": "23", "branch_code": "43", "branch_name": "台中分行" }
    ,
    { "id": "2004", "head_code": "24", "branch_code": "11", "branch_name": "台北分行" }
    ,
    { "id": "2005", "head_code": "24", "branch_code": "22", "branch_name": "美商高雄分行" }
    ,
    { "id": "2006", "head_code": "24", "branch_code": "33", "branch_name": "美商國際金融業務分行" }
    ,
    { "id": "2007", "head_code": "25", "branch_code": "12", "branch_name": "台北分行" }
    ,
    { "id": "2008", "head_code": "25", "branch_code": "34", "branch_name": "台中分行" }
    ,
    { "id": "2009", "head_code": "25", "branch_code": "45", "branch_name": "菲商台南分行" }
    ,
    { "id": "2010", "head_code": "26", "branch_code": "13", "branch_name": "台北分行" }
    ,
    { "id": "2011", "head_code": "27", "branch_code": "14", "branch_name": "台北分行" }
    ,
    { "id": "2012", "head_code": "27", "branch_code": "25", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2013", "head_code": "28", "branch_code": "15", "branch_name": "台北分行" }
    ,
    { "id": "2014", "head_code": "28", "branch_code": "26", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2015", "head_code": "29", "branch_code": "5", "branch_name": "台北分行" }
    ,
    { "id": "2016", "head_code": "29", "branch_code": "16", "branch_name": "ＯＢＵ" }
    ,
    { "id": "2017", "head_code": "30", "branch_code": "10", "branch_name": "台北分行" }
    ,
    { "id": "2018", "head_code": "31", "branch_code": "22", "branch_name": "高雄分行" }
    ,
    { "id": "2019", "head_code": "32", "branch_code": "12", "branch_name": "台北分行" }
    ,
    { "id": "2020", "head_code": "34", "branch_code": "14", "branch_name": "台北分行" }
    ,
    { "id": "2021", "head_code": "34", "branch_code": "25", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2022", "head_code": "35", "branch_code": "15", "branch_name": "台北分行" }
    ,
    { "id": "2023", "head_code": "35", "branch_code": "26", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2024", "head_code": "37", "branch_code": "17", "branch_name": "台北分行" }
    ,
    { "id": "2025", "head_code": "37", "branch_code": "28", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2026", "head_code": "38", "branch_code": "18", "branch_name": "台北分行" }
    ,
    { "id": "2027", "head_code": "38", "branch_code": "29", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2028", "head_code": "39", "branch_code": "19", "branch_name": "台北分行" }
    ,
    { "id": "2029", "head_code": "39", "branch_code": "20", "branch_name": "高雄分行" }
    ,
    { "id": "2030", "head_code": "39", "branch_code": "31", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2031", "head_code": "39", "branch_code": "53", "branch_name": "松山分行" }
    ,
    { "id": "2032", "head_code": "39", "branch_code": "64", "branch_name": "台中分行" }
    ,
    { "id": "2033", "head_code": "39", "branch_code": "75", "branch_name": "板橋分行" }
    ,
    { "id": "2034", "head_code": "40", "branch_code": "13", "branch_name": "法人金融部" }
    ,
    { "id": "2035", "head_code": "40", "branch_code": "24", "branch_name": "高雄分行" }
    ,
    { "id": "2036", "head_code": "40", "branch_code": "35", "branch_name": "台中分行" }
    ,
    { "id": "2037", "head_code": "40", "branch_code": "79", "branch_name": "南港分行" }
    ,
    { "id": "2038", "head_code": "40", "branch_code": "80", "branch_name": "桃園分行" }
    ,
    { "id": "2039", "head_code": "40", "branch_code": "91", "branch_name": "信託部" }
    ,
    { "id": "2040", "head_code": "40", "branch_code": "105", "branch_name": "國外部" }
    ,
    { "id": "2041", "head_code": "48", "branch_code": "11", "branch_name": "營業部" }
    ,
    { "id": "2042", "head_code": "48", "branch_code": "22", "branch_name": "竹科分行" }
    ,
    { "id": "2043", "head_code": "48", "branch_code": "33", "branch_name": "高雄分行" }
    ,
    { "id": "2044", "head_code": "48", "branch_code": "540", "branch_name": "兼營證券商" }
    ,
    { "id": "2045", "head_code": "50", "branch_code": "16", "branch_name": "吉林分行" }
    ,
    { "id": "2046", "head_code": "50", "branch_code": "27", "branch_name": "中和分行" }
    ,
    { "id": "2047", "head_code": "50", "branch_code": "38", "branch_name": "博愛分行" }
    ,
    { "id": "2048", "head_code": "50", "branch_code": "49", "branch_name": "北桃園分行" }
    ,
    { "id": "2049", "head_code": "50", "branch_code": "50", "branch_name": "南崁分行" }
    ,
    { "id": "2050", "head_code": "50", "branch_code": "61", "branch_name": "西屯分行" }
    ,
    { "id": "2051", "head_code": "50", "branch_code": "72", "branch_name": "忠明分行" }
    ,
    { "id": "2052", "head_code": "50", "branch_code": "108", "branch_name": "營業部" }
    ,
    { "id": "2053", "head_code": "50", "branch_code": "119", "branch_name": "台灣省中小企業銀行大雅分行" }
    ,
    { "id": "2054", "head_code": "50", "branch_code": "120", "branch_name": "仁大分行" }
    ,
    { "id": "2055", "head_code": "50", "branch_code": "201", "branch_name": "仁愛分行" }
    ,
    { "id": "2056", "head_code": "50", "branch_code": "212", "branch_name": "松山分行" }
    ,
    { "id": "2057", "head_code": "50", "branch_code": "223", "branch_name": "建成分行" }
    ,
    { "id": "2058", "head_code": "50", "branch_code": "234", "branch_name": "士林分行" }
    ,
    { "id": "2059", "head_code": "50", "branch_code": "245", "branch_name": "永和分行" }
    ,
    { "id": "2060", "head_code": "50", "branch_code": "256", "branch_name": "新店分行" }
    ,
    { "id": "2061", "head_code": "50", "branch_code": "267", "branch_name": "新莊分行" }
    ,
    { "id": "2062", "head_code": "50", "branch_code": "278", "branch_name": "化成分行" }
    ,
    { "id": "2063", "head_code": "50", "branch_code": "304", "branch_name": "信託部" }
    ,
    { "id": "2064", "head_code": "50", "branch_code": "407", "branch_name": "松江分行" }
    ,
    { "id": "2065", "head_code": "50", "branch_code": "418", "branch_name": "國外營業部" }
    ,
    { "id": "2066", "head_code": "50", "branch_code": "500", "branch_name": "台北分行" }
    ,
    { "id": "2067", "head_code": "50", "branch_code": "603", "branch_name": "萬華分行" }
    ,
    { "id": "2068", "head_code": "50", "branch_code": "614", "branch_name": "南台北分行" }
    ,
    { "id": "2069", "head_code": "50", "branch_code": "706", "branch_name": "復興分行" }
    ,
    { "id": "2070", "head_code": "50", "branch_code": "809", "branch_name": "中山分行" }
    ,
    { "id": "2071", "head_code": "50", "branch_code": "810", "branch_name": "建國分行" }
    ,
    { "id": "2072", "head_code": "50", "branch_code": "821", "branch_name": "內湖分行" }
    ,
    { "id": "2073", "head_code": "50", "branch_code": "902", "branch_name": "南京東路分行" }
    ,
    { "id": "2074", "head_code": "50", "branch_code": "913", "branch_name": "徵信調查室" }
    ,
    { "id": "2075", "head_code": "50", "branch_code": "924", "branch_name": "業務部" }
    ,
    { "id": "2076", "head_code": "50", "branch_code": "1002", "branch_name": "忠孝分行" }
    ,
    { "id": "2077", "head_code": "50", "branch_code": "1013", "branch_name": "東台北分行" }
    ,
    { "id": "2078", "head_code": "50", "branch_code": "1024", "branch_name": "世貿分行" }
    ,
    { "id": "2079", "head_code": "50", "branch_code": "1035", "branch_name": "永春分行" }
    ,
    { "id": "2080", "head_code": "50", "branch_code": "1057", "branch_name": "南港分行" }
    ,
    { "id": "2081", "head_code": "50", "branch_code": "1105", "branch_name": "松南分行" }
    ,
    { "id": "2082", "head_code": "50", "branch_code": "1116", "branch_name": "東湖分行" }
    ,
    { "id": "2083", "head_code": "50", "branch_code": "1208", "branch_name": "大安分行" }
    ,
    { "id": "2084", "head_code": "50", "branch_code": "1219", "branch_name": "雙和分行" }
    ,
    { "id": "2085", "head_code": "50", "branch_code": "1220", "branch_name": "錦和分行" }
    ,
    { "id": "2086", "head_code": "50", "branch_code": "1301", "branch_name": "五股分行" }
    ,
    { "id": "2087", "head_code": "50", "branch_code": "1312", "branch_name": "林口分行" }
    ,
    { "id": "2088", "head_code": "50", "branch_code": "1404", "branch_name": "板橋分行" }
    ,
    { "id": "2089", "head_code": "50", "branch_code": "1415", "branch_name": "樹林分行" }
    ,
    { "id": "2090", "head_code": "50", "branch_code": "1426", "branch_name": "土城分行" }
    ,
    { "id": "2091", "head_code": "50", "branch_code": "1437", "branch_name": "迴龍分行" }
    ,
    { "id": "2092", "head_code": "50", "branch_code": "1448", "branch_name": "汐止分行" }
    ,
    { "id": "2093", "head_code": "50", "branch_code": "1507", "branch_name": "基隆分行" }
    ,
    { "id": "2094", "head_code": "50", "branch_code": "1518", "branch_name": "埔墘分行" }
    ,
    { "id": "2095", "head_code": "50", "branch_code": "1529", "branch_name": "北三重分行" }
    ,
    { "id": "2096", "head_code": "50", "branch_code": "1530", "branch_name": "南三重分行" }
    ,
    { "id": "2097", "head_code": "50", "branch_code": "1541", "branch_name": "蘆洲分行" }
    ,
    { "id": "2098", "head_code": "50", "branch_code": "1600", "branch_name": "宜蘭分行" }
    ,
    { "id": "2099", "head_code": "50", "branch_code": "1703", "branch_name": "羅東分行" }
    ,
    { "id": "2100", "head_code": "50", "branch_code": "1714", "branch_name": "蘇澳分行" }
    ,
    { "id": "2101", "head_code": "50", "branch_code": "2906", "branch_name": "楊梅分行" }
    ,
    { "id": "2102", "head_code": "50", "branch_code": "2917", "branch_name": "湖口分行" }
    ,
    { "id": "2103", "head_code": "50", "branch_code": "3006", "branch_name": "桃園分行" }
    ,
    { "id": "2104", "head_code": "50", "branch_code": "3017", "branch_name": "大園分行" }
    ,
    { "id": "2105", "head_code": "50", "branch_code": "3028", "branch_name": "大溪分行" }
    ,
    { "id": "2106", "head_code": "50", "branch_code": "3109", "branch_name": "中壢分行" }
    ,
    { "id": "2107", "head_code": "50", "branch_code": "3110", "branch_name": "內壢分行" }
    ,
    { "id": "2108", "head_code": "50", "branch_code": "3121", "branch_name": "新明分行" }
    ,
    { "id": "2109", "head_code": "50", "branch_code": "3132", "branch_name": "東桃園分行" }
    ,
    { "id": "2110", "head_code": "50", "branch_code": "3154", "branch_name": "新屋簡易型分行" }
    ,
    { "id": "2111", "head_code": "50", "branch_code": "3202", "branch_name": "新竹分行" }
    ,
    { "id": "2112", "head_code": "50", "branch_code": "3213", "branch_name": "竹北分行" }
    ,
    { "id": "2113", "head_code": "50", "branch_code": "3224", "branch_name": "竹科分行" }
    ,
    { "id": "2114", "head_code": "50", "branch_code": "3305", "branch_name": "八德分行" }
    ,
    { "id": "2115", "head_code": "50", "branch_code": "3327", "branch_name": "龍潭分行" }
    ,
    { "id": "2116", "head_code": "50", "branch_code": "3408", "branch_name": "竹東分行" }
    ,
    { "id": "2117", "head_code": "50", "branch_code": "3501", "branch_name": "竹南分行" }
    ,
    { "id": "2118", "head_code": "50", "branch_code": "3512", "branch_name": "頭份分行" }
    ,
    { "id": "2119", "head_code": "50", "branch_code": "3604", "branch_name": "苗栗分行" }
    ,
    { "id": "2120", "head_code": "50", "branch_code": "4601", "branch_name": "豐原分行" }
    ,
    { "id": "2121", "head_code": "50", "branch_code": "4704", "branch_name": "太平分行" }
    ,
    { "id": "2122", "head_code": "50", "branch_code": "4807", "branch_name": "大甲分行" }
    ,
    { "id": "2123", "head_code": "50", "branch_code": "4829", "branch_name": "沙鹿分行" }
    ,
    { "id": "2124", "head_code": "50", "branch_code": "4830", "branch_name": "烏日分行" }
    ,
    { "id": "2125", "head_code": "50", "branch_code": "4900", "branch_name": "台中分行" }
    ,
    { "id": "2126", "head_code": "50", "branch_code": "4911", "branch_name": "民權分行" }
    ,
    { "id": "2127", "head_code": "50", "branch_code": "5000", "branch_name": "興中分行" }
    ,
    { "id": "2128", "head_code": "50", "branch_code": "5011", "branch_name": "北屯分行" }
    ,
    { "id": "2129", "head_code": "50", "branch_code": "5103", "branch_name": "南投分行" }
    ,
    { "id": "2130", "head_code": "50", "branch_code": "5114", "branch_name": "草屯分行" }
    ,
    { "id": "2131", "head_code": "50", "branch_code": "5206", "branch_name": "埔里分行" }
    ,
    { "id": "2132", "head_code": "50", "branch_code": "5217", "branch_name": "潭子分行" }
    ,
    { "id": "2133", "head_code": "50", "branch_code": "5309", "branch_name": "竹山分行" }
    ,
    { "id": "2134", "head_code": "50", "branch_code": "5402", "branch_name": "彰化分行" }
    ,
    { "id": "2135", "head_code": "50", "branch_code": "5413", "branch_name": "和美分行" }
    ,
    { "id": "2136", "head_code": "50", "branch_code": "5505", "branch_name": "員林分行" }
    ,
    { "id": "2137", "head_code": "50", "branch_code": "5608", "branch_name": "北斗分行" }
    ,
    { "id": "2138", "head_code": "50", "branch_code": "5619", "branch_name": "二林分行" }
    ,
    { "id": "2139", "head_code": "50", "branch_code": "6605", "branch_name": "斗六分行" }
    ,
    { "id": "2140", "head_code": "50", "branch_code": "6708", "branch_name": "北港分行" }
    ,
    { "id": "2141", "head_code": "50", "branch_code": "6719", "branch_name": "虎尾分行" }
    ,
    { "id": "2142", "head_code": "50", "branch_code": "6801", "branch_name": "嘉義分行" }
    ,
    { "id": "2143", "head_code": "50", "branch_code": "6812", "branch_name": "民雄分行" }
    ,
    { "id": "2144", "head_code": "50", "branch_code": "6823", "branch_name": "南嘉義分行" }
    ,
    { "id": "2145", "head_code": "50", "branch_code": "6904", "branch_name": "新營分行" }
    ,
    { "id": "2146", "head_code": "50", "branch_code": "6915", "branch_name": "開元分行" }
    ,
    { "id": "2147", "head_code": "50", "branch_code": "7004", "branch_name": "永康分行" }
    ,
    { "id": "2148", "head_code": "50", "branch_code": "7015", "branch_name": "學甲分行" }
    ,
    { "id": "2149", "head_code": "50", "branch_code": "7026", "branch_name": "善化分行" }
    ,
    { "id": "2150", "head_code": "50", "branch_code": "7037", "branch_name": "永大分行" }
    ,
    { "id": "2151", "head_code": "50", "branch_code": "7107", "branch_name": "台南分行" }
    ,
    { "id": "2152", "head_code": "50", "branch_code": "7118", "branch_name": "仁德分行" }
    ,
    { "id": "2153", "head_code": "50", "branch_code": "7152", "branch_name": "正義簡易型分行" }
    ,
    { "id": "2154", "head_code": "50", "branch_code": "7200", "branch_name": "成功分行" }
    ,
    { "id": "2155", "head_code": "50", "branch_code": "7211", "branch_name": "東台南分行" }
    ,
    { "id": "2156", "head_code": "50", "branch_code": "7303", "branch_name": "安平分行" }
    ,
    { "id": "2157", "head_code": "50", "branch_code": "7602", "branch_name": "花蓮分行" }
    ,
    { "id": "2158", "head_code": "50", "branch_code": "7705", "branch_name": "台東分行" }
    ,
    { "id": "2159", "head_code": "50", "branch_code": "8207", "branch_name": "東高雄分行" }
    ,
    { "id": "2160", "head_code": "50", "branch_code": "8300", "branch_name": "岡山分行" }
    ,
    { "id": "2161", "head_code": "50", "branch_code": "8403", "branch_name": "北鳳山分行" }
    ,
    { "id": "2162", "head_code": "50", "branch_code": "8414", "branch_name": "苓雅分行" }
    ,
    { "id": "2163", "head_code": "50", "branch_code": "8506", "branch_name": "高雄分行" }
    ,
    { "id": "2164", "head_code": "50", "branch_code": "8517", "branch_name": "北高雄分行" }
    ,
    { "id": "2165", "head_code": "50", "branch_code": "8528", "branch_name": "大昌分行" }
    ,
    { "id": "2166", "head_code": "50", "branch_code": "8539", "branch_name": "前鎮分行" }
    ,
    { "id": "2167", "head_code": "50", "branch_code": "8609", "branch_name": "九如分行" }
    ,
    { "id": "2168", "head_code": "50", "branch_code": "8702", "branch_name": "三民分行" }
    ,
    { "id": "2169", "head_code": "50", "branch_code": "8805", "branch_name": "鳳山分行" }
    ,
    { "id": "2170", "head_code": "50", "branch_code": "8816", "branch_name": "大發分行" }
    ,
    { "id": "2171", "head_code": "50", "branch_code": "8908", "branch_name": "屏東分行" }
    ,
    { "id": "2172", "head_code": "50", "branch_code": "8919", "branch_name": "東港分行" }
    ,
    { "id": "2173", "head_code": "50", "branch_code": "8920", "branch_name": "潮州分行" }
    ,
    { "id": "2174", "head_code": "50", "branch_code": "8931", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2175", "head_code": "50", "branch_code": "9008", "branch_name": "洛杉磯分行" }
    ,
    { "id": "2176", "head_code": "50", "branch_code": "9019", "branch_name": "香港分行" }
    ,
    { "id": "2177", "head_code": "50", "branch_code": "9020", "branch_name": "雪梨分行" }
    ,
    { "id": "2178", "head_code": "50", "branch_code": "9031", "branch_name": "阿姆斯特丹表人辦事處" }
    ,
    { "id": "2179", "head_code": "52", "branch_code": "18", "branch_name": "營業部" }
    ,
    { "id": "2180", "head_code": "52", "branch_code": "30", "branch_name": "桃園分行" }
    ,
    { "id": "2181", "head_code": "52", "branch_code": "41", "branch_name": "中壢分行" }
    ,
    { "id": "2182", "head_code": "52", "branch_code": "52", "branch_name": "竹東分行" }
    ,
    { "id": "2183", "head_code": "52", "branch_code": "63", "branch_name": "竹南分行" }
    ,
    { "id": "2184", "head_code": "52", "branch_code": "74", "branch_name": "苗栗分行" }
    ,
    { "id": "2185", "head_code": "52", "branch_code": "85", "branch_name": "新埔分行" }
    ,
    { "id": "2186", "head_code": "52", "branch_code": "96", "branch_name": "頭份分行" }
    ,
    { "id": "2187", "head_code": "52", "branch_code": "100", "branch_name": "大溪分行" }
    ,
    { "id": "2188", "head_code": "52", "branch_code": "111", "branch_name": "楊梅分行" }
    ,
    { "id": "2189", "head_code": "52", "branch_code": "122", "branch_name": "新屋分行" }
    ,
    { "id": "2190", "head_code": "52", "branch_code": "133", "branch_name": "湖口分行" }
    ,
    { "id": "2191", "head_code": "52", "branch_code": "144", "branch_name": "苑裡分行" }
    ,
    { "id": "2192", "head_code": "52", "branch_code": "155", "branch_name": "大園分行" }
    ,
    { "id": "2193", "head_code": "52", "branch_code": "166", "branch_name": "龍潭分行" }
    ,
    { "id": "2194", "head_code": "52", "branch_code": "177", "branch_name": "竹北分行" }
    ,
    { "id": "2195", "head_code": "52", "branch_code": "188", "branch_name": "卓蘭分行" }
    ,
    { "id": "2196", "head_code": "52", "branch_code": "199", "branch_name": "三民分行" }
    ,
    { "id": "2197", "head_code": "52", "branch_code": "203", "branch_name": "內壢分行" }
    ,
    { "id": "2198", "head_code": "52", "branch_code": "214", "branch_name": "八德分行" }
    ,
    { "id": "2199", "head_code": "52", "branch_code": "225", "branch_name": "新明分行" }
    ,
    { "id": "2200", "head_code": "52", "branch_code": "236", "branch_name": "永安分行" }
    ,
    { "id": "2201", "head_code": "52", "branch_code": "247", "branch_name": "公館分行" }
    ,
    { "id": "2202", "head_code": "52", "branch_code": "258", "branch_name": "通霄分行" }
    ,
    { "id": "2203", "head_code": "52", "branch_code": "269", "branch_name": "後龍分行" }
    ,
    { "id": "2204", "head_code": "52", "branch_code": "270", "branch_name": "龜山分行" }
    ,
    { "id": "2205", "head_code": "52", "branch_code": "281", "branch_name": "南崁分行" }
    ,
    { "id": "2206", "head_code": "52", "branch_code": "292", "branch_name": "新竹分行" }
    ,
    { "id": "2207", "head_code": "52", "branch_code": "306", "branch_name": "關西分行" }
    ,
    { "id": "2208", "head_code": "52", "branch_code": "317", "branch_name": "大樹林分行" }
    ,
    { "id": "2209", "head_code": "52", "branch_code": "328", "branch_name": "光復簡易型分行" }
    ,
    { "id": "2210", "head_code": "52", "branch_code": "351", "branch_name": "龍岡分行" }
    ,
    { "id": "2211", "head_code": "52", "branch_code": "362", "branch_name": "山子頂分行" }
    ,
    { "id": "2212", "head_code": "52", "branch_code": "373", "branch_name": "埔心分行" }
    ,
    { "id": "2213", "head_code": "52", "branch_code": "384", "branch_name": "新豐分行" }
    ,
    { "id": "2214", "head_code": "52", "branch_code": "410", "branch_name": "三義分行" }
    ,
    { "id": "2215", "head_code": "52", "branch_code": "421", "branch_name": "新莊簡易型分行" }
    ,
    { "id": "2216", "head_code": "52", "branch_code": "432", "branch_name": "竹蓮簡易型分行" }
    ,
    { "id": "2217", "head_code": "52", "branch_code": "443", "branch_name": "北苗分行" }
    ,
    { "id": "2218", "head_code": "52", "branch_code": "454", "branch_name": "中正簡易型分行" }
    ,
    { "id": "2219", "head_code": "52", "branch_code": "465", "branch_name": "會稽分行" }
    ,
    { "id": "2220", "head_code": "52", "branch_code": "476", "branch_name": "環北分行" }
    ,
    { "id": "2221", "head_code": "52", "branch_code": "487", "branch_name": "瑞豐簡易型分行" }
    ,
    { "id": "2222", "head_code": "52", "branch_code": "498", "branch_name": "延平簡易型分行" }
    ,
    { "id": "2223", "head_code": "52", "branch_code": "502", "branch_name": "大湖分行" }
    ,
    { "id": "2224", "head_code": "52", "branch_code": "513", "branch_name": "新興分行" }
    ,
    { "id": "2225", "head_code": "52", "branch_code": "524", "branch_name": "新社分行" }
    ,
    { "id": "2226", "head_code": "52", "branch_code": "535", "branch_name": "東門簡易型分行" }
    ,
    { "id": "2227", "head_code": "52", "branch_code": "546", "branch_name": "科學園區分行" }
    ,
    { "id": "2228", "head_code": "52", "branch_code": "557", "branch_name": "新坡分行" }
    ,
    { "id": "2229", "head_code": "52", "branch_code": "568", "branch_name": "銅鑼簡易型分行" }
    ,
    { "id": "2230", "head_code": "52", "branch_code": "579", "branch_name": "北新竹分行" }
    ,
    { "id": "2231", "head_code": "52", "branch_code": "591", "branch_name": "平鎮簡易型分行" }
    ,
    { "id": "2232", "head_code": "52", "branch_code": "605", "branch_name": "國外部" }
    ,
    { "id": "2233", "head_code": "52", "branch_code": "616", "branch_name": "大竹分行" }
    ,
    { "id": "2234", "head_code": "52", "branch_code": "627", "branch_name": "中原簡易型分行" }
    ,
    { "id": "2235", "head_code": "52", "branch_code": "638", "branch_name": "三姓橋簡易型分行" }
    ,
    { "id": "2236", "head_code": "52", "branch_code": "649", "branch_name": "東內壢分行" }
    ,
    { "id": "2237", "head_code": "52", "branch_code": "650", "branch_name": "信託部" }
    ,
    { "id": "2238", "head_code": "52", "branch_code": "661", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2239", "head_code": "52", "branch_code": "672", "branch_name": "建國簡易型分行" }
    ,
    { "id": "2240", "head_code": "52", "branch_code": "683", "branch_name": "公西分行" }
    ,
    { "id": "2241", "head_code": "52", "branch_code": "694", "branch_name": "金陵分行" }
    ,
    { "id": "2242", "head_code": "52", "branch_code": "708", "branch_name": "莊敬簡易型分行" }
    ,
    { "id": "2243", "head_code": "52", "branch_code": "719", "branch_name": "板橋簡易型分行" }
    ,
    { "id": "2244", "head_code": "52", "branch_code": "720", "branch_name": "蘆洲簡易型分行" }
    ,
    { "id": "2245", "head_code": "52", "branch_code": "731", "branch_name": "豐原分行" }
    ,
    { "id": "2246", "head_code": "52", "branch_code": "742", "branch_name": "台中分行" }
    ,
    { "id": "2247", "head_code": "52", "branch_code": "753", "branch_name": "內湖分行" }
    ,
    { "id": "2248", "head_code": "52", "branch_code": "764", "branch_name": "高雄分行" }
    ,
    { "id": "2249", "head_code": "52", "branch_code": "775", "branch_name": "台南分行" }
    ,
    { "id": "2250", "head_code": "52", "branch_code": "786", "branch_name": "嘉義分行" }
    ,
    { "id": "2251", "head_code": "52", "branch_code": "797", "branch_name": "黎明分行" }
    ,
    { "id": "2252", "head_code": "52", "branch_code": "801", "branch_name": "神岡分行" }
    ,
    { "id": "2253", "head_code": "52", "branch_code": "812", "branch_name": "新竹國際商銀行東寧分行" }
    ,
    { "id": "2254", "head_code": "52", "branch_code": "823", "branch_name": "東海分行" }
    ,
    { "id": "2255", "head_code": "52", "branch_code": "834", "branch_name": "崇德分行" }
    ,
    { "id": "2256", "head_code": "52", "branch_code": "845", "branch_name": "士林簡易型分行" }
    ,
    { "id": "2257", "head_code": "52", "branch_code": "856", "branch_name": "永和簡易型分行" }
    ,
    { "id": "2258", "head_code": "52", "branch_code": "867", "branch_name": "中和分行" }
    ,
    { "id": "2259", "head_code": "52", "branch_code": "878", "branch_name": "北屯分行" }
    ,
    { "id": "2260", "head_code": "52", "branch_code": "889", "branch_name": "西屯分行" }
    ,
    { "id": "2261", "head_code": "52", "branch_code": "890", "branch_name": "大里分行" }
    ,
    { "id": "2262", "head_code": "52", "branch_code": "926", "branch_name": "彰化分行" }
    ,
    { "id": "2263", "head_code": "52", "branch_code": "937", "branch_name": "員林分行" }
    ,
    { "id": "2264", "head_code": "52", "branch_code": "948", "branch_name": "鳳山分行" }
    ,
    { "id": "2265", "head_code": "52", "branch_code": "959", "branch_name": "台北分行" }
    ,
    { "id": "2266", "head_code": "52", "branch_code": "960", "branch_name": "北高雄分行" }
    ,
    { "id": "2267", "head_code": "53", "branch_code": "8", "branch_name": "台中銀行" }
    ,
    { "id": "2268", "head_code": "53", "branch_code": "19", "branch_name": "中正分行" }
    ,
    { "id": "2269", "head_code": "53", "branch_code": "20", "branch_name": "營業部" }
    ,
    { "id": "2270", "head_code": "53", "branch_code": "31", "branch_name": "台中分行" }
    ,
    { "id": "2271", "head_code": "53", "branch_code": "42", "branch_name": "南台中分行" }
    ,
    { "id": "2272", "head_code": "53", "branch_code": "53", "branch_name": "霧峰分行" }
    ,
    { "id": "2273", "head_code": "53", "branch_code": "64", "branch_name": "大甲分行" }
    ,
    { "id": "2274", "head_code": "53", "branch_code": "75", "branch_name": "沙鹿分行" }
    ,
    { "id": "2275", "head_code": "53", "branch_code": "86", "branch_name": "豐原分行" }
    ,
    { "id": "2276", "head_code": "53", "branch_code": "97", "branch_name": "東勢分行" }
    ,
    { "id": "2277", "head_code": "53", "branch_code": "101", "branch_name": "彰化分行" }
    ,
    { "id": "2278", "head_code": "53", "branch_code": "112", "branch_name": "溪湖分行" }
    ,
    { "id": "2279", "head_code": "53", "branch_code": "123", "branch_name": "員林分行" }
    ,
    { "id": "2280", "head_code": "53", "branch_code": "134", "branch_name": "田中分行" }
    ,
    { "id": "2281", "head_code": "53", "branch_code": "145", "branch_name": "北斗分行" }
    ,
    { "id": "2282", "head_code": "53", "branch_code": "156", "branch_name": "二林分行" }
    ,
    { "id": "2283", "head_code": "53", "branch_code": "167", "branch_name": "南投分行" }
    ,
    { "id": "2284", "head_code": "53", "branch_code": "178", "branch_name": "水里分行" }
    ,
    { "id": "2285", "head_code": "53", "branch_code": "189", "branch_name": "草屯分行" }
    ,
    { "id": "2286", "head_code": "53", "branch_code": "190", "branch_name": "竹山分行" }
    ,
    { "id": "2287", "head_code": "53", "branch_code": "204", "branch_name": "埔里分行" }
    ,
    { "id": "2288", "head_code": "53", "branch_code": "215", "branch_name": "鹿港分行" }
    ,
    { "id": "2289", "head_code": "53", "branch_code": "226", "branch_name": "西台中分行" }
    ,
    { "id": "2290", "head_code": "53", "branch_code": "237", "branch_name": "清水分行" }
    ,
    { "id": "2291", "head_code": "53", "branch_code": "248", "branch_name": "東豐原分行" }
    ,
    { "id": "2292", "head_code": "53", "branch_code": "259", "branch_name": "烏日分行" }
    ,
    { "id": "2293", "head_code": "53", "branch_code": "260", "branch_name": "審查部" }
    ,
    { "id": "2294", "head_code": "53", "branch_code": "271", "branch_name": "北台中分行" }
    ,
    { "id": "2295", "head_code": "53", "branch_code": "282", "branch_name": "東台中分行" }
    ,
    { "id": "2296", "head_code": "53", "branch_code": "293", "branch_name": "北屯分行" }
    ,
    { "id": "2297", "head_code": "53", "branch_code": "307", "branch_name": "南豐原分行" }
    ,
    { "id": "2298", "head_code": "53", "branch_code": "318", "branch_name": "和美分行" }
    ,
    { "id": "2299", "head_code": "53", "branch_code": "329", "branch_name": "大里分行" }
    ,
    { "id": "2300", "head_code": "53", "branch_code": "330", "branch_name": "西屯分行" }
    ,
    { "id": "2301", "head_code": "53", "branch_code": "341", "branch_name": "太平分行" }
    ,
    { "id": "2302", "head_code": "53", "branch_code": "352", "branch_name": "芬園分行" }
    ,
    { "id": "2303", "head_code": "53", "branch_code": "363", "branch_name": "大雅分行" }
    ,
    { "id": "2304", "head_code": "53", "branch_code": "374", "branch_name": "后里分行" }
    ,
    { "id": "2305", "head_code": "53", "branch_code": "385", "branch_name": "潭子分行" }
    ,
    { "id": "2306", "head_code": "53", "branch_code": "396", "branch_name": "社頭分行" }
    ,
    { "id": "2307", "head_code": "53", "branch_code": "400", "branch_name": "永靖分行" }
    ,
    { "id": "2308", "head_code": "53", "branch_code": "411", "branch_name": "花壇分行" }
    ,
    { "id": "2309", "head_code": "53", "branch_code": "422", "branch_name": "秀水分行" }
    ,
    { "id": "2310", "head_code": "53", "branch_code": "433", "branch_name": "名間分行" }
    ,
    { "id": "2311", "head_code": "53", "branch_code": "444", "branch_name": "南屯分行" }
    ,
    { "id": "2312", "head_code": "53", "branch_code": "455", "branch_name": "大肚分行" }
    ,
    { "id": "2313", "head_code": "53", "branch_code": "466", "branch_name": "神岡分行" }
    ,
    { "id": "2314", "head_code": "53", "branch_code": "477", "branch_name": "內新分行" }
    ,
    { "id": "2315", "head_code": "53", "branch_code": "488", "branch_name": "伸港分行" }
    ,
    { "id": "2316", "head_code": "53", "branch_code": "499", "branch_name": "北太平分行" }
    ,
    { "id": "2317", "head_code": "53", "branch_code": "503", "branch_name": "台中港分行" }
    ,
    { "id": "2318", "head_code": "53", "branch_code": "514", "branch_name": "北員林分行" }
    ,
    { "id": "2319", "head_code": "53", "branch_code": "525", "branch_name": "南陽分行" }
    ,
    { "id": "2320", "head_code": "53", "branch_code": "536", "branch_name": "大竹分行" }
    ,
    { "id": "2321", "head_code": "53", "branch_code": "547", "branch_name": "鹿谷分行" }
    ,
    { "id": "2322", "head_code": "53", "branch_code": "558", "branch_name": "崇德分行" }
    ,
    { "id": "2323", "head_code": "53", "branch_code": "569", "branch_name": "健行分行" }
    ,
    { "id": "2324", "head_code": "53", "branch_code": "570", "branch_name": "埤頭分行" }
    ,
    { "id": "2325", "head_code": "53", "branch_code": "581", "branch_name": "四民分行" }
    ,
    { "id": "2326", "head_code": "53", "branch_code": "592", "branch_name": "軍功分行" }
    ,
    { "id": "2327", "head_code": "53", "branch_code": "606", "branch_name": "向上分行" }
    ,
    { "id": "2328", "head_code": "53", "branch_code": "617", "branch_name": "大慶分行" }
    ,
    { "id": "2329", "head_code": "53", "branch_code": "628", "branch_name": "信託部" }
    ,
    { "id": "2330", "head_code": "53", "branch_code": "639", "branch_name": "松竹分行" }
    ,
    { "id": "2331", "head_code": "53", "branch_code": "640", "branch_name": "外埔分行" }
    ,
    { "id": "2332", "head_code": "53", "branch_code": "651", "branch_name": "國光分行" }
    ,
    { "id": "2333", "head_code": "53", "branch_code": "662", "branch_name": "埔心分行" }
    ,
    { "id": "2334", "head_code": "53", "branch_code": "673", "branch_name": "國外部" }
    ,
    { "id": "2335", "head_code": "53", "branch_code": "684", "branch_name": "台北分行" }
    ,
    { "id": "2336", "head_code": "53", "branch_code": "695", "branch_name": "十九甲簡易型分行" }
    ,
    { "id": "2337", "head_code": "53", "branch_code": "709", "branch_name": "埔鹽分行" }
    ,
    { "id": "2338", "head_code": "53", "branch_code": "710", "branch_name": "松山分行" }
    ,
    { "id": "2339", "head_code": "53", "branch_code": "721", "branch_name": "三重分行" }
    ,
    { "id": "2340", "head_code": "53", "branch_code": "732", "branch_name": "高雄分行" }
    ,
    { "id": "2341", "head_code": "53", "branch_code": "743", "branch_name": "東大雅分行" }
    ,
    { "id": "2342", "head_code": "53", "branch_code": "754", "branch_name": "龍井分行" }
    ,
    { "id": "2343", "head_code": "53", "branch_code": "765", "branch_name": "西溪湖分行" }
    ,
    { "id": "2344", "head_code": "53", "branch_code": "776", "branch_name": "林口分行" }
    ,
    { "id": "2345", "head_code": "53", "branch_code": "787", "branch_name": "虎尾分行" }
    ,
    { "id": "2346", "head_code": "53", "branch_code": "798", "branch_name": "苑裡分行" }
    ,
    { "id": "2347", "head_code": "53", "branch_code": "802", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2348", "head_code": "53", "branch_code": "813", "branch_name": "斗南分行" }
    ,
    { "id": "2349", "head_code": "53", "branch_code": "824", "branch_name": "竹南分行" }
    ,
    { "id": "2350", "head_code": "53", "branch_code": "835", "branch_name": "逢甲簡易型分行" }
    ,
    { "id": "2351", "head_code": "53", "branch_code": "846", "branch_name": "內湖分行" }
    ,
    { "id": "2352", "head_code": "53", "branch_code": "857", "branch_name": "鳳山分行" }
    ,
    { "id": "2353", "head_code": "53", "branch_code": "868", "branch_name": "板橋分行" }
    ,
    { "id": "2354", "head_code": "53", "branch_code": "879", "branch_name": "平鎮分行" }
    ,
    { "id": "2355", "head_code": "53", "branch_code": "880", "branch_name": "新莊分行" }
    ,
    { "id": "2356", "head_code": "54", "branch_code": "10", "branch_name": "營業部" }
    ,
    { "id": "2357", "head_code": "54", "branch_code": "21", "branch_name": "民生分行" }
    ,
    { "id": "2358", "head_code": "54", "branch_code": "32", "branch_name": "台南分行" }
    ,
    { "id": "2359", "head_code": "54", "branch_code": "43", "branch_name": "嘉義分行" }
    ,
    { "id": "2360", "head_code": "54", "branch_code": "54", "branch_name": "新營分行" }
    ,
    { "id": "2361", "head_code": "54", "branch_code": "65", "branch_name": "鹽水分行" }
    ,
    { "id": "2362", "head_code": "54", "branch_code": "76", "branch_name": "虎尾分行" }
    ,
    { "id": "2363", "head_code": "54", "branch_code": "87", "branch_name": "斗六分行" }
    ,
    { "id": "2364", "head_code": "54", "branch_code": "98", "branch_name": "民雄分行" }
    ,
    { "id": "2365", "head_code": "54", "branch_code": "102", "branch_name": "北港分行" }
    ,
    { "id": "2366", "head_code": "54", "branch_code": "113", "branch_name": "麻豆分行" }
    ,
    { "id": "2367", "head_code": "54", "branch_code": "124", "branch_name": "朴子分行" }
    ,
    { "id": "2368", "head_code": "54", "branch_code": "135", "branch_name": "佳里分行" }
    ,
    { "id": "2369", "head_code": "54", "branch_code": "146", "branch_name": "梅山分行" }
    ,
    { "id": "2370", "head_code": "54", "branch_code": "157", "branch_name": "斗南分行" }
    ,
    { "id": "2371", "head_code": "54", "branch_code": "168", "branch_name": "業務部" }
    ,
    { "id": "2372", "head_code": "54", "branch_code": "179", "branch_name": "南嘉義分行" }
    ,
    { "id": "2373", "head_code": "54", "branch_code": "180", "branch_name": "東台南分行" }
    ,
    { "id": "2374", "head_code": "54", "branch_code": "191", "branch_name": "西台南分行" }
    ,
    { "id": "2375", "head_code": "54", "branch_code": "205", "branch_name": "北台南分行" }
    ,
    { "id": "2376", "head_code": "54", "branch_code": "216", "branch_name": "博愛分行" }
    ,
    { "id": "2377", "head_code": "54", "branch_code": "227", "branch_name": "西螺分行" }
    ,
    { "id": "2378", "head_code": "54", "branch_code": "238", "branch_name": "大同分行" }
    ,
    { "id": "2379", "head_code": "54", "branch_code": "249", "branch_name": "善化分行" }
    ,
    { "id": "2380", "head_code": "54", "branch_code": "250", "branch_name": "學甲分行" }
    ,
    { "id": "2381", "head_code": "54", "branch_code": "261", "branch_name": "南台南分行" }
    ,
    { "id": "2382", "head_code": "54", "branch_code": "272", "branch_name": "開元分行" }
    ,
    { "id": "2383", "head_code": "54", "branch_code": "283", "branch_name": "永康分行" }
    ,
    { "id": "2384", "head_code": "54", "branch_code": "294", "branch_name": "新市分行" }
    ,
    { "id": "2385", "head_code": "54", "branch_code": "308", "branch_name": "仁德分行" }
    ,
    { "id": "2386", "head_code": "54", "branch_code": "319", "branch_name": "六甲分行" }
    ,
    { "id": "2387", "head_code": "54", "branch_code": "320", "branch_name": "安南分行" }
    ,
    { "id": "2388", "head_code": "54", "branch_code": "331", "branch_name": "中埔分行" }
    ,
    { "id": "2389", "head_code": "54", "branch_code": "342", "branch_name": "崙背分行" }
    ,
    { "id": "2390", "head_code": "54", "branch_code": "353", "branch_name": "西港分行" }
    ,
    { "id": "2391", "head_code": "54", "branch_code": "364", "branch_name": "新化分行" }
    ,
    { "id": "2392", "head_code": "54", "branch_code": "375", "branch_name": "竹崎分行" }
    ,
    { "id": "2393", "head_code": "54", "branch_code": "386", "branch_name": "信託部" }
    ,
    { "id": "2394", "head_code": "54", "branch_code": "397", "branch_name": "安和分行" }
    ,
    { "id": "2395", "head_code": "54", "branch_code": "401", "branch_name": "新興分行" }
    ,
    { "id": "2396", "head_code": "54", "branch_code": "412", "branch_name": "中華分行" }
    ,
    { "id": "2397", "head_code": "54", "branch_code": "423", "branch_name": "復興分行" }
    ,
    { "id": "2398", "head_code": "54", "branch_code": "434", "branch_name": "白河分行" }
    ,
    { "id": "2399", "head_code": "54", "branch_code": "445", "branch_name": "興業分行" }
    ,
    { "id": "2400", "head_code": "54", "branch_code": "467", "branch_name": "水上分行" }
    ,
    { "id": "2401", "head_code": "54", "branch_code": "489", "branch_name": "府城分行" }
    ,
    { "id": "2402", "head_code": "54", "branch_code": "504", "branch_name": "歸仁分行" }
    ,
    { "id": "2403", "head_code": "54", "branch_code": "515", "branch_name": "鹽行分行" }
    ,
    { "id": "2404", "head_code": "54", "branch_code": "537", "branch_name": "台北分行" }
    ,
    { "id": "2405", "head_code": "54", "branch_code": "548", "branch_name": "大林分行" }
    ,
    { "id": "2406", "head_code": "54", "branch_code": "607", "branch_name": "關廟分行" }
    ,
    { "id": "2407", "head_code": "54", "branch_code": "618", "branch_name": "大橋分行" }
    ,
    { "id": "2408", "head_code": "54", "branch_code": "641", "branch_name": "太保分行" }
    ,
    { "id": "2409", "head_code": "54", "branch_code": "652", "branch_name": "蘆洲分行" }
    ,
    { "id": "2410", "head_code": "54", "branch_code": "663", "branch_name": "玉井分行" }
    ,
    { "id": "2411", "head_code": "54", "branch_code": "674", "branch_name": "國外部" }
    ,
    { "id": "2412", "head_code": "54", "branch_code": "696", "branch_name": "高雄分行" }
    ,
    { "id": "2413", "head_code": "54", "branch_code": "700", "branch_name": "台中分行" }
    ,
    { "id": "2414", "head_code": "54", "branch_code": "711", "branch_name": "內湖分行" }
    ,
    { "id": "2415", "head_code": "54", "branch_code": "733", "branch_name": "豐原分行" }
    ,
    { "id": "2416", "head_code": "54", "branch_code": "744", "branch_name": "桃園分行" }
    ,
    { "id": "2417", "head_code": "54", "branch_code": "755", "branch_name": "雙和銀行" }
    ,
    { "id": "2418", "head_code": "54", "branch_code": "766", "branch_name": "岡山分行" }
    ,
    { "id": "2419", "head_code": "54", "branch_code": "777", "branch_name": "中正分行" }
    ,
    { "id": "2420", "head_code": "54", "branch_code": "788", "branch_name": "忠孝分行" }
    ,
    { "id": "2421", "head_code": "54", "branch_code": "799", "branch_name": "北高雄分行" }
    ,
    { "id": "2422", "head_code": "54", "branch_code": "803", "branch_name": "五甲分行" }
    ,
    { "id": "2423", "head_code": "54", "branch_code": "814", "branch_name": "板橋分行" }
    ,
    { "id": "2424", "head_code": "54", "branch_code": "825", "branch_name": "文心分行" }
    ,
    { "id": "2425", "head_code": "56", "branch_code": "12", "branch_name": "總行" }
    ,
    { "id": "2426", "head_code": "56", "branch_code": "23", "branch_name": "營業部" }
    ,
    { "id": "2427", "head_code": "56", "branch_code": "34", "branch_name": "鳳林分行" }
    ,
    { "id": "2428", "head_code": "56", "branch_code": "45", "branch_name": "光復分行" }
    ,
    { "id": "2429", "head_code": "56", "branch_code": "56", "branch_name": "玉里分行" }
    ,
    { "id": "2430", "head_code": "56", "branch_code": "67", "branch_name": "台中分行" }
    ,
    { "id": "2431", "head_code": "56", "branch_code": "78", "branch_name": "桃園分行" }
    ,
    { "id": "2432", "head_code": "56", "branch_code": "89", "branch_name": "瑞穗分行" }
    ,
    { "id": "2433", "head_code": "56", "branch_code": "90", "branch_name": "雙和分行" }
    ,
    { "id": "2434", "head_code": "56", "branch_code": "104", "branch_name": "中山路分行" }
    ,
    { "id": "2435", "head_code": "56", "branch_code": "115", "branch_name": "羅東分行" }
    ,
    { "id": "2436", "head_code": "56", "branch_code": "126", "branch_name": "板橋分行" }
    ,
    { "id": "2437", "head_code": "56", "branch_code": "137", "branch_name": "永和分行" }
    ,
    { "id": "2438", "head_code": "56", "branch_code": "148", "branch_name": "三重分行" }
    ,
    { "id": "2439", "head_code": "56", "branch_code": "159", "branch_name": "土城簡易型分行" }
    ,
    { "id": "2440", "head_code": "56", "branch_code": "171", "branch_name": "信託部" }
    ,
    { "id": "2441", "head_code": "56", "branch_code": "182", "branch_name": "宜蘭分行" }
    ,
    { "id": "2442", "head_code": "56", "branch_code": "193", "branch_name": "東台北分行" }
    ,
    { "id": "2443", "head_code": "56", "branch_code": "207", "branch_name": "埔墘分行" }
    ,
    { "id": "2444", "head_code": "56", "branch_code": "218", "branch_name": "蘆洲分行" }
    ,
    { "id": "2445", "head_code": "56", "branch_code": "229", "branch_name": "新莊分行" }
    ,
    { "id": "2446", "head_code": "56", "branch_code": "230", "branch_name": "樹林簡易型分行" }
    ,
    { "id": "2447", "head_code": "56", "branch_code": "241", "branch_name": "吉安分行" }
    ,
    { "id": "2448", "head_code": "56", "branch_code": "252", "branch_name": "中正分行" }
    ,
    { "id": "2449", "head_code": "56", "branch_code": "263", "branch_name": "重慶分行" }
    ,
    { "id": "2450", "head_code": "56", "branch_code": "274", "branch_name": "中和分行" }
    ,
    { "id": "2451", "head_code": "56", "branch_code": "285", "branch_name": "清水分行" }
    ,
    { "id": "2452", "head_code": "56", "branch_code": "296", "branch_name": "台北市分行" }
    ,
    { "id": "2453", "head_code": "56", "branch_code": "300", "branch_name": "板和簡型分行" }
    ,
    { "id": "2454", "head_code": "56", "branch_code": "311", "branch_name": "西蘆洲簡易型分行" }
    ,
    { "id": "2455", "head_code": "56", "branch_code": "322", "branch_name": "迴龍簡易型分行" }
    ,
    { "id": "2456", "head_code": "56", "branch_code": "333", "branch_name": "二重埔簡易型分行" }
    ,
    { "id": "2457", "head_code": "57", "branch_code": "13", "branch_name": "台東分行" }
    ,
    { "id": "2458", "head_code": "57", "branch_code": "24", "branch_name": "營業部" }
    ,
    { "id": "2459", "head_code": "57", "branch_code": "35", "branch_name": "新港分行" }
    ,
    { "id": "2460", "head_code": "57", "branch_code": "46", "branch_name": "關山分行" }
    ,
    { "id": "2461", "head_code": "57", "branch_code": "57", "branch_name": "池上分行" }
    ,
    { "id": "2462", "head_code": "57", "branch_code": "68", "branch_name": "營業部綠島辦事處" }
    ,
    { "id": "2463", "head_code": "57", "branch_code": "79", "branch_name": "大武分行" }
    ,
    { "id": "2464", "head_code": "57", "branch_code": "80", "branch_name": "卑南分行" }
    ,
    { "id": "2465", "head_code": "57", "branch_code": "91", "branch_name": "桃園分行" }
    ,
    { "id": "2466", "head_code": "57", "branch_code": "105", "branch_name": "鹿野分行瑞源辦事處" }
    ,
    { "id": "2467", "head_code": "57", "branch_code": "116", "branch_name": "鳳山分行" }
    ,
    { "id": "2468", "head_code": "57", "branch_code": "127", "branch_name": "屏東分行" }
    ,
    { "id": "2469", "head_code": "57", "branch_code": "138", "branch_name": "信託部" }
    ,
    { "id": "2470", "head_code": "57", "branch_code": "149", "branch_name": "大發分行" }
    ,
    { "id": "2471", "head_code": "57", "branch_code": "150", "branch_name": "萬丹簡易型分行" }
    ,
    { "id": "2472", "head_code": "57", "branch_code": "161", "branch_name": "橋頭分行" }
    ,
    { "id": "2473", "head_code": "57", "branch_code": "172", "branch_name": "林園分行" }
    ,
    { "id": "2474", "head_code": "57", "branch_code": "183", "branch_name": "內埔簡易型分行" }
    ,
    { "id": "2475", "head_code": "57", "branch_code": "194", "branch_name": "台北分行" }
    ,
    { "id": "2476", "head_code": "57", "branch_code": "208", "branch_name": "五甲分行" }
    ,
    { "id": "2477", "head_code": "57", "branch_code": "219", "branch_name": "板橋分行" }
    ,
    { "id": "2478", "head_code": "57", "branch_code": "220", "branch_name": "鳥松分行" }
    ,
    { "id": "2479", "head_code": "57", "branch_code": "231", "branch_name": "大社分行" }
    ,
    { "id": "2480", "head_code": "57", "branch_code": "242", "branch_name": "大樹簡易型分行" }
    ,
    { "id": "2481", "head_code": "57", "branch_code": "253", "branch_name": "路竹分行" }
    ,
    { "id": "2482", "head_code": "57", "branch_code": "264", "branch_name": "信義分行" }
    ,
    { "id": "2483", "head_code": "57", "branch_code": "275", "branch_name": "燕巢簡易型分行" }
    ,
    { "id": "2484", "head_code": "57", "branch_code": "286", "branch_name": "岡山簡易型分行" }
    ,
    { "id": "2485", "head_code": "57", "branch_code": "297", "branch_name": "東港簡易型分行" }
    ,
    { "id": "2486", "head_code": "57", "branch_code": "301", "branch_name": "台東企銀東屏東簡易型分行" }
    ,
    { "id": "2487", "head_code": "57", "branch_code": "312", "branch_name": "仁武簡易型分行" }
    ,
    { "id": "2488", "head_code": "57", "branch_code": "1261", "branch_name": "知本分行" }
    ,
    { "id": "2489", "head_code": "57", "branch_code": "1272", "branch_name": "太麻里分行" }
    ,
    { "id": "2490", "head_code": "57", "branch_code": "1283", "branch_name": "鹿野分行" }
    ,
    { "id": "2491", "head_code": "72", "branch_code": "14", "branch_name": "台北分行" }
    ,
    { "id": "2492", "head_code": "72", "branch_code": "25", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2493", "head_code": "74", "branch_code": "27", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2494", "head_code": "75", "branch_code": "6", "branch_name": "台北分行" }
    ,
    { "id": "2495", "head_code": "75", "branch_code": "17", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2496", "head_code": "75", "branch_code": "28", "branch_name": "高雄分行" }
    ,
    { "id": "2497", "head_code": "76", "branch_code": "18", "branch_name": "台北分行" }
    ,
    { "id": "2498", "head_code": "76", "branch_code": "29", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2499", "head_code": "77", "branch_code": "19", "branch_name": "台北分行" }
    ,
    { "id": "2500", "head_code": "77", "branch_code": "31", "branch_name": "國際金融業務分" }
    ,
    { "id": "2501", "head_code": "78", "branch_code": "10", "branch_name": "台北分行" }
    ,
    { "id": "2502", "head_code": "78", "branch_code": "21", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2503", "head_code": "79", "branch_code": "11", "branch_name": "台北分行" }
    ,
    { "id": "2504", "head_code": "79", "branch_code": "22", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2505", "head_code": "81", "branch_code": "16", "branch_name": "台北分行" }
    ,
    { "id": "2506", "head_code": "81", "branch_code": "27", "branch_name": "高雄分行" }
    ,
    { "id": "2507", "head_code": "81", "branch_code": "38", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2508", "head_code": "81", "branch_code": "49", "branch_name": "台中分行" }
    ,
    { "id": "2509", "head_code": "81", "branch_code": "50", "branch_name": "台南分行" }
    ,
    { "id": "2510", "head_code": "81", "branch_code": "61", "branch_name": "板橋分行" }
    ,
    { "id": "2511", "head_code": "81", "branch_code": "72", "branch_name": "桃園分行" }
    ,
    { "id": "2512", "head_code": "81", "branch_code": "83", "branch_name": "建國分行" }
    ,
    { "id": "2513", "head_code": "81", "branch_code": "94", "branch_name": "天母分行" }
    ,
    { "id": "2514", "head_code": "82", "branch_code": "17", "branch_name": "台北分行" }
    ,
    { "id": "2515", "head_code": "82", "branch_code": "28", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2516", "head_code": "82", "branch_code": "39", "branch_name": "高雄分行" }
    ,
    { "id": "2517", "head_code": "83", "branch_code": "18", "branch_name": "台北分行" }
    ,
    { "id": "2518", "head_code": "83", "branch_code": "29", "branch_name": "高雄分行" }
    ,
    { "id": "2519", "head_code": "83", "branch_code": "30", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2520", "head_code": "83", "branch_code": "41", "branch_name": "台中分行" }
    ,
    { "id": "2521", "head_code": "84", "branch_code": "19", "branch_name": "台北分行" }
    ,
    { "id": "2522", "head_code": "85", "branch_code": "9", "branch_name": "台北分行" }
    ,
    { "id": "2523", "head_code": "86", "branch_code": "11", "branch_name": "台北分行" }
    ,
    { "id": "2524", "head_code": "86", "branch_code": "22", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2525", "head_code": "87", "branch_code": "12", "branch_name": "台北分行" }
    ,
    { "id": "2526", "head_code": "87", "branch_code": "23", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2527", "head_code": "90", "branch_code": "18", "branch_name": "台北分行" }
    ,
    { "id": "2528", "head_code": "90", "branch_code": "29", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2529", "head_code": "91", "branch_code": "19", "branch_name": "台北分行" }
    ,
    { "id": "2530", "head_code": "91", "branch_code": "20", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2531", "head_code": "92", "branch_code": "10", "branch_name": "台北分行" }
    ,
    { "id": "2532", "head_code": "92", "branch_code": "21", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2533", "head_code": "93", "branch_code": "11", "branch_name": "台北分行" }
    ,
    { "id": "2534", "head_code": "93", "branch_code": "22", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2535", "head_code": "95", "branch_code": "13", "branch_name": "台北分行" }
    ,
    { "id": "2536", "head_code": "96", "branch_code": "14", "branch_name": "台北分行" }
    ,
    { "id": "2537", "head_code": "96", "branch_code": "25", "branch_name": "國際金融業務分行" }
    ,
    { "id": "2538", "head_code": "97", "branch_code": "15", "branch_name": "美商富國銀行台北分行" }
    ,
    { "id": "2539", "head_code": "97", "branch_code": "26", "branch_name": "美商明尼蘇達西北銀行國際金融業務分行" }
    ,
    { "id": "2540", "head_code": "98", "branch_code": "16", "branch_name": "三菱東京日聯銀行台北分行" }
    ,
    { "id": "2541", "head_code": "98", "branch_code": "27", "branch_name": "日商東京三菱銀行國際金融業務分行" }
    ,
    { "id": "2542", "head_code": "99", "branch_code": "17", "branch_name": "台北分行" }
    ,
    { "id": "2543", "head_code": "99", "branch_code": "28", "branch_name": "國際金融業務分" }
    ,
    { "id": "2544", "head_code": "99", "branch_code": "39", "branch_name": "高雄分行" }
    ,
    { "id": "2545", "head_code": "99", "branch_code": "40", "branch_name": "台中分行" }
    ,
    { "id": "2546", "head_code": "101", "branch_code": "2", "branch_name": "審查部" }
    ,
    { "id": "2547", "head_code": "101", "branch_code": "11", "branch_name": "營業部" }
    ,
    { "id": "2548", "head_code": "101", "branch_code": "20", "branch_name": "民生分社" }
    ,
    { "id": "2549", "head_code": "101", "branch_code": "39", "branch_name": "建成分社" }
    ,
    { "id": "2550", "head_code": "101", "branch_code": "48", "branch_name": "大橋分社" }
    ,
    { "id": "2551", "head_code": "101", "branch_code": "57", "branch_name": "南京東路分社" }
    ,
    { "id": "2552", "head_code": "101", "branch_code": "66", "branch_name": "昆明分行" }
    ,
    { "id": "2553", "head_code": "101", "branch_code": "75", "branch_name": "長安分社" }
    ,
    { "id": "2554", "head_code": "101", "branch_code": "84", "branch_name": "永吉分社" }
    ,
    { "id": "2555", "head_code": "101", "branch_code": "93", "branch_name": "和平東路分社" }
    ,
    { "id": "2556", "head_code": "101", "branch_code": "109", "branch_name": "石牌分社" }
    ,
    { "id": "2557", "head_code": "101", "branch_code": "118", "branch_name": "內湖分社" }
    ,
    { "id": "2558", "head_code": "101", "branch_code": "127", "branch_name": "成功分行" }
    ,
    { "id": "2559", "head_code": "101", "branch_code": "136", "branch_name": "古亭分社" }
    ,
    { "id": "2560", "head_code": "101", "branch_code": "145", "branch_name": "景美分社" }
    ,
    { "id": "2561", "head_code": "101", "branch_code": "154", "branch_name": "南港分社" }
    ,
    { "id": "2562", "head_code": "101", "branch_code": "163", "branch_name": "信義簡易型分行" }
    ,
    { "id": "2563", "head_code": "101", "branch_code": "172", "branch_name": "萬華分社" }
    ,
    { "id": "2564", "head_code": "101", "branch_code": "181", "branch_name": "士林分社" }
    ,
    { "id": "2565", "head_code": "101", "branch_code": "190", "branch_name": "松山分社" }
    ,
    { "id": "2566", "head_code": "101", "branch_code": "206", "branch_name": "北投簡易型分行" }
    ,
    { "id": "2567", "head_code": "101", "branch_code": "215", "branch_name": "中山分社" }
    ,
    { "id": "2568", "head_code": "101", "branch_code": "224", "branch_name": "台北一信天母簡易型分社" }
    ,
    { "id": "2569", "head_code": "102", "branch_code": "10", "branch_name": "營業部" }
    ,
    { "id": "2570", "head_code": "102", "branch_code": "29", "branch_name": "迪化街分行" }
    ,
    { "id": "2571", "head_code": "102", "branch_code": "38", "branch_name": "建成簡易型分行" }
    ,
    { "id": "2572", "head_code": "102", "branch_code": "47", "branch_name": "大同分行" }
    ,
    { "id": "2573", "head_code": "102", "branch_code": "56", "branch_name": "中山分行" }
    ,
    { "id": "2574", "head_code": "102", "branch_code": "65", "branch_name": "大安分行" }
    ,
    { "id": "2575", "head_code": "102", "branch_code": "74", "branch_name": "松山分行" }
    ,
    { "id": "2576", "head_code": "102", "branch_code": "83", "branch_name": "古亭分行" }
    ,
    { "id": "2577", "head_code": "102", "branch_code": "92", "branch_name": "士林分行" }
    ,
    { "id": "2578", "head_code": "102", "branch_code": "108", "branch_name": "內湖分行" }
    ,
    { "id": "2579", "head_code": "102", "branch_code": "117", "branch_name": "信義分行" }
    ,
    { "id": "2580", "head_code": "102", "branch_code": "126", "branch_name": "永吉分行" }
    ,
    { "id": "2581", "head_code": "102", "branch_code": "135", "branch_name": "和平分行" }
    ,
    { "id": "2582", "head_code": "102", "branch_code": "144", "branch_name": "光復分行" }
    ,
    { "id": "2583", "head_code": "102", "branch_code": "153", "branch_name": "文山分行" }
    ,
    { "id": "2584", "head_code": "102", "branch_code": "171", "branch_name": "石牌分行" }
    ,
    { "id": "2585", "head_code": "102", "branch_code": "180", "branch_name": "萬華分行" }
    ,
    { "id": "2586", "head_code": "102", "branch_code": "199", "branch_name": "南門分行" }
    ,
    { "id": "2587", "head_code": "102", "branch_code": "205", "branch_name": "松德分行" }
    ,
    { "id": "2588", "head_code": "102", "branch_code": "214", "branch_name": "新莊分行" }
    ,
    { "id": "2589", "head_code": "102", "branch_code": "223", "branch_name": "中和分行" }
    ,
    { "id": "2590", "head_code": "102", "branch_code": "232", "branch_name": "板橋分行" }
    ,
    { "id": "2591", "head_code": "102", "branch_code": "241", "branch_name": "南京東路分行" }
    ,
    { "id": "2592", "head_code": "102", "branch_code": "250", "branch_name": "敦化分行" }
    ,
    { "id": "2593", "head_code": "102", "branch_code": "269", "branch_name": "新店分行" }
    ,
    { "id": "2594", "head_code": "102", "branch_code": "278", "branch_name": "中壢分行" }
    ,
    { "id": "2595", "head_code": "102", "branch_code": "287", "branch_name": "高雄分行" }
    ,
    { "id": "2596", "head_code": "102", "branch_code": "296", "branch_name": "三重簡易型分行" }
    ,
    { "id": "2597", "head_code": "102", "branch_code": "302", "branch_name": "復興分行" }
    ,
    { "id": "2598", "head_code": "102", "branch_code": "366", "branch_name": "台中分行" }
    ,
    { "id": "2599", "head_code": "103", "branch_code": "19", "branch_name": "營業部" }
    ,
    { "id": "2600", "head_code": "103", "branch_code": "28", "branch_name": "東台北分行" }
    ,
    { "id": "2601", "head_code": "103", "branch_code": "37", "branch_name": "龍山分行" }
    ,
    { "id": "2602", "head_code": "103", "branch_code": "46", "branch_name": "西園分行" }
    ,
    { "id": "2603", "head_code": "103", "branch_code": "55", "branch_name": "西門分行" }
    ,
    { "id": "2604", "head_code": "103", "branch_code": "64", "branch_name": "大同分行" }
    ,
    { "id": "2605", "head_code": "103", "branch_code": "73", "branch_name": "復興分行" }
    ,
    { "id": "2606", "head_code": "103", "branch_code": "82", "branch_name": "忠孝分行" }
    ,
    { "id": "2607", "head_code": "103", "branch_code": "91", "branch_name": "五常分行" }
    ,
    { "id": "2608", "head_code": "103", "branch_code": "107", "branch_name": "城北分行" }
    ,
    { "id": "2609", "head_code": "103", "branch_code": "116", "branch_name": "城內分行" }
    ,
    { "id": "2610", "head_code": "103", "branch_code": "125", "branch_name": "松江分行" }
    ,
    { "id": "2611", "head_code": "103", "branch_code": "134", "branch_name": "民生分行" }
    ,
    { "id": "2612", "head_code": "103", "branch_code": "143", "branch_name": "慶城分行" }
    ,
    { "id": "2613", "head_code": "103", "branch_code": "152", "branch_name": "內湖分行" }
    ,
    { "id": "2614", "head_code": "103", "branch_code": "161", "branch_name": "莊敬分行" }
    ,
    { "id": "2615", "head_code": "103", "branch_code": "170", "branch_name": "松山分行" }
    ,
    { "id": "2616", "head_code": "103", "branch_code": "189", "branch_name": "永樂簡易型分行" }
    ,
    { "id": "2617", "head_code": "103", "branch_code": "198", "branch_name": "林森北路分行" }
    ,
    { "id": "2618", "head_code": "103", "branch_code": "204", "branch_name": "大安分簡易型行" }
    ,
    { "id": "2619", "head_code": "103", "branch_code": "213", "branch_name": "新竹分行" }
    ,
    { "id": "2620", "head_code": "103", "branch_code": "222", "branch_name": "中壢分行" }
    ,
    { "id": "2621", "head_code": "103", "branch_code": "231", "branch_name": "桃園分行" }
    ,
    { "id": "2622", "head_code": "103", "branch_code": "240", "branch_name": "東三重分行" }
    ,
    { "id": "2623", "head_code": "103", "branch_code": "259", "branch_name": "竹北分行" }
    ,
    { "id": "2624", "head_code": "103", "branch_code": "268", "branch_name": "連城路分行" }
    ,
    { "id": "2625", "head_code": "103", "branch_code": "277", "branch_name": "關東橋分行" }
    ,
    { "id": "2626", "head_code": "103", "branch_code": "286", "branch_name": "土城分行" }
    ,
    { "id": "2627", "head_code": "103", "branch_code": "295", "branch_name": "蘆洲分行" }
    ,
    { "id": "2628", "head_code": "103", "branch_code": "301", "branch_name": "建成分行" }
    ,
    { "id": "2629", "head_code": "103", "branch_code": "310", "branch_name": "北三重分行" }
    ,
    { "id": "2630", "head_code": "103", "branch_code": "316", "branch_name": "信用卡部" }
    ,
    { "id": "2631", "head_code": "103", "branch_code": "329", "branch_name": "永和分行" }
    ,
    { "id": "2632", "head_code": "103", "branch_code": "338", "branch_name": "新埔分行" }
    ,
    { "id": "2633", "head_code": "103", "branch_code": "347", "branch_name": "台中分行" }
    ,
    { "id": "2634", "head_code": "103", "branch_code": "356", "branch_name": "中港分行" }
    ,
    { "id": "2635", "head_code": "103", "branch_code": "365", "branch_name": "左營華夏路分行" }
    ,
    { "id": "2636", "head_code": "103", "branch_code": "374", "branch_name": "大甲分行" }
    ,
    { "id": "2637", "head_code": "103", "branch_code": "383", "branch_name": "公益分行" }
    ,
    { "id": "2638", "head_code": "103", "branch_code": "392", "branch_name": "員林分行" }
    ,
    { "id": "2639", "head_code": "103", "branch_code": "408", "branch_name": "南屯分行" }
    ,
    { "id": "2640", "head_code": "103", "branch_code": "417", "branch_name": "東台南分行" }
    ,
    { "id": "2641", "head_code": "103", "branch_code": "426", "branch_name": "大里分行" }
    ,
    { "id": "2642", "head_code": "103", "branch_code": "435", "branch_name": "松竹分行" }
    ,
    { "id": "2643", "head_code": "103", "branch_code": "444", "branch_name": "彰化分行" }
    ,
    { "id": "2644", "head_code": "103", "branch_code": "453", "branch_name": "樹林分行" }
    ,
    { "id": "2645", "head_code": "103", "branch_code": "462", "branch_name": "後埔分行" }
    ,
    { "id": "2646", "head_code": "103", "branch_code": "471", "branch_name": "古亭分行" }
    ,
    { "id": "2647", "head_code": "103", "branch_code": "480", "branch_name": "士林分行" }
    ,
    { "id": "2648", "head_code": "103", "branch_code": "499", "branch_name": "信義分行" }
    ,
    { "id": "2649", "head_code": "103", "branch_code": "505", "branch_name": "丹鳳分行" }
    ,
    { "id": "2650", "head_code": "103", "branch_code": "514", "branch_name": "北投復興崗分行" }
    ,
    { "id": "2651", "head_code": "103", "branch_code": "523", "branch_name": "新生南路分行" }
    ,
    { "id": "2652", "head_code": "103", "branch_code": "532", "branch_name": "國外部" }
    ,
    { "id": "2653", "head_code": "103", "branch_code": "541", "branch_name": "永康分行" }
    ,
    { "id": "2654", "head_code": "103", "branch_code": "550", "branch_name": "天母分行" }
    ,
    { "id": "2655", "head_code": "103", "branch_code": "569", "branch_name": "新店分行" }
    ,
    { "id": "2656", "head_code": "103", "branch_code": "578", "branch_name": "大直簡易型分行" }
    ,
    { "id": "2657", "head_code": "103", "branch_code": "587", "branch_name": "興隆簡易型分行" }
    ,
    { "id": "2658", "head_code": "103", "branch_code": "596", "branch_name": "八德簡易型分行" }
    ,
    { "id": "2659", "head_code": "103", "branch_code": "602", "branch_name": "龍潭簡易型分行" }
    ,
    { "id": "2660", "head_code": "103", "branch_code": "611", "branch_name": "長安分行" }
    ,
    { "id": "2661", "head_code": "103", "branch_code": "620", "branch_name": "嘉義分行" }
    ,
    { "id": "2662", "head_code": "103", "branch_code": "639", "branch_name": "東嘉義簡易型分行" }
    ,
    { "id": "2663", "head_code": "103", "branch_code": "648", "branch_name": "鳳山分行" }
    ,
    { "id": "2664", "head_code": "103", "branch_code": "657", "branch_name": "台南分行" }
    ,
    { "id": "2665", "head_code": "103", "branch_code": "666", "branch_name": "北嘉義簡易型分行" }
    ,
    { "id": "2666", "head_code": "103", "branch_code": "675", "branch_name": "斗六分行" }
    ,
    { "id": "2667", "head_code": "103", "branch_code": "684", "branch_name": "明正分行" }
    ,
    { "id": "2668", "head_code": "103", "branch_code": "693", "branch_name": "花蓮分行" }
    ,
    { "id": "2669", "head_code": "103", "branch_code": "709", "branch_name": "基隆分行" }
    ,
    { "id": "2670", "head_code": "103", "branch_code": "718", "branch_name": "宜蘭分行" }
    ,
    { "id": "2671", "head_code": "103", "branch_code": "727", "branch_name": "三峽分行" }
    ,
    { "id": "2672", "head_code": "103", "branch_code": "736", "branch_name": "路竹分行" }
    ,
    { "id": "2673", "head_code": "103", "branch_code": "745", "branch_name": "高雄分行" }
    ,
    { "id": "2674", "head_code": "103", "branch_code": "754", "branch_name": "新莊分行" }
    ,
    { "id": "2675", "head_code": "103", "branch_code": "763", "branch_name": "江子翠分行" }
    ,
    { "id": "2676", "head_code": "103", "branch_code": "772", "branch_name": "南勢角分行" }
    ,
    { "id": "2677", "head_code": "103", "branch_code": "781", "branch_name": "彌陀簡易型分行" }
    ,
    { "id": "2678", "head_code": "103", "branch_code": "790", "branch_name": "岡山簡易型分行" }
    ,
    { "id": "2679", "head_code": "103", "branch_code": "806", "branch_name": "北高雄分行" }
    ,
    { "id": "2680", "head_code": "103", "branch_code": "824", "branch_name": "小港分行" }
    ,
    { "id": "2681", "head_code": "103", "branch_code": "833", "branch_name": "中華分行" }
    ,
    { "id": "2682", "head_code": "103", "branch_code": "842", "branch_name": "新生分行" }
    ,
    { "id": "2683", "head_code": "103", "branch_code": "851", "branch_name": "敦南分行" }
    ,
    { "id": "2684", "head_code": "103", "branch_code": "860", "branch_name": "中和分行" }
    ,
    { "id": "2685", "head_code": "103", "branch_code": "879", "branch_name": "南台中分行" }
    ,
    { "id": "2686", "head_code": "103", "branch_code": "888", "branch_name": "水湳分行" }
    ,
    { "id": "2687", "head_code": "103", "branch_code": "897", "branch_name": "北屯分行" }
    ,
    { "id": "2688", "head_code": "103", "branch_code": "903", "branch_name": "西屯分行" }
    ,
    { "id": "2689", "head_code": "103", "branch_code": "912", "branch_name": "向上分行" }
    ,
    { "id": "2690", "head_code": "103", "branch_code": "921", "branch_name": "十甲分行" }
    ,
    { "id": "2691", "head_code": "103", "branch_code": "930", "branch_name": "東興簡易型分行" }
    ,
    { "id": "2692", "head_code": "103", "branch_code": "949", "branch_name": "永安分行" }
    ,
    { "id": "2693", "head_code": "103", "branch_code": "958", "branch_name": "屏東分行" }
    ,
    { "id": "2694", "head_code": "103", "branch_code": "967", "branch_name": "東園分行" }
    ,
    { "id": "2695", "head_code": "103", "branch_code": "976", "branch_name": "萬丹分行" }
    ,
    { "id": "2696", "head_code": "103", "branch_code": "985", "branch_name": "七賢分行" }
    ,
    { "id": "2697", "head_code": "103", "branch_code": "994", "branch_name": "和生分行" }
    ,
    { "id": "2698", "head_code": "103", "branch_code": "1003", "branch_name": "輔大分行" }
    ,
    { "id": "2699", "head_code": "103", "branch_code": "1012", "branch_name": "桃北分行" }
    ,
    { "id": "2700", "head_code": "103", "branch_code": "1021", "branch_name": "自由分行" }
    ,
    { "id": "2701", "head_code": "103", "branch_code": "1030", "branch_name": "九如簡易型分行" }
    ,
    { "id": "2702", "head_code": "103", "branch_code": "1049", "branch_name": "永華簡易型分行" }
    ,
    { "id": "2703", "head_code": "103", "branch_code": "1058", "branch_name": "竹科分行" }
    ,
    { "id": "2704", "head_code": "103", "branch_code": "1067", "branch_name": "太平簡易型分行" }
    ,
    { "id": "2705", "head_code": "103", "branch_code": "1076", "branch_name": "大雅簡易型分行" }
    ,
    { "id": "2706", "head_code": "103", "branch_code": "1085", "branch_name": "烏日簡易型分行" }
    ,
    { "id": "2707", "head_code": "103", "branch_code": "1094", "branch_name": "草屯分行" }
    ,
    { "id": "2708", "head_code": "103", "branch_code": "1100", "branch_name": "南東分行" }
    ,
    { "id": "2709", "head_code": "104", "branch_code": "18", "branch_name": "營業部" }
    ,
    { "id": "2710", "head_code": "104", "branch_code": "27", "branch_name": "吉林分社" }
    ,
    { "id": "2711", "head_code": "104", "branch_code": "36", "branch_name": "大同分社" }
    ,
    { "id": "2712", "head_code": "104", "branch_code": "45", "branch_name": "中山分社" }
    ,
    { "id": "2713", "head_code": "104", "branch_code": "54", "branch_name": "松山分社" }
    ,
    { "id": "2714", "head_code": "104", "branch_code": "63", "branch_name": "大安分社" }
    ,
    { "id": "2715", "head_code": "104", "branch_code": "72", "branch_name": "石牌分社" }
    ,
    { "id": "2716", "head_code": "104", "branch_code": "81", "branch_name": "南港分社" }
    ,
    { "id": "2717", "head_code": "104", "branch_code": "90", "branch_name": "文山分社" }
    ,
    { "id": "2718", "head_code": "104", "branch_code": "106", "branch_name": "中正分社" }
    ,
    { "id": "2719", "head_code": "104", "branch_code": "115", "branch_name": "北投分社" }
    ,
    { "id": "2720", "head_code": "104", "branch_code": "124", "branch_name": "內湖分社" }
    ,
    { "id": "2721", "head_code": "104", "branch_code": "133", "branch_name": "天母分社" }
    ,
    { "id": "2722", "head_code": "106", "branch_code": "16", "branch_name": "營業部" }
    ,
    { "id": "2723", "head_code": "106", "branch_code": "25", "branch_name": "興隆分社" }
    ,
    { "id": "2724", "head_code": "106", "branch_code": "34", "branch_name": "雙園分社" }
    ,
    { "id": "2725", "head_code": "106", "branch_code": "43", "branch_name": "西門分社" }
    ,
    { "id": "2726", "head_code": "106", "branch_code": "52", "branch_name": "古亭分社" }
    ,
    { "id": "2727", "head_code": "106", "branch_code": "61", "branch_name": "中正分社" }
    ,
    { "id": "2728", "head_code": "106", "branch_code": "70", "branch_name": "松山分社" }
    ,
    { "id": "2729", "head_code": "106", "branch_code": "89", "branch_name": "士林分社" }
    ,
    { "id": "2730", "head_code": "106", "branch_code": "98", "branch_name": "東湖分社" }
    ,
    { "id": "2731", "head_code": "106", "branch_code": "104", "branch_name": "安和分社" }
    ,
    { "id": "2732", "head_code": "106", "branch_code": "113", "branch_name": "民生分社" }
    ,
    { "id": "2733", "head_code": "106", "branch_code": "122", "branch_name": "雙連分社" }
    ,
    { "id": "2734", "head_code": "106", "branch_code": "131", "branch_name": "重慶分社" }
    ,
    { "id": "2735", "head_code": "106", "branch_code": "140", "branch_name": "木柵分社" }
    ,
    { "id": "2736", "head_code": "106", "branch_code": "159", "branch_name": "吉林分社" }
    ,
    { "id": "2737", "head_code": "106", "branch_code": "168", "branch_name": "大直分社" }
    ,
    { "id": "2738", "head_code": "106", "branch_code": "177", "branch_name": "萬大分社" }
    ,
    { "id": "2739", "head_code": "106", "branch_code": "186", "branch_name": "東門分社" }
    ,
    { "id": "2740", "head_code": "108", "branch_code": "14", "branch_name": "營業部" }
    ,
    { "id": "2741", "head_code": "108", "branch_code": "23", "branch_name": "石牌分行" }
    ,
    { "id": "2742", "head_code": "108", "branch_code": "32", "branch_name": "北投分行" }
    ,
    { "id": "2743", "head_code": "108", "branch_code": "41", "branch_name": "社子分行" }
    ,
    { "id": "2744", "head_code": "108", "branch_code": "50", "branch_name": "士林分行" }
    ,
    { "id": "2745", "head_code": "108", "branch_code": "69", "branch_name": "大屯分行" }
    ,
    { "id": "2746", "head_code": "108", "branch_code": "78", "branch_name": "劍潭分行" }
    ,
    { "id": "2747", "head_code": "108", "branch_code": "87", "branch_name": "蘭雅分行" }
    ,
    { "id": "2748", "head_code": "108", "branch_code": "96", "branch_name": "天母分行" }
    ,
    { "id": "2749", "head_code": "108", "branch_code": "102", "branch_name": "社中分行" }
    ,
    { "id": "2750", "head_code": "108", "branch_code": "111", "branch_name": "吉林簡易型分行" }
    ,
    { "id": "2751", "head_code": "108", "branch_code": "120", "branch_name": "成功分行" }
    ,
    { "id": "2752", "head_code": "108", "branch_code": "139", "branch_name": "民生分行" }
    ,
    { "id": "2753", "head_code": "108", "branch_code": "148", "branch_name": "延吉分行" }
    ,
    { "id": "2754", "head_code": "108", "branch_code": "157", "branch_name": "木柵分行" }
    ,
    { "id": "2755", "head_code": "108", "branch_code": "166", "branch_name": "龍江分行" }
    ,
    { "id": "2756", "head_code": "108", "branch_code": "175", "branch_name": "南京分行" }
    ,
    { "id": "2757", "head_code": "108", "branch_code": "184", "branch_name": "景美分行" }
    ,
    { "id": "2758", "head_code": "108", "branch_code": "193", "branch_name": "中興分行" }
    ,
    { "id": "2759", "head_code": "108", "branch_code": "209", "branch_name": "信義分行" }
    ,
    { "id": "2760", "head_code": "108", "branch_code": "218", "branch_name": "中和分行" }
    ,
    { "id": "2761", "head_code": "108", "branch_code": "227", "branch_name": "永和分行" }
    ,
    { "id": "2762", "head_code": "108", "branch_code": "236", "branch_name": "蘆洲分行" }
    ,
    { "id": "2763", "head_code": "108", "branch_code": "245", "branch_name": "板橋分行" }
    ,
    { "id": "2764", "head_code": "108", "branch_code": "254", "branch_name": "信託部" }
    ,
    { "id": "2765", "head_code": "108", "branch_code": "263", "branch_name": "新和簡易型分行" }
    ,
    { "id": "2766", "head_code": "108", "branch_code": "272", "branch_name": "溪洲分行" }
    ,
    { "id": "2767", "head_code": "108", "branch_code": "281", "branch_name": "泰山分行" }
    ,
    { "id": "2768", "head_code": "108", "branch_code": "290", "branch_name": "新莊分行" }
    ,
    { "id": "2769", "head_code": "108", "branch_code": "306", "branch_name": "古亭分行" }
    ,
    { "id": "2770", "head_code": "108", "branch_code": "315", "branch_name": "三重分行" }
    ,
    { "id": "2771", "head_code": "108", "branch_code": "324", "branch_name": "大業簡易型分行" }
    ,
    { "id": "2772", "head_code": "108", "branch_code": "333", "branch_name": "雙和分行" }
    ,
    { "id": "2773", "head_code": "108", "branch_code": "342", "branch_name": "復興分行" }
    ,
    { "id": "2774", "head_code": "108", "branch_code": "351", "branch_name": "大安簡易型分行" }
    ,
    { "id": "2775", "head_code": "108", "branch_code": "360", "branch_name": "桃園分行" }
    ,
    { "id": "2776", "head_code": "108", "branch_code": "379", "branch_name": "新店簡易型分行" }
    ,
    { "id": "2777", "head_code": "108", "branch_code": "388", "branch_name": "國外部" }
    ,
    { "id": "2778", "head_code": "108", "branch_code": "397", "branch_name": "新福簡易型分行" }
    ,
    { "id": "2779", "head_code": "108", "branch_code": "403", "branch_name": "新竹分行" }
    ,
    { "id": "2780", "head_code": "108", "branch_code": "412", "branch_name": "華成分行" }
    ,
    { "id": "2781", "head_code": "108", "branch_code": "421", "branch_name": "三民分行" }
    ,
    { "id": "2782", "head_code": "108", "branch_code": "430", "branch_name": "精武分行" }
    ,
    { "id": "2783", "head_code": "108", "branch_code": "449", "branch_name": "社頭簡易型分行" }
    ,
    { "id": "2784", "head_code": "108", "branch_code": "458", "branch_name": "屏東分行" }
    ,
    { "id": "2785", "head_code": "108", "branch_code": "467", "branch_name": "中正分行" }
    ,
    { "id": "2786", "head_code": "108", "branch_code": "476", "branch_name": "高雄分行" }
    ,
    { "id": "2787", "head_code": "108", "branch_code": "485", "branch_name": "苓雅分行" }
    ,
    { "id": "2788", "head_code": "108", "branch_code": "494", "branch_name": "自由分行" }
    ,
    { "id": "2789", "head_code": "108", "branch_code": "500", "branch_name": "嘉義分行" }
    ,
    { "id": "2790", "head_code": "108", "branch_code": "519", "branch_name": "新埔分行" }
    ,
    { "id": "2791", "head_code": "108", "branch_code": "528", "branch_name": "台南分行" }
    ,
    { "id": "2792", "head_code": "108", "branch_code": "555", "branch_name": "東寧分行" }
    ,
    { "id": "2793", "head_code": "108", "branch_code": "564", "branch_name": "中華分行" }
    ,
    { "id": "2794", "head_code": "108", "branch_code": "573", "branch_name": "健康分行" }
    ,
    { "id": "2795", "head_code": "108", "branch_code": "582", "branch_name": "台中分行" }
    ,
    { "id": "2796", "head_code": "108", "branch_code": "607", "branch_name": "西華分行" }
    ,
    { "id": "2797", "head_code": "108", "branch_code": "616", "branch_name": "安順分行" }
    ,
    { "id": "2798", "head_code": "108", "branch_code": "634", "branch_name": "左營分行" }
    ,
    { "id": "2799", "head_code": "108", "branch_code": "643", "branch_name": "向上簡易型分行" }
    ,
    { "id": "2800", "head_code": "108", "branch_code": "652", "branch_name": "內湖分行" }
    ,
    { "id": "2801", "head_code": "108", "branch_code": "661", "branch_name": "中壢分行" }
    ,
    { "id": "2802", "head_code": "108", "branch_code": "670", "branch_name": "五股分行" }
    ,
    { "id": "2803", "head_code": "108", "branch_code": "689", "branch_name": "林森分行" }
    ,
    { "id": "2804", "head_code": "108", "branch_code": "698", "branch_name": "立文分行" }
    ,
    { "id": "2805", "head_code": "108", "branch_code": "704", "branch_name": "新興分行" }
    ,
    { "id": "2806", "head_code": "108", "branch_code": "713", "branch_name": "青年分行" }
    ,
    { "id": "2807", "head_code": "108", "branch_code": "722", "branch_name": "三鳳分行" }
    ,
    { "id": "2808", "head_code": "108", "branch_code": "731", "branch_name": "四維分行" }
    ,
    { "id": "2809", "head_code": "108", "branch_code": "740", "branch_name": "大公分行" }
    ,
    { "id": "2810", "head_code": "108", "branch_code": "759", "branch_name": "大順分行" }
    ,
    { "id": "2811", "head_code": "108", "branch_code": "768", "branch_name": "海光分行" }
    ,
    { "id": "2812", "head_code": "108", "branch_code": "777", "branch_name": "前鎮分行" }
    ,
    { "id": "2813", "head_code": "108", "branch_code": "786", "branch_name": "平等分行" }
    ,
    { "id": "2814", "head_code": "108", "branch_code": "795", "branch_name": "民族分行" }
    ,
    { "id": "2815", "head_code": "108", "branch_code": "801", "branch_name": "小港分行" }
    ,
    { "id": "2816", "head_code": "108", "branch_code": "810", "branch_name": "右昌分行" }
    ,
    { "id": "2817", "head_code": "108", "branch_code": "829", "branch_name": "建國分行" }
    ,
    { "id": "2818", "head_code": "108", "branch_code": "838", "branch_name": "五甲分行" }
    ,
    { "id": "2819", "head_code": "108", "branch_code": "847", "branch_name": "鼎力分行" }
    ,
    { "id": "2820", "head_code": "108", "branch_code": "856", "branch_name": "楠梓分行" }
    ,
    { "id": "2821", "head_code": "108", "branch_code": "865", "branch_name": "旗山分行" }
    ,
    { "id": "2822", "head_code": "108", "branch_code": "874", "branch_name": "六龜分行" }
    ,
    { "id": "2823", "head_code": "108", "branch_code": "883", "branch_name": "美濃分行" }
    ,
    { "id": "2824", "head_code": "108", "branch_code": "892", "branch_name": "觀亭簡易分行" }
    ,
    { "id": "2825", "head_code": "108", "branch_code": "908", "branch_name": "華興簡易" }
    ,
    { "id": "2826", "head_code": "108", "branch_code": "917", "branch_name": "林園分行" }
    ,
    { "id": "2827", "head_code": "108", "branch_code": "926", "branch_name": "岡山分行" }
    ,
    { "id": "2828", "head_code": "108", "branch_code": "935", "branch_name": "仁德分行" }
    ,
    { "id": "2829", "head_code": "108", "branch_code": "944", "branch_name": "佳里分行" }
    ,
    { "id": "2830", "head_code": "108", "branch_code": "953", "branch_name": "永康分行" }
    ,
    { "id": "2831", "head_code": "108", "branch_code": "962", "branch_name": "金華分行" }
    ,
    { "id": "2832", "head_code": "108", "branch_code": "971", "branch_name": "中山分行" }
    ,
    { "id": "2833", "head_code": "108", "branch_code": "980", "branch_name": "里港分行" }
    ,
    { "id": "2834", "head_code": "108", "branch_code": "999", "branch_name": "東港分行" }
    ,
    { "id": "2835", "head_code": "108", "branch_code": "1008", "branch_name": "潮州分行" }
    ,
    { "id": "2836", "head_code": "108", "branch_code": "1017", "branch_name": "光華分行" }
    ,
    { "id": "2837", "head_code": "108", "branch_code": "1026", "branch_name": "台北分行" }
    ,
    { "id": "2838", "head_code": "114", "branch_code": "15", "branch_name": "營業部" }
    ,
    { "id": "2839", "head_code": "114", "branch_code": "24", "branch_name": "儲蓄部" }
    ,
    { "id": "2840", "head_code": "114", "branch_code": "33", "branch_name": "愛三路分社" }
    ,
    { "id": "2841", "head_code": "114", "branch_code": "42", "branch_name": "忠二路分社" }
    ,
    { "id": "2842", "head_code": "114", "branch_code": "51", "branch_name": "安一路分社" }
    ,
    { "id": "2843", "head_code": "114", "branch_code": "60", "branch_name": "信二路分社" }
    ,
    { "id": "2844", "head_code": "114", "branch_code": "79", "branch_name": "中華路分社" }
    ,
    { "id": "2845", "head_code": "114", "branch_code": "88", "branch_name": "八斗子分社" }
    ,
    { "id": "2846", "head_code": "114", "branch_code": "97", "branch_name": "南興路分社" }
    ,
    { "id": "2847", "head_code": "114", "branch_code": "103", "branch_name": "大武崙分社" }
    ,
    { "id": "2848", "head_code": "114", "branch_code": "112", "branch_name": "碇內分社" }
    ,
    { "id": "2849", "head_code": "114", "branch_code": "121", "branch_name": "仁二路分社" }
    ,
    { "id": "2850", "head_code": "115", "branch_code": "14", "branch_name": "營業部" }
    ,
    { "id": "2851", "head_code": "115", "branch_code": "23", "branch_name": "廟口分社" }
    ,
    { "id": "2852", "head_code": "115", "branch_code": "32", "branch_name": "中正分社" }
    ,
    { "id": "2853", "head_code": "115", "branch_code": "41", "branch_name": "新店分社" }
    ,
    { "id": "2854", "head_code": "115", "branch_code": "50", "branch_name": "七堵分社" }
    ,
    { "id": "2855", "head_code": "115", "branch_code": "69", "branch_name": "安樂分社" }
    ,
    { "id": "2856", "head_code": "115", "branch_code": "78", "branch_name": "信義分社" }
    ,
    { "id": "2857", "head_code": "115", "branch_code": "87", "branch_name": "港東分社" }
    ,
    { "id": "2858", "head_code": "115", "branch_code": "96", "branch_name": "暖暖分社" }
    ,
    { "id": "2859", "head_code": "115", "branch_code": "102", "branch_name": "安和分社" }
    ,
    { "id": "2860", "head_code": "115", "branch_code": "111", "branch_name": "銘傳簡易型分社" }
    ,
    { "id": "2861", "head_code": "115", "branch_code": "120", "branch_name": "百福分社" }
    ,
    { "id": "2862", "head_code": "115", "branch_code": "139", "branch_name": "基金簡易型分社" }
    ,
    { "id": "2863", "head_code": "115", "branch_code": "148", "branch_name": "新豐簡易型分社" }
    ,
    { "id": "2864", "head_code": "115", "branch_code": "157", "branch_name": "基隆二信復興簡易型分社" }
    ,
    { "id": "2865", "head_code": "118", "branch_code": "11", "branch_name": "營業部" }
    ,
    { "id": "2866", "head_code": "118", "branch_code": "20", "branch_name": "後埔分行" }
    ,
    { "id": "2867", "head_code": "118", "branch_code": "39", "branch_name": "永和分行" }
    ,
    { "id": "2868", "head_code": "118", "branch_code": "48", "branch_name": "埔墘分行" }
    ,
    { "id": "2869", "head_code": "118", "branch_code": "57", "branch_name": "華江分行" }
    ,
    { "id": "2870", "head_code": "118", "branch_code": "66", "branch_name": "民族分行" }
    ,
    { "id": "2871", "head_code": "118", "branch_code": "75", "branch_name": "中和分行" }
    ,
    { "id": "2872", "head_code": "118", "branch_code": "84", "branch_name": "土城分行" }
    ,
    { "id": "2873", "head_code": "118", "branch_code": "93", "branch_name": "文化分行" }
    ,
    { "id": "2874", "head_code": "118", "branch_code": "109", "branch_name": "大觀分行" }
    ,
    { "id": "2875", "head_code": "118", "branch_code": "118", "branch_name": "興南分行" }
    ,
    { "id": "2876", "head_code": "118", "branch_code": "127", "branch_name": "業務部" }
    ,
    { "id": "2877", "head_code": "118", "branch_code": "136", "branch_name": "高雄分行" }
    ,
    { "id": "2878", "head_code": "118", "branch_code": "145", "branch_name": "小港分行" }
    ,
    { "id": "2879", "head_code": "118", "branch_code": "154", "branch_name": "前金分行" }
    ,
    { "id": "2880", "head_code": "118", "branch_code": "163", "branch_name": "新興分行" }
    ,
    { "id": "2881", "head_code": "118", "branch_code": "172", "branch_name": "三民分行" }
    ,
    { "id": "2882", "head_code": "118", "branch_code": "181", "branch_name": "前鎮分行" }
    ,
    { "id": "2883", "head_code": "118", "branch_code": "190", "branch_name": "苓雅分行" }
    ,
    { "id": "2884", "head_code": "118", "branch_code": "206", "branch_name": "陽明分行" }
    ,
    { "id": "2885", "head_code": "118", "branch_code": "215", "branch_name": "高新莊分行" }
    ,
    { "id": "2886", "head_code": "118", "branch_code": "224", "branch_name": "凱旋分行" }
    ,
    { "id": "2887", "head_code": "118", "branch_code": "233", "branch_name": "右昌分行" }
    ,
    { "id": "2888", "head_code": "118", "branch_code": "242", "branch_name": "和平分行" }
    ,
    { "id": "2889", "head_code": "118", "branch_code": "251", "branch_name": "瑞豐分行" }
    ,
    { "id": "2890", "head_code": "118", "branch_code": "260", "branch_name": "松江分行" }
    ,
    { "id": "2891", "head_code": "118", "branch_code": "279", "branch_name": "信義分行" }
    ,
    { "id": "2892", "head_code": "118", "branch_code": "288", "branch_name": "新莊分行" }
    ,
    { "id": "2893", "head_code": "118", "branch_code": "297", "branch_name": "秀朗分行" }
    ,
    { "id": "2894", "head_code": "118", "branch_code": "303", "branch_name": "桃園分行" }
    ,
    { "id": "2895", "head_code": "118", "branch_code": "312", "branch_name": "三重分行" }
    ,
    { "id": "2896", "head_code": "118", "branch_code": "321", "branch_name": "新泰簡易型分行" }
    ,
    { "id": "2897", "head_code": "118", "branch_code": "330", "branch_name": "員山分行" }
    ,
    { "id": "2898", "head_code": "118", "branch_code": "349", "branch_name": "桃鶯分行" }
    ,
    { "id": "2899", "head_code": "118", "branch_code": "358", "branch_name": "民生分行" }
    ,
    { "id": "2900", "head_code": "118", "branch_code": "367", "branch_name": "龍岡分行" }
    ,
    { "id": "2901", "head_code": "118", "branch_code": "376", "branch_name": "信託部" }
    ,
    { "id": "2902", "head_code": "118", "branch_code": "385", "branch_name": "樹林分行" }
    ,
    { "id": "2903", "head_code": "118", "branch_code": "394", "branch_name": "金城簡易型分行" }
    ,
    { "id": "2904", "head_code": "118", "branch_code": "400", "branch_name": "新竹分行" }
    ,
    { "id": "2905", "head_code": "118", "branch_code": "419", "branch_name": "八德分行" }
    ,
    { "id": "2906", "head_code": "118", "branch_code": "428", "branch_name": "台中分行" }
    ,
    { "id": "2907", "head_code": "118", "branch_code": "437", "branch_name": "台南分行" }
    ,
    { "id": "2908", "head_code": "118", "branch_code": "446", "branch_name": "新店分行" }
    ,
    { "id": "2909", "head_code": "118", "branch_code": "455", "branch_name": "內湖分行" }
    ,
    { "id": "2910", "head_code": "118", "branch_code": "482", "branch_name": "中正分行" }
    ,
    { "id": "2911", "head_code": "118", "branch_code": "507", "branch_name": "嘉義分行" }
    ,
    { "id": "2912", "head_code": "118", "branch_code": "516", "branch_name": "吳鳳分行" }
    ,
    { "id": "2913", "head_code": "118", "branch_code": "525", "branch_name": "仁愛分行" }
    ,
    { "id": "2914", "head_code": "118", "branch_code": "552", "branch_name": "忠孝分行" }
    ,
    { "id": "2915", "head_code": "118", "branch_code": "561", "branch_name": "軍輝分行" }
    ,
    { "id": "2916", "head_code": "118", "branch_code": "598", "branch_name": "蘆洲分行" }
    ,
    { "id": "2917", "head_code": "118", "branch_code": "604", "branch_name": "羅東分行" }
    ,
    { "id": "2918", "head_code": "118", "branch_code": "613", "branch_name": "北台中分行" }
    ,
    { "id": "2919", "head_code": "118", "branch_code": "622", "branch_name": "成功分行" }
    ,
    { "id": "2920", "head_code": "119", "branch_code": "10", "branch_name": "營業部" }
    ,
    { "id": "2921", "head_code": "119", "branch_code": "29", "branch_name": "三重分行" }
    ,
    { "id": "2922", "head_code": "119", "branch_code": "38", "branch_name": "三芝分社" }
    ,
    { "id": "2923", "head_code": "119", "branch_code": "47", "branch_name": "八里分社" }
    ,
    { "id": "2924", "head_code": "119", "branch_code": "56", "branch_name": "石門分社" }
    ,
    { "id": "2925", "head_code": "119", "branch_code": "65", "branch_name": "竹圍分社" }
    ,
    { "id": "2926", "head_code": "119", "branch_code": "74", "branch_name": "水碓分社" }
    ,
    { "id": "2927", "head_code": "119", "branch_code": "83", "branch_name": "英專分社" }
    ,
    { "id": "2928", "head_code": "119", "branch_code": "92", "branch_name": "義山分社" }
    ,
    { "id": "2929", "head_code": "119", "branch_code": "108", "branch_name": "龍形分社" }
    ,
    { "id": "2930", "head_code": "119", "branch_code": "117", "branch_name": "金山分社" }
    ,
    { "id": "2931", "head_code": "120", "branch_code": "16", "branch_name": "營業部" }
    ,
    { "id": "2932", "head_code": "120", "branch_code": "25", "branch_name": "水碓分社" }
    ,
    { "id": "2933", "head_code": "120", "branch_code": "34", "branch_name": "竹圍分社" }
    ,
    { "id": "2934", "head_code": "120", "branch_code": "43", "branch_name": "英專分社" }
    ,
    { "id": "2935", "head_code": "120", "branch_code": "52", "branch_name": "義山分社" }
    ,
    { "id": "2936", "head_code": "120", "branch_code": "61", "branch_name": "淡水信用合作社三芝分社" }
    ,
    { "id": "2937", "head_code": "120", "branch_code": "70", "branch_name": "八里分社" }
    ,
    { "id": "2938", "head_code": "120", "branch_code": "89", "branch_name": "淡水信用合作社成州分社" }
    ,
    { "id": "2939", "head_code": "120", "branch_code": "98", "branch_name": "淡水信用合作社五股分社" }
    ,
    { "id": "2940", "head_code": "124", "branch_code": "12", "branch_name": "營業部" }
    ,
    { "id": "2941", "head_code": "124", "branch_code": "21", "branch_name": "復興分社" }
    ,
    { "id": "2942", "head_code": "124", "branch_code": "30", "branch_name": "東門分社" }
    ,
    { "id": "2943", "head_code": "124", "branch_code": "58", "branch_name": "頭城分社" }
    ,
    { "id": "2944", "head_code": "124", "branch_code": "67", "branch_name": "礁溪分社" }
    ,
    { "id": "2945", "head_code": "127", "branch_code": "19", "branch_name": "營業部" }
    ,
    { "id": "2946", "head_code": "127", "branch_code": "28", "branch_name": "大林分社" }
    ,
    { "id": "2947", "head_code": "127", "branch_code": "37", "branch_name": "永興分社" }
    ,
    { "id": "2948", "head_code": "127", "branch_code": "46", "branch_name": "南華分社" }
    ,
    { "id": "2949", "head_code": "127", "branch_code": "55", "branch_name": "介壽分社" }
    ,
    { "id": "2950", "head_code": "127", "branch_code": "64", "branch_name": "中山分社" }
    ,
    { "id": "2951", "head_code": "127", "branch_code": "73", "branch_name": "永安分社" }
    ,
    { "id": "2952", "head_code": "127", "branch_code": "82", "branch_name": "會稽分社" }
    ,
    { "id": "2953", "head_code": "127", "branch_code": "91", "branch_name": "莊敬分社" }
    ,
    { "id": "2954", "head_code": "127", "branch_code": "107", "branch_name": "大湳分社" }
    ,
    { "id": "2955", "head_code": "127", "branch_code": "116", "branch_name": "南崁分社" }
    ,
    { "id": "2956", "head_code": "130", "branch_code": "13", "branch_name": "營業部" }
    ,
    { "id": "2957", "head_code": "130", "branch_code": "22", "branch_name": "城中分社" }
    ,
    { "id": "2958", "head_code": "130", "branch_code": "31", "branch_name": "武昌分社" }
    ,
    { "id": "2959", "head_code": "130", "branch_code": "40", "branch_name": "城東分社" }
    ,
    { "id": "2960", "head_code": "130", "branch_code": "59", "branch_name": "竹北分社" }
    ,
    { "id": "2961", "head_code": "130", "branch_code": "68", "branch_name": "三民分社" }
    ,
    { "id": "2962", "head_code": "130", "branch_code": "77", "branch_name": "香山分社" }
    ,
    { "id": "2963", "head_code": "130", "branch_code": "86", "branch_name": "東南分社" }
    ,
    { "id": "2964", "head_code": "130", "branch_code": "95", "branch_name": "光復分社" }
    ,
    { "id": "2965", "head_code": "130", "branch_code": "101", "branch_name": "南寮分社" }
    ,
    { "id": "2966", "head_code": "130", "branch_code": "110", "branch_name": "南香山分社" }
    ,
    { "id": "2967", "head_code": "130", "branch_code": "129", "branch_name": "武陵分社" }
    ,
    { "id": "2968", "head_code": "130", "branch_code": "138", "branch_name": "延平分社" }
    ,
    { "id": "2969", "head_code": "132", "branch_code": "11", "branch_name": "市中分社" }
    ,
    { "id": "2970", "head_code": "132", "branch_code": "20", "branch_name": "民生分社" }
    ,
    { "id": "2971", "head_code": "132", "branch_code": "39", "branch_name": "營業部" }
    ,
    { "id": "2972", "head_code": "132", "branch_code": "48", "branch_name": "中正分社" }
    ,
    { "id": "2973", "head_code": "132", "branch_code": "57", "branch_name": "東南分社" }
    ,
    { "id": "2974", "head_code": "132", "branch_code": "66", "branch_name": "西門分社" }
    ,
    { "id": "2975", "head_code": "132", "branch_code": "75", "branch_name": "東光分社" }
    ,
    { "id": "2976", "head_code": "132", "branch_code": "84", "branch_name": "香山分社" }
    ,
    { "id": "2977", "head_code": "132", "branch_code": "93", "branch_name": "新興分社" }
    ,
    { "id": "2978", "head_code": "132", "branch_code": "109", "branch_name": "延平分社" }
    ,
    { "id": "2979", "head_code": "132", "branch_code": "118", "branch_name": "光華分社" }
    ,
    { "id": "2980", "head_code": "132", "branch_code": "127", "branch_name": "新豐分社" }
    ,
    { "id": "2981", "head_code": "132", "branch_code": "136", "branch_name": "竹北分社" }
    ,
    { "id": "2982", "head_code": "132", "branch_code": "145", "branch_name": "六家分行" }
    ,
    { "id": "2983", "head_code": "139", "branch_code": "14", "branch_name": "營業部" }
    ,
    { "id": "2984", "head_code": "139", "branch_code": "23", "branch_name": "苗栗縣信用合作社新南分社" }
    ,
    { "id": "2985", "head_code": "139", "branch_code": "32", "branch_name": "頭份分社" }
    ,
    { "id": "2986", "head_code": "139", "branch_code": "41", "branch_name": "後龍分社" }
    ,
    { "id": "2987", "head_code": "139", "branch_code": "69", "branch_name": "通霄分社" }
    ,
    { "id": "2988", "head_code": "139", "branch_code": "78", "branch_name": "苑裡分社" }
    ,
    { "id": "2989", "head_code": "139", "branch_code": "87", "branch_name": "前進分社" }
    ,
    { "id": "2990", "head_code": "139", "branch_code": "96", "branch_name": "竹南信用合作社竹北分社" }
    ,
    { "id": "2991", "head_code": "139", "branch_code": "102", "branch_name": "竹南信用合作社新竹分社" }
    ,
    { "id": "2992", "head_code": "146", "branch_code": "14", "branch_name": "營業部" }
    ,
    { "id": "2993", "head_code": "146", "branch_code": "23", "branch_name": "文昌分社" }
    ,
    { "id": "2994", "head_code": "146", "branch_code": "32", "branch_name": "南屯分社" }
    ,
    { "id": "2995", "head_code": "146", "branch_code": "41", "branch_name": "五權分社" }
    ,
    { "id": "2996", "head_code": "146", "branch_code": "50", "branch_name": "東南分社" }
    ,
    { "id": "2997", "head_code": "146", "branch_code": "69", "branch_name": "大智分社" }
    ,
    { "id": "2998", "head_code": "146", "branch_code": "78", "branch_name": "港路分社" }
    ,
    { "id": "2999", "head_code": "146", "branch_code": "87", "branch_name": "精進分社" }
    ,
    { "id": "3000", "head_code": "146", "branch_code": "96", "branch_name": "中興分社" }
    ,
    { "id": "3001", "head_code": "146", "branch_code": "102", "branch_name": "水湳分社" }
    ,
    { "id": "3002", "head_code": "146", "branch_code": "111", "branch_name": "中和分社" }
    ,
    { "id": "3003", "head_code": "146", "branch_code": "120", "branch_name": "松竹分社" }
    ,
    { "id": "3004", "head_code": "146", "branch_code": "139", "branch_name": "向上分社" }
    ,
    { "id": "3005", "head_code": "147", "branch_code": "13", "branch_name": "台中分行" }
    ,
    { "id": "3006", "head_code": "147", "branch_code": "22", "branch_name": "營業部" }
    ,
    { "id": "3007", "head_code": "147", "branch_code": "31", "branch_name": "中正簡易型分行" }
    ,
    { "id": "3008", "head_code": "147", "branch_code": "40", "branch_name": "成功分行" }
    ,
    { "id": "3009", "head_code": "147", "branch_code": "59", "branch_name": "西屯分行" }
    ,
    { "id": "3010", "head_code": "147", "branch_code": "68", "branch_name": "國光分行" }
    ,
    { "id": "3011", "head_code": "147", "branch_code": "77", "branch_name": "大智分行" }
    ,
    { "id": "3012", "head_code": "147", "branch_code": "86", "branch_name": "林森分行" }
    ,
    { "id": "3013", "head_code": "147", "branch_code": "95", "branch_name": "南門分行" }
    ,
    { "id": "3014", "head_code": "147", "branch_code": "101", "branch_name": "進化分行" }
    ,
    { "id": "3015", "head_code": "147", "branch_code": "110", "branch_name": "南屯分行" }
    ,
    { "id": "3016", "head_code": "147", "branch_code": "129", "branch_name": "文心簡易型分行" }
    ,
    { "id": "3017", "head_code": "147", "branch_code": "138", "branch_name": "北屯簡易型分行" }
    ,
    { "id": "3018", "head_code": "147", "branch_code": "147", "branch_name": "豐原分行" }
    ,
    { "id": "3019", "head_code": "147", "branch_code": "156", "branch_name": "彰化分行" }
    ,
    { "id": "3020", "head_code": "147", "branch_code": "165", "branch_name": "員林分行" }
    ,
    { "id": "3021", "head_code": "147", "branch_code": "174", "branch_name": "沙鹿分行" }
    ,
    { "id": "3022", "head_code": "147", "branch_code": "183", "branch_name": "台北分行" }
    ,
    { "id": "3023", "head_code": "147", "branch_code": "192", "branch_name": "桃園分行" }
    ,
    { "id": "3024", "head_code": "147", "branch_code": "208", "branch_name": "板橋分行" }
    ,
    { "id": "3025", "head_code": "147", "branch_code": "235", "branch_name": "三信豐信分行" }
    ,
    { "id": "3026", "head_code": "147", "branch_code": "244", "branch_name": "三信三民分行" }
    ,
    { "id": "3027", "head_code": "147", "branch_code": "253", "branch_name": "三信市前分行" }
    ,
    { "id": "3028", "head_code": "147", "branch_code": "262", "branch_name": "三信中山分行" }
    ,
    { "id": "3029", "head_code": "147", "branch_code": "271", "branch_name": "三信豐東分行" }
    ,
    { "id": "3030", "head_code": "147", "branch_code": "280", "branch_name": "三信豐樂分行" }
    ,
    { "id": "3031", "head_code": "147", "branch_code": "305", "branch_name": "高雄分行" }
    ,
    { "id": "3032", "head_code": "158", "branch_code": "19", "branch_name": "營業部" }
    ,
    { "id": "3033", "head_code": "158", "branch_code": "28", "branch_name": "永安分社" }
    ,
    { "id": "3034", "head_code": "158", "branch_code": "37", "branch_name": "華山分社" }
    ,
    { "id": "3035", "head_code": "158", "branch_code": "46", "branch_name": "彰美分社" }
    ,
    { "id": "3036", "head_code": "158", "branch_code": "55", "branch_name": "花壇分社" }
    ,
    { "id": "3037", "head_code": "158", "branch_code": "64", "branch_name": "大竹分社" }
    ,
    { "id": "3038", "head_code": "158", "branch_code": "73", "branch_name": "和美分社" }
    ,
    { "id": "3039", "head_code": "158", "branch_code": "82", "branch_name": "中正分社" }
    ,
    { "id": "3040", "head_code": "161", "branch_code": "13", "branch_name": "營業部" }
    ,
    { "id": "3041", "head_code": "161", "branch_code": "22", "branch_name": "華山分社" }
    ,
    { "id": "3042", "head_code": "161", "branch_code": "31", "branch_name": "彰南路分社" }
    ,
    { "id": "3043", "head_code": "161", "branch_code": "40", "branch_name": "東芳分社" }
    ,
    { "id": "3044", "head_code": "161", "branch_code": "59", "branch_name": "旭光分社" }
    ,
    { "id": "3045", "head_code": "161", "branch_code": "68", "branch_name": "新華分社" }
    ,
    { "id": "3046", "head_code": "162", "branch_code": "12", "branch_name": "車路口分社" }
    ,
    { "id": "3047", "head_code": "162", "branch_code": "21", "branch_name": "營業部" }
    ,
    { "id": "3048", "head_code": "162", "branch_code": "30", "branch_name": "觀音亭口分社" }
    ,
    { "id": "3049", "head_code": "162", "branch_code": "49", "branch_name": "華陽分社" }
    ,
    { "id": "3050", "head_code": "162", "branch_code": "58", "branch_name": "和美分社" }
    ,
    { "id": "3051", "head_code": "162", "branch_code": "67", "branch_name": "花壇分社" }
    ,
    { "id": "3052", "head_code": "162", "branch_code": "76", "branch_name": "曉陽分社" }
    ,
    { "id": "3053", "head_code": "162", "branch_code": "85", "branch_name": "伸港分社" }
    ,
    { "id": "3054", "head_code": "162", "branch_code": "94", "branch_name": "秀水分社" }
    ,
    { "id": "3055", "head_code": "162", "branch_code": "100", "branch_name": "福興分社" }
    ,
    { "id": "3056", "head_code": "163", "branch_code": "11", "branch_name": "營業部（永昌收付" }
    ,
    { "id": "3057", "head_code": "163", "branch_code": "20", "branch_name": "華山分社" }
    ,
    { "id": "3058", "head_code": "163", "branch_code": "39", "branch_name": "三民分社" }
    ,
    { "id": "3059", "head_code": "163", "branch_code": "48", "branch_name": "中華分社" }
    ,
    { "id": "3060", "head_code": "163", "branch_code": "57", "branch_name": "大竹分社" }
    ,
    { "id": "3061", "head_code": "163", "branch_code": "66", "branch_name": "和美分社" }
    ,
    { "id": "3062", "head_code": "163", "branch_code": "75", "branch_name": "彰化第十信用合作社大埔分社" }
    ,
    { "id": "3063", "head_code": "163", "branch_code": "84", "branch_name": "埔鹽分社" }
    ,
    { "id": "3064", "head_code": "163", "branch_code": "93", "branch_name": "溪湖分社" }
    ,
    { "id": "3065", "head_code": "163", "branch_code": "109", "branch_name": "伸港分社" }
    ,
    { "id": "3066", "head_code": "165", "branch_code": "19", "branch_name": "營業部" }
    ,
    { "id": "3067", "head_code": "165", "branch_code": "28", "branch_name": "彰鹿分社" }
    ,
    { "id": "3068", "head_code": "165", "branch_code": "37", "branch_name": "頂番分社" }
    ,
    { "id": "3069", "head_code": "165", "branch_code": "46", "branch_name": "埔鹽分社" }
    ,
    { "id": "3070", "head_code": "165", "branch_code": "55", "branch_name": "彰濱分社" }
    ,
    { "id": "3071", "head_code": "165", "branch_code": "64", "branch_name": "管嶼分社" }
    ,
    { "id": "3072", "head_code": "165", "branch_code": "73", "branch_name": "王功分社" }
    ,
    { "id": "3073", "head_code": "165", "branch_code": "82", "branch_name": "草港分社" }
    ,
    { "id": "3074", "head_code": "165", "branch_code": "91", "branch_name": "福興分社" }
    ,
    { "id": "3075", "head_code": "178", "branch_code": "13", "branch_name": "營業部" }
    ,
    { "id": "3076", "head_code": "178", "branch_code": "22", "branch_name": "國華分社" }
    ,
    { "id": "3077", "head_code": "178", "branch_code": "31", "branch_name": "新榮分社" }
    ,
    { "id": "3078", "head_code": "178", "branch_code": "40", "branch_name": "北興分社" }
    ,
    { "id": "3079", "head_code": "178", "branch_code": "59", "branch_name": "忠孝分社" }
    ,
    { "id": "3080", "head_code": "178", "branch_code": "68", "branch_name": "興嘉分社" }
    ,
    { "id": "3081", "head_code": "178", "branch_code": "77", "branch_name": "新南分社" }
    ,
    { "id": "3082", "head_code": "178", "branch_code": "86", "branch_name": "新興分社" }
    ,
    { "id": "3083", "head_code": "178", "branch_code": "95", "branch_name": "美源分社" }
    ,
    { "id": "3084", "head_code": "178", "branch_code": "101", "branch_name": "新生分社" }
    ,
    { "id": "3085", "head_code": "178", "branch_code": "110", "branch_name": "民生分社" }
    ,
    { "id": "3086", "head_code": "179", "branch_code": "12", "branch_name": "營業部" }
    ,
    { "id": "3087", "head_code": "179", "branch_code": "21", "branch_name": "仁愛分社" }
    ,
    { "id": "3088", "head_code": "179", "branch_code": "30", "branch_name": "中正分社" }
    ,
    { "id": "3089", "head_code": "179", "branch_code": "49", "branch_name": "台林分社" }
    ,
    { "id": "3090", "head_code": "179", "branch_code": "58", "branch_name": "輔仁分社" }
    ,
    { "id": "3091", "head_code": "188", "branch_code": "10", "branch_name": "營業部" }
    ,
    { "id": "3092", "head_code": "188", "branch_code": "29", "branch_name": "東門分社" }
    ,
    { "id": "3093", "head_code": "188", "branch_code": "38", "branch_name": "西門分社" }
    ,
    { "id": "3094", "head_code": "188", "branch_code": "47", "branch_name": "安平分社" }
    ,
    { "id": "3095", "head_code": "188", "branch_code": "56", "branch_name": "成功分社" }
    ,
    { "id": "3096", "head_code": "188", "branch_code": "65", "branch_name": "大同分社" }
    ,
    { "id": "3097", "head_code": "188", "branch_code": "74", "branch_name": "文賢分社" }
    ,
    { "id": "3098", "head_code": "188", "branch_code": "83", "branch_name": "金華分社" }
    ,
    { "id": "3099", "head_code": "188", "branch_code": "92", "branch_name": "小東分社" }
    ,
    { "id": "3100", "head_code": "188", "branch_code": "108", "branch_name": "開元分社" }
    ,
    { "id": "3101", "head_code": "188", "branch_code": "117", "branch_name": "中華分社" }
    ,
    { "id": "3102", "head_code": "188", "branch_code": "126", "branch_name": "大灣分社" }
    ,
    { "id": "3103", "head_code": "188", "branch_code": "135", "branch_name": "台南第三信用合社安中分社" }
    ,
    { "id": "3104", "head_code": "203", "branch_code": "12", "branch_name": "營業部" }
    ,
    { "id": "3105", "head_code": "203", "branch_code": "21", "branch_name": "三多分社" }
    ,
    { "id": "3106", "head_code": "203", "branch_code": "30", "branch_name": "旗津分社" }
    ,
    { "id": "3107", "head_code": "203", "branch_code": "49", "branch_name": "苓雅分社" }
    ,
    { "id": "3108", "head_code": "203", "branch_code": "58", "branch_name": "新興分社" }
    ,
    { "id": "3109", "head_code": "203", "branch_code": "67", "branch_name": "左營分社" }
    ,
    { "id": "3110", "head_code": "203", "branch_code": "76", "branch_name": "瑞隆分社" }
    ,
    { "id": "3111", "head_code": "203", "branch_code": "85", "branch_name": "盬埕分社" }
    ,
    { "id": "3112", "head_code": "203", "branch_code": "94", "branch_name": "灣子分社" }
    ,
    { "id": "3113", "head_code": "203", "branch_code": "100", "branch_name": "前鎮分社" }
    ,
    { "id": "3114", "head_code": "203", "branch_code": "119", "branch_name": "大昌分社" }
    ,
    { "id": "3115", "head_code": "203", "branch_code": "128", "branch_name": "後勁分社" }
    ,
    { "id": "3116", "head_code": "203", "branch_code": "137", "branch_name": "右昌分社" }
    ,
    { "id": "3117", "head_code": "203", "branch_code": "146", "branch_name": "四維簡易型分社" }
    ,
    { "id": "3118", "head_code": "203", "branch_code": "155", "branch_name": "明誠分社" }
    ,
    { "id": "3119", "head_code": "203", "branch_code": "164", "branch_name": "光華簡易型分社" }
    ,
    { "id": "3120", "head_code": "204", "branch_code": "11", "branch_name": "營業部" }
    ,
    { "id": "3121", "head_code": "204", "branch_code": "20", "branch_name": "八德分社" }
    ,
    { "id": "3122", "head_code": "204", "branch_code": "39", "branch_name": "苓雅分社" }
    ,
    { "id": "3123", "head_code": "204", "branch_code": "48", "branch_name": "新興分社" }
    ,
    { "id": "3124", "head_code": "204", "branch_code": "57", "branch_name": "三民分社" }
    ,
    { "id": "3125", "head_code": "204", "branch_code": "66", "branch_name": "鼓山分社" }
    ,
    { "id": "3126", "head_code": "204", "branch_code": "75", "branch_name": "臨海分社" }
    ,
    { "id": "3127", "head_code": "204", "branch_code": "84", "branch_name": "前鎮分社" }
    ,
    { "id": "3128", "head_code": "204", "branch_code": "93", "branch_name": "前金分社" }
    ,
    { "id": "3129", "head_code": "204", "branch_code": "109", "branch_name": "左營分社" }
    ,
    { "id": "3130", "head_code": "204", "branch_code": "118", "branch_name": "青年分社" }
    ,
    { "id": "3131", "head_code": "204", "branch_code": "127", "branch_name": "楠梓分社" }
    ,
    { "id": "3132", "head_code": "204", "branch_code": "136", "branch_name": "三多分社" }
    ,
    { "id": "3133", "head_code": "204", "branch_code": "145", "branch_name": "灣子分社" }
    ,
    { "id": "3134", "head_code": "204", "branch_code": "154", "branch_name": "天祥分社" }
    ,
    { "id": "3135", "head_code": "204", "branch_code": "163", "branch_name": "陽明分社" }
    ,
    { "id": "3136", "head_code": "204", "branch_code": "172", "branch_name": "武廟分社" }
    ,
    { "id": "3137", "head_code": "204", "branch_code": "181", "branch_name": "瑞祥分社" }
    ,
    { "id": "3138", "head_code": "204", "branch_code": "190", "branch_name": "右昌分社" }
    ,
    { "id": "3139", "head_code": "204", "branch_code": "206", "branch_name": "一心分社" }
    ,
    { "id": "3140", "head_code": "215", "branch_code": "17", "branch_name": "復興分社" }
    ,
    { "id": "3141", "head_code": "215", "branch_code": "26", "branch_name": "自由分社" }
    ,
    { "id": "3142", "head_code": "215", "branch_code": "35", "branch_name": "中華分社" }
    ,
    { "id": "3143", "head_code": "215", "branch_code": "44", "branch_name": "營業部" }
    ,
    { "id": "3144", "head_code": "215", "branch_code": "53", "branch_name": "美崙簡易型分社" }
    ,
    { "id": "3145", "head_code": "215", "branch_code": "62", "branch_name": "信義簡易型分社" }
    ,
    { "id": "3146", "head_code": "215", "branch_code": "71", "branch_name": "自強分社" }
    ,
    { "id": "3147", "head_code": "215", "branch_code": "80", "branch_name": "國光分社" }
    ,
    { "id": "3148", "head_code": "215", "branch_code": "99", "branch_name": "鳳山分社" }
    ,
    { "id": "3149", "head_code": "215", "branch_code": "105", "branch_name": "建國分社" }
    ,
    { "id": "3150", "head_code": "215", "branch_code": "114", "branch_name": "新秀簡易型分社" }
    ,
    { "id": "3151", "head_code": "215", "branch_code": "123", "branch_name": "慶豐簡易型分社" }
    ,
    { "id": "3152", "head_code": "215", "branch_code": "132", "branch_name": "台東分社" }
    ,
    { "id": "3153", "head_code": "216", "branch_code": "16", "branch_name": "社營業部" }
    ,
    { "id": "3154", "head_code": "216", "branch_code": "25", "branch_name": "社中山分社" }
    ,
    { "id": "3155", "head_code": "216", "branch_code": "34", "branch_name": "社主里分社" }
    ,
    { "id": "3156", "head_code": "216", "branch_code": "43", "branch_name": "社美崙分社" }
    ,
    { "id": "3157", "head_code": "216", "branch_code": "52", "branch_name": "社中正分社" }
    ,
    { "id": "3158", "head_code": "216", "branch_code": "61", "branch_name": "社富國分社" }
    ,
    { "id": "3159", "head_code": "216", "branch_code": "70", "branch_name": "社田蒲分社" }
    ,
    { "id": "3160", "head_code": "216", "branch_code": "89", "branch_name": "社建國分社" }
    ,
    { "id": "3161", "head_code": "216", "branch_code": "98", "branch_name": "社壽豐分社" }
    ,
    { "id": "3162", "head_code": "216", "branch_code": "104", "branch_name": "社玉里分社" }
    ,
    { "id": "3163", "head_code": "216", "branch_code": "122", "branch_name": "社台東分社" }
    ,
    { "id": "3164", "head_code": "222", "branch_code": "17", "branch_name": "營業部" }
    ,
    { "id": "3165", "head_code": "222", "branch_code": "26", "branch_name": "儲蓄部" }
    ,
    { "id": "3166", "head_code": "222", "branch_code": "35", "branch_name": "光復分社" }
    ,
    { "id": "3167", "head_code": "222", "branch_code": "44", "branch_name": "澎南分社" }
    ,
    { "id": "3168", "head_code": "222", "branch_code": "53", "branch_name": "赤崁分社" }
    ,
    { "id": "3169", "head_code": "222", "branch_code": "62", "branch_name": "西嶼分社" }
    ,
    { "id": "3170", "head_code": "222", "branch_code": "80", "branch_name": "湖西分社" }
    ,
    { "id": "3171", "head_code": "222", "branch_code": "99", "branch_name": "港都分社" }
    ,
    { "id": "3172", "head_code": "222", "branch_code": "105", "branch_name": "朝陽分社" }
    ,
    { "id": "3173", "head_code": "223", "branch_code": "16", "branch_name": "營業部" }
    ,
    { "id": "3174", "head_code": "223", "branch_code": "25", "branch_name": "民生分社" }
    ,
    { "id": "3175", "head_code": "223", "branch_code": "34", "branch_name": "陽明分社" }
    ,
    { "id": "3176", "head_code": "223", "branch_code": "43", "branch_name": "澎南分社" }
    ,
    { "id": "3177", "head_code": "223", "branch_code": "52", "branch_name": "白沙分社" }
    ,
    { "id": "3178", "head_code": "223", "branch_code": "61", "branch_name": "西嶼分社" }
    ,
    { "id": "3179", "head_code": "223", "branch_code": "70", "branch_name": "湖西分社" }
    ,
    { "id": "3180", "head_code": "223", "branch_code": "89", "branch_name": "漁港分社" }
    ,
    { "id": "3181", "head_code": "223", "branch_code": "98", "branch_name": "中興分社" }
    ,
    { "id": "3182", "head_code": "224", "branch_code": "15", "branch_name": "營業部" }
    ,
    { "id": "3183", "head_code": "224", "branch_code": "24", "branch_name": "金沙分社" }
    ,
    { "id": "3184", "head_code": "224", "branch_code": "33", "branch_name": "金湖分社" }
    ,
    { "id": "3185", "head_code": "224", "branch_code": "42", "branch_name": "烈嶼分社" }
    ,
    { "id": "3186", "head_code": "321", "branch_code": "19", "branch_name": "台北分行" }
    ,
    { "id": "3187", "head_code": "503", "branch_code": "19", "branch_name": "信用部" }
    ,
    { "id": "3188", "head_code": "503", "branch_code": "20", "branch_name": "八斗子分部" }
    ,
    { "id": "3189", "head_code": "504", "branch_code": "10", "branch_name": "信用部" }
    ,
    { "id": "3190", "head_code": "504", "branch_code": "21", "branch_name": "深澳分部" }
    ,
    { "id": "3191", "head_code": "504", "branch_code": "32", "branch_name": "台北縣萬里區漁會信用部" }
    ,
    { "id": "3192", "head_code": "504", "branch_code": "54", "branch_name": "台北縣萬里區漁會信用部萬里分部" }
    ,
    { "id": "3193", "head_code": "505", "branch_code": "11", "branch_name": "頭城區漁會" }
    ,
    { "id": "3194", "head_code": "505", "branch_code": "22", "branch_name": "蘇澳區漁會信用部" }
    ,
    { "id": "3195", "head_code": "505", "branch_code": "33", "branch_name": "漁會大溪分部" }
    ,
    { "id": "3196", "head_code": "505", "branch_code": "66", "branch_name": "漁會壯圍分部" }
    ,
    { "id": "3197", "head_code": "506", "branch_code": "12", "branch_name": "信用部" }
    ,
    { "id": "3198", "head_code": "507", "branch_code": "13", "branch_name": "信用部" }
    ,
    { "id": "3199", "head_code": "512", "branch_code": "11", "branch_name": "雲林區漁會" }
    ,
    { "id": "3200", "head_code": "512", "branch_code": "22", "branch_name": "台西分部" }
    ,
    { "id": "3201", "head_code": "512", "branch_code": "33", "branch_name": "口湖分部" }
    ,
    { "id": "3202", "head_code": "512", "branch_code": "44", "branch_name": "麥寮分部" }
    ,
    { "id": "3203", "head_code": "512", "branch_code": "55", "branch_name": "三條崙分部" }
    ,
    { "id": "3204", "head_code": "515", "branch_code": "14", "branch_name": "信用部" }
    ,
    { "id": "3205", "head_code": "515", "branch_code": "25", "branch_name": "新塭分部" }
    ,
    { "id": "3206", "head_code": "515", "branch_code": "36", "branch_name": "義竹分部" }
    ,
    { "id": "3207", "head_code": "515", "branch_code": "47", "branch_name": "過溝分部" }
    ,
    { "id": "3208", "head_code": "515", "branch_code": "58", "branch_name": "東石分部" }
    ,
    { "id": "3209", "head_code": "515", "branch_code": "69", "branch_name": "過路分部" }
    ,
    { "id": "3210", "head_code": "515", "branch_code": "70", "branch_name": "副瀨分部" }
    ,
    { "id": "3211", "head_code": "515", "branch_code": "81", "branch_name": "景山分部" }
    ,
    { "id": "3212", "head_code": "517", "branch_code": "16", "branch_name": "信用部" }
    ,
    { "id": "3213", "head_code": "517", "branch_code": "27", "branch_name": "四草分部" }
    ,
    { "id": "3214", "head_code": "517", "branch_code": "38", "branch_name": "安南分部" }
    ,
    { "id": "3215", "head_code": "518", "branch_code": "17", "branch_name": "信用部" }
    ,
    { "id": "3216", "head_code": "518", "branch_code": "28", "branch_name": "七股分部" }
    ,
    { "id": "3217", "head_code": "518", "branch_code": "39", "branch_name": "北門分部" }
    ,
    { "id": "3218", "head_code": "518", "branch_code": "40", "branch_name": "將軍港分部" }
    ,
    { "id": "3219", "head_code": "518", "branch_code": "51", "branch_name": "青山港分部" }
    ,
    { "id": "3220", "head_code": "518", "branch_code": "73", "branch_name": "永吉分部" }
    ,
    { "id": "3221", "head_code": "520", "branch_code": "12", "branch_name": "信用部" }
    ,
    { "id": "3222", "head_code": "520", "branch_code": "23", "branch_name": "高雄市小港區漁會信用部" }
    ,
    { "id": "3223", "head_code": "520", "branch_code": "34", "branch_name": "旗津分部" }
    ,
    { "id": "3224", "head_code": "520", "branch_code": "56", "branch_name": "信用部援中港分部" }
    ,
    { "id": "3225", "head_code": "521", "branch_code": "24", "branch_name": "興達港區漁會信用部" }
    ,
    { "id": "3226", "head_code": "521", "branch_code": "35", "branch_name": "興達港區漁會下茄定分部" }
    ,
    { "id": "3227", "head_code": "521", "branch_code": "68", "branch_name": "林園區漁會信用部" }
    ,
    { "id": "3228", "head_code": "521", "branch_code": "79", "branch_name": "彌陀區漁會信用部" }
    ,
    { "id": "3229", "head_code": "521", "branch_code": "91", "branch_name": "永安區漁會信用部" }
    ,
    { "id": "3230", "head_code": "521", "branch_code": "105", "branch_name": "彌陀區漁會舊港分部" }
    ,
    { "id": "3231", "head_code": "521", "branch_code": "138", "branch_name": "興達區漁會信用部白砂崙分部" }
    ,
    { "id": "3232", "head_code": "521", "branch_code": "149", "branch_name": "彌陀區漁會南寮分部" }
    ,
    { "id": "3233", "head_code": "523", "branch_code": "15", "branch_name": "琉球區漁會信用部" }
    ,
    { "id": "3234", "head_code": "523", "branch_code": "37", "branch_name": "東港區漁會信用部" }
    ,
    { "id": "3235", "head_code": "523", "branch_code": "48", "branch_name": "林邊區漁會信用部" }
    ,
    { "id": "3236", "head_code": "523", "branch_code": "59", "branch_name": "林邊區漁會塭豐分部" }
    ,
    { "id": "3237", "head_code": "523", "branch_code": "71", "branch_name": "林邊區漁會水利分部" }
    ,
    { "id": "3238", "head_code": "523", "branch_code": "82", "branch_name": "林邊區漁會崎峰分部" }
    ,
    { "id": "3239", "head_code": "523", "branch_code": "129", "branch_name": "東港區漁會新園分部" }
    ,
    { "id": "3240", "head_code": "524", "branch_code": "16", "branch_name": "信用部" }
    ,
    { "id": "3241", "head_code": "525", "branch_code": "17", "branch_name": "信用部" }
    ,
    { "id": "3242", "head_code": "525", "branch_code": "28", "branch_name": "西嶼分部" }
    ,
    { "id": "3243", "head_code": "525", "branch_code": "39", "branch_name": "白沙分部" }
    ,
    { "id": "3244", "head_code": "603", "branch_code": "16", "branch_name": "信用部" }
    ,
    { "id": "3245", "head_code": "603", "branch_code": "27", "branch_name": "安樂分部" }
    ,
    { "id": "3246", "head_code": "603", "branch_code": "38", "branch_name": "信用部百福分部" }
    ,
    { "id": "3247", "head_code": "603", "branch_code": "49", "branch_name": "信用部安瀾橋分部" }
    ,
    { "id": "3248", "head_code": "605", "branch_code": "18", "branch_name": "信用部" }
    ,
    { "id": "3249", "head_code": "605", "branch_code": "29", "branch_name": "三民分部" }
    ,
    { "id": "3250", "head_code": "605", "branch_code": "30", "branch_name": "鼓山分部" }
    ,
    { "id": "3251", "head_code": "605", "branch_code": "41", "branch_name": "新興分部" }
    ,
    { "id": "3252", "head_code": "605", "branch_code": "52", "branch_name": "鼎力分部" }
    ,
    { "id": "3253", "head_code": "605", "branch_code": "63", "branch_name": "苓雅分部" }
    ,
    { "id": "3254", "head_code": "605", "branch_code": "74", "branch_name": "前鎮分部" }
    ,
    { "id": "3255", "head_code": "605", "branch_code": "85", "branch_name": "楠梓分部" }
    ,
    { "id": "3256", "head_code": "605", "branch_code": "96", "branch_name": "右昌分部" }
    ,
    { "id": "3257", "head_code": "605", "branch_code": "100", "branch_name": "後勁分部" }
    ,
    { "id": "3258", "head_code": "605", "branch_code": "111", "branch_name": "左營分部" }
    ,
    { "id": "3259", "head_code": "605", "branch_code": "122", "branch_name": "營北分部" }
    ,
    { "id": "3260", "head_code": "605", "branch_code": "133", "branch_name": "新庄分部" }
    ,
    { "id": "3261", "head_code": "606", "branch_code": "19", "branch_name": "三重市農會信用部" }
    ,
    { "id": "3262", "head_code": "606", "branch_code": "31", "branch_name": "淡水鎮農會信用部" }
    ,
    { "id": "3263", "head_code": "606", "branch_code": "42", "branch_name": "樹林市農會信用部" }
    ,
    { "id": "3264", "head_code": "606", "branch_code": "53", "branch_name": "鶯歌鎮農會" }
    ,
    { "id": "3265", "head_code": "606", "branch_code": "64", "branch_name": "三峽鎮農會信用部" }
    ,
    { "id": "3266", "head_code": "606", "branch_code": "97", "branch_name": "土城市農會信用部" }
    ,
    { "id": "3267", "head_code": "606", "branch_code": "101", "branch_name": "蘆洲市農會信用部" }
    ,
    { "id": "3268", "head_code": "606", "branch_code": "112", "branch_name": "五股鄉農會信用部" }
    ,
    { "id": "3269", "head_code": "606", "branch_code": "123", "branch_name": "林口鄉農會信用部" }
    ,
    { "id": "3270", "head_code": "606", "branch_code": "134", "branch_name": "泰山鄉農會信用部" }
    ,
    { "id": "3271", "head_code": "606", "branch_code": "145", "branch_name": "坪林鄉農會信用部" }
    ,
    { "id": "3272", "head_code": "606", "branch_code": "156", "branch_name": "八里鄉農會" }
    ,
    { "id": "3273", "head_code": "606", "branch_code": "167", "branch_name": "金山地區農會信用部" }
    ,
    { "id": "3274", "head_code": "606", "branch_code": "178", "branch_name": "瑞芳地區農會信用部" }
    ,
    { "id": "3275", "head_code": "606", "branch_code": "189", "branch_name": "新店地區農會信用部" }
    ,
    { "id": "3276", "head_code": "606", "branch_code": "190", "branch_name": "中和地區農會信用部" }
    ,
    { "id": "3277", "head_code": "606", "branch_code": "204", "branch_name": "深坑鄉農會信用部" }
    ,
    { "id": "3278", "head_code": "606", "branch_code": "237", "branch_name": "樹林市農會信用部三多分部" }
    ,
    { "id": "3279", "head_code": "606", "branch_code": "248", "branch_name": "樹林市農會信用部山佳分部" }
    ,
    { "id": "3280", "head_code": "606", "branch_code": "259", "branch_name": "樹林市農會柑園分部" }
    ,
    { "id": "3281", "head_code": "606", "branch_code": "260", "branch_name": "三峽鎮農會成福分部" }
    ,
    { "id": "3282", "head_code": "606", "branch_code": "318", "branch_name": "土城市農會清水分部" }
    ,
    { "id": "3283", "head_code": "606", "branch_code": "329", "branch_name": "五股鄉農會興珍分部" }
    ,
    { "id": "3284", "head_code": "606", "branch_code": "330", "branch_name": "五股鄉農會成州分部" }
    ,
    { "id": "3285", "head_code": "606", "branch_code": "341", "branch_name": "林口鄉農會南勢分部" }
    ,
    { "id": "3286", "head_code": "606", "branch_code": "352", "branch_name": "金山區農會萬里分部" }
    ,
    { "id": "3287", "head_code": "606", "branch_code": "363", "branch_name": "新店地區農會德安分部" }
    ,
    { "id": "3288", "head_code": "606", "branch_code": "374", "branch_name": "瑞芳地區農會九份分部" }
    ,
    { "id": "3289", "head_code": "606", "branch_code": "385", "branch_name": "瑞芳地區農會四腳亭分部" }
    ,
    { "id": "3290", "head_code": "606", "branch_code": "396", "branch_name": "瑞芳地區農會雙溪分部" }
    ,
    { "id": "3291", "head_code": "606", "branch_code": "400", "branch_name": "瑞芳地區農會貢寮分部" }
    ,
    { "id": "3292", "head_code": "606", "branch_code": "411", "branch_name": "瑞芳地區農會澳底分部" }
    ,
    { "id": "3293", "head_code": "606", "branch_code": "422", "branch_name": "新店區農會中正分部" }
    ,
    { "id": "3294", "head_code": "606", "branch_code": "433", "branch_name": "新店區農會烏來分部" }
    ,
    { "id": "3295", "head_code": "606", "branch_code": "444", "branch_name": "中和地區農會中正分部" }
    ,
    { "id": "3296", "head_code": "606", "branch_code": "455", "branch_name": "中和地區農會員山分部" }
    ,
    { "id": "3297", "head_code": "606", "branch_code": "466", "branch_name": "石碇鄉農會信用部" }
    ,
    { "id": "3298", "head_code": "606", "branch_code": "477", "branch_name": "平溪鄉農會信用部" }
    ,
    { "id": "3299", "head_code": "606", "branch_code": "499", "branch_name": "石門鄉農會信用部" }
    ,
    { "id": "3300", "head_code": "606", "branch_code": "503", "branch_name": "鶯歌鎮農會二橋分部" }
    ,
    { "id": "3301", "head_code": "606", "branch_code": "514", "branch_name": "鶯歌鎮農會鳳鳴分部" }
    ,
    { "id": "3302", "head_code": "606", "branch_code": "547", "branch_name": "石門鄉農會老梅分部" }
    ,
    { "id": "3303", "head_code": "606", "branch_code": "558", "branch_name": "三峽鎮農會橫溪分部" }
    ,
    { "id": "3304", "head_code": "606", "branch_code": "569", "branch_name": "蘆洲市農會灰瑤分部" }
    ,
    { "id": "3305", "head_code": "606", "branch_code": "570", "branch_name": "中和地區農會智光分部" }
    ,
    { "id": "3306", "head_code": "606", "branch_code": "581", "branch_name": "中和地區農會連城分部" }
    ,
    { "id": "3307", "head_code": "606", "branch_code": "592", "branch_name": "中和地區農會民享分部" }
    ,
    { "id": "3308", "head_code": "606", "branch_code": "606", "branch_name": "三重市農會溪美分部" }
    ,
    { "id": "3309", "head_code": "606", "branch_code": "651", "branch_name": "泰山鄉農會貴子分部" }
    ,
    { "id": "3310", "head_code": "606", "branch_code": "662", "branch_name": "泰山鄉農會明志分部" }
    ,
    { "id": "3311", "head_code": "606", "branch_code": "673", "branch_name": "三峽鎮農會大埔分部" }
    ,
    { "id": "3312", "head_code": "606", "branch_code": "684", "branch_name": "土城市農會頂埔分部" }
    ,
    { "id": "3313", "head_code": "606", "branch_code": "695", "branch_name": "土城市農會貨饒分部" }
    ,
    { "id": "3314", "head_code": "606", "branch_code": "709", "branch_name": "五股鄉農會德泰分部" }
    ,
    { "id": "3315", "head_code": "606", "branch_code": "710", "branch_name": "三重市農會力行分部" }
    ,
    { "id": "3316", "head_code": "606", "branch_code": "721", "branch_name": "三重市農會三民分部" }
    ,
    { "id": "3317", "head_code": "606", "branch_code": "732", "branch_name": "中和地區農會錦和分部" }
    ,
    { "id": "3318", "head_code": "606", "branch_code": "743", "branch_name": "中和地區農會仁愛分部" }
    ,
    { "id": "3319", "head_code": "606", "branch_code": "754", "branch_name": "樹林市農會信用部保安分部" }
    ,
    { "id": "3320", "head_code": "606", "branch_code": "765", "branch_name": "八里鄉農會埤頭分部" }
    ,
    { "id": "3321", "head_code": "606", "branch_code": "798", "branch_name": "淡水鎮農會中興分部" }
    ,
    { "id": "3322", "head_code": "606", "branch_code": "802", "branch_name": "淡水鎮農會竹圍分部" }
    ,
    { "id": "3323", "head_code": "606", "branch_code": "813", "branch_name": "淡水鎮農會水碓分部" }
    ,
    { "id": "3324", "head_code": "606", "branch_code": "824", "branch_name": "八里鄉農會龍形分部" }
    ,
    { "id": "3325", "head_code": "606", "branch_code": "835", "branch_name": "蘆洲市農會成功分部" }
    ,
    { "id": "3326", "head_code": "606", "branch_code": "846", "branch_name": "三芝鄉農會北新庄分部" }
    ,
    { "id": "3327", "head_code": "606", "branch_code": "857", "branch_name": "金山區農會野柳分部" }
    ,
    { "id": "3328", "head_code": "606", "branch_code": "868", "branch_name": "瑞芳地區農會龍興分部" }
    ,
    { "id": "3329", "head_code": "606", "branch_code": "879", "branch_name": "瑞芳地區農會深澳分部" }
    ,
    { "id": "3330", "head_code": "606", "branch_code": "891", "branch_name": "土城市農會峰廷分部" }
    ,
    { "id": "3331", "head_code": "606", "branch_code": "905", "branch_name": "土城市農會廣福分部" }
    ,
    { "id": "3332", "head_code": "606", "branch_code": "916", "branch_name": "三重市農會光復分部" }
    ,
    { "id": "3333", "head_code": "606", "branch_code": "927", "branch_name": "泰山鄉農會貴和分部" }
    ,
    { "id": "3334", "head_code": "606", "branch_code": "938", "branch_name": "三重市農會成功分部" }
    ,
    { "id": "3335", "head_code": "606", "branch_code": "950", "branch_name": "五股鄉農會五福分部" }
    ,
    { "id": "3336", "head_code": "606", "branch_code": "961", "branch_name": "瑞芳地區農會福隆分部" }
    ,
    { "id": "3337", "head_code": "606", "branch_code": "1005", "branch_name": "泰山鄉農會泰林分部" }
    ,
    { "id": "3338", "head_code": "606", "branch_code": "1016", "branch_name": "泰山鄉農會泰友分部" }
    ,
    { "id": "3339", "head_code": "606", "branch_code": "1027", "branch_name": "樹林市農會信用部東山分部" }
    ,
    { "id": "3340", "head_code": "606", "branch_code": "1038", "branch_name": "樹林市農會信用部寮分部" }
    ,
    { "id": "3341", "head_code": "606", "branch_code": "1061", "branch_name": "淡水鎮農會福德分部" }
    ,
    { "id": "3342", "head_code": "606", "branch_code": "1083", "branch_name": "五股鄉農會德音分部" }
    ,
    { "id": "3343", "head_code": "606", "branch_code": "1094", "branch_name": "五股鄉農會成德分部" }
    ,
    { "id": "3344", "head_code": "606", "branch_code": "1119", "branch_name": "三重市農會慈福分部" }
    ,
    { "id": "3345", "head_code": "606", "branch_code": "1120", "branch_name": "樹林鎮農會圳安分部" }
    ,
    { "id": "3346", "head_code": "606", "branch_code": "1131", "branch_name": "三峽鎮農會中正分部" }
    ,
    { "id": "3347", "head_code": "606", "branch_code": "1164", "branch_name": "金山區農會五福分部" }
    ,
    { "id": "3348", "head_code": "606", "branch_code": "1175", "branch_name": "五股鄉農會成功分部" }
    ,
    { "id": "3349", "head_code": "606", "branch_code": "1197", "branch_name": "鶯歌鎮農會永昌分部" }
    ,
    { "id": "3350", "head_code": "606", "branch_code": "1201", "branch_name": "深坑鄉農會萬順分部" }
    ,
    { "id": "3351", "head_code": "606", "branch_code": "1223", "branch_name": "中和地區農會竹林分部" }
    ,
    { "id": "3352", "head_code": "606", "branch_code": "1245", "branch_name": "新店地區農會青潭分部" }
    ,
    { "id": "3353", "head_code": "606", "branch_code": "1289", "branch_name": "中和地區農會興南分部" }
    ,
    { "id": "3354", "head_code": "606", "branch_code": "1290", "branch_name": "三芝鄉農會信用部" }
    ,
    { "id": "3355", "head_code": "606", "branch_code": "1315", "branch_name": "樹林市農會信用部大同分部" }
    ,
    { "id": "3356", "head_code": "606", "branch_code": "1326", "branch_name": "新店區農會安康分部" }
    ,
    { "id": "3357", "head_code": "606", "branch_code": "1337", "branch_name": "樹林市農會信用部復興分部" }
    ,
    { "id": "3358", "head_code": "606", "branch_code": "1348", "branch_name": "淡水鎮農會義山分部" }
    ,
    { "id": "3359", "head_code": "606", "branch_code": "1359", "branch_name": "三峽鎮農會民生分部" }
    ,
    { "id": "3360", "head_code": "606", "branch_code": "1360", "branch_name": "淡水鎮農會新興分部" }
    ,
    { "id": "3361", "head_code": "606", "branch_code": "9012", "branch_name": "瑞芳農會代理雙溪鄉公庫" }
    ,
    { "id": "3362", "head_code": "606", "branch_code": "9023", "branch_name": "瑞芳農會代理貢寮鄉公庫" }
    ,
    { "id": "3363", "head_code": "606", "branch_code": "9034", "branch_name": "深坑地區農會代理平溪鄉公庫" }
    ,
    { "id": "3364", "head_code": "607", "branch_code": "10", "branch_name": "宜蘭市農會信用部" }
    ,
    { "id": "3365", "head_code": "607", "branch_code": "21", "branch_name": "頭城鎮農會信用部" }
    ,
    { "id": "3366", "head_code": "607", "branch_code": "32", "branch_name": "羅東鎮農會信用部" }
    ,
    { "id": "3367", "head_code": "607", "branch_code": "54", "branch_name": "壯圍鄉農會信用部" }
    ,
    { "id": "3368", "head_code": "607", "branch_code": "65", "branch_name": "員山鄉農會信用部" }
    ,
    { "id": "3369", "head_code": "607", "branch_code": "98", "branch_name": "蘇澳地區農會信用部" }
    ,
    { "id": "3370", "head_code": "607", "branch_code": "102", "branch_name": "三星地區農會信用部" }
    ,
    { "id": "3371", "head_code": "607", "branch_code": "113", "branch_name": "頭城鎮農會大溪分部" }
    ,
    { "id": "3372", "head_code": "607", "branch_code": "135", "branch_name": "壯圍鄉農會古亭分部" }
    ,
    { "id": "3373", "head_code": "607", "branch_code": "146", "branch_name": "員山鄉農會同樂分部" }
    ,
    { "id": "3374", "head_code": "607", "branch_code": "205", "branch_name": "蘇澳區農會南方澳分部" }
    ,
    { "id": "3375", "head_code": "607", "branch_code": "216", "branch_name": "蘇澳區農會南澳分部" }
    ,
    { "id": "3376", "head_code": "607", "branch_code": "227", "branch_name": "蘇澳區農會新馬分部" }
    ,
    { "id": "3377", "head_code": "607", "branch_code": "238", "branch_name": "蘇澳區農會新城分部" }
    ,
    { "id": "3378", "head_code": "607", "branch_code": "249", "branch_name": "三星區農會大洲分部" }
    ,
    { "id": "3379", "head_code": "607", "branch_code": "250", "branch_name": "三星區農會福山分部" }
    ,
    { "id": "3380", "head_code": "607", "branch_code": "283", "branch_name": "羅東鎮農會民權分部" }
    ,
    { "id": "3381", "head_code": "607", "branch_code": "294", "branch_name": "羅東鎮農會農倉分部" }
    ,
    { "id": "3382", "head_code": "607", "branch_code": "308", "branch_name": "宜蘭市農會神農分部" }
    ,
    { "id": "3383", "head_code": "607", "branch_code": "319", "branch_name": "羅東鎮農會南門分部" }
    ,
    { "id": "3384", "head_code": "607", "branch_code": "331", "branch_name": "員山鄉農會深溝分部" }
    ,
    { "id": "3385", "head_code": "607", "branch_code": "342", "branch_name": "頭城鎮農會金面分部" }
    ,
    { "id": "3386", "head_code": "607", "branch_code": "353", "branch_name": "三星區農會大隱分部" }
    ,
    { "id": "3387", "head_code": "607", "branch_code": "364", "branch_name": "羅東鎮農會北門分部" }
    ,
    { "id": "3388", "head_code": "607", "branch_code": "375", "branch_name": "羅東鎮農會中正路分部" }
    ,
    { "id": "3389", "head_code": "607", "branch_code": "386", "branch_name": "宜蘭市農會小東分部" }
    ,
    { "id": "3390", "head_code": "607", "branch_code": "412", "branch_name": "宜蘭市農會新店分部" }
    ,
    { "id": "3391", "head_code": "607", "branch_code": "423", "branch_name": "蘇澳區農會龍德分部" }
    ,
    { "id": "3392", "head_code": "607", "branch_code": "434", "branch_name": "三星地區農會大同分部" }
    ,
    { "id": "3393", "head_code": "607", "branch_code": "445", "branch_name": "員山鄉農會大湖分部" }
    ,
    { "id": "3394", "head_code": "607", "branch_code": "467", "branch_name": "羅東鎮農會東門分部" }
    ,
    { "id": "3395", "head_code": "607", "branch_code": "478", "branch_name": "頭城鎮農會竹安分部" }
    ,
    { "id": "3396", "head_code": "607", "branch_code": "490", "branch_name": "蘇澳區農會聖湖分部" }
    ,
    { "id": "3397", "head_code": "607", "branch_code": "515", "branch_name": "宜蘭市農會延平分部" }
    ,
    { "id": "3398", "head_code": "607", "branch_code": "526", "branch_name": "壯圍鄉農會美城分部" }
    ,
    { "id": "3399", "head_code": "607", "branch_code": "537", "branch_name": "三星地區農會信用部叭哩沙分部" }
    ,
    { "id": "3400", "head_code": "608", "branch_code": "11", "branch_name": "桃園市農會信用部" }
    ,
    { "id": "3401", "head_code": "608", "branch_code": "33", "branch_name": "大溪鎮農會信用部" }
    ,
    { "id": "3402", "head_code": "608", "branch_code": "44", "branch_name": "楊梅鎮農會信用部" }
    ,
    { "id": "3403", "head_code": "608", "branch_code": "55", "branch_name": "大園鄉農會信用部" }
    ,
    { "id": "3404", "head_code": "608", "branch_code": "66", "branch_name": "蘆竹鄉農會信用部" }
    ,
    { "id": "3405", "head_code": "608", "branch_code": "77", "branch_name": "龜山鄉農會信用部" }
    ,
    { "id": "3406", "head_code": "608", "branch_code": "88", "branch_name": "八德市農會信用部" }
    ,
    { "id": "3407", "head_code": "608", "branch_code": "99", "branch_name": "平鎮市農會北勢分部" }
    ,
    { "id": "3408", "head_code": "608", "branch_code": "103", "branch_name": "新屋鄉農會信用部" }
    ,
    { "id": "3409", "head_code": "608", "branch_code": "114", "branch_name": "龍潭鄉農會信用部" }
    ,
    { "id": "3410", "head_code": "608", "branch_code": "136", "branch_name": "復興鄉農會信用部" }
    ,
    { "id": "3411", "head_code": "608", "branch_code": "147", "branch_name": "龜山鄉農會樂善分部" }
    ,
    { "id": "3412", "head_code": "608", "branch_code": "158", "branch_name": "大溪鎮農會一心分部" }
    ,
    { "id": "3413", "head_code": "608", "branch_code": "169", "branch_name": "大溪鎮農會中新分部" }
    ,
    { "id": "3414", "head_code": "608", "branch_code": "170", "branch_name": "大溪鎮農會新峰分部" }
    ,
    { "id": "3415", "head_code": "608", "branch_code": "181", "branch_name": "大溪鎮農會埔頂分部" }
    ,
    { "id": "3416", "head_code": "608", "branch_code": "192", "branch_name": "楊梅鎮農會老街分部" }
    ,
    { "id": "3417", "head_code": "608", "branch_code": "206", "branch_name": "楊梅鎮農會埔心分部" }
    ,
    { "id": "3418", "head_code": "608", "branch_code": "217", "branch_name": "楊梅鎮農會富岡分部" }
    ,
    { "id": "3419", "head_code": "608", "branch_code": "228", "branch_name": "大園鄉農會埔心分部" }
    ,
    { "id": "3420", "head_code": "608", "branch_code": "239", "branch_name": "大園鄉農會竹圍分部" }
    ,
    { "id": "3421", "head_code": "608", "branch_code": "240", "branch_name": "大園鄉農會三和分部" }
    ,
    { "id": "3422", "head_code": "608", "branch_code": "251", "branch_name": "蘆竹鄉農會新興分部" }
    ,
    { "id": "3423", "head_code": "608", "branch_code": "262", "branch_name": "蘆竹鄉農會山腳分部" }
    ,
    { "id": "3424", "head_code": "608", "branch_code": "273", "branch_name": "蘆竹鄉農會大華分部" }
    ,
    { "id": "3425", "head_code": "608", "branch_code": "284", "branch_name": "蘆竹鄉農會大竹分部" }
    ,
    { "id": "3426", "head_code": "608", "branch_code": "295", "branch_name": "龜山鄉農會大崗分部" }
    ,
    { "id": "3427", "head_code": "608", "branch_code": "309", "branch_name": "八德市農會大湳分部" }
    ,
    { "id": "3428", "head_code": "608", "branch_code": "310", "branch_name": "新屋鄉農會永安分部" }
    ,
    { "id": "3429", "head_code": "608", "branch_code": "321", "branch_name": "新屋鄉農會大坡分部" }
    ,
    { "id": "3430", "head_code": "608", "branch_code": "365", "branch_name": "平鎮市農會山峰分部" }
    ,
    { "id": "3431", "head_code": "608", "branch_code": "376", "branch_name": "龜山鄉農會山頂分部" }
    ,
    { "id": "3432", "head_code": "608", "branch_code": "387", "branch_name": "大溪鎮農會員林分部" }
    ,
    { "id": "3433", "head_code": "608", "branch_code": "398", "branch_name": "蘆竹鄉農會外社分部" }
    ,
    { "id": "3434", "head_code": "608", "branch_code": "402", "branch_name": "蘆竹鄉農會蘆竹分部" }
    ,
    { "id": "3435", "head_code": "608", "branch_code": "413", "branch_name": "平鎮市農會龍岡分部" }
    ,
    { "id": "3436", "head_code": "608", "branch_code": "424", "branch_name": "平鎮市農會宋屋分部" }
    ,
    { "id": "3437", "head_code": "608", "branch_code": "435", "branch_name": "大溪鎮農會僑愛分部" }
    ,
    { "id": "3438", "head_code": "608", "branch_code": "446", "branch_name": "八德市農會瑞豐分部" }
    ,
    { "id": "3439", "head_code": "608", "branch_code": "457", "branch_name": "八德市農會大福分部" }
    ,
    { "id": "3440", "head_code": "608", "branch_code": "468", "branch_name": "桃園市農會大林分部" }
    ,
    { "id": "3441", "head_code": "608", "branch_code": "479", "branch_name": "桃園市農會會稽分部" }
    ,
    { "id": "3442", "head_code": "608", "branch_code": "480", "branch_name": "龍潭鄉農會中興分部" }
    ,
    { "id": "3443", "head_code": "608", "branch_code": "491", "branch_name": "龍潭鄉農會烏林分部" }
    ,
    { "id": "3444", "head_code": "608", "branch_code": "505", "branch_name": "蘆竹鄉農會中福分部" }
    ,
    { "id": "3445", "head_code": "608", "branch_code": "516", "branch_name": "蘆竹鄉農會五福分部" }
    ,
    { "id": "3446", "head_code": "608", "branch_code": "527", "branch_name": "桃園市農會中路分部" }
    ,
    { "id": "3447", "head_code": "608", "branch_code": "538", "branch_name": "桃園市農會慈文分部" }
    ,
    { "id": "3448", "head_code": "608", "branch_code": "549", "branch_name": "八德市農會茄苳分部" }
    ,
    { "id": "3449", "head_code": "608", "branch_code": "550", "branch_name": "八德市農會桃鶯分部" }
    ,
    { "id": "3450", "head_code": "608", "branch_code": "561", "branch_name": "大園鄉農會和平分部" }
    ,
    { "id": "3451", "head_code": "608", "branch_code": "572", "branch_name": "龜山鄉農會龍壽分部" }
    ,
    { "id": "3452", "head_code": "608", "branch_code": "583", "branch_name": "龜山鄉農會南上分部" }
    ,
    { "id": "3453", "head_code": "608", "branch_code": "594", "branch_name": "新屋鄉農會高榮分部" }
    ,
    { "id": "3454", "head_code": "608", "branch_code": "619", "branch_name": "復興鄉農會三民分部" }
    ,
    { "id": "3455", "head_code": "608", "branch_code": "620", "branch_name": "龜山鄉農會公西分部" }
    ,
    { "id": "3456", "head_code": "608", "branch_code": "631", "branch_name": "桃園市農會埔子分部" }
    ,
    { "id": "3457", "head_code": "608", "branch_code": "642", "branch_name": "桃園市農會龍山分部" }
    ,
    { "id": "3458", "head_code": "608", "branch_code": "686", "branch_name": "平鎮市農會信用部" }
    ,
    { "id": "3459", "head_code": "608", "branch_code": "697", "branch_name": "楊梅鎮農會大平分部" }
    ,
    { "id": "3460", "head_code": "608", "branch_code": "712", "branch_name": "大溪鎮農會崎頂分部" }
    ,
    { "id": "3461", "head_code": "608", "branch_code": "723", "branch_name": "龜山鄉農會嶺頂分部" }
    ,
    { "id": "3462", "head_code": "608", "branch_code": "745", "branch_name": "大園鄉農會五權分部" }
    ,
    { "id": "3463", "head_code": "608", "branch_code": "756", "branch_name": "大園鄉農會潮音分部" }
    ,
    { "id": "3464", "head_code": "608", "branch_code": "767", "branch_name": "平鎮市農會金陵分部" }
    ,
    { "id": "3465", "head_code": "608", "branch_code": "778", "branch_name": "龍潭鄉農會高平分部" }
    ,
    { "id": "3466", "head_code": "608", "branch_code": "789", "branch_name": "龍潭鄉農會三林分部" }
    ,
    { "id": "3467", "head_code": "608", "branch_code": "790", "branch_name": "龍潭鄉農會八德分部" }
    ,
    { "id": "3468", "head_code": "608", "branch_code": "804", "branch_name": "龜山鄉農會山福分部" }
    ,
    { "id": "3469", "head_code": "608", "branch_code": "826", "branch_name": "大溪鎮農會南興分部" }
    ,
    { "id": "3470", "head_code": "608", "branch_code": "837", "branch_name": "八德市農會霄裡分部" }
    ,
    { "id": "3471", "head_code": "608", "branch_code": "848", "branch_name": "龜山鄉農會舊路分部" }
    ,
    { "id": "3472", "head_code": "608", "branch_code": "859", "branch_name": "蘆竹鄉農會海湖分部" }
    ,
    { "id": "3473", "head_code": "609", "branch_code": "89", "branch_name": "信用部" }
    ,
    { "id": "3474", "head_code": "610", "branch_code": "16", "branch_name": "關西鎮農會信用部" }
    ,
    { "id": "3475", "head_code": "610", "branch_code": "27", "branch_name": "新埔鎮農會信用部" }
    ,
    { "id": "3476", "head_code": "610", "branch_code": "38", "branch_name": "竹北市農會信用部" }
    ,
    { "id": "3477", "head_code": "610", "branch_code": "50", "branch_name": "湖口鄉農會信用部" }
    ,
    { "id": "3478", "head_code": "610", "branch_code": "61", "branch_name": "新竹市農會信用部" }
    ,
    { "id": "3479", "head_code": "610", "branch_code": "72", "branch_name": "芎林鄉農會信用部" }
    ,
    { "id": "3480", "head_code": "610", "branch_code": "83", "branch_name": "寶山鄉農會信用部" }
    ,
    { "id": "3481", "head_code": "610", "branch_code": "94", "branch_name": "峨眉鄉農會信用部" }
    ,
    { "id": "3482", "head_code": "610", "branch_code": "108", "branch_name": "北埔鄉農會信用部" }
    ,
    { "id": "3483", "head_code": "610", "branch_code": "119", "branch_name": "竹東地區農會信用部" }
    ,
    { "id": "3484", "head_code": "610", "branch_code": "120", "branch_name": "橫山地區農會信用部" }
    ,
    { "id": "3485", "head_code": "610", "branch_code": "131", "branch_name": "關西鎮農會石光分部" }
    ,
    { "id": "3486", "head_code": "610", "branch_code": "142", "branch_name": "關西鎮農會錦山分部" }
    ,
    { "id": "3487", "head_code": "610", "branch_code": "153", "branch_name": "竹北市農會六家分部" }
    ,
    { "id": "3488", "head_code": "610", "branch_code": "186", "branch_name": "新竹市農會三姓橋分部" }
    ,
    { "id": "3489", "head_code": "610", "branch_code": "197", "branch_name": "芎林鄉農會秀湖分部" }
    ,
    { "id": "3490", "head_code": "610", "branch_code": "201", "branch_name": "寶山鄉農會新城分部" }
    ,
    { "id": "3491", "head_code": "610", "branch_code": "212", "branch_name": "寶山鄉農會寶山分部" }
    ,
    { "id": "3492", "head_code": "610", "branch_code": "223", "branch_name": "竹東地區農會竹中分部" }
    ,
    { "id": "3493", "head_code": "610", "branch_code": "234", "branch_name": "竹東地區農會二重分部" }
    ,
    { "id": "3494", "head_code": "610", "branch_code": "245", "branch_name": "竹東地區農會上坪分部" }
    ,
    { "id": "3495", "head_code": "610", "branch_code": "256", "branch_name": "竹東地區農會五峰分部" }
    ,
    { "id": "3496", "head_code": "610", "branch_code": "267", "branch_name": "橫山地區農會橫山分部" }
    ,
    { "id": "3497", "head_code": "610", "branch_code": "289", "branch_name": "橫山地區農會尖石分部" }
    ,
    { "id": "3498", "head_code": "610", "branch_code": "290", "branch_name": "竹北市農會豐田分部" }
    ,
    { "id": "3499", "head_code": "610", "branch_code": "304", "branch_name": "竹北市農會鳳崗分部" }
    ,
    { "id": "3500", "head_code": "610", "branch_code": "315", "branch_name": "新竹市農會樹林頭分部" }
    ,
    { "id": "3501", "head_code": "610", "branch_code": "326", "branch_name": "芎林鄉農會石潭分部" }
    ,
    { "id": "3502", "head_code": "610", "branch_code": "337", "branch_name": "新竹市農會光復分部" }
    ,
    { "id": "3503", "head_code": "610", "branch_code": "348", "branch_name": "湖口鄉農會中興分部" }
    ,
    { "id": "3504", "head_code": "610", "branch_code": "359", "branch_name": "新竹市農會內湖分部" }
    ,
    { "id": "3505", "head_code": "610", "branch_code": "360", "branch_name": "新竹市農會民權分部" }
    ,
    { "id": "3506", "head_code": "610", "branch_code": "371", "branch_name": "峨眉鄉農會富興分部" }
    ,
    { "id": "3507", "head_code": "610", "branch_code": "382", "branch_name": "竹東地區農會東寧分部" }
    ,
    { "id": "3508", "head_code": "610", "branch_code": "393", "branch_name": "新埔鎮農會照門分部" }
    ,
    { "id": "3509", "head_code": "610", "branch_code": "429", "branch_name": "新竹市農會新興分部" }
    ,
    { "id": "3510", "head_code": "610", "branch_code": "430", "branch_name": "竹北農會高鐵分部" }
    ,
    { "id": "3511", "head_code": "610", "branch_code": "441", "branch_name": "新竹市農會虎林分部" }
    ,
    { "id": "3512", "head_code": "610", "branch_code": "452", "branch_name": "新竹市農會光華分部" }
    ,
    { "id": "3513", "head_code": "610", "branch_code": "463", "branch_name": "新豐鄉農會" }
    ,
    { "id": "3514", "head_code": "611", "branch_code": "62", "branch_name": "信用部" }
    ,
    { "id": "3515", "head_code": "611", "branch_code": "501", "branch_name": "豐富分部" }
    ,
    { "id": "3516", "head_code": "612", "branch_code": "111", "branch_name": "成功分部" }
    ,
    { "id": "3517", "head_code": "613", "branch_code": "75", "branch_name": "信用部" }
    ,
    { "id": "3518", "head_code": "613", "branch_code": "260", "branch_name": "新街分部" }
    ,
    { "id": "3519", "head_code": "613", "branch_code": "271", "branch_name": "大庄分部" }
    ,
    { "id": "3520", "head_code": "613", "branch_code": "282", "branch_name": "赤水分部" }
    ,
    { "id": "3521", "head_code": "613", "branch_code": "293", "branch_name": "松柏嶺分部" }
    ,
    { "id": "3522", "head_code": "613", "branch_code": "466", "branch_name": "新光分部" }
    ,
    { "id": "3523", "head_code": "614", "branch_code": "43", "branch_name": "員林鎮農會信用部" }
    ,
    { "id": "3524", "head_code": "614", "branch_code": "87", "branch_name": "二林鎮農會信用部" }
    ,
    { "id": "3525", "head_code": "614", "branch_code": "124", "branch_name": "秀水鄉農會信用部" }
    ,
    { "id": "3526", "head_code": "614", "branch_code": "179", "branch_name": "埔心鄉農會信用部" }
    ,
    { "id": "3527", "head_code": "614", "branch_code": "180", "branch_name": "永靖鄉農會信用部" }
    ,
    { "id": "3528", "head_code": "614", "branch_code": "227", "branch_name": "埤頭鄉農會信用部" }
    ,
    { "id": "3529", "head_code": "614", "branch_code": "261", "branch_name": "竹塘鄉農會" }
    ,
    { "id": "3530", "head_code": "614", "branch_code": "320", "branch_name": "秀水鄉農會福安分部" }
    ,
    { "id": "3531", "head_code": "614", "branch_code": "401", "branch_name": "埤頭鄉農會路口厝分部" }
    ,
    { "id": "3532", "head_code": "614", "branch_code": "412", "branch_name": "埤頭鄉農會埤頭分部" }
    ,
    { "id": "3533", "head_code": "614", "branch_code": "423", "branch_name": "埤頭鄉農會芙朝分部" }
    ,
    { "id": "3534", "head_code": "614", "branch_code": "478", "branch_name": "秀水鄉農會馬鳴分部" }
    ,
    { "id": "3535", "head_code": "614", "branch_code": "515", "branch_name": "秀水鄉農會金興分部" }
    ,
    { "id": "3536", "head_code": "614", "branch_code": "526", "branch_name": "員林鎮農會東山分部" }
    ,
    { "id": "3537", "head_code": "614", "branch_code": "559", "branch_name": "埔心鄉農會芎蕉分部" }
    ,
    { "id": "3538", "head_code": "614", "branch_code": "593", "branch_name": "埔心鄉農會明聖分部" }
    ,
    { "id": "3539", "head_code": "614", "branch_code": "696", "branch_name": "永靖鄉農會永安分部" }
    ,
    { "id": "3540", "head_code": "614", "branch_code": "700", "branch_name": "員林鎮農會百果山分部" }
    ,
    { "id": "3541", "head_code": "614", "branch_code": "711", "branch_name": "二林鎮農會原斗分部" }
    ,
    { "id": "3542", "head_code": "614", "branch_code": "733", "branch_name": "永靖鄉農會五福分部" }
    ,
    { "id": "3543", "head_code": "614", "branch_code": "744", "branch_name": "員林鎮農會農倉分部" }
    ,
    { "id": "3544", "head_code": "614", "branch_code": "799", "branch_name": "二林鎮農會挖仔分部" }
    ,
    { "id": "3545", "head_code": "614", "branch_code": "814", "branch_name": "員林鎮農會華成分部" }
    ,
    { "id": "3546", "head_code": "614", "branch_code": "858", "branch_name": "二林鎮農會中山分部" }
    ,
    { "id": "3547", "head_code": "614", "branch_code": "870", "branch_name": "永靖鄉農會同安分部" }
    ,
    { "id": "3548", "head_code": "614", "branch_code": "939", "branch_name": "永靖鄉農會信用部永興分部" }
    ,
    { "id": "3549", "head_code": "614", "branch_code": "1017", "branch_name": "竹塘鄉農會長安分部" }
    ,
    { "id": "3550", "head_code": "614", "branch_code": "1028", "branch_name": "永靖鄉農會永興分部" }
    ,
    { "id": "3551", "head_code": "614", "branch_code": "1062", "branch_name": "員林鎮農會信用部東和分部" }
    ,
    { "id": "3552", "head_code": "614", "branch_code": "1110", "branch_name": "員林鎮農會信用部饒明分部" }
    ,
    { "id": "3553", "head_code": "614", "branch_code": "1291", "branch_name": "二林鎮農會萬興分部" }
    ,
    { "id": "3554", "head_code": "616", "branch_code": "12", "branch_name": "斗六市農會信用部" }
    ,
    { "id": "3555", "head_code": "616", "branch_code": "23", "branch_name": "虎尾鎮農會信用部" }
    ,
    { "id": "3556", "head_code": "616", "branch_code": "34", "branch_name": "西螺鎮農會信用部" }
    ,
    { "id": "3557", "head_code": "616", "branch_code": "56", "branch_name": "斗南鎮農會信用部" }
    ,
    { "id": "3558", "head_code": "616", "branch_code": "78", "branch_name": "古坑鄉農會信用部" }
    ,
    { "id": "3559", "head_code": "616", "branch_code": "89", "branch_name": "大埤鄉農會信用部" }
    ,
    { "id": "3560", "head_code": "616", "branch_code": "90", "branch_name": "莿桐鄉農會信用部" }
    ,
    { "id": "3561", "head_code": "616", "branch_code": "115", "branch_name": "二崙鄉農會信用部" }
    ,
    { "id": "3562", "head_code": "616", "branch_code": "126", "branch_name": "崙背鄉農會信用部" }
    ,
    { "id": "3563", "head_code": "616", "branch_code": "137", "branch_name": "台西鄉農會信用部" }
    ,
    { "id": "3564", "head_code": "616", "branch_code": "148", "branch_name": "褒忠鄉農會信用部" }
    ,
    { "id": "3565", "head_code": "616", "branch_code": "160", "branch_name": "四湖鄉農會信用部" }
    ,
    { "id": "3566", "head_code": "616", "branch_code": "171", "branch_name": "口湖鄉農會" }
    ,
    { "id": "3567", "head_code": "616", "branch_code": "218", "branch_name": "斗南鎮農會石龜溪辦事處" }
    ,
    { "id": "3568", "head_code": "616", "branch_code": "230", "branch_name": "古坑鄉農會永光分部" }
    ,
    { "id": "3569", "head_code": "616", "branch_code": "241", "branch_name": "古坑鄉農會東和分部" }
    ,
    { "id": "3570", "head_code": "616", "branch_code": "252", "branch_name": "大埤鄉農會怡然分部" }
    ,
    { "id": "3571", "head_code": "616", "branch_code": "263", "branch_name": "莿桐鄉農會饒平分部" }
    ,
    { "id": "3572", "head_code": "616", "branch_code": "274", "branch_name": "二崙鄉農會油車分部" }
    ,
    { "id": "3573", "head_code": "616", "branch_code": "285", "branch_name": "二崙鄉農會永定分部" }
    ,
    { "id": "3574", "head_code": "616", "branch_code": "296", "branch_name": "台西鄉農會崙豐分部" }
    ,
    { "id": "3575", "head_code": "616", "branch_code": "300", "branch_name": "四湖鄉農會飛沙分部" }
    ,
    { "id": "3576", "head_code": "616", "branch_code": "311", "branch_name": "口湖鄉農會宜梧分部" }
    ,
    { "id": "3577", "head_code": "616", "branch_code": "322", "branch_name": "口湖鄉農會金湖分部" }
    ,
    { "id": "3578", "head_code": "616", "branch_code": "333", "branch_name": "口湖鄉農會下崙分部" }
    ,
    { "id": "3579", "head_code": "616", "branch_code": "403", "branch_name": "西螺鎮農會埤源分部" }
    ,
    { "id": "3580", "head_code": "616", "branch_code": "414", "branch_name": "虎尾鎮農會德興分部" }
    ,
    { "id": "3581", "head_code": "616", "branch_code": "436", "branch_name": "莿桐鄉農會六合分部" }
    ,
    { "id": "3582", "head_code": "616", "branch_code": "447", "branch_name": "四湖鄉農會溪底分部" }
    ,
    { "id": "3583", "head_code": "616", "branch_code": "458", "branch_name": "斗南鎮農會西埤分部" }
    ,
    { "id": "3584", "head_code": "616", "branch_code": "469", "branch_name": "斗南鎮農會新光分部" }
    ,
    { "id": "3585", "head_code": "616", "branch_code": "492", "branch_name": "斗六市農會石榴分部" }
    ,
    { "id": "3586", "head_code": "616", "branch_code": "506", "branch_name": "虎尾鎮農會大屯分部" }
    ,
    { "id": "3587", "head_code": "616", "branch_code": "517", "branch_name": "虎尾鎮農會惠來分部" }
    ,
    { "id": "3588", "head_code": "616", "branch_code": "528", "branch_name": "西螺鎮農會九隆分部" }
    ,
    { "id": "3589", "head_code": "616", "branch_code": "539", "branch_name": "西螺鎮農會和心分部" }
    ,
    { "id": "3590", "head_code": "616", "branch_code": "540", "branch_name": "西螺鎮農會建興分部" }
    ,
    { "id": "3591", "head_code": "616", "branch_code": "562", "branch_name": "大埤鄉農會嘉興分部" }
    ,
    { "id": "3592", "head_code": "616", "branch_code": "573", "branch_name": "四湖鄉農會林厝分部" }
    ,
    { "id": "3593", "head_code": "616", "branch_code": "595", "branch_name": "斗六市農會鎮南分部" }
    ,
    { "id": "3594", "head_code": "616", "branch_code": "609", "branch_name": "斗六市農會光興分部" }
    ,
    { "id": "3595", "head_code": "616", "branch_code": "610", "branch_name": "虎尾鎮農會頂溪分部" }
    ,
    { "id": "3596", "head_code": "616", "branch_code": "621", "branch_name": "西螺鎮農會中山分部" }
    ,
    { "id": "3597", "head_code": "616", "branch_code": "643", "branch_name": "台西鄉農會牛厝分部" }
    ,
    { "id": "3598", "head_code": "616", "branch_code": "665", "branch_name": "台西鄉農會蚊港分部" }
    ,
    { "id": "3599", "head_code": "616", "branch_code": "698", "branch_name": "四湖鄉農會泊子分部" }
    ,
    { "id": "3600", "head_code": "616", "branch_code": "702", "branch_name": "斗南鎮農會明昌分部" }
    ,
    { "id": "3601", "head_code": "616", "branch_code": "713", "branch_name": "崙背鄉農會豐榮分部" }
    ,
    { "id": "3602", "head_code": "616", "branch_code": "724", "branch_name": "麥寮鄉農會信用部台塑六輕分部" }
    ,
    { "id": "3603", "head_code": "616", "branch_code": "735", "branch_name": "斗南鎮農會西岐分部" }
    ,
    { "id": "3604", "head_code": "616", "branch_code": "746", "branch_name": "斗六市農會成功分部" }
    ,
    { "id": "3605", "head_code": "616", "branch_code": "757", "branch_name": "斗六市農會虎溪分部" }
    ,
    { "id": "3606", "head_code": "617", "branch_code": "13", "branch_name": "嘉義市農會吳鳳分部" }
    ,
    { "id": "3607", "head_code": "617", "branch_code": "24", "branch_name": "朴子市農會信用部" }
    ,
    { "id": "3608", "head_code": "617", "branch_code": "35", "branch_name": "布袋鎮農會信用部" }
    ,
    { "id": "3609", "head_code": "617", "branch_code": "46", "branch_name": "大林鎮農會信用部" }
    ,
    { "id": "3610", "head_code": "617", "branch_code": "57", "branch_name": "民雄鄉農會信用部" }
    ,
    { "id": "3611", "head_code": "617", "branch_code": "68", "branch_name": "溪口鄉農會信用部" }
    ,
    { "id": "3612", "head_code": "617", "branch_code": "80", "branch_name": "義竹鄉農會信用部" }
    ,
    { "id": "3613", "head_code": "617", "branch_code": "91", "branch_name": "鹿草鄉農會信用部" }
    ,
    { "id": "3614", "head_code": "617", "branch_code": "105", "branch_name": "太保市農會信用部" }
    ,
    { "id": "3615", "head_code": "617", "branch_code": "116", "branch_name": "水上鄉農會信用部" }
    ,
    { "id": "3616", "head_code": "617", "branch_code": "138", "branch_name": "番路鄉農會信用部" }
    ,
    { "id": "3617", "head_code": "617", "branch_code": "149", "branch_name": "竹崎鄉農會信用部" }
    ,
    { "id": "3618", "head_code": "617", "branch_code": "150", "branch_name": "梅山鄉農會信用部" }
    ,
    { "id": "3619", "head_code": "617", "branch_code": "161", "branch_name": "新港鄉農會大興分部" }
    ,
    { "id": "3620", "head_code": "617", "branch_code": "172", "branch_name": "六腳鄉農會蒜頭分部" }
    ,
    { "id": "3621", "head_code": "617", "branch_code": "183", "branch_name": "大埔鄉農會信用部" }
    ,
    { "id": "3622", "head_code": "617", "branch_code": "194", "branch_name": "嘉義市農會福全分部" }
    ,
    { "id": "3623", "head_code": "617", "branch_code": "208", "branch_name": "嘉義市農會北興分部" }
    ,
    { "id": "3624", "head_code": "617", "branch_code": "219", "branch_name": "朴子市農會開元分部" }
    ,
    { "id": "3625", "head_code": "617", "branch_code": "220", "branch_name": "朴子市農會文化分部" }
    ,
    { "id": "3626", "head_code": "617", "branch_code": "231", "branch_name": "朴子市農會松梅分部" }
    ,
    { "id": "3627", "head_code": "617", "branch_code": "242", "branch_name": "布袋鎮農會過溝分部" }
    ,
    { "id": "3628", "head_code": "617", "branch_code": "253", "branch_name": "布袋鎮農會永安分部" }
    ,
    { "id": "3629", "head_code": "617", "branch_code": "264", "branch_name": "大林鎮農會吉林分部" }
    ,
    { "id": "3630", "head_code": "617", "branch_code": "275", "branch_name": "大林鎮農會溝背分部" }
    ,
    { "id": "3631", "head_code": "617", "branch_code": "286", "branch_name": "大林鎮農會大美分部" }
    ,
    { "id": "3632", "head_code": "617", "branch_code": "297", "branch_name": "大林鎮農會排路分部" }
    ,
    { "id": "3633", "head_code": "617", "branch_code": "301", "branch_name": "民雄鄉農會北斗分部" }
    ,
    { "id": "3634", "head_code": "617", "branch_code": "312", "branch_name": "民雄鄉農會山中分部" }
    ,
    { "id": "3635", "head_code": "617", "branch_code": "323", "branch_name": "民雄鄉農會菁埔分部" }
    ,
    { "id": "3636", "head_code": "617", "branch_code": "334", "branch_name": "溪口鄉農會柴林分部" }
    ,
    { "id": "3637", "head_code": "617", "branch_code": "345", "branch_name": "溪口鄉農會崙尾分部" }
    ,
    { "id": "3638", "head_code": "617", "branch_code": "356", "branch_name": "東石鄉農會東石分部" }
    ,
    { "id": "3639", "head_code": "617", "branch_code": "367", "branch_name": "東石鄉農會副瀨分部" }
    ,
    { "id": "3640", "head_code": "617", "branch_code": "378", "branch_name": "東石鄉農會下揖分部" }
    ,
    { "id": "3641", "head_code": "617", "branch_code": "389", "branch_name": "東石鄉農會西崙分部" }
    ,
    { "id": "3642", "head_code": "617", "branch_code": "390", "branch_name": "義竹鄉農會過路分部" }
    ,
    { "id": "3643", "head_code": "617", "branch_code": "404", "branch_name": "義竹鄉農會光榮分部" }
    ,
    { "id": "3644", "head_code": "617", "branch_code": "415", "branch_name": "鹿草鄉農會下潭分部" }
    ,
    { "id": "3645", "head_code": "617", "branch_code": "426", "branch_name": "鹿草鄉農會後堀分部" }
    ,
    { "id": "3646", "head_code": "617", "branch_code": "437", "branch_name": "太保農會後潭分部" }
    ,
    { "id": "3647", "head_code": "617", "branch_code": "448", "branch_name": "太保農會新埤分部" }
    ,
    { "id": "3648", "head_code": "617", "branch_code": "459", "branch_name": "太保農會南新分部" }
    ,
    { "id": "3649", "head_code": "617", "branch_code": "460", "branch_name": "水上鄉農會成功分部" }
    ,
    { "id": "3650", "head_code": "617", "branch_code": "471", "branch_name": "水上鄉農會南靖分部" }
    ,
    { "id": "3651", "head_code": "617", "branch_code": "482", "branch_name": "水上鄉農會大崙分部" }
    ,
    { "id": "3652", "head_code": "617", "branch_code": "493", "branch_name": "水上鄉農會忠和分部" }
    ,
    { "id": "3653", "head_code": "617", "branch_code": "507", "branch_name": "水上鄉農會北回分部" }
    ,
    { "id": "3654", "head_code": "617", "branch_code": "518", "branch_name": "水上鄉農會柳林分部" }
    ,
    { "id": "3655", "head_code": "617", "branch_code": "563", "branch_name": "番路鄉農會觸口分部" }
    ,
    { "id": "3656", "head_code": "617", "branch_code": "574", "branch_name": "竹崎鄉農會內埔分部" }
    ,
    { "id": "3657", "head_code": "617", "branch_code": "585", "branch_name": "竹崎鄉農會灣橋分部" }
    ,
    { "id": "3658", "head_code": "617", "branch_code": "596", "branch_name": "竹崎鄉農會東義分部" }
    ,
    { "id": "3659", "head_code": "617", "branch_code": "600", "branch_name": "梅山鄉農會瑞里分部" }
    ,
    { "id": "3660", "head_code": "617", "branch_code": "611", "branch_name": "梅山鄉農會太平分部" }
    ,
    { "id": "3661", "head_code": "617", "branch_code": "622", "branch_name": "梅山鄉農會太和分部" }
    ,
    { "id": "3662", "head_code": "617", "branch_code": "633", "branch_name": "新港鄉農會月眉分部" }
    ,
    { "id": "3663", "head_code": "617", "branch_code": "644", "branch_name": "新港鄉農會大潭分部" }
    ,
    { "id": "3664", "head_code": "617", "branch_code": "655", "branch_name": "新港鄉農會崙子分部" }
    ,
    { "id": "3665", "head_code": "617", "branch_code": "666", "branch_name": "六腳鄉農會港尾寮分部" }
    ,
    { "id": "3666", "head_code": "617", "branch_code": "677", "branch_name": "六腳鄉農會六腳分部" }
    ,
    { "id": "3667", "head_code": "617", "branch_code": "688", "branch_name": "六腳鄉農會灣內分部" }
    ,
    { "id": "3668", "head_code": "617", "branch_code": "703", "branch_name": "六腳鄉農會更寮分部" }
    ,
    { "id": "3669", "head_code": "617", "branch_code": "714", "branch_name": "民雄鄉農會秀林分部" }
    ,
    { "id": "3670", "head_code": "617", "branch_code": "725", "branch_name": "水上鄉農會民生分部" }
    ,
    { "id": "3671", "head_code": "617", "branch_code": "758", "branch_name": "太保農會嘉太分部" }
    ,
    { "id": "3672", "head_code": "617", "branch_code": "769", "branch_name": "布袋鎮農會新厝分部" }
    ,
    { "id": "3673", "head_code": "617", "branch_code": "781", "branch_name": "大林鎮農會中林分部" }
    ,
    { "id": "3674", "head_code": "617", "branch_code": "792", "branch_name": "竹崎鄉農會崎腳分部" }
    ,
    { "id": "3675", "head_code": "617", "branch_code": "806", "branch_name": "六腳鄉農會信用部" }
    ,
    { "id": "3676", "head_code": "617", "branch_code": "817", "branch_name": "新港鄉農會" }
    ,
    { "id": "3677", "head_code": "617", "branch_code": "839", "branch_name": "朴子市農會信用部竹村分部" }
    ,
    { "id": "3678", "head_code": "617", "branch_code": "862", "branch_name": "嘉義市農會信用部" }
    ,
    { "id": "3679", "head_code": "617", "branch_code": "1261", "branch_name": "新港鄉農會安和分部" }
    ,
    { "id": "3680", "head_code": "617", "branch_code": "1272", "branch_name": "嘉義市農會宣信分部" }
    ,
    { "id": "3681", "head_code": "617", "branch_code": "1283", "branch_name": "嘉義市農會民生分部" }
    ,
    { "id": "3682", "head_code": "617", "branch_code": "1320", "branch_name": "番路鄉農會隙頂分部" }
    ,
    { "id": "3683", "head_code": "617", "branch_code": "1331", "branch_name": "鹿草鄉農會重寮分部" }
    ,
    { "id": "3684", "head_code": "617", "branch_code": "1353", "branch_name": "朴子市農會大糠榔分部" }
    ,
    { "id": "3685", "head_code": "617", "branch_code": "1364", "branch_name": "朴子市農會雙溪口分部" }
    ,
    { "id": "3686", "head_code": "617", "branch_code": "1375", "branch_name": "布袋鎮農會信用部新塭分部" }
    ,
    { "id": "3687", "head_code": "617", "branch_code": "1386", "branch_name": "溪口鄉農會柳溝分部" }
    ,
    { "id": "3688", "head_code": "617", "branch_code": "1397", "branch_name": "義竹鄉農會新店分部" }
    ,
    { "id": "3689", "head_code": "617", "branch_code": "1401", "branch_name": "鹿草鄉農會松山分部" }
    ,
    { "id": "3690", "head_code": "617", "branch_code": "1412", "branch_name": "太保農會安東分部" }
    ,
    { "id": "3691", "head_code": "617", "branch_code": "1423", "branch_name": "竹崎鄉農會石棹分部" }
    ,
    { "id": "3692", "head_code": "617", "branch_code": "1434", "branch_name": "六腳鄉農會蘇崙分部" }
    ,
    { "id": "3693", "head_code": "617", "branch_code": "1467", "branch_name": "大林鎮農會中坑分部" }
    ,
    { "id": "3694", "head_code": "617", "branch_code": "1478", "branch_name": "民雄鄉農會三興分部" }
    ,
    { "id": "3695", "head_code": "617", "branch_code": "1489", "branch_name": "民雄鄉農會興南分部" }
    ,
    { "id": "3696", "head_code": "617", "branch_code": "1490", "branch_name": "竹崎鄉農會鹿滿分部" }
    ,
    { "id": "3697", "head_code": "618", "branch_code": "25", "branch_name": "新營市農會信用部" }
    ,
    { "id": "3698", "head_code": "618", "branch_code": "36", "branch_name": "鹽水鎮農會信用部" }
    ,
    { "id": "3699", "head_code": "618", "branch_code": "69", "branch_name": "佳里鎮農會信用部" }
    ,
    { "id": "3700", "head_code": "618", "branch_code": "81", "branch_name": "善化鎮農會信用部" }
    ,
    { "id": "3701", "head_code": "618", "branch_code": "139", "branch_name": "六甲鄉農會信用部" }
    ,
    { "id": "3702", "head_code": "618", "branch_code": "162", "branch_name": "西港鄉農會信用部" }
    ,
    { "id": "3703", "head_code": "618", "branch_code": "184", "branch_name": "將軍鄉農會信用部" }
    ,
    { "id": "3704", "head_code": "618", "branch_code": "195", "branch_name": "北門鄉農會信用部" }
    ,
    { "id": "3705", "head_code": "618", "branch_code": "243", "branch_name": "玉井鄉農會本會" }
    ,
    { "id": "3706", "head_code": "618", "branch_code": "298", "branch_name": "歸仁鄉農會信用部" }
    ,
    { "id": "3707", "head_code": "618", "branch_code": "324", "branch_name": "永康市農會信用部" }
    ,
    { "id": "3708", "head_code": "618", "branch_code": "335", "branch_name": "新營市農會太子宮分部" }
    ,
    { "id": "3709", "head_code": "618", "branch_code": "346", "branch_name": "新營市農會延平分部" }
    ,
    { "id": "3710", "head_code": "618", "branch_code": "357", "branch_name": "鹽水鎮農會歡雅分部" }
    ,
    { "id": "3711", "head_code": "618", "branch_code": "368", "branch_name": "鹽水鎮農會坐頭港分部" }
    ,
    { "id": "3712", "head_code": "618", "branch_code": "416", "branch_name": "佳里鎮農會佳興分部" }
    ,
    { "id": "3713", "head_code": "618", "branch_code": "427", "branch_name": "佳里鎮農會子龍分部" }
    ,
    { "id": "3714", "head_code": "618", "branch_code": "438", "branch_name": "佳里鎮農會塭內分部" }
    ,
    { "id": "3715", "head_code": "618", "branch_code": "449", "branch_name": "佳里鎮農會延平分部" }
    ,
    { "id": "3716", "head_code": "618", "branch_code": "450", "branch_name": "善化鎮農會東關里分部" }
    ,
    { "id": "3717", "head_code": "618", "branch_code": "461", "branch_name": "善化鎮農會六分寮分部" }
    ,
    { "id": "3718", "head_code": "618", "branch_code": "612", "branch_name": "六甲鄉農會林鳳營分部" }
    ,
    { "id": "3719", "head_code": "618", "branch_code": "623", "branch_name": "六甲鄉農會七甲分部" }
    ,
    { "id": "3720", "head_code": "618", "branch_code": "689", "branch_name": "西港鄉農會後營分部" }
    ,
    { "id": "3721", "head_code": "618", "branch_code": "715", "branch_name": "西港鄉農會竹林分部" }
    ,
    { "id": "3722", "head_code": "618", "branch_code": "771", "branch_name": "將軍鄉農會苓子寮分部" }
    ,
    { "id": "3723", "head_code": "618", "branch_code": "782", "branch_name": "將軍鄉農會將軍分部" }
    ,
    { "id": "3724", "head_code": "618", "branch_code": "793", "branch_name": "將軍鄉農會馬沙溝分部" }
    ,
    { "id": "3725", "head_code": "618", "branch_code": "807", "branch_name": "將軍鄉農會青鯤鯓分部" }
    ,
    { "id": "3726", "head_code": "618", "branch_code": "818", "branch_name": "北門鄉農會溪底寮分部" }
    ,
    { "id": "3727", "head_code": "618", "branch_code": "829", "branch_name": "北門鄉農會蚵寮分部" }
    ,
    { "id": "3728", "head_code": "618", "branch_code": "966", "branch_name": "歸仁鄉農會大潭武東分部" }
    ,
    { "id": "3729", "head_code": "618", "branch_code": "977", "branch_name": "歸仁鄉農會大廟分部" }
    ,
    { "id": "3730", "head_code": "618", "branch_code": "988", "branch_name": "歸仁鄉農會新市場分部" }
    ,
    { "id": "3731", "head_code": "618", "branch_code": "1011", "branch_name": "永康市農會大灣分部" }
    ,
    { "id": "3732", "head_code": "618", "branch_code": "1066", "branch_name": "新營市農會三民分部" }
    ,
    { "id": "3733", "head_code": "618", "branch_code": "1114", "branch_name": "玉井鄉農會中華分部" }
    ,
    { "id": "3734", "head_code": "618", "branch_code": "1158", "branch_name": "佳里鎮農會新生分部" }
    ,
    { "id": "3735", "head_code": "618", "branch_code": "1181", "branch_name": "永康市農會鹽行分部" }
    ,
    { "id": "3736", "head_code": "618", "branch_code": "1206", "branch_name": "北門鄉農會三慈分部" }
    ,
    { "id": "3737", "head_code": "618", "branch_code": "1217", "branch_name": "新營市農會中正分部" }
    ,
    { "id": "3738", "head_code": "618", "branch_code": "1239", "branch_name": "歸仁鄉農會歸南分部" }
    ,
    { "id": "3739", "head_code": "618", "branch_code": "1240", "branch_name": "永康市農會中華分部" }
    ,
    { "id": "3740", "head_code": "618", "branch_code": "1262", "branch_name": "永康市農會崑山分部" }
    ,
    { "id": "3741", "head_code": "618", "branch_code": "1343", "branch_name": "永康市農會龍潭分部" }
    ,
    { "id": "3742", "head_code": "618", "branch_code": "1365", "branch_name": "善化鎮農會茄拔分部" }
    ,
    { "id": "3743", "head_code": "619", "branch_code": "15", "branch_name": "鳳山市農會信用部" }
    ,
    { "id": "3744", "head_code": "619", "branch_code": "26", "branch_name": "岡山鎮農會信用部" }
    ,
    { "id": "3745", "head_code": "619", "branch_code": "37", "branch_name": "旗山鎮農會信用部" }
    ,
    { "id": "3746", "head_code": "619", "branch_code": "48", "branch_name": "美濃鎮農會信用部" }
    ,
    { "id": "3747", "head_code": "619", "branch_code": "59", "branch_name": "橋頭鄉農會信用部" }
    ,
    { "id": "3748", "head_code": "619", "branch_code": "60", "branch_name": "燕巢鄉農會信用部" }
    ,
    { "id": "3749", "head_code": "619", "branch_code": "71", "branch_name": "田寮鄉農會信用部" }
    ,
    { "id": "3750", "head_code": "619", "branch_code": "82", "branch_name": "阿蓮鄉農會信用部" }
    ,
    { "id": "3751", "head_code": "619", "branch_code": "93", "branch_name": "路竹鄉農會信用部" }
    ,
    { "id": "3752", "head_code": "619", "branch_code": "107", "branch_name": "湖內鄉農會信用部" }
    ,
    { "id": "3753", "head_code": "619", "branch_code": "118", "branch_name": "茄萣鄉農會信用部" }
    ,
    { "id": "3754", "head_code": "619", "branch_code": "129", "branch_name": "彌陀鄉農會信用部" }
    ,
    { "id": "3755", "head_code": "619", "branch_code": "130", "branch_name": "永安鄉農會信用部" }
    ,
    { "id": "3756", "head_code": "619", "branch_code": "141", "branch_name": "梓官鄉農會信用部" }
    ,
    { "id": "3757", "head_code": "619", "branch_code": "174", "branch_name": "茄萣鄉農會崎漏分部" }
    ,
    { "id": "3758", "head_code": "619", "branch_code": "185", "branch_name": "林園鄉農會信用部" }
    ,
    { "id": "3759", "head_code": "619", "branch_code": "196", "branch_name": "大寮鄉農會信用部" }
    ,
    { "id": "3760", "head_code": "619", "branch_code": "211", "branch_name": "仁武鄉農會信用部" }
    ,
    { "id": "3761", "head_code": "619", "branch_code": "222", "branch_name": "大社鄉農會信用部" }
    ,
    { "id": "3762", "head_code": "619", "branch_code": "244", "branch_name": "杉林鄉農會信用部" }
    ,
    { "id": "3763", "head_code": "619", "branch_code": "255", "branch_name": "甲仙地區農會信用部" }
    ,
    { "id": "3764", "head_code": "619", "branch_code": "266", "branch_name": "鳳山市農會五甲分部" }
    ,
    { "id": "3765", "head_code": "619", "branch_code": "277", "branch_name": "岡山鎮農會市場分部" }
    ,
    { "id": "3766", "head_code": "619", "branch_code": "288", "branch_name": "岡山鎮農會嘉興分部" }
    ,
    { "id": "3767", "head_code": "619", "branch_code": "299", "branch_name": "岡山鎮農會仁壽分部" }
    ,
    { "id": "3768", "head_code": "619", "branch_code": "314", "branch_name": "旗山鎮農會旗尾分部" }
    ,
    { "id": "3769", "head_code": "619", "branch_code": "325", "branch_name": "旗山鎮農會溪洲分部" }
    ,
    { "id": "3770", "head_code": "619", "branch_code": "336", "branch_name": "旗山鎮農會南溪洲分部" }
    ,
    { "id": "3771", "head_code": "619", "branch_code": "347", "branch_name": "旗山鎮農會嶺口分部" }
    ,
    { "id": "3772", "head_code": "619", "branch_code": "358", "branch_name": "旗山鎮農會中正分部" }
    ,
    { "id": "3773", "head_code": "619", "branch_code": "369", "branch_name": "美濃鎮農會中壇分部" }
    ,
    { "id": "3774", "head_code": "619", "branch_code": "370", "branch_name": "美濃鎮農會龍肚分部" }
    ,
    { "id": "3775", "head_code": "619", "branch_code": "381", "branch_name": "美濃鎮農會廣興分部" }
    ,
    { "id": "3776", "head_code": "619", "branch_code": "392", "branch_name": "美濃鎮農會南隆分部" }
    ,
    { "id": "3777", "head_code": "619", "branch_code": "406", "branch_name": "燕巢鄉農會鳳雄分部" }
    ,
    { "id": "3778", "head_code": "619", "branch_code": "417", "branch_name": "燕巢鄉農會深水分部" }
    ,
    { "id": "3779", "head_code": "619", "branch_code": "428", "branch_name": "路竹鄉農會竹滬分部" }
    ,
    { "id": "3780", "head_code": "619", "branch_code": "439", "branch_name": "路竹鄉農會一甲分部" }
    ,
    { "id": "3781", "head_code": "619", "branch_code": "440", "branch_name": "路竹鄉農會下坑分部" }
    ,
    { "id": "3782", "head_code": "619", "branch_code": "451", "branch_name": "路竹鄉農會三爺分部" }
    ,
    { "id": "3783", "head_code": "619", "branch_code": "462", "branch_name": "湖內鄉農會大湖分部" }
    ,
    { "id": "3784", "head_code": "619", "branch_code": "473", "branch_name": "梓官鄉農會赤崁分部" }
    ,
    { "id": "3785", "head_code": "619", "branch_code": "484", "branch_name": "梓官鄉農會大舍分部" }
    ,
    { "id": "3786", "head_code": "619", "branch_code": "495", "branch_name": "梓官鄉農會梓官分部" }
    ,
    { "id": "3787", "head_code": "619", "branch_code": "543", "branch_name": "鳳山市農會鎮西分部" }
    ,
    { "id": "3788", "head_code": "619", "branch_code": "554", "branch_name": "鳳山市農會五福分部" }
    ,
    { "id": "3789", "head_code": "619", "branch_code": "565", "branch_name": "大寮鄉農會大寮分部" }
    ,
    { "id": "3790", "head_code": "619", "branch_code": "576", "branch_name": "大寮鄉農會中庄分部" }
    ,
    { "id": "3791", "head_code": "619", "branch_code": "587", "branch_name": "大寮鄉農會後庄分部" }
    ,
    { "id": "3792", "head_code": "619", "branch_code": "598", "branch_name": "大寮鄉農會昭明分部" }
    ,
    { "id": "3793", "head_code": "619", "branch_code": "602", "branch_name": "大寮鄉農會潮寮分部" }
    ,
    { "id": "3794", "head_code": "619", "branch_code": "613", "branch_name": "大樹鄉農會九曲堂分部" }
    ,
    { "id": "3795", "head_code": "619", "branch_code": "624", "branch_name": "阿蓮鄉農會中路分部" }
    ,
    { "id": "3796", "head_code": "619", "branch_code": "646", "branch_name": "彌陀鄉農會南安分部" }
    ,
    { "id": "3797", "head_code": "619", "branch_code": "657", "branch_name": "湖內鄉農會海埔分部" }
    ,
    { "id": "3798", "head_code": "619", "branch_code": "668", "branch_name": "大樹鄉農會溪埔分部" }
    ,
    { "id": "3799", "head_code": "619", "branch_code": "679", "branch_name": "永安鄉農會保寧分部" }
    ,
    { "id": "3800", "head_code": "619", "branch_code": "680", "branch_name": "燕巢鄉農會安招分部" }
    ,
    { "id": "3801", "head_code": "619", "branch_code": "716", "branch_name": "橋頭鄉農會橋頭分部" }
    ,
    { "id": "3802", "head_code": "619", "branch_code": "727", "branch_name": "仁武鄉農會灣內分部" }
    ,
    { "id": "3803", "head_code": "619", "branch_code": "738", "branch_name": "鳳山市農會老爺分部" }
    ,
    { "id": "3804", "head_code": "619", "branch_code": "749", "branch_name": "鳳山市農會市場分部" }
    ,
    { "id": "3805", "head_code": "619", "branch_code": "750", "branch_name": "茄萣鄉農會白砂崙分部" }
    ,
    { "id": "3806", "head_code": "619", "branch_code": "761", "branch_name": "永安鄉農會維新分部" }
    ,
    { "id": "3807", "head_code": "619", "branch_code": "772", "branch_name": "岡山鎮農會協榮分部" }
    ,
    { "id": "3808", "head_code": "619", "branch_code": "783", "branch_name": "彌陀鄉農會壽齡分部" }
    ,
    { "id": "3809", "head_code": "619", "branch_code": "794", "branch_name": "田寮鄉農會新興分部" }
    ,
    { "id": "3810", "head_code": "619", "branch_code": "808", "branch_name": "田寮鄉農會祟德分部" }
    ,
    { "id": "3811", "head_code": "619", "branch_code": "819", "branch_name": "甲仙區農會桃源分部" }
    ,
    { "id": "3812", "head_code": "619", "branch_code": "831", "branch_name": "林園鄉農會中厝分部" }
    ,
    { "id": "3813", "head_code": "619", "branch_code": "842", "branch_name": "林園鄉農會頂厝分部" }
    ,
    { "id": "3814", "head_code": "619", "branch_code": "853", "branch_name": "湖內鄉農會太爺分部" }
    ,
    { "id": "3815", "head_code": "619", "branch_code": "864", "branch_name": "鳳山市農會文山分部" }
    ,
    { "id": "3816", "head_code": "619", "branch_code": "886", "branch_name": "鳳山市農會東區分部" }
    ,
    { "id": "3817", "head_code": "619", "branch_code": "897", "branch_name": "鳳山市農會鎮北分部" }
    ,
    { "id": "3818", "head_code": "619", "branch_code": "901", "branch_name": "橋頭鄉農會甲圍分部" }
    ,
    { "id": "3819", "head_code": "619", "branch_code": "923", "branch_name": "橋頭鄉農會隆豐和分部" }
    ,
    { "id": "3820", "head_code": "619", "branch_code": "934", "branch_name": "橋頭鄉農會五林分部" }
    ,
    { "id": "3821", "head_code": "619", "branch_code": "945", "branch_name": "美濃鎮農會信用部和興分部" }
    ,
    { "id": "3822", "head_code": "619", "branch_code": "989", "branch_name": "甲仙區農會三民分部" }
    ,
    { "id": "3823", "head_code": "619", "branch_code": "990", "branch_name": "鳳山市農會過埤分部" }
    ,
    { "id": "3824", "head_code": "619", "branch_code": "1012", "branch_name": "大寮鄉農會翁園分部" }
    ,
    { "id": "3825", "head_code": "619", "branch_code": "1045", "branch_name": "仁武鄉農會八卦分部" }
    ,
    { "id": "3826", "head_code": "619", "branch_code": "1056", "branch_name": "橋頭農會白樹分部" }
    ,
    { "id": "3827", "head_code": "619", "branch_code": "1067", "branch_name": "岡山鎮農會後紅分部" }
    ,
    { "id": "3828", "head_code": "619", "branch_code": "1078", "branch_name": "阿蓮鄉農會復安分部" }
    ,
    { "id": "3829", "head_code": "619", "branch_code": "1089", "branch_name": "鳥松鄉農會鳥松本會" }
    ,
    { "id": "3830", "head_code": "619", "branch_code": "1090", "branch_name": "鳥松鄉農會澄清湖分部" }
    ,
    { "id": "3831", "head_code": "620", "branch_code": "31", "branch_name": "東港鎮農會信用部" }
    ,
    { "id": "3832", "head_code": "620", "branch_code": "42", "branch_name": "恆春鎮農會信用部" }
    ,
    { "id": "3833", "head_code": "620", "branch_code": "75", "branch_name": "麟洛鄉農會信用部" }
    ,
    { "id": "3834", "head_code": "620", "branch_code": "86", "branch_name": "九如鄉農會信用部" }
    ,
    { "id": "3835", "head_code": "620", "branch_code": "112", "branch_name": "里港鄉農會信用部" }
    ,
    { "id": "3836", "head_code": "620", "branch_code": "167", "branch_name": "崁頂鄉農會信用部" }
    ,
    { "id": "3837", "head_code": "620", "branch_code": "189", "branch_name": "南州地區農會（本會）" }
    ,
    { "id": "3838", "head_code": "620", "branch_code": "204", "branch_name": "琉球鄉農會信用部" }
    ,
    { "id": "3839", "head_code": "620", "branch_code": "215", "branch_name": "滿州鄉農會信用部" }
    ,
    { "id": "3840", "head_code": "620", "branch_code": "259", "branch_name": "枋山地區農會信用部" }
    ,
    { "id": "3841", "head_code": "620", "branch_code": "330", "branch_name": "里港鄉農會土庫分部" }
    ,
    { "id": "3842", "head_code": "620", "branch_code": "341", "branch_name": "里港鄉農會載興分部" }
    ,
    { "id": "3843", "head_code": "620", "branch_code": "547", "branch_name": "恆春鎮農會墾丁分部" }
    ,
    { "id": "3844", "head_code": "620", "branch_code": "628", "branch_name": "里港鄉農會三廓分部" }
    ,
    { "id": "3845", "head_code": "620", "branch_code": "709", "branch_name": "崁頂鄉農會力社分部" }
    ,
    { "id": "3846", "head_code": "620", "branch_code": "710", "branch_name": "崁頂鄉農會港東分部" }
    ,
    { "id": "3847", "head_code": "620", "branch_code": "721", "branch_name": "東港鎮農會下部分部" }
    ,
    { "id": "3848", "head_code": "620", "branch_code": "743", "branch_name": "枋山區農會枋山分部" }
    ,
    { "id": "3849", "head_code": "620", "branch_code": "754", "branch_name": "枋山區農會加祿分部" }
    ,
    { "id": "3850", "head_code": "620", "branch_code": "765", "branch_name": "里港鄉農會塔樓分部" }
    ,
    { "id": "3851", "head_code": "620", "branch_code": "787", "branch_name": "九如鄉農會洽興分部" }
    ,
    { "id": "3852", "head_code": "620", "branch_code": "813", "branch_name": "南州地區農會新埤分部" }
    ,
    { "id": "3853", "head_code": "621", "branch_code": "21", "branch_name": "吉安鄉農會信用部" }
    ,
    { "id": "3854", "head_code": "621", "branch_code": "32", "branch_name": "壽豐鄉農會信用部" }
    ,
    { "id": "3855", "head_code": "621", "branch_code": "43", "branch_name": "富里鄉農會" }
    ,
    { "id": "3856", "head_code": "621", "branch_code": "98", "branch_name": "新秀地區農會信用部" }
    ,
    { "id": "3857", "head_code": "621", "branch_code": "102", "branch_name": "吉安鄉農會仁里分部" }
    ,
    { "id": "3858", "head_code": "621", "branch_code": "113", "branch_name": "壽豐鄉農會豐田分部" }
    ,
    { "id": "3859", "head_code": "621", "branch_code": "124", "branch_name": "壽豐鄉農會志學分部" }
    ,
    { "id": "3860", "head_code": "621", "branch_code": "135", "branch_name": "富里鄉農會東竹分部" }
    ,
    { "id": "3861", "head_code": "621", "branch_code": "146", "branch_name": "富里鄉農會東里分部" }
    ,
    { "id": "3862", "head_code": "621", "branch_code": "191", "branch_name": "新秀區農會新城分部" }
    ,
    { "id": "3863", "head_code": "621", "branch_code": "205", "branch_name": "新秀地區農會嘉里分部" }
    ,
    { "id": "3864", "head_code": "621", "branch_code": "216", "branch_name": "花蓮市新秀地區農會秀林分部" }
    ,
    { "id": "3865", "head_code": "621", "branch_code": "227", "branch_name": "吉安鄉農會北昌分部" }
    ,
    { "id": "3866", "head_code": "621", "branch_code": "238", "branch_name": "吉安鄉農會宜昌分部" }
    ,
    { "id": "3867", "head_code": "621", "branch_code": "249", "branch_name": "花蓮市農會中華分部" }
    ,
    { "id": "3868", "head_code": "621", "branch_code": "331", "branch_name": "壽豐鄉農會豐裡分部" }
    ,
    { "id": "3869", "head_code": "622", "branch_code": "11", "branch_name": "關山鎮農會信用部" }
    ,
    { "id": "3870", "head_code": "622", "branch_code": "22", "branch_name": "成功鎮農會信用部" }
    ,
    { "id": "3871", "head_code": "622", "branch_code": "33", "branch_name": "池上鄉農會信用部" }
    ,
    { "id": "3872", "head_code": "622", "branch_code": "44", "branch_name": "東河鄉農會東河分部" }
    ,
    { "id": "3873", "head_code": "622", "branch_code": "55", "branch_name": "長濱鄉農會信用部" }
    ,
    { "id": "3874", "head_code": "622", "branch_code": "66", "branch_name": "台東地區農會信用部" }
    ,
    { "id": "3875", "head_code": "622", "branch_code": "77", "branch_name": "鹿野地區農會信用部" }
    ,
    { "id": "3876", "head_code": "622", "branch_code": "88", "branch_name": "太麻里地區農會信用部" }
    ,
    { "id": "3877", "head_code": "622", "branch_code": "99", "branch_name": "台東地區農會豐里分部" }
    ,
    { "id": "3878", "head_code": "622", "branch_code": "103", "branch_name": "東河鄉農會" }
    ,
    { "id": "3879", "head_code": "622", "branch_code": "114", "branch_name": "東河鄉農會泰源分部" }
    ,
    { "id": "3880", "head_code": "622", "branch_code": "125", "branch_name": "台東地區農會台東分部" }
    ,
    { "id": "3881", "head_code": "622", "branch_code": "136", "branch_name": "台東地區農會知本分部" }
    ,
    { "id": "3882", "head_code": "622", "branch_code": "147", "branch_name": "台東地區農會綠島分部" }
    ,
    { "id": "3883", "head_code": "622", "branch_code": "158", "branch_name": "台東地區農會初鹿分部" }
    ,
    { "id": "3884", "head_code": "622", "branch_code": "169", "branch_name": "鹿野區農會瑞源分部" }
    ,
    { "id": "3885", "head_code": "622", "branch_code": "170", "branch_name": "太麻里地區農會美和分部" }
    ,
    { "id": "3886", "head_code": "622", "branch_code": "181", "branch_name": "太麻里地區農會金崙分部" }
    ,
    { "id": "3887", "head_code": "622", "branch_code": "192", "branch_name": "太麻里地區農會大武分部" }
    ,
    { "id": "3888", "head_code": "622", "branch_code": "206", "branch_name": "成功鎮農會忠孝分部" }
    ,
    { "id": "3889", "head_code": "622", "branch_code": "217", "branch_name": "台東地區農會太平分部" }
    ,
    { "id": "3890", "head_code": "622", "branch_code": "228", "branch_name": "台東地區農會蘭嶼分部" }
    ,
    { "id": "3891", "head_code": "622", "branch_code": "239", "branch_name": "關山鎮農會海端分部" }
    ,
    { "id": "3892", "head_code": "622", "branch_code": "240", "branch_name": "鹿野地區農會瑞豐分部" }
    ,
    { "id": "3893", "head_code": "622", "branch_code": "251", "branch_name": "成功鎮農會信義分部" }
    ,
    { "id": "3894", "head_code": "622", "branch_code": "262", "branch_name": "太麻里地區農會大溪分部" }
    ,
    { "id": "3895", "head_code": "622", "branch_code": "284", "branch_name": "台東地區農會新園分部" }
    ,
    { "id": "3896", "head_code": "623", "branch_code": "12", "branch_name": "北投區農會信用部" }
    ,
    { "id": "3897", "head_code": "623", "branch_code": "23", "branch_name": "士林區農會士林本會" }
    ,
    { "id": "3898", "head_code": "623", "branch_code": "34", "branch_name": "內湖區農會信用部" }
    ,
    { "id": "3899", "head_code": "623", "branch_code": "45", "branch_name": "南港區農會信用部" }
    ,
    { "id": "3900", "head_code": "623", "branch_code": "56", "branch_name": "木柵區農會信用部" }
    ,
    { "id": "3901", "head_code": "623", "branch_code": "67", "branch_name": "景美農會景美農會本會" }
    ,
    { "id": "3902", "head_code": "623", "branch_code": "78", "branch_name": "北投區農會石牌分部" }
    ,
    { "id": "3903", "head_code": "623", "branch_code": "89", "branch_name": "北投區農會關渡分部" }
    ,
    { "id": "3904", "head_code": "623", "branch_code": "90", "branch_name": "士林區農會社子分會" }
    ,
    { "id": "3905", "head_code": "623", "branch_code": "104", "branch_name": "內湖區農會潭美分部" }
    ,
    { "id": "3906", "head_code": "623", "branch_code": "115", "branch_name": "南港區農會中研分部" }
    ,
    { "id": "3907", "head_code": "623", "branch_code": "126", "branch_name": "北投區農會立農分部" }
    ,
    { "id": "3908", "head_code": "623", "branch_code": "137", "branch_name": "北投區農會大屯分部" }
    ,
    { "id": "3909", "head_code": "623", "branch_code": "148", "branch_name": "士林區農會文林分會" }
    ,
    { "id": "3910", "head_code": "623", "branch_code": "159", "branch_name": "士林區農會天母分部" }
    ,
    { "id": "3911", "head_code": "623", "branch_code": "160", "branch_name": "松山區農會信用部" }
    ,
    { "id": "3912", "head_code": "623", "branch_code": "171", "branch_name": "內湖區農會東湖分部" }
    ,
    { "id": "3913", "head_code": "623", "branch_code": "182", "branch_name": "內湖區農會西湖分部" }
    ,
    { "id": "3914", "head_code": "623", "branch_code": "193", "branch_name": "松山區農會信義分部" }
    ,
    { "id": "3915", "head_code": "623", "branch_code": "207", "branch_name": "士林區農會陽明山分部" }
    ,
    { "id": "3916", "head_code": "623", "branch_code": "229", "branch_name": "士林區農會延平分部" }
    ,
    { "id": "3917", "head_code": "623", "branch_code": "230", "branch_name": "松山區農會信用部萬華分部" }
    ,
    { "id": "3918", "head_code": "623", "branch_code": "241", "branch_name": "北投區農會福興分部" }
    ,
    { "id": "3919", "head_code": "623", "branch_code": "252", "branch_name": "木柵區農會木新分部" }
    ,
    { "id": "3920", "head_code": "623", "branch_code": "274", "branch_name": "內湖區農會民權分部" }
    ,
    { "id": "3921", "head_code": "624", "branch_code": "13", "branch_name": "信用部" }
    ,
    { "id": "3922", "head_code": "624", "branch_code": "24", "branch_name": "湖西分部" }
    ,
    { "id": "3923", "head_code": "624", "branch_code": "35", "branch_name": "西嶼分部" }
    ,
    { "id": "3924", "head_code": "624", "branch_code": "46", "branch_name": "望安分部" }
    ,
    { "id": "3925", "head_code": "624", "branch_code": "57", "branch_name": "白沙分部" }
    ,
    { "id": "3926", "head_code": "624", "branch_code": "68", "branch_name": "七美分部" }
    ,
    { "id": "3927", "head_code": "625", "branch_code": "14", "branch_name": "信用部" }
    ,
    { "id": "3928", "head_code": "625", "branch_code": "25", "branch_name": "西屯分部" }
    ,
    { "id": "3929", "head_code": "625", "branch_code": "36", "branch_name": "北屯分部" }
    ,
    { "id": "3930", "head_code": "625", "branch_code": "47", "branch_name": "南屯分部" }
    ,
    { "id": "3931", "head_code": "625", "branch_code": "58", "branch_name": "四民分部" }
    ,
    { "id": "3932", "head_code": "625", "branch_code": "69", "branch_name": "西區分部" }
    ,
    { "id": "3933", "head_code": "625", "branch_code": "70", "branch_name": "東區分部" }
    ,
    { "id": "3934", "head_code": "625", "branch_code": "92", "branch_name": "南區分部" }
    ,
    { "id": "3935", "head_code": "625", "branch_code": "117", "branch_name": "北區分部" }
    ,
    { "id": "3936", "head_code": "625", "branch_code": "139", "branch_name": "軍功分部" }
    ,
    { "id": "3937", "head_code": "625", "branch_code": "140", "branch_name": "大坑分部" }
    ,
    { "id": "3938", "head_code": "627", "branch_code": "16", "branch_name": "信用部" }
    ,
    { "id": "3939", "head_code": "803", "branch_code": "10", "branch_name": "營業部" }
    ,
    { "id": "3940", "head_code": "803", "branch_code": "21", "branch_name": "台北分行" }
    ,
    { "id": "3941", "head_code": "803", "branch_code": "32", "branch_name": "桃園分行" }
    ,
    { "id": "3942", "head_code": "803", "branch_code": "43", "branch_name": "台中分行" }
    ,
    { "id": "3943", "head_code": "803", "branch_code": "54", "branch_name": "南京東路分行" }
    ,
    { "id": "3944", "head_code": "803", "branch_code": "65", "branch_name": "中壢分行" }
    ,
    { "id": "3945", "head_code": "803", "branch_code": "76", "branch_name": "三重分行" }
    ,
    { "id": "3946", "head_code": "803", "branch_code": "87", "branch_name": "信託部" }
    ,
    { "id": "3947", "head_code": "803", "branch_code": "98", "branch_name": "東台北分行" }
    ,
    { "id": "3948", "head_code": "803", "branch_code": "102", "branch_name": "高雄分行" }
    ,
    { "id": "3949", "head_code": "803", "branch_code": "113", "branch_name": "板橋分行" }
    ,
    { "id": "3950", "head_code": "803", "branch_code": "124", "branch_name": "台南分行" }
    ,
    { "id": "3951", "head_code": "803", "branch_code": "135", "branch_name": "員林分行" }
    ,
    { "id": "3952", "head_code": "803", "branch_code": "146", "branch_name": "國外部" }
    ,
    { "id": "3953", "head_code": "803", "branch_code": "157", "branch_name": "仁愛分行" }
    ,
    { "id": "3954", "head_code": "803", "branch_code": "168", "branch_name": "南崁分行" }
    ,
    { "id": "3955", "head_code": "803", "branch_code": "179", "branch_name": "新竹分行" }
    ,
    { "id": "3956", "head_code": "803", "branch_code": "180", "branch_name": "蘆洲分行" }
    ,
    { "id": "3957", "head_code": "803", "branch_code": "191", "branch_name": "國際金融業務分行" }
    ,
    { "id": "3958", "head_code": "803", "branch_code": "205", "branch_name": "九如分行" }
    ,
    { "id": "3959", "head_code": "803", "branch_code": "216", "branch_name": "雙和分行" }
    ,
    { "id": "3960", "head_code": "803", "branch_code": "227", "branch_name": "迴龍分行" }
    ,
    { "id": "3961", "head_code": "803", "branch_code": "238", "branch_name": "嘉義分行" }
    ,
    { "id": "3962", "head_code": "803", "branch_code": "249", "branch_name": "公館分行" }
    ,
    { "id": "3963", "head_code": "803", "branch_code": "250", "branch_name": "內壢分行" }
    ,
    { "id": "3964", "head_code": "803", "branch_code": "261", "branch_name": "忠孝分行" }
    ,
    { "id": "3965", "head_code": "803", "branch_code": "272", "branch_name": "新莊分行" }
    ,
    { "id": "3966", "head_code": "803", "branch_code": "283", "branch_name": "鳳山分行" }
    ,
    { "id": "3967", "head_code": "803", "branch_code": "294", "branch_name": "桃鶯分行" }
    ,
    { "id": "3968", "head_code": "803", "branch_code": "308", "branch_name": "龍潭分行" }
    ,
    { "id": "3969", "head_code": "803", "branch_code": "319", "branch_name": "新店分行" }
    ,
    { "id": "3970", "head_code": "803", "branch_code": "320", "branch_name": "大直分行" }
    ,
    { "id": "3971", "head_code": "803", "branch_code": "331", "branch_name": "中山簡易型分行" }
    ,
    { "id": "3972", "head_code": "803", "branch_code": "342", "branch_name": "文心分行" }
    ,
    { "id": "3973", "head_code": "803", "branch_code": "353", "branch_name": "健行分行" }
    ,
    { "id": "3974", "head_code": "803", "branch_code": "364", "branch_name": "中和分行" }
    ,
    { "id": "3975", "head_code": "803", "branch_code": "375", "branch_name": "內湖分行" }
    ,
    { "id": "3976", "head_code": "803", "branch_code": "386", "branch_name": "大園分行" }
    ,
    { "id": "3977", "head_code": "803", "branch_code": "397", "branch_name": "永和分行" }
    ,
    { "id": "3978", "head_code": "803", "branch_code": "401", "branch_name": "中港簡易型分行" }
    ,
    { "id": "3979", "head_code": "803", "branch_code": "412", "branch_name": "通化簡易型分行" }
    ,
    { "id": "3980", "head_code": "803", "branch_code": "423", "branch_name": "士分行" }
    ,
    { "id": "3981", "head_code": "803", "branch_code": "434", "branch_name": "微風簡易型分行" }
    ,
    { "id": "3982", "head_code": "803", "branch_code": "445", "branch_name": "長春分行" }
    ,
    { "id": "3983", "head_code": "803", "branch_code": "456", "branch_name": "松江分行" }
    ,
    { "id": "3984", "head_code": "803", "branch_code": "467", "branch_name": "大安分行" }
    ,
    { "id": "3985", "head_code": "803", "branch_code": "478", "branch_name": "永吉分行" }
    ,
    { "id": "3986", "head_code": "803", "branch_code": "489", "branch_name": "文林簡易型分行" }
    ,
    { "id": "3987", "head_code": "803", "branch_code": "490", "branch_name": "東門分行" }
    ,
    { "id": "3988", "head_code": "803", "branch_code": "504", "branch_name": "敦化分行" }
    ,
    { "id": "3989", "head_code": "803", "branch_code": "515", "branch_name": "西湖分行" }
    ,
    { "id": "3990", "head_code": "803", "branch_code": "526", "branch_name": "北投分行" }
    ,
    { "id": "3991", "head_code": "803", "branch_code": "537", "branch_name": "北三重分行" }
    ,
    { "id": "3992", "head_code": "803", "branch_code": "548", "branch_name": "後埔分行" }
    ,
    { "id": "3993", "head_code": "803", "branch_code": "559", "branch_name": "北中和簡易型分行" }
    ,
    { "id": "3994", "head_code": "803", "branch_code": "560", "branch_name": "西盛分行" }
    ,
    { "id": "3995", "head_code": "803", "branch_code": "571", "branch_name": "樹林分行" }
    ,
    { "id": "3996", "head_code": "803", "branch_code": "582", "branch_name": "汐止分行" }
    ,
    { "id": "3997", "head_code": "803", "branch_code": "593", "branch_name": "北桃園分行" }
    ,
    { "id": "3998", "head_code": "803", "branch_code": "607", "branch_name": "北中壢分行" }
    ,
    { "id": "3999", "head_code": "803", "branch_code": "618", "branch_name": "北台中分行" }
    ,
    { "id": "4000", "head_code": "803", "branch_code": "629", "branch_name": "民權分行" }
    ,
    { "id": "4001", "head_code": "803", "branch_code": "630", "branch_name": "西屯分行" }
    ,
    { "id": "4002", "head_code": "803", "branch_code": "641", "branch_name": "興中分行" }
    ,
    { "id": "4003", "head_code": "803", "branch_code": "652", "branch_name": "北屯分行" }
    ,
    { "id": "4004", "head_code": "803", "branch_code": "663", "branch_name": "南員林分行" }
    ,
    { "id": "4005", "head_code": "803", "branch_code": "674", "branch_name": "東嘉義分行" }
    ,
    { "id": "4006", "head_code": "803", "branch_code": "685", "branch_name": "府城分行" }
    ,
    { "id": "4007", "head_code": "803", "branch_code": "696", "branch_name": "豐原分行" }
    ,
    { "id": "4008", "head_code": "803", "branch_code": "700", "branch_name": "富強分行" }
    ,
    { "id": "4009", "head_code": "803", "branch_code": "711", "branch_name": "開元分行" }
    ,
    { "id": "4010", "head_code": "803", "branch_code": "722", "branch_name": "南台南分行" }
    ,
    { "id": "4011", "head_code": "803", "branch_code": "733", "branch_name": "苓雅分行" }
    ,
    { "id": "4012", "head_code": "803", "branch_code": "744", "branch_name": "北高雄分行" }
    ,
    { "id": "4013", "head_code": "803", "branch_code": "755", "branch_name": "三民分行" }
    ,
    { "id": "4014", "head_code": "803", "branch_code": "766", "branch_name": "五甲分行" }
    ,
    { "id": "4015", "head_code": "803", "branch_code": "777", "branch_name": "屏東分行" }
    ,
    { "id": "4016", "head_code": "803", "branch_code": "788", "branch_name": "和平分行" }
    ,
    { "id": "4017", "head_code": "803", "branch_code": "799", "branch_name": "永春分行" }
    ,
    { "id": "4018", "head_code": "803", "branch_code": "803", "branch_name": "" },
    { "id": "4019", "head_code": "803", "branch_code": "814", "branch_name": "安康分行" }
    ,
    { "id": "4020", "head_code": "803", "branch_code": "7019", "branch_name": "越南胡志明市辦事處" }
    ,
    { "id": "4021", "head_code": "803", "branch_code": "7020", "branch_name": "香港代表人辦事處" }
    ,
    { "id": "4022", "head_code": "803", "branch_code": "9002", "branch_name": "香港財務公司" }
    ,
    { "id": "4023", "head_code": "804", "branch_code": "11", "branch_name": "營業部" }
    ,
    { "id": "4024", "head_code": "804", "branch_code": "22", "branch_name": "光復分行" }
    ,
    { "id": "4025", "head_code": "804", "branch_code": "33", "branch_name": "台北分行" }
    ,
    { "id": "4026", "head_code": "804", "branch_code": "44", "branch_name": "桃園分行" }
    ,
    { "id": "4027", "head_code": "804", "branch_code": "55", "branch_name": "台中分行" }
    ,
    { "id": "4028", "head_code": "804", "branch_code": "66", "branch_name": "台南分行" }
    ,
    { "id": "4029", "head_code": "804", "branch_code": "77", "branch_name": "鳳山分行" }
    ,
    { "id": "4030", "head_code": "804", "branch_code": "88", "branch_name": "信託部" }
    ,
    { "id": "4031", "head_code": "804", "branch_code": "99", "branch_name": "南京東路分行" }
    ,
    { "id": "4032", "head_code": "804", "branch_code": "103", "branch_name": "板橋分行" }
    ,
    { "id": "4033", "head_code": "804", "branch_code": "114", "branch_name": "豐原分行" }
    ,
    { "id": "4034", "head_code": "804", "branch_code": "125", "branch_name": "嘉義分行" }
    ,
    { "id": "4035", "head_code": "804", "branch_code": "136", "branch_name": "高雄分行" }
    ,
    { "id": "4036", "head_code": "804", "branch_code": "147", "branch_name": "國外部" }
    ,
    { "id": "4037", "head_code": "804", "branch_code": "158", "branch_name": "新生分行" }
    ,
    { "id": "4038", "head_code": "804", "branch_code": "169", "branch_name": "大順分行" }
    ,
    { "id": "4039", "head_code": "804", "branch_code": "170", "branch_name": "三重分行" }
    ,
    { "id": "4040", "head_code": "804", "branch_code": "181", "branch_name": "新竹分行" }
    ,
    { "id": "4041", "head_code": "804", "branch_code": "192", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4042", "head_code": "804", "branch_code": "206", "branch_name": "松江分行" }
    ,
    { "id": "4043", "head_code": "804", "branch_code": "217", "branch_name": "雙和分行" }
    ,
    { "id": "4044", "head_code": "804", "branch_code": "228", "branch_name": "彰化分行" }
    ,
    { "id": "4045", "head_code": "804", "branch_code": "239", "branch_name": "屏東分行" }
    ,
    { "id": "4046", "head_code": "804", "branch_code": "240", "branch_name": "信義分行" }
    ,
    { "id": "4047", "head_code": "804", "branch_code": "251", "branch_name": "基隆分行" }
    ,
    { "id": "4048", "head_code": "804", "branch_code": "262", "branch_name": "新莊分行" }
    ,
    { "id": "4049", "head_code": "804", "branch_code": "273", "branch_name": "永康分行" }
    ,
    { "id": "4050", "head_code": "804", "branch_code": "284", "branch_name": "新店分行" }
    ,
    { "id": "4051", "head_code": "804", "branch_code": "295", "branch_name": "南港分行" }
    ,
    { "id": "4052", "head_code": "804", "branch_code": "309", "branch_name": "中壢分行" }
    ,
    { "id": "4053", "head_code": "804", "branch_code": "310", "branch_name": "南投分行" }
    ,
    { "id": "4054", "head_code": "804", "branch_code": "321", "branch_name": "仁愛分行" }
    ,
    { "id": "4055", "head_code": "804", "branch_code": "332", "branch_name": "東興分行" }
    ,
    { "id": "4056", "head_code": "804", "branch_code": "343", "branch_name": "頭份分行" }
    ,
    { "id": "4057", "head_code": "804", "branch_code": "354", "branch_name": "羅東分行" }
    ,
    { "id": "4058", "head_code": "804", "branch_code": "365", "branch_name": "太原路分行" }
    ,
    { "id": "4059", "head_code": "804", "branch_code": "376", "branch_name": "前鎮分行" }
    ,
    { "id": "4060", "head_code": "804", "branch_code": "387", "branch_name": "土城分行" }
    ,
    { "id": "4061", "head_code": "804", "branch_code": "398", "branch_name": "大安分行" }
    ,
    { "id": "4062", "head_code": "804", "branch_code": "9003", "branch_name": "香港代表人辦事處" }
    ,
    { "id": "4063", "head_code": "805", "branch_code": "12", "branch_name": "營業部" }
    ,
    { "id": "4064", "head_code": "805", "branch_code": "23", "branch_name": "台北襄陽分行" }
    ,
    { "id": "4065", "head_code": "805", "branch_code": "34", "branch_name": "台北逸仙分行" }
    ,
    { "id": "4066", "head_code": "805", "branch_code": "45", "branch_name": "桃園分行" }
    ,
    { "id": "4067", "head_code": "805", "branch_code": "56", "branch_name": "台中公益分行" }
    ,
    { "id": "4068", "head_code": "805", "branch_code": "67", "branch_name": "台南分行" }
    ,
    { "id": "4069", "head_code": "805", "branch_code": "78", "branch_name": "高雄五福分行" }
    ,
    { "id": "4070", "head_code": "805", "branch_code": "89", "branch_name": "台北敦南分行" }
    ,
    { "id": "4071", "head_code": "805", "branch_code": "90", "branch_name": "板橋南雅分行" }
    ,
    { "id": "4072", "head_code": "805", "branch_code": "104", "branch_name": "新竹林森分行" }
    ,
    { "id": "4073", "head_code": "805", "branch_code": "115", "branch_name": "高雄中正分行" }
    ,
    { "id": "4074", "head_code": "805", "branch_code": "126", "branch_name": "信託部" }
    ,
    { "id": "4075", "head_code": "805", "branch_code": "137", "branch_name": "國外部" }
    ,
    { "id": "4076", "head_code": "805", "branch_code": "148", "branch_name": "遠東銀行三重分行" }
    ,
    { "id": "4077", "head_code": "805", "branch_code": "159", "branch_name": "台北松江分行" }
    ,
    { "id": "4078", "head_code": "805", "branch_code": "160", "branch_name": "永康分行" }
    ,
    { "id": "4079", "head_code": "805", "branch_code": "171", "branch_name": "中壢分行" }
    ,
    { "id": "4080", "head_code": "805", "branch_code": "182", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4081", "head_code": "805", "branch_code": "193", "branch_name": "永和分行" }
    ,
    { "id": "4082", "head_code": "805", "branch_code": "207", "branch_name": "台北民權分行" }
    ,
    { "id": "4083", "head_code": "805", "branch_code": "218", "branch_name": "高雄文化中心分行" }
    ,
    { "id": "4084", "head_code": "805", "branch_code": "229", "branch_name": "台中文心分行" }
    ,
    { "id": "4085", "head_code": "805", "branch_code": "230", "branch_name": "新竹科學園區分行" }
    ,
    { "id": "4086", "head_code": "805", "branch_code": "241", "branch_name": "桃園大興分行" }
    ,
    { "id": "4087", "head_code": "805", "branch_code": "252", "branch_name": "台北南門分行" }
    ,
    { "id": "4088", "head_code": "805", "branch_code": "263", "branch_name": "台北新莊分行" }
    ,
    { "id": "4089", "head_code": "805", "branch_code": "274", "branch_name": "台北松山分行" }
    ,
    { "id": "4090", "head_code": "805", "branch_code": "285", "branch_name": "新店分行" }
    ,
    { "id": "4091", "head_code": "805", "branch_code": "296", "branch_name": "台北重慶分行" }
    ,
    { "id": "4092", "head_code": "805", "branch_code": "300", "branch_name": "竹北分行" }
    ,
    { "id": "4093", "head_code": "805", "branch_code": "311", "branch_name": "遠東銀行台北忠孝分行" }
    ,
    { "id": "4094", "head_code": "805", "branch_code": "322", "branch_name": "遠東銀行林口分行" }
    ,
    { "id": "4095", "head_code": "805", "branch_code": "333", "branch_name": "板橋文化分行" }
    ,
    { "id": "4096", "head_code": "805", "branch_code": "344", "branch_name": "台中自由分行" }
    ,
    { "id": "4097", "head_code": "805", "branch_code": "355", "branch_name": "新莊富國分行" }
    ,
    { "id": "4098", "head_code": "805", "branch_code": "366", "branch_name": "台北永吉分行" }
    ,
    { "id": "4099", "head_code": "805", "branch_code": "377", "branch_name": "板橋四川簡易型分行" }
    ,
    { "id": "4100", "head_code": "805", "branch_code": "388", "branch_name": "遠東銀行桃園武陵簡易型分行" }
    ,
    { "id": "4101", "head_code": "805", "branch_code": "399", "branch_name": "遠東銀行台北金湖簡易型分行" }
    ,
    { "id": "4102", "head_code": "805", "branch_code": "403", "branch_name": "遠東銀行台北農安簡易型分行" }
    ,
    { "id": "4103", "head_code": "805", "branch_code": "9004", "branch_name": "香港代表人辦事處" }
    ,
    { "id": "4104", "head_code": "806", "branch_code": "13", "branch_name": "台中分行" }
    ,
    { "id": "4105", "head_code": "806", "branch_code": "24", "branch_name": "文心分部" }
    ,
    { "id": "4106", "head_code": "806", "branch_code": "35", "branch_name": "台北分行" }
    ,
    { "id": "4107", "head_code": "806", "branch_code": "46", "branch_name": "沙鹿分行" }
    ,
    { "id": "4108", "head_code": "806", "branch_code": "57", "branch_name": "豐原分行" }
    ,
    { "id": "4109", "head_code": "806", "branch_code": "68", "branch_name": "彰化分行" }
    ,
    { "id": "4110", "head_code": "806", "branch_code": "79", "branch_name": "員林分行" }
    ,
    { "id": "4111", "head_code": "806", "branch_code": "80", "branch_name": "三重分行" }
    ,
    { "id": "4112", "head_code": "806", "branch_code": "91", "branch_name": "平鎮分行" }
    ,
    { "id": "4113", "head_code": "806", "branch_code": "105", "branch_name": "草屯分行" }
    ,
    { "id": "4114", "head_code": "806", "branch_code": "116", "branch_name": "永康分行" }
    ,
    { "id": "4115", "head_code": "806", "branch_code": "127", "branch_name": "高雄分行" }
    ,
    { "id": "4116", "head_code": "806", "branch_code": "138", "branch_name": "信託部" }
    ,
    { "id": "4117", "head_code": "806", "branch_code": "149", "branch_name": "國外部" }
    ,
    { "id": "4118", "head_code": "806", "branch_code": "150", "branch_name": "景美分行" }
    ,
    { "id": "4119", "head_code": "806", "branch_code": "161", "branch_name": "新竹分行" }
    ,
    { "id": "4120", "head_code": "806", "branch_code": "172", "branch_name": "鹿港分行" }
    ,
    { "id": "4121", "head_code": "806", "branch_code": "183", "branch_name": "斗信分行" }
    ,
    { "id": "4122", "head_code": "806", "branch_code": "194", "branch_name": "嘉義分行" }
    ,
    { "id": "4123", "head_code": "806", "branch_code": "208", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4124", "head_code": "806", "branch_code": "219", "branch_name": "南京東路分行" }
    ,
    { "id": "4125", "head_code": "806", "branch_code": "220", "branch_name": "永和分行" }
    ,
    { "id": "4126", "head_code": "806", "branch_code": "231", "branch_name": "復興分行" }
    ,
    { "id": "4127", "head_code": "806", "branch_code": "242", "branch_name": "大里分行" }
    ,
    { "id": "4128", "head_code": "806", "branch_code": "253", "branch_name": "博愛分行" }
    ,
    { "id": "4129", "head_code": "806", "branch_code": "264", "branch_name": "苗栗分行" }
    ,
    { "id": "4130", "head_code": "806", "branch_code": "275", "branch_name": "崇德分行" }
    ,
    { "id": "4131", "head_code": "806", "branch_code": "286", "branch_name": "北斗分行" }
    ,
    { "id": "4132", "head_code": "806", "branch_code": "297", "branch_name": "佳里分行" }
    ,
    { "id": "4133", "head_code": "806", "branch_code": "301", "branch_name": "大甲分行" }
    ,
    { "id": "4134", "head_code": "806", "branch_code": "312", "branch_name": "虎尾分行" }
    ,
    { "id": "4135", "head_code": "806", "branch_code": "334", "branch_name": "士林分行" }
    ,
    { "id": "4136", "head_code": "806", "branch_code": "345", "branch_name": "南崁分行" }
    ,
    { "id": "4137", "head_code": "806", "branch_code": "356", "branch_name": "溪湖分行" }
    ,
    { "id": "4138", "head_code": "806", "branch_code": "367", "branch_name": "城東分行" }
    ,
    { "id": "4139", "head_code": "806", "branch_code": "378", "branch_name": "新莊分行" }
    ,
    { "id": "4140", "head_code": "806", "branch_code": "389", "branch_name": "中壢分行" }
    ,
    { "id": "4141", "head_code": "806", "branch_code": "404", "branch_name": "三民分行" }
    ,
    { "id": "4142", "head_code": "806", "branch_code": "415", "branch_name": "營業部" }
    ,
    { "id": "4143", "head_code": "806", "branch_code": "426", "branch_name": "屏東分行" }
    ,
    { "id": "4144", "head_code": "806", "branch_code": "448", "branch_name": "斗南分行" }
    ,
    { "id": "4145", "head_code": "806", "branch_code": "482", "branch_name": "板橋分行" }
    ,
    { "id": "4146", "head_code": "806", "branch_code": "493", "branch_name": "桃園分行" }
    ,
    { "id": "4147", "head_code": "806", "branch_code": "507", "branch_name": "仁德分行" }
    ,
    { "id": "4148", "head_code": "806", "branch_code": "518", "branch_name": "鳳山分行" }
    ,
    { "id": "4149", "head_code": "806", "branch_code": "529", "branch_name": "東信分行" }
    ,
    { "id": "4150", "head_code": "806", "branch_code": "530", "branch_name": "馬蘭分行" }
    ,
    { "id": "4151", "head_code": "806", "branch_code": "585", "branch_name": "內湖分行" }
    ,
    { "id": "4152", "head_code": "806", "branch_code": "596", "branch_name": "宜蘭分行" }
    ,
    { "id": "4153", "head_code": "806", "branch_code": "600", "branch_name": "金門分行" }
    ,
    { "id": "4154", "head_code": "806", "branch_code": "611", "branch_name": "台南分行" }
    ,
    { "id": "4155", "head_code": "806", "branch_code": "622", "branch_name": "林口分行" }
    ,
    { "id": "4156", "head_code": "806", "branch_code": "633", "branch_name": "竹北分行" }
    ,
    { "id": "4157", "head_code": "806", "branch_code": "655", "branch_name": "安中分行" }
    ,
    { "id": "4158", "head_code": "806", "branch_code": "688", "branch_name": "府城分行" }
    ,
    { "id": "4159", "head_code": "806", "branch_code": "699", "branch_name": "東台南分行" }
    ,
    { "id": "4160", "head_code": "806", "branch_code": "714", "branch_name": "岡山分行" }
    ,
    { "id": "4161", "head_code": "806", "branch_code": "736", "branch_name": "復華西門分行" }
    ,
    { "id": "4162", "head_code": "806", "branch_code": "806", "branch_name": "復華開元分行" }
    ,
    { "id": "4163", "head_code": "806", "branch_code": "817", "branch_name": "復華淵東分行" }
    ,
    { "id": "4164", "head_code": "806", "branch_code": "828", "branch_name": "復華安和分行" }
    ,
    { "id": "4165", "head_code": "806", "branch_code": "839", "branch_name": "中和分行" }
    ,
    { "id": "4166", "head_code": "806", "branch_code": "840", "branch_name": "松江分行" }
    ,
    { "id": "4167", "head_code": "806", "branch_code": "851", "branch_name": "竹科分行" }
    ,
    { "id": "4168", "head_code": "806", "branch_code": "862", "branch_name": "天母分行" }
    ,
    { "id": "4169", "head_code": "806", "branch_code": "873", "branch_name": "蘆洲分行" }
    ,
    { "id": "4170", "head_code": "806", "branch_code": "884", "branch_name": "信義分行" }
    ,
    { "id": "4171", "head_code": "806", "branch_code": "895", "branch_name": "中山北路分行" }
    ,
    { "id": "4172", "head_code": "806", "branch_code": "909", "branch_name": "民生分行" }
    ,
    { "id": "4173", "head_code": "806", "branch_code": "910", "branch_name": "新店分行" }
    ,
    { "id": "4174", "head_code": "806", "branch_code": "932", "branch_name": "忠孝分行" }
    ,
    { "id": "4175", "head_code": "806", "branch_code": "943", "branch_name": "桃興分行" }
    ,
    { "id": "4176", "head_code": "806", "branch_code": "954", "branch_name": "中港分行" }
    ,
    { "id": "4177", "head_code": "807", "branch_code": "14", "branch_name": "城內分行" }
    ,
    { "id": "4178", "head_code": "807", "branch_code": "25", "branch_name": "敦北分行" }
    ,
    { "id": "4179", "head_code": "807", "branch_code": "36", "branch_name": "台中分行" }
    ,
    { "id": "4180", "head_code": "807", "branch_code": "47", "branch_name": "高雄分行" }
    ,
    { "id": "4181", "head_code": "807", "branch_code": "58", "branch_name": "忠孝分行" }
    ,
    { "id": "4182", "head_code": "807", "branch_code": "69", "branch_name": "西松分行" }
    ,
    { "id": "4183", "head_code": "807", "branch_code": "70", "branch_name": "板新分行" }
    ,
    { "id": "4184", "head_code": "807", "branch_code": "81", "branch_name": "信託部" }
    ,
    { "id": "4185", "head_code": "807", "branch_code": "92", "branch_name": "敦南分行" }
    ,
    { "id": "4186", "head_code": "807", "branch_code": "106", "branch_name": "新泰分行" }
    ,
    { "id": "4187", "head_code": "807", "branch_code": "117", "branch_name": "桃園分行" }
    ,
    { "id": "4188", "head_code": "807", "branch_code": "128", "branch_name": "北台中分行" }
    ,
    { "id": "4189", "head_code": "807", "branch_code": "139", "branch_name": "台南分行" }
    ,
    { "id": "4190", "head_code": "807", "branch_code": "140", "branch_name": "國外部" }
    ,
    { "id": "4191", "head_code": "807", "branch_code": "151", "branch_name": "松江分行" }
    ,
    { "id": "4192", "head_code": "807", "branch_code": "162", "branch_name": "嘉義分行" }
    ,
    { "id": "4193", "head_code": "807", "branch_code": "173", "branch_name": "三民分行" }
    ,
    { "id": "4194", "head_code": "807", "branch_code": "184", "branch_name": "新竹分行" }
    ,
    { "id": "4195", "head_code": "807", "branch_code": "195", "branch_name": "三重分行" }
    ,
    { "id": "4196", "head_code": "807", "branch_code": "209", "branch_name": "永豐商銀國際金融業務分行" }
    ,
    { "id": "4197", "head_code": "807", "branch_code": "210", "branch_name": "台北分行" }
    ,
    { "id": "4198", "head_code": "807", "branch_code": "221", "branch_name": "彰化分行" }
    ,
    { "id": "4199", "head_code": "807", "branch_code": "232", "branch_name": "雙和分行" }
    ,
    { "id": "4200", "head_code": "807", "branch_code": "243", "branch_name": "中壢分行" }
    ,
    { "id": "4201", "head_code": "807", "branch_code": "254", "branch_name": "鳳山分行" }
    ,
    { "id": "4202", "head_code": "807", "branch_code": "265", "branch_name": "中正簡易型分行" }
    ,
    { "id": "4203", "head_code": "807", "branch_code": "276", "branch_name": "北新分行" }
    ,
    { "id": "4204", "head_code": "807", "branch_code": "287", "branch_name": "屏東分行" }
    ,
    { "id": "4205", "head_code": "807", "branch_code": "298", "branch_name": "北桃園分行" }
    ,
    { "id": "4206", "head_code": "807", "branch_code": "302", "branch_name": "學府分行" }
    ,
    { "id": "4207", "head_code": "807", "branch_code": "313", "branch_name": "南高雄分行" }
    ,
    { "id": "4208", "head_code": "807", "branch_code": "324", "branch_name": "光華分行" }
    ,
    { "id": "4209", "head_code": "807", "branch_code": "335", "branch_name": "新生分行" }
    ,
    { "id": "4210", "head_code": "807", "branch_code": "346", "branch_name": "天母分行" }
    ,
    { "id": "4211", "head_code": "807", "branch_code": "357", "branch_name": "東板橋分行" }
    ,
    { "id": "4212", "head_code": "807", "branch_code": "368", "branch_name": "東台南分行" }
    ,
    { "id": "4213", "head_code": "807", "branch_code": "379", "branch_name": "廟口分行" }
    ,
    { "id": "4214", "head_code": "807", "branch_code": "380", "branch_name": "南台中分行" }
    ,
    { "id": "4215", "head_code": "807", "branch_code": "391", "branch_name": "東台北簡易型分行" }
    ,
    { "id": "4216", "head_code": "807", "branch_code": "405", "branch_name": "永康分行" }
    ,
    { "id": "4217", "head_code": "807", "branch_code": "416", "branch_name": "東蘆洲分行" }
    ,
    { "id": "4218", "head_code": "807", "branch_code": "427", "branch_name": "北高雄分行" }
    ,
    { "id": "4219", "head_code": "807", "branch_code": "438", "branch_name": "東三重簡易型分行" }
    ,
    { "id": "4220", "head_code": "807", "branch_code": "449", "branch_name": "信維簡易型分行" }
    ,
    { "id": "4221", "head_code": "807", "branch_code": "450", "branch_name": "中崙分行" }
    ,
    { "id": "4222", "head_code": "807", "branch_code": "461", "branch_name": "西湖分行" }
    ,
    { "id": "4223", "head_code": "807", "branch_code": "472", "branch_name": "豐原簡易型分行" }
    ,
    { "id": "4224", "head_code": "807", "branch_code": "483", "branch_name": "竹北簡易型分行" }
    ,
    { "id": "4225", "head_code": "807", "branch_code": "1011", "branch_name": "忠孝東路分行" }
    ,
    { "id": "4226", "head_code": "807", "branch_code": "1033", "branch_name": "建成分行" }
    ,
    { "id": "4227", "head_code": "807", "branch_code": "1044", "branch_name": "西門分行" }
    ,
    { "id": "4228", "head_code": "807", "branch_code": "1055", "branch_name": "萬華分行" }
    ,
    { "id": "4229", "head_code": "807", "branch_code": "1066", "branch_name": "興隆分行" }
    ,
    { "id": "4230", "head_code": "807", "branch_code": "1077", "branch_name": "南門分行" }
    ,
    { "id": "4231", "head_code": "807", "branch_code": "1088", "branch_name": "東門分行" }
    ,
    { "id": "4232", "head_code": "807", "branch_code": "1099", "branch_name": "延平分行" }
    ,
    { "id": "4233", "head_code": "807", "branch_code": "1103", "branch_name": "北投分行" }
    ,
    { "id": "4234", "head_code": "807", "branch_code": "1114", "branch_name": "松山分行" }
    ,
    { "id": "4235", "head_code": "807", "branch_code": "1125", "branch_name": "中山分行" }
    ,
    { "id": "4236", "head_code": "807", "branch_code": "1136", "branch_name": "士林分行" }
    ,
    { "id": "4237", "head_code": "807", "branch_code": "1147", "branch_name": "三和分行" }
    ,
    { "id": "4238", "head_code": "807", "branch_code": "1158", "branch_name": "雙園分行" }
    ,
    { "id": "4239", "head_code": "807", "branch_code": "1169", "branch_name": "永和分行" }
    ,
    { "id": "4240", "head_code": "807", "branch_code": "1170", "branch_name": "板橋分行" }
    ,
    { "id": "4241", "head_code": "807", "branch_code": "1181", "branch_name": "基隆分行" }
    ,
    { "id": "4242", "head_code": "807", "branch_code": "1192", "branch_name": "羅東分行" }
    ,
    { "id": "4243", "head_code": "807", "branch_code": "1206", "branch_name": "宜蘭分行" }
    ,
    { "id": "4244", "head_code": "807", "branch_code": "1217", "branch_name": "營業部" }
    ,
    { "id": "4245", "head_code": "807", "branch_code": "1228", "branch_name": "景美分行" }
    ,
    { "id": "4246", "head_code": "807", "branch_code": "1239", "branch_name": "新莊分行" }
    ,
    { "id": "4247", "head_code": "807", "branch_code": "1251", "branch_name": "汐止分行" }
    ,
    { "id": "4248", "head_code": "807", "branch_code": "1262", "branch_name": "城中分行" }
    ,
    { "id": "4249", "head_code": "807", "branch_code": "1273", "branch_name": "光復分行" }
    ,
    { "id": "4250", "head_code": "807", "branch_code": "1284", "branch_name": "正義分行" }
    ,
    { "id": "4251", "head_code": "807", "branch_code": "1295", "branch_name": "中和分行" }
    ,
    { "id": "4252", "head_code": "807", "branch_code": "1310", "branch_name": "士東分行" }
    ,
    { "id": "4253", "head_code": "807", "branch_code": "1321", "branch_name": "中港分行" }
    ,
    { "id": "4254", "head_code": "807", "branch_code": "1332", "branch_name": "蘆洲分行" }
    ,
    { "id": "4255", "head_code": "807", "branch_code": "1343", "branch_name": "內湖分行" }
    ,
    { "id": "4256", "head_code": "807", "branch_code": "1354", "branch_name": "社子分行" }
    ,
    { "id": "4257", "head_code": "807", "branch_code": "1365", "branch_name": "信義分行" }
    ,
    { "id": "4258", "head_code": "807", "branch_code": "1376", "branch_name": "永春分行" }
    ,
    { "id": "4259", "head_code": "807", "branch_code": "1387", "branch_name": "南三重分行" }
    ,
    { "id": "4260", "head_code": "807", "branch_code": "1398", "branch_name": "積穗分行" }
    ,
    { "id": "4261", "head_code": "807", "branch_code": "1402", "branch_name": "鶯歌分行" }
    ,
    { "id": "4262", "head_code": "807", "branch_code": "1413", "branch_name": "新店分行" }
    ,
    { "id": "4263", "head_code": "807", "branch_code": "1435", "branch_name": "西盛分行" }
    ,
    { "id": "4264", "head_code": "807", "branch_code": "1446", "branch_name": "板橋忠孝分行" }
    ,
    { "id": "4265", "head_code": "807", "branch_code": "1457", "branch_name": "思源分行" }
    ,
    { "id": "4266", "head_code": "807", "branch_code": "1468", "branch_name": "土城分行" }
    ,
    { "id": "4267", "head_code": "807", "branch_code": "1479", "branch_name": "三興分行" }
    ,
    { "id": "4268", "head_code": "807", "branch_code": "1480", "branch_name": "龍江分行" }
    ,
    { "id": "4269", "head_code": "807", "branch_code": "1491", "branch_name": "樹林分行" }
    ,
    { "id": "4270", "head_code": "807", "branch_code": "1505", "branch_name": "五股分行" }
    ,
    { "id": "4271", "head_code": "807", "branch_code": "1538", "branch_name": "大安分行" }
    ,
    { "id": "4272", "head_code": "807", "branch_code": "1549", "branch_name": "東湖分行" }
    ,
    { "id": "4273", "head_code": "807", "branch_code": "1550", "branch_name": "華江分行" }
    ,
    { "id": "4274", "head_code": "807", "branch_code": "1561", "branch_name": "北三重分行" }
    ,
    { "id": "4275", "head_code": "807", "branch_code": "1572", "branch_name": "蘭雅分行" }
    ,
    { "id": "4276", "head_code": "807", "branch_code": "1583", "branch_name": "德惠分行" }
    ,
    { "id": "4277", "head_code": "807", "branch_code": "1594", "branch_name": "迴龍分行" }
    ,
    { "id": "4278", "head_code": "807", "branch_code": "1608", "branch_name": "仁愛分行" }
    ,
    { "id": "4279", "head_code": "807", "branch_code": "1620", "branch_name": "和平分行" }
    ,
    { "id": "4280", "head_code": "807", "branch_code": "1642", "branch_name": "重新分行" }
    ,
    { "id": "4281", "head_code": "807", "branch_code": "1653", "branch_name": "中興分行" }
    ,
    { "id": "4282", "head_code": "807", "branch_code": "1664", "branch_name": "海山分行" }
    ,
    { "id": "4283", "head_code": "807", "branch_code": "1697", "branch_name": "南蘆洲分行" }
    ,
    { "id": "4284", "head_code": "807", "branch_code": "1701", "branch_name": "員山分行" }
    ,
    { "id": "4285", "head_code": "807", "branch_code": "1712", "branch_name": "民安分行" }
    ,
    { "id": "4286", "head_code": "807", "branch_code": "1723", "branch_name": "苓雅分行" }
    ,
    { "id": "4287", "head_code": "807", "branch_code": "1734", "branch_name": "鶯桃分行" }
    ,
    { "id": "4288", "head_code": "807", "branch_code": "1745", "branch_name": "溪州分行" }
    ,
    { "id": "4289", "head_code": "807", "branch_code": "1756", "branch_name": "泰山分行" }
    ,
    { "id": "4290", "head_code": "807", "branch_code": "1767", "branch_name": "汀州分行" }
    ,
    { "id": "4291", "head_code": "807", "branch_code": "1778", "branch_name": "南港分行" }
    ,
    { "id": "4292", "head_code": "807", "branch_code": "1789", "branch_name": "深坑分行" }
    ,
    { "id": "4293", "head_code": "807", "branch_code": "1790", "branch_name": "南崁分行" }
    ,
    { "id": "4294", "head_code": "807", "branch_code": "1804", "branch_name": "北台南分行" }
    ,
    { "id": "4295", "head_code": "807", "branch_code": "1815", "branch_name": "西屯分行" }
    ,
    { "id": "4296", "head_code": "807", "branch_code": "1826", "branch_name": "汐止樟樹分行" }
    ,
    { "id": "4297", "head_code": "807", "branch_code": "1837", "branch_name": "濟南路分行" }
    ,
    { "id": "4298", "head_code": "807", "branch_code": "1848", "branch_name": "淡水分行" }
    ,
    { "id": "4299", "head_code": "807", "branch_code": "1859", "branch_name": "南桃園分行" }
    ,
    { "id": "4300", "head_code": "807", "branch_code": "1860", "branch_name": "竹科分行" }
    ,
    { "id": "4301", "head_code": "807", "branch_code": "1871", "branch_name": "員林分行" }
    ,
    { "id": "4302", "head_code": "807", "branch_code": "1882", "branch_name": "林口分行" }
    ,
    { "id": "4303", "head_code": "807", "branch_code": "1893", "branch_name": "內壢分行" }
    ,
    { "id": "4304", "head_code": "807", "branch_code": "1907", "branch_name": "重慶北路分行" }
    ,
    { "id": "4305", "head_code": "807", "branch_code": "1918", "branch_name": "新湖分行" }
    ,
    { "id": "4306", "head_code": "807", "branch_code": "1929", "branch_name": "觀音分行" }
    ,
    { "id": "4307", "head_code": "807", "branch_code": "1930", "branch_name": "湖口分行" }
    ,
    { "id": "4308", "head_code": "807", "branch_code": "1963", "branch_name": "湯城簡易型分行" }
    ,
    { "id": "4309", "head_code": "807", "branch_code": "9006", "branch_name": "加州遠東蒙特瑞公園市分行" }
    ,
    { "id": "4310", "head_code": "807", "branch_code": "9011", "branch_name": "加州遠東北京分行" }
    ,
    { "id": "4311", "head_code": "807", "branch_code": "9017", "branch_name": "香港代表辦事處" }
    ,
    { "id": "4312", "head_code": "807", "branch_code": "9028", "branch_name": "越南代表辦事處" }
    ,
    { "id": "4313", "head_code": "807", "branch_code": "9039", "branch_name": "美國加州遠東國家銀行" }
    ,
    { "id": "4314", "head_code": "807", "branch_code": "9040", "branch_name": "洛杉磯分行" }
    ,
    { "id": "4315", "head_code": "807", "branch_code": "9051", "branch_name": "香港華信財務有限公司（）" }
    ,
    { "id": "4316", "head_code": "808", "branch_code": "15", "branch_name": "營業部" }
    ,
    { "id": "4317", "head_code": "808", "branch_code": "26", "branch_name": "南京東路分行" }
    ,
    { "id": "4318", "head_code": "808", "branch_code": "37", "branch_name": "審查部" }
    ,
    { "id": "4319", "head_code": "808", "branch_code": "48", "branch_name": "城東分行" }
    ,
    { "id": "4320", "head_code": "808", "branch_code": "59", "branch_name": "新莊分行" }
    ,
    { "id": "4321", "head_code": "808", "branch_code": "60", "branch_name": "新竹分行" }
    ,
    { "id": "4322", "head_code": "808", "branch_code": "71", "branch_name": "嘉義分行" }
    ,
    { "id": "4323", "head_code": "808", "branch_code": "82", "branch_name": "高雄分行" }
    ,
    { "id": "4324", "head_code": "808", "branch_code": "93", "branch_name": "信託部" }
    ,
    { "id": "4325", "head_code": "808", "branch_code": "107", "branch_name": "國外部" }
    ,
    { "id": "4326", "head_code": "808", "branch_code": "118", "branch_name": "信義分行" }
    ,
    { "id": "4327", "head_code": "808", "branch_code": "129", "branch_name": "雙和分行" }
    ,
    { "id": "4328", "head_code": "808", "branch_code": "130", "branch_name": "中壢分行" }
    ,
    { "id": "4329", "head_code": "808", "branch_code": "141", "branch_name": "台中分行" }
    ,
    { "id": "4330", "head_code": "808", "branch_code": "152", "branch_name": "台南分行" }
    ,
    { "id": "4331", "head_code": "808", "branch_code": "163", "branch_name": "天母分行" }
    ,
    { "id": "4332", "head_code": "808", "branch_code": "174", "branch_name": "板橋分行" }
    ,
    { "id": "4333", "head_code": "808", "branch_code": "185", "branch_name": "桃園分行" }
    ,
    { "id": "4334", "head_code": "808", "branch_code": "196", "branch_name": "前鎮分行" }
    ,
    { "id": "4335", "head_code": "808", "branch_code": "200", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4336", "head_code": "808", "branch_code": "211", "branch_name": "民生分行" }
    ,
    { "id": "4337", "head_code": "808", "branch_code": "222", "branch_name": "大里分行" }
    ,
    { "id": "4338", "head_code": "808", "branch_code": "233", "branch_name": "永康分行" }
    ,
    { "id": "4339", "head_code": "808", "branch_code": "244", "branch_name": "鳳山分行" }
    ,
    { "id": "4340", "head_code": "808", "branch_code": "255", "branch_name": "三重分行" }
    ,
    { "id": "4341", "head_code": "808", "branch_code": "266", "branch_name": "土城分行" }
    ,
    { "id": "4342", "head_code": "808", "branch_code": "277", "branch_name": "八德分行" }
    ,
    { "id": "4343", "head_code": "808", "branch_code": "288", "branch_name": "大墩分行" }
    ,
    { "id": "4344", "head_code": "808", "branch_code": "299", "branch_name": "七賢分行" }
    ,
    { "id": "4345", "head_code": "808", "branch_code": "303", "branch_name": "復興簡易型分行" }
    ,
    { "id": "4346", "head_code": "808", "branch_code": "314", "branch_name": "敦南分行" }
    ,
    { "id": "4347", "head_code": "808", "branch_code": "325", "branch_name": "重新分行" }
    ,
    { "id": "4348", "head_code": "808", "branch_code": "336", "branch_name": "彰化分行" }
    ,
    { "id": "4349", "head_code": "808", "branch_code": "347", "branch_name": "北高雄分行" }
    ,
    { "id": "4350", "head_code": "808", "branch_code": "358", "branch_name": "大雅分行" }
    ,
    { "id": "4351", "head_code": "808", "branch_code": "369", "branch_name": "楊梅分行" }
    ,
    { "id": "4352", "head_code": "808", "branch_code": "370", "branch_name": "樹林分行" }
    ,
    { "id": "4353", "head_code": "808", "branch_code": "381", "branch_name": "豐原分行" }
    ,
    { "id": "4354", "head_code": "808", "branch_code": "392", "branch_name": "斗六分行" }
    ,
    { "id": "4355", "head_code": "808", "branch_code": "406", "branch_name": "長春分行" }
    ,
    { "id": "4356", "head_code": "808", "branch_code": "417", "branch_name": "中山分行" }
    ,
    { "id": "4357", "head_code": "808", "branch_code": "428", "branch_name": "佳里分行" }
    ,
    { "id": "4358", "head_code": "808", "branch_code": "439", "branch_name": "中和分行" }
    ,
    { "id": "4359", "head_code": "808", "branch_code": "440", "branch_name": "竹南分行" }
    ,
    { "id": "4360", "head_code": "808", "branch_code": "451", "branch_name": "羅東分行" }
    ,
    { "id": "4361", "head_code": "808", "branch_code": "462", "branch_name": "內湖分行" }
    ,
    { "id": "4362", "head_code": "808", "branch_code": "473", "branch_name": "壢新分行" }
    ,
    { "id": "4363", "head_code": "808", "branch_code": "484", "branch_name": "板新簡易型分行" }
    ,
    { "id": "4364", "head_code": "808", "branch_code": "495", "branch_name": "光華分行" }
    ,
    { "id": "4365", "head_code": "808", "branch_code": "509", "branch_name": "東嘉義分行" }
    ,
    { "id": "4366", "head_code": "808", "branch_code": "510", "branch_name": "北天母分行" }
    ,
    { "id": "4367", "head_code": "808", "branch_code": "521", "branch_name": "永和簡易型分行" }
    ,
    { "id": "4368", "head_code": "808", "branch_code": "532", "branch_name": "城中分行" }
    ,
    { "id": "4369", "head_code": "808", "branch_code": "543", "branch_name": "五股分行" }
    ,
    { "id": "4370", "head_code": "808", "branch_code": "554", "branch_name": "新店分行" }
    ,
    { "id": "4371", "head_code": "808", "branch_code": "565", "branch_name": "松山分行" }
    ,
    { "id": "4372", "head_code": "808", "branch_code": "576", "branch_name": "和平分行" }
    ,
    { "id": "4373", "head_code": "808", "branch_code": "587", "branch_name": "海山簡易型分行" }
    ,
    { "id": "4374", "head_code": "808", "branch_code": "598", "branch_name": "民權分行" }
    ,
    { "id": "4375", "head_code": "808", "branch_code": "602", "branch_name": "泰山分行" }
    ,
    { "id": "4376", "head_code": "808", "branch_code": "613", "branch_name": "南崁分行" }
    ,
    { "id": "4377", "head_code": "808", "branch_code": "624", "branch_name": "大順分行" }
    ,
    { "id": "4378", "head_code": "808", "branch_code": "635", "branch_name": "左營分行" }
    ,
    { "id": "4379", "head_code": "808", "branch_code": "646", "branch_name": "楠梓分行" }
    ,
    { "id": "4380", "head_code": "808", "branch_code": "657", "branch_name": "士林分行" }
    ,
    { "id": "4381", "head_code": "808", "branch_code": "668", "branch_name": "苓雅分行" }
    ,
    { "id": "4382", "head_code": "808", "branch_code": "679", "branch_name": "三民分行" }
    ,
    { "id": "4383", "head_code": "808", "branch_code": "680", "branch_name": "王山銀行南屯分行" }
    ,
    { "id": "4384", "head_code": "808", "branch_code": "691", "branch_name": "木柵分行" }
    ,
    { "id": "4385", "head_code": "808", "branch_code": "705", "branch_name": "大昌分行" }
    ,
    { "id": "4386", "head_code": "808", "branch_code": "727", "branch_name": "澄清分行" }
    ,
    { "id": "4387", "head_code": "808", "branch_code": "738", "branch_name": "小港分行" }
    ,
    { "id": "4388", "head_code": "808", "branch_code": "749", "branch_name": "北新莊分行" }
    ,
    { "id": "4389", "head_code": "808", "branch_code": "750", "branch_name": "竹北分行" }
    ,
    { "id": "4390", "head_code": "808", "branch_code": "761", "branch_name": "東台南分行" }
    ,
    { "id": "4391", "head_code": "808", "branch_code": "772", "branch_name": "福和分行" }
    ,
    { "id": "4392", "head_code": "808", "branch_code": "783", "branch_name": "基隆分行" }
    ,
    { "id": "4393", "head_code": "808", "branch_code": "794", "branch_name": "岡山分行" }
    ,
    { "id": "4394", "head_code": "808", "branch_code": "808", "branch_name": "連城分行" }
    ,
    { "id": "4395", "head_code": "808", "branch_code": "819", "branch_name": "林園分行" }
    ,
    { "id": "4396", "head_code": "808", "branch_code": "820", "branch_name": "蘆洲分行" }
    ,
    { "id": "4397", "head_code": "808", "branch_code": "831", "branch_name": "後庄分行" }
    ,
    { "id": "4398", "head_code": "808", "branch_code": "853", "branch_name": "東三重分行" }
    ,
    { "id": "4399", "head_code": "808", "branch_code": "864", "branch_name": "北投分行" }
    ,
    { "id": "4400", "head_code": "808", "branch_code": "875", "branch_name": "雙園簡易型分行" }
    ,
    { "id": "4401", "head_code": "808", "branch_code": "886", "branch_name": "林口分行" }
    ,
    { "id": "4402", "head_code": "808", "branch_code": "897", "branch_name": "東湖分行" }
    ,
    { "id": "4403", "head_code": "808", "branch_code": "901", "branch_name": "北新分行" }
    ,
    { "id": "4404", "head_code": "808", "branch_code": "912", "branch_name": "中崙分行" }
    ,
    { "id": "4405", "head_code": "808", "branch_code": "934", "branch_name": "屏東分行" }
    ,
    { "id": "4406", "head_code": "808", "branch_code": "945", "branch_name": "二重分行" }
    ,
    { "id": "4407", "head_code": "808", "branch_code": "956", "branch_name": "潮州分行" }
    ,
    { "id": "4408", "head_code": "808", "branch_code": "967", "branch_name": "大安分行" }
    ,
    { "id": "4409", "head_code": "808", "branch_code": "978", "branch_name": "東港分行" }
    ,
    { "id": "4410", "head_code": "808", "branch_code": "989", "branch_name": "古亭分行" }
    ,
    { "id": "4411", "head_code": "808", "branch_code": "990", "branch_name": "草屯分行" }
    ,
    { "id": "4412", "head_code": "808", "branch_code": "1001", "branch_name": "內埔分行" }
    ,
    { "id": "4413", "head_code": "808", "branch_code": "1012", "branch_name": "迴龍分行" }
    ,
    { "id": "4414", "head_code": "808", "branch_code": "1023", "branch_name": "花蓮分行" }
    ,
    { "id": "4415", "head_code": "808", "branch_code": "1034", "branch_name": "澎湖分行" }
    ,
    { "id": "4416", "head_code": "808", "branch_code": "1045", "branch_name": "三峽分行" }
    ,
    { "id": "4417", "head_code": "808", "branch_code": "1056", "branch_name": "松江分行" }
    ,
    { "id": "4418", "head_code": "808", "branch_code": "1078", "branch_name": "光復分行" }
    ,
    { "id": "4419", "head_code": "808", "branch_code": "1089", "branch_name": "新湖分行" }
    ,
    { "id": "4420", "head_code": "808", "branch_code": "1090", "branch_name": "桃鶯分行" }
    ,
    { "id": "4421", "head_code": "808", "branch_code": "1115", "branch_name": "永安分行" }
    ,
    { "id": "4422", "head_code": "808", "branch_code": "1126", "branch_name": "新豐分行" }
    ,
    { "id": "4423", "head_code": "808", "branch_code": "1148", "branch_name": "泰和分行" }
    ,
    { "id": "4424", "head_code": "808", "branch_code": "9007", "branch_name": "洛杉磯分行" }
    ,
    { "id": "4425", "head_code": "809", "branch_code": "16", "branch_name": "建成分行" }
    ,
    { "id": "4426", "head_code": "809", "branch_code": "27", "branch_name": "忠孝分行" }
    ,
    { "id": "4427", "head_code": "809", "branch_code": "38", "branch_name": "三重分行" }
    ,
    { "id": "4428", "head_code": "809", "branch_code": "49", "branch_name": "台中分行" }
    ,
    { "id": "4429", "head_code": "809", "branch_code": "50", "branch_name": "台南分行" }
    ,
    { "id": "4430", "head_code": "809", "branch_code": "61", "branch_name": "高雄分行" }
    ,
    { "id": "4431", "head_code": "809", "branch_code": "72", "branch_name": "城東分行" }
    ,
    { "id": "4432", "head_code": "809", "branch_code": "83", "branch_name": "信託部" }
    ,
    { "id": "4433", "head_code": "809", "branch_code": "94", "branch_name": "東台北分行" }
    ,
    { "id": "4434", "head_code": "809", "branch_code": "108", "branch_name": "板橋分行" }
    ,
    { "id": "4435", "head_code": "809", "branch_code": "119", "branch_name": "桃園分行" }
    ,
    { "id": "4436", "head_code": "809", "branch_code": "120", "branch_name": "中壢分行" }
    ,
    { "id": "4437", "head_code": "809", "branch_code": "131", "branch_name": "北高雄分行" }
    ,
    { "id": "4438", "head_code": "809", "branch_code": "142", "branch_name": "國外部" }
    ,
    { "id": "4439", "head_code": "809", "branch_code": "153", "branch_name": "新莊分行" }
    ,
    { "id": "4440", "head_code": "809", "branch_code": "164", "branch_name": "中正分行" }
    ,
    { "id": "4441", "head_code": "809", "branch_code": "175", "branch_name": "員林分行" }
    ,
    { "id": "4442", "head_code": "809", "branch_code": "186", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4443", "head_code": "809", "branch_code": "197", "branch_name": "營業部" }
    ,
    { "id": "4444", "head_code": "809", "branch_code": "201", "branch_name": "松江分行" }
    ,
    { "id": "4445", "head_code": "809", "branch_code": "212", "branch_name": "蘆洲分行" }
    ,
    { "id": "4446", "head_code": "809", "branch_code": "223", "branch_name": "鳳山分行" }
    ,
    { "id": "4447", "head_code": "809", "branch_code": "234", "branch_name": "新竹分行" }
    ,
    { "id": "4448", "head_code": "809", "branch_code": "245", "branch_name": "松山分行" }
    ,
    { "id": "4449", "head_code": "809", "branch_code": "256", "branch_name": "土城分行" }
    ,
    { "id": "4450", "head_code": "809", "branch_code": "267", "branch_name": "中和分行" }
    ,
    { "id": "4451", "head_code": "809", "branch_code": "278", "branch_name": "赤崁分行" }
    ,
    { "id": "4452", "head_code": "809", "branch_code": "289", "branch_name": "基隆分行" }
    ,
    { "id": "4453", "head_code": "809", "branch_code": "290", "branch_name": "斗六分行" }
    ,
    { "id": "4454", "head_code": "809", "branch_code": "304", "branch_name": "東門分行" }
    ,
    { "id": "4455", "head_code": "809", "branch_code": "315", "branch_name": "北門簡易型分行" }
    ,
    { "id": "4456", "head_code": "809", "branch_code": "326", "branch_name": "屏東分行" }
    ,
    { "id": "4457", "head_code": "809", "branch_code": "337", "branch_name": "林森簡易型分行" }
    ,
    { "id": "4458", "head_code": "809", "branch_code": "348", "branch_name": "歸仁簡易型分行" }
    ,
    { "id": "4459", "head_code": "809", "branch_code": "359", "branch_name": "海東分行" }
    ,
    { "id": "4460", "head_code": "809", "branch_code": "360", "branch_name": "站前分行" }
    ,
    { "id": "4461", "head_code": "809", "branch_code": "371", "branch_name": "永康分行" }
    ,
    { "id": "4462", "head_code": "809", "branch_code": "382", "branch_name": "天母簡易型分行" }
    ,
    { "id": "4463", "head_code": "809", "branch_code": "393", "branch_name": "新店分行" }
    ,
    { "id": "4464", "head_code": "809", "branch_code": "407", "branch_name": "大安分行" }
    ,
    { "id": "4465", "head_code": "809", "branch_code": "418", "branch_name": "福音分行" }
    ,
    { "id": "4466", "head_code": "809", "branch_code": "429", "branch_name": "苗栗分行" }
    ,
    { "id": "4467", "head_code": "809", "branch_code": "430", "branch_name": "八德分行" }
    ,
    { "id": "4468", "head_code": "809", "branch_code": "441", "branch_name": "草屯分行" }
    ,
    { "id": "4469", "head_code": "809", "branch_code": "452", "branch_name": "花蓮分行" }
    ,
    { "id": "4470", "head_code": "809", "branch_code": "463", "branch_name": "繼光分行" }
    ,
    { "id": "4471", "head_code": "809", "branch_code": "474", "branch_name": "彰化分行" }
    ,
    { "id": "4472", "head_code": "809", "branch_code": "485", "branch_name": "豐原分行" }
    ,
    { "id": "4473", "head_code": "809", "branch_code": "496", "branch_name": "京華簡易型分行" }
    ,
    { "id": "4474", "head_code": "809", "branch_code": "500", "branch_name": "宜蘭簡易型分行" }
    ,
    { "id": "4475", "head_code": "809", "branch_code": "511", "branch_name": "大里簡易型分行" }
    ,
    { "id": "4476", "head_code": "809", "branch_code": "522", "branch_name": "嘉義分行" }
    ,
    { "id": "4477", "head_code": "809", "branch_code": "533", "branch_name": "逢甲分行" }
    ,
    { "id": "4478", "head_code": "809", "branch_code": "544", "branch_name": "新興分行" }
    ,
    { "id": "4479", "head_code": "809", "branch_code": "555", "branch_name": "淡水分行" }
    ,
    { "id": "4480", "head_code": "809", "branch_code": "566", "branch_name": "復興分行" }
    ,
    { "id": "4481", "head_code": "809", "branch_code": "577", "branch_name": "風城分行" }
    ,
    { "id": "4482", "head_code": "809", "branch_code": "588", "branch_name": "南大分行" }
    ,
    { "id": "4483", "head_code": "809", "branch_code": "599", "branch_name": "竹科分行" }
    ,
    { "id": "4484", "head_code": "809", "branch_code": "603", "branch_name": "台北一Ｏ一分行" }
    ,
    { "id": "4485", "head_code": "809", "branch_code": "614", "branch_name": "新生分行" }
    ,
    { "id": "4486", "head_code": "809", "branch_code": "625", "branch_name": "台東簡易型分行" }
    ,
    { "id": "4487", "head_code": "809", "branch_code": "636", "branch_name": "南崁分行" }
    ,
    { "id": "4488", "head_code": "809", "branch_code": "647", "branch_name": "大雅分行" }
    ,
    { "id": "4489", "head_code": "809", "branch_code": "658", "branch_name": "頭份分行" }
    ,
    { "id": "4490", "head_code": "809", "branch_code": "669", "branch_name": "羅東分行" }
    ,
    { "id": "4491", "head_code": "810", "branch_code": "10", "branch_name": "台中分行" }
    ,
    { "id": "4492", "head_code": "810", "branch_code": "21", "branch_name": "忠孝分行" }
    ,
    { "id": "4493", "head_code": "810", "branch_code": "32", "branch_name": "台北分行" }
    ,
    { "id": "4494", "head_code": "810", "branch_code": "43", "branch_name": "高雄分行" }
    ,
    { "id": "4495", "head_code": "810", "branch_code": "54", "branch_name": "桃園分行" }
    ,
    { "id": "4496", "head_code": "810", "branch_code": "65", "branch_name": "豐原分行" }
    ,
    { "id": "4497", "head_code": "810", "branch_code": "76", "branch_name": "林口分行" }
    ,
    { "id": "4498", "head_code": "810", "branch_code": "87", "branch_name": "信託部" }
    ,
    { "id": "4499", "head_code": "810", "branch_code": "98", "branch_name": "台南分行" }
    ,
    { "id": "4500", "head_code": "810", "branch_code": "102", "branch_name": "大安分行" }
    ,
    { "id": "4501", "head_code": "810", "branch_code": "113", "branch_name": "新樹分行" }
    ,
    { "id": "4502", "head_code": "810", "branch_code": "124", "branch_name": "太平分行" }
    ,
    { "id": "4503", "head_code": "810", "branch_code": "135", "branch_name": "中清分行" }
    ,
    { "id": "4504", "head_code": "810", "branch_code": "146", "branch_name": "國外部" }
    ,
    { "id": "4505", "head_code": "810", "branch_code": "157", "branch_name": "三重分行" }
    ,
    { "id": "4506", "head_code": "810", "branch_code": "168", "branch_name": "蘆洲分行" }
    ,
    { "id": "4507", "head_code": "810", "branch_code": "179", "branch_name": "松山分行" }
    ,
    { "id": "4508", "head_code": "810", "branch_code": "180", "branch_name": "中港分行" }
    ,
    { "id": "4509", "head_code": "810", "branch_code": "191", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4510", "head_code": "810", "branch_code": "205", "branch_name": "南高雄分行" }
    ,
    { "id": "4511", "head_code": "810", "branch_code": "216", "branch_name": "汐止分行" }
    ,
    { "id": "4512", "head_code": "810", "branch_code": "227", "branch_name": "城東分行" }
    ,
    { "id": "4513", "head_code": "810", "branch_code": "238", "branch_name": "八德分行" }
    ,
    { "id": "4514", "head_code": "810", "branch_code": "249", "branch_name": "大甲分行" }
    ,
    { "id": "4515", "head_code": "810", "branch_code": "250", "branch_name": "永康分行" }
    ,
    { "id": "4516", "head_code": "810", "branch_code": "261", "branch_name": "板橋分行" }
    ,
    { "id": "4517", "head_code": "810", "branch_code": "272", "branch_name": "中和分行" }
    ,
    { "id": "4518", "head_code": "810", "branch_code": "283", "branch_name": "楠梓分行" }
    ,
    { "id": "4519", "head_code": "810", "branch_code": "294", "branch_name": "民權分行" }
    ,
    { "id": "4520", "head_code": "810", "branch_code": "308", "branch_name": "苓雅分行" }
    ,
    { "id": "4521", "head_code": "810", "branch_code": "319", "branch_name": "五福分行" }
    ,
    { "id": "4522", "head_code": "810", "branch_code": "320", "branch_name": "彰化分行" }
    ,
    { "id": "4523", "head_code": "810", "branch_code": "331", "branch_name": "前鎮分行" }
    ,
    { "id": "4524", "head_code": "810", "branch_code": "342", "branch_name": "斗六分行" }
    ,
    { "id": "4525", "head_code": "810", "branch_code": "353", "branch_name": "鼎強分行" }
    ,
    { "id": "4526", "head_code": "810", "branch_code": "364", "branch_name": "營業部" }
    ,
    { "id": "4527", "head_code": "810", "branch_code": "375", "branch_name": "莒光分行" }
    ,
    { "id": "4528", "head_code": "810", "branch_code": "386", "branch_name": "中壢分行" }
    ,
    { "id": "4529", "head_code": "810", "branch_code": "397", "branch_name": "新竹分行" }
    ,
    { "id": "4530", "head_code": "810", "branch_code": "401", "branch_name": "大同分行" }
    ,
    { "id": "4531", "head_code": "810", "branch_code": "412", "branch_name": "敦南分行" }
    ,
    { "id": "4532", "head_code": "810", "branch_code": "423", "branch_name": "內湖分行" }
    ,
    { "id": "4533", "head_code": "812", "branch_code": "12", "branch_name": "營業部" }
    ,
    { "id": "4534", "head_code": "812", "branch_code": "23", "branch_name": "敦南分行" }
    ,
    { "id": "4535", "head_code": "812", "branch_code": "34", "branch_name": "城東分行" }
    ,
    { "id": "4536", "head_code": "812", "branch_code": "45", "branch_name": "新生分行" }
    ,
    { "id": "4537", "head_code": "812", "branch_code": "56", "branch_name": "新莊分行" }
    ,
    { "id": "4538", "head_code": "812", "branch_code": "67", "branch_name": "桃園分行" }
    ,
    { "id": "4539", "head_code": "812", "branch_code": "78", "branch_name": "台中分行" }
    ,
    { "id": "4540", "head_code": "812", "branch_code": "89", "branch_name": "板橋分行" }
    ,
    { "id": "4541", "head_code": "812", "branch_code": "90", "branch_name": "高雄分行" }
    ,
    { "id": "4542", "head_code": "812", "branch_code": "104", "branch_name": "台南分行" }
    ,
    { "id": "4543", "head_code": "812", "branch_code": "115", "branch_name": "南京東路分行" }
    ,
    { "id": "4544", "head_code": "812", "branch_code": "126", "branch_name": "中壢分行" }
    ,
    { "id": "4545", "head_code": "812", "branch_code": "137", "branch_name": "信託部" }
    ,
    { "id": "4546", "head_code": "812", "branch_code": "148", "branch_name": "國外部" }
    ,
    { "id": "4547", "head_code": "812", "branch_code": "159", "branch_name": "苓雅分行" }
    ,
    { "id": "4548", "head_code": "812", "branch_code": "160", "branch_name": "蘆洲分行" }
    ,
    { "id": "4549", "head_code": "812", "branch_code": "171", "branch_name": "天母分行" }
    ,
    { "id": "4550", "head_code": "812", "branch_code": "182", "branch_name": "大里分行" }
    ,
    { "id": "4551", "head_code": "812", "branch_code": "193", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4552", "head_code": "812", "branch_code": "207", "branch_name": "中和分行" }
    ,
    { "id": "4553", "head_code": "812", "branch_code": "218", "branch_name": "嘉義分行" }
    ,
    { "id": "4554", "head_code": "812", "branch_code": "229", "branch_name": "豐原分行" }
    ,
    { "id": "4555", "head_code": "812", "branch_code": "230", "branch_name": "花蓮分行" }
    ,
    { "id": "4556", "head_code": "812", "branch_code": "241", "branch_name": "新竹分行" }
    ,
    { "id": "4557", "head_code": "812", "branch_code": "252", "branch_name": "七賢分行" }
    ,
    { "id": "4558", "head_code": "812", "branch_code": "263", "branch_name": "信義簡易型分行" }
    ,
    { "id": "4559", "head_code": "812", "branch_code": "274", "branch_name": "北台中分行" }
    ,
    { "id": "4560", "head_code": "812", "branch_code": "285", "branch_name": "三重分行" }
    ,
    { "id": "4561", "head_code": "812", "branch_code": "296", "branch_name": "永福分行" }
    ,
    { "id": "4562", "head_code": "812", "branch_code": "300", "branch_name": "屏東分行" }
    ,
    { "id": "4563", "head_code": "812", "branch_code": "311", "branch_name": "大安簡易型分行" }
    ,
    { "id": "4564", "head_code": "812", "branch_code": "322", "branch_name": "龍潭分行" }
    ,
    { "id": "4565", "head_code": "812", "branch_code": "333", "branch_name": "崇德分行" }
    ,
    { "id": "4566", "head_code": "812", "branch_code": "344", "branch_name": "金華分行" }
    ,
    { "id": "4567", "head_code": "812", "branch_code": "355", "branch_name": "後甲分行" }
    ,
    { "id": "4568", "head_code": "812", "branch_code": "366", "branch_name": "海佃分行" }
    ,
    { "id": "4569", "head_code": "812", "branch_code": "377", "branch_name": "彰化分行" }
    ,
    { "id": "4570", "head_code": "812", "branch_code": "388", "branch_name": "五甲分行" }
    ,
    { "id": "4571", "head_code": "812", "branch_code": "399", "branch_name": "鳳山分行" }
    ,
    { "id": "4572", "head_code": "812", "branch_code": "403", "branch_name": "古亭分行" }
    ,
    { "id": "4573", "head_code": "812", "branch_code": "414", "branch_name": "建橋分行" }
    ,
    { "id": "4574", "head_code": "812", "branch_code": "425", "branch_name": "埔墘簡易型分行" }
    ,
    { "id": "4575", "head_code": "812", "branch_code": "436", "branch_name": "民生簡易型分行" }
    ,
    { "id": "4576", "head_code": "812", "branch_code": "447", "branch_name": "太平分行" }
    ,
    { "id": "4577", "head_code": "812", "branch_code": "458", "branch_name": "和平分行" }
    ,
    { "id": "4578", "head_code": "812", "branch_code": "469", "branch_name": "北高雄分行" }
    ,
    { "id": "4579", "head_code": "812", "branch_code": "470", "branch_name": "南新莊分行" }
    ,
    { "id": "4580", "head_code": "812", "branch_code": "481", "branch_name": "內湖分行" }
    ,
    { "id": "4581", "head_code": "812", "branch_code": "492", "branch_name": "台新國際商業銀永和分行" }
    ,
    { "id": "4582", "head_code": "812", "branch_code": "517", "branch_name": "逢甲分行" }
    ,
    { "id": "4583", "head_code": "812", "branch_code": "528", "branch_name": "竹科分行" }
    ,
    { "id": "4584", "head_code": "812", "branch_code": "539", "branch_name": "北天母簡易型分行" }
    ,
    { "id": "4585", "head_code": "812", "branch_code": "540", "branch_name": "南屯分行" }
    ,
    { "id": "4586", "head_code": "812", "branch_code": "551", "branch_name": "大直簡易型分行" }
    ,
    { "id": "4587", "head_code": "812", "branch_code": "562", "branch_name": "南門簡易型分行" }
    ,
    { "id": "4588", "head_code": "812", "branch_code": "610", "branch_name": "西門分行" }
    ,
    { "id": "4589", "head_code": "812", "branch_code": "621", "branch_name": "敦北分行" }
    ,
    { "id": "4590", "head_code": "812", "branch_code": "632", "branch_name": "忠孝分行" }
    ,
    { "id": "4591", "head_code": "812", "branch_code": "643", "branch_name": "復興分行" }
    ,
    { "id": "4592", "head_code": "812", "branch_code": "654", "branch_name": "板南分行" }
    ,
    { "id": "4593", "head_code": "812", "branch_code": "665", "branch_name": "民權分行" }
    ,
    { "id": "4594", "head_code": "812", "branch_code": "676", "branch_name": "五福分行" }
    ,
    { "id": "4595", "head_code": "812", "branch_code": "687", "branch_name": "建北分行" }
    ,
    { "id": "4596", "head_code": "812", "branch_code": "698", "branch_name": "三和分行" }
    ,
    { "id": "4597", "head_code": "812", "branch_code": "702", "branch_name": "東港分行" }
    ,
    { "id": "4598", "head_code": "812", "branch_code": "713", "branch_name": "府城分行" }
    ,
    { "id": "4599", "head_code": "812", "branch_code": "724", "branch_name": "東高雄分行" }
    ,
    { "id": "4600", "head_code": "812", "branch_code": "735", "branch_name": "基隆路分行" }
    ,
    { "id": "4601", "head_code": "812", "branch_code": "746", "branch_name": "新店分行" }
    ,
    { "id": "4602", "head_code": "812", "branch_code": "757", "branch_name": "縣府分行" }
    ,
    { "id": "4603", "head_code": "812", "branch_code": "768", "branch_name": "西台中分行" }
    ,
    { "id": "4604", "head_code": "812", "branch_code": "779", "branch_name": "延平分行" }
    ,
    { "id": "4605", "head_code": "812", "branch_code": "780", "branch_name": "南壢分行" }
    ,
    { "id": "4606", "head_code": "812", "branch_code": "791", "branch_name": "景平分行" }
    ,
    { "id": "4607", "head_code": "812", "branch_code": "805", "branch_name": "文心分行" }
    ,
    { "id": "4608", "head_code": "812", "branch_code": "816", "branch_name": "岡山分行" }
    ,
    { "id": "4609", "head_code": "812", "branch_code": "827", "branch_name": "台北分行" }
    ,
    { "id": "4610", "head_code": "812", "branch_code": "838", "branch_name": "大雅分行" }
    ,
    { "id": "4611", "head_code": "812", "branch_code": "849", "branch_name": "汐止分行" }
    ,
    { "id": "4612", "head_code": "812", "branch_code": "850", "branch_name": "南屏分行" }
    ,
    { "id": "4613", "head_code": "812", "branch_code": "861", "branch_name": "建成分行" }
    ,
    { "id": "4614", "head_code": "812", "branch_code": "872", "branch_name": "永康分行" }
    ,
    { "id": "4615", "head_code": "812", "branch_code": "883", "branch_name": "南松山分行" }
    ,
    { "id": "4616", "head_code": "812", "branch_code": "894", "branch_name": "秀朗分行" }
    ,
    { "id": "4617", "head_code": "812", "branch_code": "908", "branch_name": "東基隆分行" }
    ,
    { "id": "4618", "head_code": "812", "branch_code": "919", "branch_name": "中莊分行" }
    ,
    { "id": "4619", "head_code": "812", "branch_code": "920", "branch_name": "北師分行" }
    ,
    { "id": "4620", "head_code": "812", "branch_code": "931", "branch_name": "佳里分行" }
    ,
    { "id": "4621", "head_code": "812", "branch_code": "942", "branch_name": "江翠分行" }
    ,
    { "id": "4622", "head_code": "812", "branch_code": "953", "branch_name": "台北一Ｏ一簡易型分行" }
    ,
    { "id": "4623", "head_code": "812", "branch_code": "964", "branch_name": "松壽分行" }
    ,
    { "id": "4624", "head_code": "812", "branch_code": "975", "branch_name": "松德分行" }
    ,
    { "id": "4625", "head_code": "812", "branch_code": "986", "branch_name": "北大分行" }
    ,
    { "id": "4626", "head_code": "812", "branch_code": "997", "branch_name": "東門分行" }
    ,
    { "id": "4627", "head_code": "812", "branch_code": "1008", "branch_name": "關東橋分行" }
    ,
    { "id": "4628", "head_code": "812", "branch_code": "1019", "branch_name": "竹北分行" }
    ,
    { "id": "4629", "head_code": "812", "branch_code": "1020", "branch_name": "南寮分行" }
    ,
    { "id": "4630", "head_code": "812", "branch_code": "1031", "branch_name": "南大分行" }
    ,
    { "id": "4631", "head_code": "812", "branch_code": "1042", "branch_name": "員林分行" }
    ,
    { "id": "4632", "head_code": "812", "branch_code": "1053", "branch_name": "民族分行" }
    ,
    { "id": "4633", "head_code": "812", "branch_code": "1064", "branch_name": "右昌分行" }
    ,
    { "id": "4634", "head_code": "812", "branch_code": "1075", "branch_name": "沙鹿分行" }
    ,
    { "id": "4635", "head_code": "812", "branch_code": "1086", "branch_name": "頭份分行" }
    ,
    { "id": "4636", "head_code": "812", "branch_code": "1097", "branch_name": "竹羅東分行" }
    ,
    { "id": "4637", "head_code": "812", "branch_code": "9004", "branch_name": "台新國際商銀香港代表人辦事處" }
    ,
    { "id": "4638", "head_code": "814", "branch_code": "14", "branch_name": "營業部" }
    ,
    { "id": "4639", "head_code": "814", "branch_code": "25", "branch_name": "敦化分行" }
    ,
    { "id": "4640", "head_code": "814", "branch_code": "36", "branch_name": "屏東分行" }
    ,
    { "id": "4641", "head_code": "814", "branch_code": "47", "branch_name": "高雄分行" }
    ,
    { "id": "4642", "head_code": "814", "branch_code": "58", "branch_name": "鳳山分行" }
    ,
    { "id": "4643", "head_code": "814", "branch_code": "69", "branch_name": "台南分行" }
    ,
    { "id": "4644", "head_code": "814", "branch_code": "70", "branch_name": "嘉義分行" }
    ,
    { "id": "4645", "head_code": "814", "branch_code": "81", "branch_name": "台北分行" }
    ,
    { "id": "4646", "head_code": "814", "branch_code": "92", "branch_name": "新莊分行" }
    ,
    { "id": "4647", "head_code": "814", "branch_code": "106", "branch_name": "中壢分行" }
    ,
    { "id": "4648", "head_code": "814", "branch_code": "117", "branch_name": "台中分行" }
    ,
    { "id": "4649", "head_code": "814", "branch_code": "128", "branch_name": "大昌分行" }
    ,
    { "id": "4650", "head_code": "814", "branch_code": "139", "branch_name": "信託部" }
    ,
    { "id": "4651", "head_code": "814", "branch_code": "140", "branch_name": "國外部，國際金融業務分行" }
    ,
    { "id": "4652", "head_code": "814", "branch_code": "151", "branch_name": "新生分行" }
    ,
    { "id": "4653", "head_code": "814", "branch_code": "162", "branch_name": "板橋分行" }
    ,
    { "id": "4654", "head_code": "814", "branch_code": "173", "branch_name": "沙鹿簡易型分行" }
    ,
    { "id": "4655", "head_code": "814", "branch_code": "184", "branch_name": "博愛分行" }
    ,
    { "id": "4656", "head_code": "814", "branch_code": "195", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4657", "head_code": "814", "branch_code": "209", "branch_name": "大同分行" }
    ,
    { "id": "4658", "head_code": "814", "branch_code": "210", "branch_name": "三重簡易型分行" }
    ,
    { "id": "4659", "head_code": "814", "branch_code": "221", "branch_name": "桃園分行" }
    ,
    { "id": "4660", "head_code": "814", "branch_code": "232", "branch_name": "永康分行" }
    ,
    { "id": "4661", "head_code": "814", "branch_code": "243", "branch_name": "右昌分行" }
    ,
    { "id": "4662", "head_code": "814", "branch_code": "254", "branch_name": "前金簡易型分行" }
    ,
    { "id": "4663", "head_code": "814", "branch_code": "265", "branch_name": "五甲簡易型分行" }
    ,
    { "id": "4664", "head_code": "814", "branch_code": "276", "branch_name": "文山簡易型分行" }
    ,
    { "id": "4665", "head_code": "814", "branch_code": "287", "branch_name": "中和分行" }
    ,
    { "id": "4666", "head_code": "814", "branch_code": "298", "branch_name": "新營分行" }
    ,
    { "id": "4667", "head_code": "814", "branch_code": "302", "branch_name": "大和分行" }
    ,
    { "id": "4668", "head_code": "814", "branch_code": "313", "branch_name": "西台南分行" }
    ,
    { "id": "4669", "head_code": "814", "branch_code": "324", "branch_name": "內湖分行" }
    ,
    { "id": "4670", "head_code": "814", "branch_code": "335", "branch_name": "灣裡簡易型分行" }
    ,
    { "id": "4671", "head_code": "814", "branch_code": "346", "branch_name": "安和簡易分行" }
    ,
    { "id": "4672", "head_code": "814", "branch_code": "357", "branch_name": "二重分行" }
    ,
    { "id": "4673", "head_code": "814", "branch_code": "368", "branch_name": "長庚分行" }
    ,
    { "id": "4674", "head_code": "814", "branch_code": "379", "branch_name": "東台南分行" }
    ,
    { "id": "4675", "head_code": "814", "branch_code": "380", "branch_name": "信義分行" }
    ,
    { "id": "4676", "head_code": "814", "branch_code": "391", "branch_name": "新竹分行" }
    ,
    { "id": "4677", "head_code": "814", "branch_code": "405", "branch_name": "汐止分行" }
    ,
    { "id": "4678", "head_code": "814", "branch_code": "416", "branch_name": "天母分行" }
    ,
    { "id": "4679", "head_code": "814", "branch_code": "427", "branch_name": "仁愛簡易型分行" }
    ,
    { "id": "4680", "head_code": "814", "branch_code": "438", "branch_name": "澄清簡易型分行" }
    ,
    { "id": "4681", "head_code": "814", "branch_code": "449", "branch_name": "南屯簡易型分行" }
    ,
    { "id": "4682", "head_code": "814", "branch_code": "450", "branch_name": "永和簡易型分行" }
    ,
    { "id": "4683", "head_code": "814", "branch_code": "461", "branch_name": "小港簡易型分行" }
    ,
    { "id": "4684", "head_code": "814", "branch_code": "472", "branch_name": "北新竹簡易型分行" }
    ,
    { "id": "4685", "head_code": "814", "branch_code": "483", "branch_name": "北桃園分行" }
    ,
    { "id": "4686", "head_code": "814", "branch_code": "494", "branch_name": "永春簡易型分行" }
    ,
    { "id": "4687", "head_code": "814", "branch_code": "508", "branch_name": "圓山簡易型分行" }
    ,
    { "id": "4688", "head_code": "814", "branch_code": "519", "branch_name": "豐原簡易型分行" }
    ,
    { "id": "4689", "head_code": "814", "branch_code": "520", "branch_name": "彰化簡易型分行" }
    ,
    { "id": "4690", "head_code": "814", "branch_code": "531", "branch_name": "北高雄簡易型分行" }
    ,
    { "id": "4691", "head_code": "814", "branch_code": "542", "branch_name": "大里分行" }
    ,
    { "id": "4692", "head_code": "814", "branch_code": "553", "branch_name": "北台中簡易型分行" }
    ,
    { "id": "4693", "head_code": "814", "branch_code": "564", "branch_name": "中屏簡易型分行" }
    ,
    { "id": "4694", "head_code": "815", "branch_code": "15", "branch_name": "營業部" }
    ,
    { "id": "4695", "head_code": "815", "branch_code": "26", "branch_name": "松江分行" }
    ,
    { "id": "4696", "head_code": "815", "branch_code": "37", "branch_name": "延平分行" }
    ,
    { "id": "4697", "head_code": "815", "branch_code": "48", "branch_name": "內湖分行" }
    ,
    { "id": "4698", "head_code": "815", "branch_code": "59", "branch_name": "桃園分行" }
    ,
    { "id": "4699", "head_code": "815", "branch_code": "60", "branch_name": "台中分行" }
    ,
    { "id": "4700", "head_code": "815", "branch_code": "71", "branch_name": "台南分行" }
    ,
    { "id": "4701", "head_code": "815", "branch_code": "82", "branch_name": "信託部" }
    ,
    { "id": "4702", "head_code": "815", "branch_code": "93", "branch_name": "高雄分行" }
    ,
    { "id": "4703", "head_code": "815", "branch_code": "107", "branch_name": "新莊分行" }
    ,
    { "id": "4704", "head_code": "815", "branch_code": "118", "branch_name": "中壢分行" }
    ,
    { "id": "4705", "head_code": "815", "branch_code": "129", "branch_name": "松山分行" }
    ,
    { "id": "4706", "head_code": "815", "branch_code": "130", "branch_name": "松南分行" }
    ,
    { "id": "4707", "head_code": "815", "branch_code": "141", "branch_name": "八德分行" }
    ,
    { "id": "4708", "head_code": "815", "branch_code": "152", "branch_name": "國外部" }
    ,
    { "id": "4709", "head_code": "815", "branch_code": "163", "branch_name": "板橋分行" }
    ,
    { "id": "4710", "head_code": "815", "branch_code": "174", "branch_name": "信義分行" }
    ,
    { "id": "4711", "head_code": "815", "branch_code": "185", "branch_name": "苓雅分行" }
    ,
    { "id": "4712", "head_code": "815", "branch_code": "196", "branch_name": "前金分行" }
    ,
    { "id": "4713", "head_code": "815", "branch_code": "200", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4714", "head_code": "815", "branch_code": "211", "branch_name": "嘉義分行" }
    ,
    { "id": "4715", "head_code": "815", "branch_code": "222", "branch_name": "三重分行" }
    ,
    { "id": "4716", "head_code": "815", "branch_code": "233", "branch_name": "北台中分行" }
    ,
    { "id": "4717", "head_code": "815", "branch_code": "244", "branch_name": "雙和分行" }
    ,
    { "id": "4718", "head_code": "815", "branch_code": "255", "branch_name": "士林分行" }
    ,
    { "id": "4719", "head_code": "815", "branch_code": "266", "branch_name": "樹林分行" }
    ,
    { "id": "4720", "head_code": "815", "branch_code": "277", "branch_name": "北桃園分行" }
    ,
    { "id": "4721", "head_code": "815", "branch_code": "288", "branch_name": "新竹分行" }
    ,
    { "id": "4722", "head_code": "815", "branch_code": "299", "branch_name": "敦化分行" }
    ,
    { "id": "4723", "head_code": "815", "branch_code": "303", "branch_name": "三民簡易型分行" }
    ,
    { "id": "4724", "head_code": "815", "branch_code": "314", "branch_name": "新營分行" }
    ,
    { "id": "4725", "head_code": "815", "branch_code": "325", "branch_name": "頭份分行" }
    ,
    { "id": "4726", "head_code": "815", "branch_code": "336", "branch_name": "大里分行" }
    ,
    { "id": "4727", "head_code": "815", "branch_code": "347", "branch_name": "光復簡易型分行" }
    ,
    { "id": "4728", "head_code": "815", "branch_code": "358", "branch_name": "員林分行" }
    ,
    { "id": "4729", "head_code": "815", "branch_code": "369", "branch_name": "虎尾簡易型分行" }
    ,
    { "id": "4730", "head_code": "815", "branch_code": "370", "branch_name": "屏東分行" }
    ,
    { "id": "4731", "head_code": "815", "branch_code": "381", "branch_name": "南門分行" }
    ,
    { "id": "4732", "head_code": "815", "branch_code": "392", "branch_name": "仁愛分行" }
    ,
    { "id": "4733", "head_code": "815", "branch_code": "406", "branch_name": "日盛國際銀行敦北分行" }
    ,
    { "id": "4734", "head_code": "815", "branch_code": "815", "branch_name": "信用卡中心" }
    ,
    { "id": "4735", "head_code": "816", "branch_code": "16", "branch_name": "長安東路分行" }
    ,
    { "id": "4736", "head_code": "816", "branch_code": "27", "branch_name": "信義分行" }
    ,
    { "id": "4737", "head_code": "816", "branch_code": "38", "branch_name": "營業部" }
    ,
    { "id": "4738", "head_code": "816", "branch_code": "49", "branch_name": "敦南分行" }
    ,
    { "id": "4739", "head_code": "816", "branch_code": "50", "branch_name": "桃園分行" }
    ,
    { "id": "4740", "head_code": "816", "branch_code": "61", "branch_name": "新莊分行" }
    ,
    { "id": "4741", "head_code": "816", "branch_code": "72", "branch_name": "台中分行" }
    ,
    { "id": "4742", "head_code": "816", "branch_code": "83", "branch_name": "高雄分行" }
    ,
    { "id": "4743", "head_code": "816", "branch_code": "94", "branch_name": "台南分行" }
    ,
    { "id": "4744", "head_code": "816", "branch_code": "108", "branch_name": "興隆分行" }
    ,
    { "id": "4745", "head_code": "816", "branch_code": "119", "branch_name": "延平分行" }
    ,
    { "id": "4746", "head_code": "816", "branch_code": "120", "branch_name": "中壢分行" }
    ,
    { "id": "4747", "head_code": "816", "branch_code": "131", "branch_name": "板橋分行" }
    ,
    { "id": "4748", "head_code": "816", "branch_code": "142", "branch_name": "豐原分行" }
    ,
    { "id": "4749", "head_code": "816", "branch_code": "153", "branch_name": "前金分行" }
    ,
    { "id": "4750", "head_code": "816", "branch_code": "164", "branch_name": "中和分行" }
    ,
    { "id": "4751", "head_code": "816", "branch_code": "175", "branch_name": "國外部" }
    ,
    { "id": "4752", "head_code": "816", "branch_code": "186", "branch_name": "鳳山分行" }
    ,
    { "id": "4753", "head_code": "816", "branch_code": "197", "branch_name": "松江分行" }
    ,
    { "id": "4754", "head_code": "816", "branch_code": "201", "branch_name": "中崙分行" }
    ,
    { "id": "4755", "head_code": "816", "branch_code": "212", "branch_name": "嘉義分行" }
    ,
    { "id": "4756", "head_code": "816", "branch_code": "223", "branch_name": "三重簡易型分行" }
    ,
    { "id": "4757", "head_code": "816", "branch_code": "234", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4758", "head_code": "816", "branch_code": "245", "branch_name": "沙鹿分行" }
    ,
    { "id": "4759", "head_code": "816", "branch_code": "256", "branch_name": "新竹分行" }
    ,
    { "id": "4760", "head_code": "816", "branch_code": "267", "branch_name": "員林分行" }
    ,
    { "id": "4761", "head_code": "816", "branch_code": "278", "branch_name": "建國分行" }
    ,
    { "id": "4762", "head_code": "816", "branch_code": "289", "branch_name": "北高雄分行" }
    ,
    { "id": "4763", "head_code": "816", "branch_code": "290", "branch_name": "新店分行" }
    ,
    { "id": "4764", "head_code": "816", "branch_code": "304", "branch_name": "和平分行" }
    ,
    { "id": "4765", "head_code": "816", "branch_code": "315", "branch_name": "瑞光分行" }
    ,
    { "id": "4766", "head_code": "816", "branch_code": "326", "branch_name": "通化簡易型分行" }
    ,
    { "id": "4767", "head_code": "816", "branch_code": "337", "branch_name": "南門分行" }
    ,
    { "id": "4768", "head_code": "816", "branch_code": "348", "branch_name": "汀州簡易型分行" }
    ,
    { "id": "4769", "head_code": "816", "branch_code": "359", "branch_name": "農安分行" }
    ,
    { "id": "4770", "head_code": "816", "branch_code": "360", "branch_name": "景美分行" }
    ,
    { "id": "4771", "head_code": "816", "branch_code": "371", "branch_name": "民權分行" }
    ,
    { "id": "4772", "head_code": "816", "branch_code": "382", "branch_name": "松山分行" }
    ,
    { "id": "4773", "head_code": "816", "branch_code": "393", "branch_name": "內湖簡易型分行" }
    ,
    { "id": "4774", "head_code": "816", "branch_code": "407", "branch_name": "忠孝分行" }
    ,
    { "id": "4775", "head_code": "816", "branch_code": "418", "branch_name": "蘆洲分行" }
    ,
    { "id": "4776", "head_code": "816", "branch_code": "429", "branch_name": "永康分行" }
    ,
    { "id": "4777", "head_code": "816", "branch_code": "430", "branch_name": "西壢分行" }
    ,
    { "id": "4778", "head_code": "816", "branch_code": "441", "branch_name": "北桃園簡易型分行" }
    ,
    { "id": "4779", "head_code": "816", "branch_code": "452", "branch_name": "二重分行" }
    ,
    { "id": "4780", "head_code": "816", "branch_code": "463", "branch_name": "天母分行" }
    ,
    { "id": "4781", "head_code": "816", "branch_code": "474", "branch_name": "龍潭簡易型分行" }
    ,
    { "id": "4782", "head_code": "816", "branch_code": "485", "branch_name": "世貿分行" }
    ,
    { "id": "4783", "head_code": "816", "branch_code": "496", "branch_name": "永吉簡易型分行" }
    ,
    { "id": "4784", "head_code": "816", "branch_code": "500", "branch_name": "石牌簡易型分行" }
    ,
    { "id": "4785", "head_code": "816", "branch_code": "511", "branch_name": "八德簡易型分行" }
    ,
    { "id": "4786", "head_code": "816", "branch_code": "522", "branch_name": "竹北簡易型分行" }
    ,
    { "id": "4787", "head_code": "816", "branch_code": "533", "branch_name": "永和分行" }
    ,
    { "id": "4788", "head_code": "816", "branch_code": "544", "branch_name": "西湖簡易型分行" }
    ,
    { "id": "4789", "head_code": "816", "branch_code": "555", "branch_name": "土城簡易型分行" }
    ,
    { "id": "4790", "head_code": "822", "branch_code": "15", "branch_name": "敦北分行" }
    ,
    { "id": "4791", "head_code": "822", "branch_code": "26", "branch_name": "台中分行" }
    ,
    { "id": "4792", "head_code": "822", "branch_code": "37", "branch_name": "高雄分行" }
    ,
    { "id": "4793", "head_code": "822", "branch_code": "48", "branch_name": "個人金融總管理處" }
    ,
    { "id": "4794", "head_code": "822", "branch_code": "59", "branch_name": "台南分行" }
    ,
    { "id": "4795", "head_code": "822", "branch_code": "60", "branch_name": "三重分行" }
    ,
    { "id": "4796", "head_code": "822", "branch_code": "71", "branch_name": "城東分行" }
    ,
    { "id": "4797", "head_code": "822", "branch_code": "82", "branch_name": "嘉義分行" }
    ,
    { "id": "4798", "head_code": "822", "branch_code": "93", "branch_name": "中崙分行" }
    ,
    { "id": "4799", "head_code": "822", "branch_code": "107", "branch_name": "城中分行" }
    ,
    { "id": "4800", "head_code": "822", "branch_code": "118", "branch_name": "三民分行" }
    ,
    { "id": "4801", "head_code": "822", "branch_code": "129", "branch_name": "中壢分行" }
    ,
    { "id": "4802", "head_code": "822", "branch_code": "130", "branch_name": "雙和分行" }
    ,
    { "id": "4803", "head_code": "822", "branch_code": "141", "branch_name": "中山分行" }
    ,
    { "id": "4804", "head_code": "822", "branch_code": "152", "branch_name": "仁愛分行" }
    ,
    { "id": "4805", "head_code": "822", "branch_code": "163", "branch_name": "敦南分行" }
    ,
    { "id": "4806", "head_code": "822", "branch_code": "174", "branch_name": "板橋分行" }
    ,
    { "id": "4807", "head_code": "822", "branch_code": "185", "branch_name": "忠孝分行" }
    ,
    { "id": "4808", "head_code": "822", "branch_code": "196", "branch_name": "新興分行" }
    ,
    { "id": "4809", "head_code": "822", "branch_code": "200", "branch_name": "南京東路分行" }
    ,
    { "id": "4810", "head_code": "822", "branch_code": "211", "branch_name": "信託部" }
    ,
    { "id": "4811", "head_code": "822", "branch_code": "222", "branch_name": "西台南分行" }
    ,
    { "id": "4812", "head_code": "822", "branch_code": "233", "branch_name": "國外營業部" }
    ,
    { "id": "4813", "head_code": "822", "branch_code": "244", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4814", "head_code": "822", "branch_code": "255", "branch_name": "松山分行" }
    ,
    { "id": "4815", "head_code": "822", "branch_code": "266", "branch_name": "新莊分行" }
    ,
    { "id": "4816", "head_code": "822", "branch_code": "277", "branch_name": "桃園分行" }
    ,
    { "id": "4817", "head_code": "822", "branch_code": "288", "branch_name": "中港分行" }
    ,
    { "id": "4818", "head_code": "822", "branch_code": "299", "branch_name": "新竹分行" }
    ,
    { "id": "4819", "head_code": "822", "branch_code": "303", "branch_name": "蘆洲分行" }
    ,
    { "id": "4820", "head_code": "822", "branch_code": "314", "branch_name": "新店分行" }
    ,
    { "id": "4821", "head_code": "822", "branch_code": "325", "branch_name": "員林分行" }
    ,
    { "id": "4822", "head_code": "822", "branch_code": "336", "branch_name": "花蓮分行" }
    ,
    { "id": "4823", "head_code": "822", "branch_code": "347", "branch_name": "公館分行" }
    ,
    { "id": "4824", "head_code": "822", "branch_code": "358", "branch_name": "永康分行" }
    ,
    { "id": "4825", "head_code": "822", "branch_code": "369", "branch_name": "土城分行" }
    ,
    { "id": "4826", "head_code": "822", "branch_code": "370", "branch_name": "中國信託商業銀頭份分行" }
    ,
    { "id": "4827", "head_code": "822", "branch_code": "381", "branch_name": "基隆分行" }
    ,
    { "id": "4828", "head_code": "822", "branch_code": "392", "branch_name": "豐原分行" }
    ,
    { "id": "4829", "head_code": "822", "branch_code": "406", "branch_name": "天母分行" }
    ,
    { "id": "4830", "head_code": "822", "branch_code": "417", "branch_name": "板新分行" }
    ,
    { "id": "4831", "head_code": "822", "branch_code": "428", "branch_name": "彰化分行" }
    ,
    { "id": "4832", "head_code": "822", "branch_code": "439", "branch_name": "東高雄分行" }
    ,
    { "id": "4833", "head_code": "822", "branch_code": "440", "branch_name": "中華分行" }
    ,
    { "id": "4834", "head_code": "822", "branch_code": "451", "branch_name": "內湖分行" }
    ,
    { "id": "4835", "head_code": "822", "branch_code": "462", "branch_name": "斗六分行" }
    ,
    { "id": "4836", "head_code": "822", "branch_code": "473", "branch_name": "文心分行" }
    ,
    { "id": "4837", "head_code": "822", "branch_code": "484", "branch_name": "重陽分行" }
    ,
    { "id": "4838", "head_code": "822", "branch_code": "495", "branch_name": "永吉分行" }
    ,
    { "id": "4839", "head_code": "822", "branch_code": "509", "branch_name": "前鎮簡易型分行" }
    ,
    { "id": "4840", "head_code": "822", "branch_code": "510", "branch_name": "南崁分行" }
    ,
    { "id": "4841", "head_code": "822", "branch_code": "521", "branch_name": "永和簡易型分行" }
    ,
    { "id": "4842", "head_code": "822", "branch_code": "532", "branch_name": "公益分行" }
    ,
    { "id": "4843", "head_code": "822", "branch_code": "543", "branch_name": "市府分行" }
    ,
    { "id": "4844", "head_code": "822", "branch_code": "554", "branch_name": "經國簡易型分行" }
    ,
    { "id": "4845", "head_code": "822", "branch_code": "565", "branch_name": "三多簡易型分行" }
    ,
    { "id": "4846", "head_code": "822", "branch_code": "576", "branch_name": "江翠簡易型分行" }
    ,
    { "id": "4847", "head_code": "822", "branch_code": "587", "branch_name": "東湖簡易型分行" }
    ,
    { "id": "4848", "head_code": "822", "branch_code": "598", "branch_name": "中原簡易型分行" }
    ,
    { "id": "4849", "head_code": "822", "branch_code": "602", "branch_name": "大安分行" }
    ,
    { "id": "4850", "head_code": "822", "branch_code": "613", "branch_name": "北高雄分行" }
    ,
    { "id": "4851", "head_code": "822", "branch_code": "624", "branch_name": "承德分行" }
    ,
    { "id": "4852", "head_code": "822", "branch_code": "635", "branch_name": "復興分行" }
    ,
    { "id": "4853", "head_code": "822", "branch_code": "646", "branch_name": "松江分行" }
    ,
    { "id": "4854", "head_code": "822", "branch_code": "657", "branch_name": "城北分行" }
    ,
    { "id": "4855", "head_code": "822", "branch_code": "668", "branch_name": "萬華分行" }
    ,
    { "id": "4856", "head_code": "822", "branch_code": "679", "branch_name": "西松分行" }
    ,
    { "id": "4857", "head_code": "822", "branch_code": "680", "branch_name": "北投分行" }
    ,
    { "id": "4858", "head_code": "822", "branch_code": "691", "branch_name": "安和分行" }
    ,
    { "id": "4859", "head_code": "822", "branch_code": "705", "branch_name": "台北１０１簡易型分行" }
    ,
    { "id": "4860", "head_code": "822", "branch_code": "716", "branch_name": "瑞光分行" }
    ,
    { "id": "4861", "head_code": "822", "branch_code": "727", "branch_name": "宜蘭分行" }
    ,
    { "id": "4862", "head_code": "822", "branch_code": "738", "branch_name": "民生分行" }
    ,
    { "id": "4863", "head_code": "822", "branch_code": "749", "branch_name": "中和分行" }
    ,
    { "id": "4864", "head_code": "822", "branch_code": "750", "branch_name": "正義分行" }
    ,
    { "id": "4865", "head_code": "822", "branch_code": "761", "branch_name": "丹鳳分行" }
    ,
    { "id": "4866", "head_code": "822", "branch_code": "772", "branch_name": "北新店分行" }
    ,
    { "id": "4867", "head_code": "822", "branch_code": "783", "branch_name": "汐止分行" }
    ,
    { "id": "4868", "head_code": "822", "branch_code": "794", "branch_name": "金城簡易型分行" }
    ,
    { "id": "4869", "head_code": "822", "branch_code": "808", "branch_name": "樹林分行" }
    ,
    { "id": "4870", "head_code": "822", "branch_code": "819", "branch_name": "南勢角簡易型分行" }
    ,
    { "id": "4871", "head_code": "822", "branch_code": "820", "branch_name": "北新莊分行" }
    ,
    { "id": "4872", "head_code": "822", "branch_code": "853", "branch_name": "南桃園分行" }
    ,
    { "id": "4873", "head_code": "822", "branch_code": "864", "branch_name": "北桃園分行" }
    ,
    { "id": "4874", "head_code": "822", "branch_code": "875", "branch_name": "竹科分行" }
    ,
    { "id": "4875", "head_code": "822", "branch_code": "901", "branch_name": "營業部" }
    ,
    { "id": "4876", "head_code": "822", "branch_code": "1012", "branch_name": "八德簡易型分行" }
    ,
    { "id": "4877", "head_code": "822", "branch_code": "1023", "branch_name": "林口簡易型分行" }
    ,
    { "id": "4878", "head_code": "822", "branch_code": "1034", "branch_name": "竹北分行" }
    ,
    { "id": "4879", "head_code": "822", "branch_code": "1045", "branch_name": "南屯分行" }
    ,
    { "id": "4880", "head_code": "822", "branch_code": "1056", "branch_name": "大里分行" }
    ,
    { "id": "4881", "head_code": "822", "branch_code": "1067", "branch_name": "北台中分行" }
    ,
    { "id": "4882", "head_code": "822", "branch_code": "1078", "branch_name": "南投分行" }
    ,
    { "id": "4883", "head_code": "822", "branch_code": "1090", "branch_name": "太平簡易型分行" }
    ,
    { "id": "4884", "head_code": "822", "branch_code": "1104", "branch_name": "中台南分行" }
    ,
    { "id": "4885", "head_code": "822", "branch_code": "1115", "branch_name": "東台南分行" }
    ,
    { "id": "4886", "head_code": "822", "branch_code": "1126", "branch_name": "台東分行" }
    ,
    { "id": "4887", "head_code": "822", "branch_code": "1137", "branch_name": "南台南簡易型分行" }
    ,
    { "id": "4888", "head_code": "822", "branch_code": "1148", "branch_name": "新營分行" }
    ,
    { "id": "4889", "head_code": "822", "branch_code": "1159", "branch_name": "水湳分行" }
    ,
    { "id": "4890", "head_code": "822", "branch_code": "1160", "branch_name": "西屯簡易型分行" }
    ,
    { "id": "4891", "head_code": "822", "branch_code": "1171", "branch_name": "民族分行" }
    ,
    { "id": "4892", "head_code": "822", "branch_code": "1182", "branch_name": "南高雄分行" }
    ,
    { "id": "4893", "head_code": "822", "branch_code": "1193", "branch_name": "九如簡易型分行" }
    ,
    { "id": "4894", "head_code": "822", "branch_code": "1207", "branch_name": "屏東分行" }
    ,
    { "id": "4895", "head_code": "822", "branch_code": "1218", "branch_name": "復北分行" }
    ,
    { "id": "4896", "head_code": "822", "branch_code": "1229", "branch_name": "中國信託商業銀鳳山分行" }
    ,
    { "id": "4897", "head_code": "822", "branch_code": "1230", "branch_name": "五甲分行" }
    ,
    { "id": "4898", "head_code": "822", "branch_code": "1241", "branch_name": "延吉分行" }
    ,
    { "id": "4899", "head_code": "822", "branch_code": "1252", "branch_name": "信義分行" }
    ,
    { "id": "4900", "head_code": "822", "branch_code": "1263", "branch_name": "青年分行" }
    ,
    { "id": "4901", "head_code": "822", "branch_code": "1274", "branch_name": "岡山分行" }
    ,
    { "id": "4902", "head_code": "822", "branch_code": "1285", "branch_name": "士林分行" }
    ,
    { "id": "4903", "head_code": "822", "branch_code": "1296", "branch_name": "新生南路分行" }
    ,
    { "id": "4904", "head_code": "822", "branch_code": "1300", "branch_name": "文山分行" }
    ,
    { "id": "4905", "head_code": "822", "branch_code": "9029", "branch_name": "新德里分行" }
    ,
    { "id": "4906", "head_code": "822", "branch_code": "9030", "branch_name": "亞松森分行" }
    ,
    { "id": "4907", "head_code": "822", "branch_code": "9041", "branch_name": "香港分行" }
    ,
    { "id": "4908", "head_code": "822", "branch_code": "9052", "branch_name": "紐約分行" }
    ,
    { "id": "4909", "head_code": "822", "branch_code": "9063", "branch_name": "東京分行" }
    ,
    { "id": "4910", "head_code": "822", "branch_code": "9915", "branch_name": "菲律賓子行" }
    ,
    { "id": "4911", "head_code": "822", "branch_code": "9926", "branch_name": "加拿大子行" }
    ,
    { "id": "4912", "head_code": "822", "branch_code": "9937", "branch_name": "印尼分行" }
    ,
    { "id": "4913", "head_code": "822", "branch_code": "9948", "branch_name": "美國中信銀子行" }
    ,
    { "id": "4914", "head_code": "825", "branch_code": "29", "branch_name": "業務部" }
    ,
    { "id": "4915", "head_code": "825", "branch_code": "41", "branch_name": "忠孝分行" }
    ,
    { "id": "4916", "head_code": "825", "branch_code": "52", "branch_name": "大同分行" }
    ,
    { "id": "4917", "head_code": "825", "branch_code": "63", "branch_name": "新竹分行" }
    ,
    { "id": "4918", "head_code": "825", "branch_code": "74", "branch_name": "台中分行" }
    ,
    { "id": "4919", "head_code": "825", "branch_code": "85", "branch_name": "嘉義分行" }
    ,
    { "id": "4920", "head_code": "825", "branch_code": "96", "branch_name": "台南分行" }
    ,
    { "id": "4921", "head_code": "825", "branch_code": "100", "branch_name": "高雄分行" }
    ,
    { "id": "4922", "head_code": "825", "branch_code": "122", "branch_name": "審查部" }
    ,
    { "id": "4923", "head_code": "825", "branch_code": "133", "branch_name": "營業部" }
    ,
    { "id": "4924", "head_code": "825", "branch_code": "144", "branch_name": "三重分行" }
    ,
    { "id": "4925", "head_code": "825", "branch_code": "155", "branch_name": "苓雅分行" }
    ,
    { "id": "4926", "head_code": "825", "branch_code": "166", "branch_name": "信義分行" }
    ,
    { "id": "4927", "head_code": "825", "branch_code": "177", "branch_name": "板橋分行" }
    ,
    { "id": "4928", "head_code": "825", "branch_code": "188", "branch_name": "中山分行" }
    ,
    { "id": "4929", "head_code": "825", "branch_code": "199", "branch_name": "中壢分行" }
    ,
    { "id": "4930", "head_code": "825", "branch_code": "203", "branch_name": "松山分行" }
    ,
    { "id": "4931", "head_code": "825", "branch_code": "214", "branch_name": "員林分行" }
    ,
    { "id": "4932", "head_code": "825", "branch_code": "225", "branch_name": "信託部" }
    ,
    { "id": "4933", "head_code": "825", "branch_code": "236", "branch_name": "大安分行" }
    ,
    { "id": "4934", "head_code": "825", "branch_code": "247", "branch_name": "三民分行" }
    ,
    { "id": "4935", "head_code": "825", "branch_code": "258", "branch_name": "國外部" }
    ,
    { "id": "4936", "head_code": "825", "branch_code": "269", "branch_name": "新莊分行" }
    ,
    { "id": "4937", "head_code": "825", "branch_code": "270", "branch_name": "桃園分行" }
    ,
    { "id": "4938", "head_code": "825", "branch_code": "281", "branch_name": "士林分行" }
    ,
    { "id": "4939", "head_code": "825", "branch_code": "292", "branch_name": "文心分行" }
    ,
    { "id": "4940", "head_code": "825", "branch_code": "306", "branch_name": "鳳山分行" }
    ,
    { "id": "4941", "head_code": "825", "branch_code": "317", "branch_name": "永康分行" }
    ,
    { "id": "4942", "head_code": "825", "branch_code": "328", "branch_name": "國際金融業務分行" }
    ,
    { "id": "4943", "head_code": "825", "branch_code": "339", "branch_name": "新店分行" }
    ,
    { "id": "4944", "head_code": "825", "branch_code": "340", "branch_name": "民生分行" }
    ,
    { "id": "4945", "head_code": "825", "branch_code": "351", "branch_name": "南投分行" }
    ,
    { "id": "4946", "head_code": "825", "branch_code": "362", "branch_name": "中和分行" }
    ,
    { "id": "4947", "head_code": "825", "branch_code": "373", "branch_name": "大里分行" }
    ,
    { "id": "4948", "head_code": "825", "branch_code": "384", "branch_name": "彰化分行" }
    ,
    { "id": "4949", "head_code": "825", "branch_code": "395", "branch_name": "草屯分行" }
    ,
    { "id": "4950", "head_code": "825", "branch_code": "409", "branch_name": "南門分行" }
    ,
    { "id": "4951", "head_code": "825", "branch_code": "410", "branch_name": "北桃園分行" }
    ,
    { "id": "4952", "head_code": "825", "branch_code": "421", "branch_name": "土城分行" }
    ,
    { "id": "4953", "head_code": "825", "branch_code": "9088", "branch_name": "信用卡部" }
    ,
    { "id": "4954", "head_code": "825", "branch_code": "9125", "branch_name": "個人貸款部" }
    ,
    { "id": "4955", "head_code": "825", "branch_code": "9217", "branch_name": "北區作業中心" }
    ,
    { "id": "4956", "head_code": "825", "branch_code": "9228", "branch_name": "中區作業中心" }
    ,
    { "id": "4957", "head_code": "825", "branch_code": "9239", "branch_name": "南區作業中心" }
    ,
    { "id": "4958", "head_code": "825", "branch_code": "9963", "branch_name": "越南胡志明分行" }
    ,
    { "id": "4959", "head_code": "825", "branch_code": "9974", "branch_name": "越南河內分行" }
    ,
    { "id": "4960", "head_code": "901", "branch_code": "15", "branch_name": "信用部" }
    ,
    { "id": "4961", "head_code": "901", "branch_code": "26", "branch_name": "內新分部" }
    ,
    { "id": "4962", "head_code": "901", "branch_code": "37", "branch_name": "草湖分部" }
    ,
    { "id": "4963", "head_code": "901", "branch_code": "48", "branch_name": "健民分部" }
    ,
    { "id": "4964", "head_code": "901", "branch_code": "59", "branch_name": "東榮分部" }
    ,
    { "id": "4965", "head_code": "901", "branch_code": "60", "branch_name": "金城分部" }
    ,
    { "id": "4966", "head_code": "901", "branch_code": "71", "branch_name": "十九甲分部" }
    ,
    { "id": "4967", "head_code": "901", "branch_code": "93", "branch_name": "仁化分部" }
    ,
    { "id": "4968", "head_code": "901", "branch_code": "107", "branch_name": "喬城分部" }
    ,
    { "id": "4969", "head_code": "901", "branch_code": "118", "branch_name": "成功分部" }
    ,
    { "id": "4970", "head_code": "903", "branch_code": "109", "branch_name": "信用部" }
    ,
    { "id": "4971", "head_code": "903", "branch_code": "110", "branch_name": "社后分部" }
    ,
    { "id": "4972", "head_code": "903", "branch_code": "121", "branch_name": "橫科分部" }
    ,
    { "id": "4973", "head_code": "903", "branch_code": "132", "branch_name": "白雲分部" }
    ,
    { "id": "4974", "head_code": "903", "branch_code": "143", "branch_name": "大新分部" }
    ,
    { "id": "4975", "head_code": "903", "branch_code": "154", "branch_name": "中興分部" }
    ,
    { "id": "4976", "head_code": "903", "branch_code": "165", "branch_name": "中正分部" }
    ,
    { "id": "4977", "head_code": "903", "branch_code": "176", "branch_name": "樟樹分部" }
    ,
    { "id": "4978", "head_code": "903", "branch_code": "187", "branch_name": "大同分部" }
    ,
    { "id": "4979", "head_code": "904", "branch_code": "18", "branch_name": "信用部" }
    ,
    { "id": "4980", "head_code": "904", "branch_code": "29", "branch_name": "丹鳳分部" }
    ,
    { "id": "4981", "head_code": "904", "branch_code": "30", "branch_name": "頭前分部" }
    ,
    { "id": "4982", "head_code": "904", "branch_code": "63", "branch_name": "西盛分部" }
    ,
    { "id": "4983", "head_code": "904", "branch_code": "74", "branch_name": "中港分部" }
    ,
    { "id": "4984", "head_code": "904", "branch_code": "85", "branch_name": "後港分部" }
    ,
    { "id": "4985", "head_code": "904", "branch_code": "96", "branch_name": "營盤分部" }
    ,
    { "id": "4986", "head_code": "904", "branch_code": "100", "branch_name": "瓊林分部" }
    ,
    { "id": "4987", "head_code": "904", "branch_code": "111", "branch_name": "思源分部" }
    ,
    { "id": "4988", "head_code": "904", "branch_code": "122", "branch_name": "新泰分部" }
    ,
    { "id": "4989", "head_code": "912", "branch_code": "86", "branch_name": "信用部" }
    ,
    { "id": "4990", "head_code": "912", "branch_code": "189", "branch_name": "羅東分部" }
    ,
    { "id": "4991", "head_code": "912", "branch_code": "190", "branch_name": "順安分部" }
    ,
    { "id": "4992", "head_code": "912", "branch_code": "271", "branch_name": "廣興分部" }
    ,
    { "id": "4993", "head_code": "912", "branch_code": "488", "branch_name": "南興分部" }
    ,
    { "id": "4994", "head_code": "913", "branch_code": "76", "branch_name": "信用部" }
    ,
    { "id": "4995", "head_code": "913", "branch_code": "157", "branch_name": "利澤分部" }
    ,
    { "id": "4996", "head_code": "913", "branch_code": "168", "branch_name": "二結分部" }
    ,
    { "id": "4997", "head_code": "913", "branch_code": "179", "branch_name": "四結分部" }
    ,
    { "id": "4998", "head_code": "916", "branch_code": "24", "branch_name": "信用部" }
    ,
    { "id": "4999", "head_code": "916", "branch_code": "183", "branch_name": "雙冬分部" }
    ,
    { "id": "5000", "head_code": "916", "branch_code": "493", "branch_name": "南埔分部" }
    ,
    { "id": "5001", "head_code": "916", "branch_code": "600", "branch_name": "芬草路分部" }
    ,
    { "id": "5002", "head_code": "916", "branch_code": "611", "branch_name": "虎山分部" }
    ,
    { "id": "5003", "head_code": "916", "branch_code": "677", "branch_name": "北勢分部" }
    ,
    { "id": "5004", "head_code": "916", "branch_code": "688", "branch_name": "富寮分部" }
    ,
    { "id": "5005", "head_code": "916", "branch_code": "758", "branch_name": "新庄分部" }
    ,
    { "id": "5006", "head_code": "922", "branch_code": "12", "branch_name": "（原安南分部）" }
    ,
    { "id": "5007", "head_code": "922", "branch_code": "23", "branch_name": "成功分部（原本會）" }
    ,
    { "id": "5008", "head_code": "922", "branch_code": "34", "branch_name": "信用部南東北區聯合分部" }
    ,
    { "id": "5009", "head_code": "922", "branch_code": "56", "branch_name": "安順分部" }
    ,
    { "id": "5010", "head_code": "922", "branch_code": "67", "branch_name": "和順分部" }
    ,
    { "id": "5011", "head_code": "922", "branch_code": "78", "branch_name": "土城分部" }
    ,
    { "id": "5012", "head_code": "922", "branch_code": "89", "branch_name": "灣裡分部" }
    ,
    { "id": "5013", "head_code": "928", "branch_code": "18", "branch_name": "信用部" }
    ,
    { "id": "5014", "head_code": "928", "branch_code": "29", "branch_name": "後埔分部" }
    ,
    { "id": "5015", "head_code": "928", "branch_code": "30", "branch_name": "埔墘分部" }
    ,
    { "id": "5016", "head_code": "928", "branch_code": "41", "branch_name": "社後分部" }
    ,
    { "id": "5017", "head_code": "928", "branch_code": "52", "branch_name": "江翠分部" }
    ,
    { "id": "5018", "head_code": "928", "branch_code": "63", "branch_name": "溪崑分部" }
    ,
    { "id": "5019", "head_code": "928", "branch_code": "74", "branch_name": "浮洲分部" }
    ,
    { "id": "5020", "head_code": "928", "branch_code": "111", "branch_name": "新埔分部" }
    ,
    { "id": "5021", "head_code": "928", "branch_code": "122", "branch_name": "文化分部" }
    ,
    { "id": "5022", "head_code": "954", "branch_code": "105", "branch_name": "宜蘭縣礁溪鄉農會信用部" }
    ,
    { "id": "5023", "head_code": "954", "branch_code": "116", "branch_name": "宜蘭縣礁溪鄉農會四結分部" }
    ,
    { "id": "5024", "head_code": "954", "branch_code": "127", "branch_name": "宜蘭縣礁溪鄉農會龍潭分部" }
    ,
    { "id": "5025", "head_code": "954", "branch_code": "138", "branch_name": "宜蘭縣礁溪鄉農會德陽分部" }
    ,
    { "id": "5026", "head_code": "954", "branch_code": "208", "branch_name": "彰化縣二水鄉農會信用部" }
    ,
    { "id": "5027", "head_code": "954", "branch_code": "301", "branch_name": "苗栗縣公館鄉農會信用部" }
    ,
    { "id": "5028", "head_code": "954", "branch_code": "312", "branch_name": "苗栗縣公館鄉農會福基分部" }
    ,
    { "id": "5029", "head_code": "954", "branch_code": "323", "branch_name": "苗栗縣公館鄉農會信用部館中分部" }
    ,
    { "id": "5030", "head_code": "954", "branch_code": "334", "branch_name": "苗栗縣公館鄉農會五谷分部" }
    ,
    { "id": "5031", "head_code": "954", "branch_code": "345", "branch_name": "苗栗縣公館鄉農會鶴岡分部" }
    ,
    { "id": "5032", "head_code": "954", "branch_code": "404", "branch_name": "阿里山鄉農會" }
    ,
    { "id": "5033", "head_code": "954", "branch_code": "415", "branch_name": "阿里山鄉農會中山分部" }
    ,
    { "id": "5034", "head_code": "954", "branch_code": "426", "branch_name": "阿里山鄉農會達邦分部" }
    ,
    { "id": "5035", "head_code": "954", "branch_code": "507", "branch_name": "苗栗縣獅潭鄉農會信用部" }
    ,
    { "id": "5036", "head_code": "954", "branch_code": "518", "branch_name": "苗栗縣獅潭鄉農會汶水分部" }
    ,
    { "id": "5037", "head_code": "954", "branch_code": "600", "branch_name": "台中縣大安鄉農會信用部" }
    ,
    { "id": "5038", "head_code": "954", "branch_code": "611", "branch_name": "台中縣大安鄉農會海墘分部" }
    ,
    { "id": "5039", "head_code": "954", "branch_code": "622", "branch_name": "台中縣大安鄉農會松雅分部" }
    ,
    { "id": "5040", "head_code": "954", "branch_code": "703", "branch_name": "苗栗縣南龍區漁會信用部" }
    ,
    { "id": "5041", "head_code": "954", "branch_code": "714", "branch_name": "苗栗縣南龍區漁會竹南分部" }
    ,
    { "id": "5042", "head_code": "954", "branch_code": "806", "branch_name": "台中縣大肚鄉農會信用部" }
    ,
    { "id": "5043", "head_code": "954", "branch_code": "817", "branch_name": "台中縣大肚鄉農會王田分部" }
    ,
    { "id": "5044", "head_code": "954", "branch_code": "828", "branch_name": "台中縣大肚鄉農會福山分部" }
    ,
    { "id": "5045", "head_code": "954", "branch_code": "839", "branch_name": "台中縣大肚鄉農會蔗蔀分部" }
    ,
    { "id": "5046", "head_code": "954", "branch_code": "840", "branch_name": "台中縣大肚鄉農會成功分部" }
    ,
    { "id": "5047", "head_code": "954", "branch_code": "909", "branch_name": "台中縣龍井鄉農會信用部" }
    ,
    { "id": "5048", "head_code": "954", "branch_code": "910", "branch_name": "台中縣龍井鄉農會龍泉分部" }
    ,
    { "id": "5049", "head_code": "954", "branch_code": "921", "branch_name": "台中縣龍井鄉農會龍津分部" }
    ,
    { "id": "5050", "head_code": "954", "branch_code": "932", "branch_name": "台中縣龍井鄉農會新庄分部" }
    ,
    { "id": "5051", "head_code": "954", "branch_code": "943", "branch_name": "台中縣龍井鄉農會國際分部" }
    ,
    { "id": "5052", "head_code": "954", "branch_code": "1009", "branch_name": "苗栗縣卓蘭鎮農會信用部" }
    ,
    { "id": "5053", "head_code": "954", "branch_code": "1102", "branch_name": "苗栗縣竹南鎮農會信用部" }
    ,
    { "id": "5054", "head_code": "954", "branch_code": "1113", "branch_name": "苗栗縣竹南鎮農會中港分部" }
    ,
    { "id": "5055", "head_code": "954", "branch_code": "1124", "branch_name": "苗栗縣竹南鎮農會大埔分部" }
    ,
    { "id": "5056", "head_code": "954", "branch_code": "1135", "branch_name": "竹南鎮農會龍鳳分部" }
    ,
    { "id": "5057", "head_code": "954", "branch_code": "1205", "branch_name": "苗栗縣頭份鎮農會信用部" }
    ,
    { "id": "5058", "head_code": "954", "branch_code": "1216", "branch_name": "苗栗縣頭份鎮農會珊湖分部" }
    ,
    { "id": "5059", "head_code": "954", "branch_code": "1227", "branch_name": "苗栗縣頭份鎮農會上街分部" }
    ,
    { "id": "5060", "head_code": "954", "branch_code": "1238", "branch_name": "苗栗縣頭份鎮農會尖山分部" }
    ,
    { "id": "5061", "head_code": "954", "branch_code": "1249", "branch_name": "苗栗縣頭份鎮農會中山分部" }
    ,
    { "id": "5062", "head_code": "954", "branch_code": "1308", "branch_name": "苗栗縣三灣鄉農會信用部" }
    ,
    { "id": "5063", "head_code": "954", "branch_code": "1401", "branch_name": "苗栗縣造橋鄉農會信用部" }
    ,
    { "id": "5064", "head_code": "954", "branch_code": "1412", "branch_name": "苗栗縣造橋鄉農會大西分部" }
    ,
    { "id": "5065", "head_code": "954", "branch_code": "1423", "branch_name": "苗栗縣造橋鄉農會朝陽分部" }
    ,
    { "id": "5066", "head_code": "954", "branch_code": "1434", "branch_name": "苗栗縣造橋鄉農會龍昇分部" }
    ,
    { "id": "5067", "head_code": "954", "branch_code": "1456", "branch_name": "苗栗縣造橋鄉農會豐湖分部" }
    ,
    { "id": "5068", "head_code": "954", "branch_code": "1504", "branch_name": "苗栗縣頭屋鄉農會信用部" }
    ,
    { "id": "5069", "head_code": "954", "branch_code": "1515", "branch_name": "苗栗縣頭屋鄉農會明德分部" }
    ,
    { "id": "5070", "head_code": "954", "branch_code": "1607", "branch_name": "苗栗縣苗栗市農會信用部" }
    ,
    { "id": "5071", "head_code": "954", "branch_code": "1618", "branch_name": "苗栗縣苗栗市農會北苗辦事處" }
    ,
    { "id": "5072", "head_code": "954", "branch_code": "1629", "branch_name": "苗栗縣苗栗市農會南苗辦事處" }
    ,
    { "id": "5073", "head_code": "954", "branch_code": "1630", "branch_name": "苗栗縣苗栗市農會嘉盛辦事處" }
    ,
    { "id": "5074", "head_code": "954", "branch_code": "1700", "branch_name": "苗栗縣西湖鄉農會信用部" }
    ,
    { "id": "5075", "head_code": "954", "branch_code": "1711", "branch_name": "苗栗縣西湖鄉農會五湖分部" }
    ,
    { "id": "5076", "head_code": "954", "branch_code": "1803", "branch_name": "苗栗縣通霄鎮農會信用部" }
    ,
    { "id": "5077", "head_code": "954", "branch_code": "1814", "branch_name": "苗栗縣通霄鎮農會白沙屯分部" }
    ,
    { "id": "5078", "head_code": "954", "branch_code": "1906", "branch_name": "苗栗縣銅鑼鄉農會信用部" }
    ,
    { "id": "5079", "head_code": "954", "branch_code": "1917", "branch_name": "苗栗縣銅鑼鄉農會中平分部" }
    ,
    { "id": "5080", "head_code": "954", "branch_code": "1928", "branch_name": "苗栗縣銅鑼鄉農會新盛隆分部" }
    ,
    { "id": "5081", "head_code": "954", "branch_code": "2006", "branch_name": "南投縣南投市農會信用部" }
    ,
    { "id": "5082", "head_code": "954", "branch_code": "2017", "branch_name": "南投縣南投市農會內興分部" }
    ,
    { "id": "5083", "head_code": "954", "branch_code": "2028", "branch_name": "南投縣南投市農會永豐分部" }
    ,
    { "id": "5084", "head_code": "954", "branch_code": "2039", "branch_name": "南投縣南投市農會福山分部" }
    ,
    { "id": "5085", "head_code": "954", "branch_code": "2040", "branch_name": "南投縣南投市農會營南分部" }
    ,
    { "id": "5086", "head_code": "954", "branch_code": "2051", "branch_name": "南投縣南投市農會營北分部" }
    ,
    { "id": "5087", "head_code": "954", "branch_code": "2062", "branch_name": "南投縣南投市農會鳳山分部" }
    ,
    { "id": "5088", "head_code": "954", "branch_code": "2109", "branch_name": "南投縣水里鄉農會信用部" }
    ,
    { "id": "5089", "head_code": "954", "branch_code": "2110", "branch_name": "南投縣水里鄉農會上安分部" }
    ,
    { "id": "5090", "head_code": "954", "branch_code": "2121", "branch_name": "南投縣水里鄉農會玉峰分部" }
    ,
    { "id": "5091", "head_code": "954", "branch_code": "2132", "branch_name": "南投縣水里鄉農會民和分部" }
    ,
    { "id": "5092", "head_code": "954", "branch_code": "2202", "branch_name": "南投縣信義鄉農會信用部" }
    ,
    { "id": "5093", "head_code": "954", "branch_code": "2213", "branch_name": "南投縣信義鄉農會和社分部" }
    ,
    { "id": "5094", "head_code": "954", "branch_code": "2224", "branch_name": "南投縣信義鄉農會地利分部" }
    ,
    { "id": "5095", "head_code": "954", "branch_code": "2305", "branch_name": "南投縣集集鎮農會信用部" }
    ,
    { "id": "5096", "head_code": "954", "branch_code": "2316", "branch_name": "南投縣集集鎮農會田寮分部" }
    ,
    { "id": "5097", "head_code": "954", "branch_code": "2408", "branch_name": "南投縣埔里鎮農會信用部" }
    ,
    { "id": "5098", "head_code": "954", "branch_code": "2419", "branch_name": "南投縣埔里鎮農會合成分部" }
    ,
    { "id": "5099", "head_code": "954", "branch_code": "2420", "branch_name": "南投縣埔里鎮農會愛蘭分部" }
    ,
    { "id": "5100", "head_code": "954", "branch_code": "2431", "branch_name": "南投縣埔里鎮農會東興分部" }
    ,
    { "id": "5101", "head_code": "954", "branch_code": "2501", "branch_name": "南投縣中寮鄉農會" }
    ,
    { "id": "5102", "head_code": "954", "branch_code": "2512", "branch_name": "南投縣中寮鄉農會爽文分部" }
    ,
    { "id": "5103", "head_code": "954", "branch_code": "2545", "branch_name": "南投縣中寮鄉農會義和分部" }
    ,
    { "id": "5104", "head_code": "954", "branch_code": "2556", "branch_name": "南投縣中寮鄉農會內城分部" }
    ,
    { "id": "5105", "head_code": "954", "branch_code": "2567", "branch_name": "南投縣中寮鄉永福分部" }
    ,
    { "id": "5106", "head_code": "954", "branch_code": "2604", "branch_name": "南投縣魚池鄉農會信用部" }
    ,
    { "id": "5107", "head_code": "954", "branch_code": "2615", "branch_name": "南投縣魚池鄉農會頭社分部" }
    ,
    { "id": "5108", "head_code": "954", "branch_code": "2626", "branch_name": "南投縣魚池鄉農會日月潭分部" }
    ,
    { "id": "5109", "head_code": "954", "branch_code": "2637", "branch_name": "南投縣魚池鄉農會東光分部" }
    ,
    { "id": "5110", "head_code": "954", "branch_code": "2648", "branch_name": "南投縣魚池鄉農會共和分部" }
    ,
    { "id": "5111", "head_code": "954", "branch_code": "2659", "branch_name": "南投縣魚池鄉農會五城分部" }
    ,
    { "id": "5112", "head_code": "954", "branch_code": "2707", "branch_name": "南投縣國姓鄉農會信用部" }
    ,
    { "id": "5113", "head_code": "954", "branch_code": "2718", "branch_name": "南投縣國姓鄉農會國姓分部" }
    ,
    { "id": "5114", "head_code": "954", "branch_code": "2729", "branch_name": "南投縣國姓鄉農會長流分部" }
    ,
    { "id": "5115", "head_code": "954", "branch_code": "2730", "branch_name": "南投縣國姓鄉農會北山分部" }
    ,
    { "id": "5116", "head_code": "954", "branch_code": "2741", "branch_name": "南投縣國姓鄉農會北港分部" }
    ,
    { "id": "5117", "head_code": "954", "branch_code": "2752", "branch_name": "南投縣國姓鄉農會福龜分部" }
    ,
    { "id": "5118", "head_code": "954", "branch_code": "2763", "branch_name": "南投縣國姓鄉農會南港分部" }
    ,
    { "id": "5119", "head_code": "954", "branch_code": "2800", "branch_name": "南投縣鹿谷鄉農會信用部" }
    ,
    { "id": "5120", "head_code": "954", "branch_code": "2811", "branch_name": "南投縣鹿谷鄉農會廣興分部" }
    ,
    { "id": "5121", "head_code": "954", "branch_code": "2822", "branch_name": "南投縣鹿谷鄉農會初鄉分部" }
    ,
    { "id": "5122", "head_code": "954", "branch_code": "2833", "branch_name": "南投縣鹿谷鄉農會竹林分部" }
    ,
    { "id": "5123", "head_code": "954", "branch_code": "2844", "branch_name": "南投縣鹿谷鄉農會坪頂分部" }
    ,
    { "id": "5124", "head_code": "954", "branch_code": "2855", "branch_name": "南投縣鹿谷鄉農會永隆分部" }
    ,
    { "id": "5125", "head_code": "954", "branch_code": "2866", "branch_name": "南投縣鹿谷鄉農會瑞田分部" }
    ,
    { "id": "5126", "head_code": "954", "branch_code": "2877", "branch_name": "南投縣鹿谷鄉農會鳳凰分部" }
    ,
    { "id": "5127", "head_code": "954", "branch_code": "2903", "branch_name": "南投縣仁愛鄉農會信用部" }
    ,
    { "id": "5128", "head_code": "954", "branch_code": "3003", "branch_name": "苗栗縣苑裡鎮農會信用部" }
    ,
    { "id": "5129", "head_code": "954", "branch_code": "3014", "branch_name": "苗栗縣苑裡鎮農會山腳分部" }
    ,
    { "id": "5130", "head_code": "954", "branch_code": "3025", "branch_name": "苗栗縣苑裡鎮農會社苓分部" }
    ,
    { "id": "5131", "head_code": "954", "branch_code": "3106", "branch_name": "苗栗縣三義鄉農會信用部" }
    ,
    { "id": "5132", "head_code": "954", "branch_code": "3117", "branch_name": "苗栗縣三義鄉農會鯉魚潭分部" }
    ,
    { "id": "5133", "head_code": "954", "branch_code": "3209", "branch_name": "苗栗縣大湖地區農會信用部" }
    ,
    { "id": "5134", "head_code": "954", "branch_code": "3210", "branch_name": "苗栗縣大湖地區農會新開分部" }
    ,
    { "id": "5135", "head_code": "954", "branch_code": "3221", "branch_name": "苗栗縣大湖地區農會南湖分部" }
    ,
    { "id": "5136", "head_code": "954", "branch_code": "3232", "branch_name": "苗栗縣大湖地區農會清安分部" }
    ,
    { "id": "5137", "head_code": "954", "branch_code": "3302", "branch_name": "苗栗縣南庄鄉農會信用部" }
    ,
    { "id": "5138", "head_code": "954", "branch_code": "3313", "branch_name": "苗栗縣南庄鄉農會田美分部" }
    ,
    { "id": "5139", "head_code": "954", "branch_code": "3324", "branch_name": "苗栗縣南庄鄉農會南富分部" }
    ,
    { "id": "5140", "head_code": "954", "branch_code": "3405", "branch_name": "彰化縣線西鄉農會信用部" }
    ,
    { "id": "5141", "head_code": "954", "branch_code": "3508", "branch_name": "台中縣太平市農會信用部" }
    ,
    { "id": "5142", "head_code": "954", "branch_code": "3519", "branch_name": "台中縣太平市農會新光分部" }
    ,
    { "id": "5143", "head_code": "954", "branch_code": "3520", "branch_name": "台中縣太平市農會頭汴分部" }
    ,
    { "id": "5144", "head_code": "954", "branch_code": "3531", "branch_name": "台中縣太平市農會光隆分部" }
    ,
    { "id": "5145", "head_code": "954", "branch_code": "3542", "branch_name": "台中縣太平市農會中山分部" }
    ,
    { "id": "5146", "head_code": "954", "branch_code": "3553", "branch_name": "台中縣太平市農會東平分部" }
    ,
    { "id": "5147", "head_code": "954", "branch_code": "3564", "branch_name": "台中縣太平市農會坪林分部" }
    ,
    { "id": "5148", "head_code": "954", "branch_code": "3601", "branch_name": "花蓮縣花蓮市農會信用部" }
    ,
    { "id": "5149", "head_code": "954", "branch_code": "3612", "branch_name": "花蓮縣花蓮市農會花商分部" }
    ,
    { "id": "5150", "head_code": "954", "branch_code": "3634", "branch_name": "花蓮縣花蓮市農會自強分部" }
    ,
    { "id": "5151", "head_code": "954", "branch_code": "3645", "branch_name": "花蓮縣花蓮市農會美崙分部" }
    ,
    { "id": "5152", "head_code": "954", "branch_code": "3656", "branch_name": "花蓮縣花蓮市農會林森分部" }
    ,
    { "id": "5153", "head_code": "954", "branch_code": "3807", "branch_name": "彰化縣田尾鄉農會信用部" }
    ,
    { "id": "5154", "head_code": "954", "branch_code": "3818", "branch_name": "彰化縣田尾鄉農會溪畔分部" }
    ,
    { "id": "5155", "head_code": "954", "branch_code": "3829", "branch_name": "彰化縣田尾鄉農會福田分部" }
    ,
    { "id": "5156", "head_code": "954", "branch_code": "3830", "branch_name": "彰化縣田尾鄉農會海豐分部" }
    ,
    { "id": "5157", "head_code": "954", "branch_code": "3900", "branch_name": "彰化縣北斗鎮農會信用部" }
    ,
    { "id": "5158", "head_code": "954", "branch_code": "4000", "branch_name": "台中縣大甲鎮農會信用部" }
    ,
    { "id": "5159", "head_code": "954", "branch_code": "4011", "branch_name": "台中縣大甲鎮農會順天分部" }
    ,
    { "id": "5160", "head_code": "954", "branch_code": "4022", "branch_name": "台中縣大甲鎮農會日南分部" }
    ,
    { "id": "5161", "head_code": "954", "branch_code": "4033", "branch_name": "台中縣大甲鎮農會西岐分部" }
    ,
    { "id": "5162", "head_code": "954", "branch_code": "4044", "branch_name": "台中縣大甲鎮農會幼獅社區分部" }
    ,
    { "id": "5163", "head_code": "954", "branch_code": "4055", "branch_name": "台中縣大甲鎮農會庄美分部" }
    ,
    { "id": "5164", "head_code": "954", "branch_code": "4103", "branch_name": "台中縣石岡鄉農會信用部" }
    ,
    { "id": "5165", "head_code": "954", "branch_code": "4114", "branch_name": "台中縣石岡鄉農會和盛分部" }
    ,
    { "id": "5166", "head_code": "954", "branch_code": "4125", "branch_name": "台中縣石岡鄉農會萬興辦事處" }
    ,
    { "id": "5167", "head_code": "954", "branch_code": "4206", "branch_name": "台中縣新社鄉農會信用部" }
    ,
    { "id": "5168", "head_code": "954", "branch_code": "4217", "branch_name": "台中縣新社鄉農會福興分部" }
    ,
    { "id": "5169", "head_code": "954", "branch_code": "4228", "branch_name": "台中縣新社鄉農會中興嶺分部" }
    ,
    { "id": "5170", "head_code": "954", "branch_code": "4309", "branch_name": "台中縣梧棲鎮農會信用部" }
    ,
    { "id": "5171", "head_code": "954", "branch_code": "4310", "branch_name": "台中縣梧棲鎮農會興農分部" }
    ,
    { "id": "5172", "head_code": "954", "branch_code": "4321", "branch_name": "台中縣梧棲鎮農會安寧分部" }
    ,
    { "id": "5173", "head_code": "954", "branch_code": "4332", "branch_name": "台中縣梧棲鎮農會大莊分部" }
    ,
    { "id": "5174", "head_code": "954", "branch_code": "4343", "branch_name": "台中縣梧棲鎮農會南簡分部" }
    ,
    { "id": "5175", "head_code": "954", "branch_code": "4354", "branch_name": "台中縣梧棲鎮農會大村分部" }
    ,
    { "id": "5176", "head_code": "954", "branch_code": "4402", "branch_name": "台中縣后里鄉農會信用部" }
    ,
    { "id": "5177", "head_code": "954", "branch_code": "4413", "branch_name": "台中縣后里鄉農會義里分部" }
    ,
    { "id": "5178", "head_code": "954", "branch_code": "4424", "branch_name": "台中縣后里鄉農會泰安分部" }
    ,
    { "id": "5179", "head_code": "954", "branch_code": "4435", "branch_name": "台中縣后里鄉農會眉山分部" }
    ,
    { "id": "5180", "head_code": "954", "branch_code": "4505", "branch_name": "台中縣清水鎮農會信用部" }
    ,
    { "id": "5181", "head_code": "954", "branch_code": "4516", "branch_name": "台中縣清水鎮農會臨江分部" }
    ,
    { "id": "5182", "head_code": "954", "branch_code": "4527", "branch_name": "台中縣清水鎮農會南社分部" }
    ,
    { "id": "5183", "head_code": "954", "branch_code": "4608", "branch_name": "台中縣霧峰鄉農會信用部" }
    ,
    { "id": "5184", "head_code": "954", "branch_code": "4619", "branch_name": "台中縣霧峰鄉農會北柳分部" }
    ,
    { "id": "5185", "head_code": "954", "branch_code": "4620", "branch_name": "台中縣霧峰鄉農會萬豐分部" }
    ,
    { "id": "5186", "head_code": "954", "branch_code": "4631", "branch_name": "台中縣霧峰鄉農會吉峰分部" }
    ,
    { "id": "5187", "head_code": "954", "branch_code": "4642", "branch_name": "台中縣霧峰鄉農會舊正分部" }
    ,
    { "id": "5188", "head_code": "954", "branch_code": "4653", "branch_name": "台中縣霧峰鄉農會吉峰路分部" }
    ,
    { "id": "5189", "head_code": "954", "branch_code": "4701", "branch_name": "台中縣外埔鄉農會信用部" }
    ,
    { "id": "5190", "head_code": "954", "branch_code": "4712", "branch_name": "台中縣外埔鄉農會土城分部" }
    ,
    { "id": "5191", "head_code": "954", "branch_code": "4723", "branch_name": "台中縣外埔鄉農會大東分部" }
    ,
    { "id": "5192", "head_code": "954", "branch_code": "4804", "branch_name": "台中縣烏日鄉農會信用部" }
    ,
    { "id": "5193", "head_code": "954", "branch_code": "4815", "branch_name": "台中縣烏日鄉農會溪壩分部" }
    ,
    { "id": "5194", "head_code": "954", "branch_code": "4826", "branch_name": "台中縣烏日鄉農會九德分部" }
    ,
    { "id": "5195", "head_code": "954", "branch_code": "4837", "branch_name": "台中縣烏日鄉農會成功分部" }
    ,
    { "id": "5196", "head_code": "954", "branch_code": "4907", "branch_name": "台中縣潭子鄉農會信用部" }
    ,
    { "id": "5197", "head_code": "954", "branch_code": "4918", "branch_name": "台中縣潭子鄉農會頭家分部" }
    ,
    { "id": "5198", "head_code": "954", "branch_code": "4929", "branch_name": "台中縣潭子鄉農會東寶分部" }
    ,
    { "id": "5199", "head_code": "954", "branch_code": "4930", "branch_name": "台中縣潭子鄉農會栗林分部" }
    ,
    { "id": "5200", "head_code": "954", "branch_code": "4941", "branch_name": "台中縣潭子鄉農會甘蔗分部" }
    ,
    { "id": "5201", "head_code": "954", "branch_code": "5007", "branch_name": "彰化縣伸港鄉農會信用部" }
    ,
    { "id": "5202", "head_code": "954", "branch_code": "5100", "branch_name": "彰化縣和美鎮農會信用部" }
    ,
    { "id": "5203", "head_code": "954", "branch_code": "5122", "branch_name": "彰化縣和美鎮農會塗厝分部" }
    ,
    { "id": "5204", "head_code": "954", "branch_code": "5133", "branch_name": "彰化縣和美鎮農會新庄分部" }
    ,
    { "id": "5205", "head_code": "954", "branch_code": "5144", "branch_name": "彰化縣和美鎮農會鎮平分部" }
    ,
    { "id": "5206", "head_code": "954", "branch_code": "5203", "branch_name": "彰化縣花壇鄉農會信用部" }
    ,
    { "id": "5207", "head_code": "954", "branch_code": "5214", "branch_name": "彰化縣花壇鄉農會白沙分部" }
    ,
    { "id": "5208", "head_code": "954", "branch_code": "5225", "branch_name": "彰化縣花壇鄉農會灣雅分部" }
    ,
    { "id": "5209", "head_code": "954", "branch_code": "5236", "branch_name": "彰化縣花壇鄉農會口庄分部" }
    ,
    { "id": "5210", "head_code": "954", "branch_code": "5258", "branch_name": "彰化縣花壇鄉農會長沙分部" }
    ,
    { "id": "5211", "head_code": "954", "branch_code": "5306", "branch_name": "彰化縣福興鄉農會" }
    ,
    { "id": "5212", "head_code": "954", "branch_code": "5409", "branch_name": "彰化縣大村鄉農會信用部" }
    ,
    { "id": "5213", "head_code": "954", "branch_code": "5410", "branch_name": "彰化縣大村鄉農會大村分部" }
    ,
    { "id": "5214", "head_code": "954", "branch_code": "5421", "branch_name": "彰化縣大村鄉農會美港分部" }
    ,
    { "id": "5215", "head_code": "954", "branch_code": "5432", "branch_name": "彰化縣大村鄉農會大西分部" }
    ,
    { "id": "5216", "head_code": "954", "branch_code": "5443", "branch_name": "彰化縣大村鄉農會村東分部" }
    ,
    { "id": "5217", "head_code": "954", "branch_code": "5502", "branch_name": "彰化縣溪湖鎮農會信用部" }
    ,
    { "id": "5218", "head_code": "954", "branch_code": "5605", "branch_name": "彰化縣社頭鄉農會信用部" }
    ,
    { "id": "5219", "head_code": "954", "branch_code": "5616", "branch_name": "彰化縣社頭鄉農會湳雅分部" }
    ,
    { "id": "5220", "head_code": "954", "branch_code": "5627", "branch_name": "彰化縣社頭鄉農會橋頭分部" }
    ,
    { "id": "5221", "head_code": "954", "branch_code": "5638", "branch_name": "彰化縣社頭鄉農會清水分部" }
    ,
    { "id": "5222", "head_code": "954", "branch_code": "5708", "branch_name": "彰化縣大城鄉農會信用部" }
    ,
    { "id": "5223", "head_code": "954", "branch_code": "5719", "branch_name": "彰化縣大城鄉農會西港分部" }
    ,
    { "id": "5224", "head_code": "954", "branch_code": "5801", "branch_name": "彰化縣溪州鄉農會信用部" }
    ,
    { "id": "5225", "head_code": "954", "branch_code": "5812", "branch_name": "彰化縣溪州鄉農會西畔分部" }
    ,
    { "id": "5226", "head_code": "954", "branch_code": "5823", "branch_name": "彰化縣溪州鄉農會大庄分部" }
    ,
    { "id": "5227", "head_code": "954", "branch_code": "5904", "branch_name": "彰化縣田中鎮農會信用部" }
    ,
    { "id": "5228", "head_code": "954", "branch_code": "6004", "branch_name": "南投縣竹山鎮農會信用部" }
    ,
    { "id": "5229", "head_code": "954", "branch_code": "6015", "branch_name": "南投縣竹山鎮農會社寮分部" }
    ,
    { "id": "5230", "head_code": "954", "branch_code": "6026", "branch_name": "南投縣竹山鎮農會瑞竹分部" }
    ,
    { "id": "5231", "head_code": "954", "branch_code": "6037", "branch_name": "南投縣竹山鎮農會延平分部" }
    ,
    { "id": "5232", "head_code": "954", "branch_code": "6048", "branch_name": "南投縣竹山鎮農會中央分部" }
    ,
    { "id": "5233", "head_code": "954", "branch_code": "6107", "branch_name": "雲林縣麥寮鄉農會信用部" }
    ,
    { "id": "5234", "head_code": "954", "branch_code": "6118", "branch_name": "雲林縣麥寮鄉農會橋頭分部" }
    ,
    { "id": "5235", "head_code": "954", "branch_code": "6200", "branch_name": "雲林縣東勢鄉農會信用部" }
    ,
    { "id": "5236", "head_code": "954", "branch_code": "6211", "branch_name": "雲林縣東勢鄉農會新坤分部" }
    ,
    { "id": "5237", "head_code": "954", "branch_code": "6303", "branch_name": "雲林縣土庫鎮農會信用部" }
    ,
    { "id": "5238", "head_code": "954", "branch_code": "6314", "branch_name": "雲林縣土庫鎮農會馬光分部" }
    ,
    { "id": "5239", "head_code": "954", "branch_code": "6325", "branch_name": "雲林縣土庫鎮農會新庄分部" }
    ,
    { "id": "5240", "head_code": "954", "branch_code": "6336", "branch_name": "雲林縣土庫鎮農會埤腳分部" }
    ,
    { "id": "5241", "head_code": "954", "branch_code": "6406", "branch_name": "雲林縣元長鄉農會信用部" }
    ,
    { "id": "5242", "head_code": "954", "branch_code": "6417", "branch_name": "雲林縣元長鄉農會鹿寮分部" }
    ,
    { "id": "5243", "head_code": "954", "branch_code": "6428", "branch_name": "雲林縣元長鄉農會客厝分部" }
    ,
    { "id": "5244", "head_code": "954", "branch_code": "6509", "branch_name": "雲林縣北港鎮農會信用部" }
    ,
    { "id": "5245", "head_code": "954", "branch_code": "6510", "branch_name": "雲林縣北港鎮農會好收分部" }
    ,
    { "id": "5246", "head_code": "954", "branch_code": "6602", "branch_name": "雲林縣水林鄉農會信用部" }
    ,
    { "id": "5247", "head_code": "954", "branch_code": "6613", "branch_name": "雲林縣水林鄉農會蔦松分部" }
    ,
    { "id": "5248", "head_code": "954", "branch_code": "6624", "branch_name": "雲林縣水林鄉農會西井分部" }
    ,
    { "id": "5249", "head_code": "954", "branch_code": "6635", "branch_name": "雲林縣水林鄉農會溪墘分部" }
    ,
    { "id": "5250", "head_code": "954", "branch_code": "6646", "branch_name": "雲林縣水林鄉農會宏仁分部" }
    ,
    { "id": "5251", "head_code": "954", "branch_code": "6705", "branch_name": "嘉義縣中埔鄉農會信用部" }
    ,
    { "id": "5252", "head_code": "954", "branch_code": "6716", "branch_name": "嘉義縣中埔鄉農會三層分部" }
    ,
    { "id": "5253", "head_code": "954", "branch_code": "6727", "branch_name": "嘉義縣中埔鄉農會同仁分部" }
    ,
    { "id": "5254", "head_code": "954", "branch_code": "6738", "branch_name": "嘉義縣中埔鄉農會金蘭分部" }
    ,
    { "id": "5255", "head_code": "954", "branch_code": "6749", "branch_name": "嘉義縣中埔鄉農會隆興分部" }
    ,
    { "id": "5256", "head_code": "954", "branch_code": "6750", "branch_name": "嘉義縣中埔鄉農會和睦分部" }
    ,
    { "id": "5257", "head_code": "954", "branch_code": "6761", "branch_name": "嘉義縣中埔鄉農會沄水分部" }
    ,
    { "id": "5258", "head_code": "954", "branch_code": "6772", "branch_name": "嘉義縣中埔鄉農會和興分部" }
    ,
    { "id": "5259", "head_code": "954", "branch_code": "6783", "branch_name": "嘉義縣中埔鄉農會和美分部" }
    ,
    { "id": "5260", "head_code": "954", "branch_code": "6808", "branch_name": "彰化縣鹿港鎮農會信用部" }
    ,
    { "id": "5261", "head_code": "954", "branch_code": "6819", "branch_name": "彰化縣鹿港鎮農會草港分部" }
    ,
    { "id": "5262", "head_code": "954", "branch_code": "6820", "branch_name": "彰化縣鹿港鎮農會頂番分部" }
    ,
    { "id": "5263", "head_code": "954", "branch_code": "6831", "branch_name": "彰化縣鹿港鎮農會海埔分部" }
    ,
    { "id": "5264", "head_code": "954", "branch_code": "6842", "branch_name": "彰化縣鹿港鎮農會東崎分部" }
    ,
    { "id": "5265", "head_code": "954", "branch_code": "6901", "branch_name": "花蓮縣瑞穗鄉農會信用部" }
    ,
    { "id": "5266", "head_code": "954", "branch_code": "6912", "branch_name": "花蓮縣瑞穗鄉農會富源分部" }
    ,
    { "id": "5267", "head_code": "954", "branch_code": "7001", "branch_name": "台南縣官田鄉農會信用部" }
    ,
    { "id": "5268", "head_code": "954", "branch_code": "7012", "branch_name": "台南縣官田鄉農會西庄分部" }
    ,
    { "id": "5269", "head_code": "954", "branch_code": "7023", "branch_name": "台南縣官田鄉農會官田分部" }
    ,
    { "id": "5270", "head_code": "954", "branch_code": "7034", "branch_name": "台南縣官田鄉農會二鎮分部" }
    ,
    { "id": "5271", "head_code": "954", "branch_code": "7045", "branch_name": "台南縣官田鄉農會渡頭分部" }
    ,
    { "id": "5272", "head_code": "954", "branch_code": "7056", "branch_name": "台南縣官田鄉農會湖山分部" }
    ,
    { "id": "5273", "head_code": "954", "branch_code": "7104", "branch_name": "台南縣大內鄉農會" }
    ,
    { "id": "5274", "head_code": "954", "branch_code": "7115", "branch_name": "台南縣大內鄉農會二溪分部" }
    ,
    { "id": "5275", "head_code": "954", "branch_code": "7126", "branch_name": "台南縣大內鄉農會頭社分部" }
    ,
    { "id": "5276", "head_code": "954", "branch_code": "7137", "branch_name": "台南縣大內鄉農會環湖分部" }
    ,
    { "id": "5277", "head_code": "954", "branch_code": "7207", "branch_name": "台南縣新市鄉農會信用部" }
    ,
    { "id": "5278", "head_code": "954", "branch_code": "7218", "branch_name": "台南縣新市鄉農會大社分部" }
    ,
    { "id": "5279", "head_code": "954", "branch_code": "7229", "branch_name": "台南縣新市鄉農會仁愛分部" }
    ,
    { "id": "5280", "head_code": "954", "branch_code": "7300", "branch_name": "台南縣左鎮鄉農會信用部" }
    ,
    { "id": "5281", "head_code": "954", "branch_code": "7403", "branch_name": "台南縣山上鄉農會信用部" }
    ,
    { "id": "5282", "head_code": "954", "branch_code": "7506", "branch_name": "台南縣柳營鄉農會信用部" }
    ,
    { "id": "5283", "head_code": "954", "branch_code": "7517", "branch_name": "台南縣柳營鄉農會太康分部" }
    ,
    { "id": "5284", "head_code": "954", "branch_code": "7528", "branch_name": "台南縣柳營鄉農會重溪分部" }
    ,
    { "id": "5285", "head_code": "954", "branch_code": "7539", "branch_name": "台南縣柳營鄉農會旭山分部" }
    ,
    { "id": "5286", "head_code": "954", "branch_code": "7540", "branch_name": "台南縣柳營鄉農會果毅分部" }
    ,
    { "id": "5287", "head_code": "954", "branch_code": "7702", "branch_name": "花蓮縣玉溪地區農會信用部" }
    ,
    { "id": "5288", "head_code": "954", "branch_code": "7713", "branch_name": "花蓮縣玉溪地區農會卓溪分部" }
    ,
    { "id": "5289", "head_code": "954", "branch_code": "7724", "branch_name": "花蓮縣玉溪地區農會松浦分部" }
    ,
    { "id": "5290", "head_code": "954", "branch_code": "7805", "branch_name": "台南縣學甲鄉農會信用部" }
    ,
    { "id": "5291", "head_code": "954", "branch_code": "7816", "branch_name": "台南縣學甲鎮農會中洲分部" }
    ,
    { "id": "5292", "head_code": "954", "branch_code": "7827", "branch_name": "台南縣學甲鎮農會宅港分部" }
    ,
    { "id": "5293", "head_code": "954", "branch_code": "7838", "branch_name": "台南縣學甲鎮農會頂洲分部" }
    ,
    { "id": "5294", "head_code": "954", "branch_code": "7849", "branch_name": "台南縣學甲鎮農會草圣分部" }
    ,
    { "id": "5295", "head_code": "954", "branch_code": "7850", "branch_name": "台南縣學甲鎮農會大灣分部" }
    ,
    { "id": "5296", "head_code": "954", "branch_code": "7908", "branch_name": "台南縣下營鄉農會信用部" }
    ,
    { "id": "5297", "head_code": "954", "branch_code": "7919", "branch_name": "台南縣下營鄉農會中興分部" }
    ,
    { "id": "5298", "head_code": "954", "branch_code": "7920", "branch_name": "台南縣下營鄉農會中營分部" }
    ,
    { "id": "5299", "head_code": "954", "branch_code": "7931", "branch_name": "台南縣下營鄉農會甲中分部" }
    ,
    { "id": "5300", "head_code": "954", "branch_code": "8101", "branch_name": "台南縣麻豆鎮農會信用部" }
    ,
    { "id": "5301", "head_code": "954", "branch_code": "8112", "branch_name": "台南縣麻豆鎮農會光復分部" }
    ,
    { "id": "5302", "head_code": "954", "branch_code": "8123", "branch_name": "台南縣麻豆鎮農會新生分部" }
    ,
    { "id": "5303", "head_code": "954", "branch_code": "8134", "branch_name": "台南縣麻豆鎮農會復光分部" }
    ,
    { "id": "5304", "head_code": "954", "branch_code": "8145", "branch_name": "台南縣麻豆鎮農會安業分部" }
    ,
    { "id": "5305", "head_code": "954", "branch_code": "8204", "branch_name": "台南縣仁德鄉農會信用部" }
    ,
    { "id": "5306", "head_code": "954", "branch_code": "8215", "branch_name": "台南縣仁德鄉農會太子分部" }
    ,
    { "id": "5307", "head_code": "954", "branch_code": "8226", "branch_name": "台南縣仁德鄉農會後壁分部" }
    ,
    { "id": "5308", "head_code": "954", "branch_code": "8237", "branch_name": "台南縣仁德鄉農會保安分部" }
    ,
    { "id": "5309", "head_code": "954", "branch_code": "8248", "branch_name": "台南縣仁德鄉農會中洲分部" }
    ,
    { "id": "5310", "head_code": "954", "branch_code": "8259", "branch_name": "台南縣仁德鄉農會二行分部" }
    ,
    { "id": "5311", "head_code": "954", "branch_code": "8307", "branch_name": "台南縣關廟鄉農會信用部" }
    ,
    { "id": "5312", "head_code": "954", "branch_code": "8318", "branch_name": "台南縣關廟鄉農會龜洞分部" }
    ,
    { "id": "5313", "head_code": "954", "branch_code": "8329", "branch_name": "台南縣關廟鄉農會埤頭分部" }
    ,
    { "id": "5314", "head_code": "954", "branch_code": "8400", "branch_name": "台南縣龍崎鄉農會信用部" }
    ,
    { "id": "5315", "head_code": "954", "branch_code": "8411", "branch_name": "台南縣龍崎鄉農會龍船分部" }
    ,
    { "id": "5316", "head_code": "954", "branch_code": "8503", "branch_name": "台南縣安定鄉農會信用部" }
    ,
    { "id": "5317", "head_code": "954", "branch_code": "8514", "branch_name": "台南縣安定鄉農會蘇厝分部" }
    ,
    { "id": "5318", "head_code": "954", "branch_code": "8525", "branch_name": "台南縣安定鄉農會港口分部" }
    ,
    { "id": "5319", "head_code": "954", "branch_code": "8536", "branch_name": "台南縣安定鄉農會中沙分部" }
    ,
    { "id": "5320", "head_code": "954", "branch_code": "8547", "branch_name": "台南縣安定鄉農會海寮分部" }
    ,
    { "id": "5321", "head_code": "954", "branch_code": "8606", "branch_name": "台南縣白河鎮農會信用部" }
    ,
    { "id": "5322", "head_code": "954", "branch_code": "8617", "branch_name": "台南縣白河鎮農會市場分部" }
    ,
    { "id": "5323", "head_code": "954", "branch_code": "8628", "branch_name": "台南縣白河鎮農會關嶺分部" }
    ,
    { "id": "5324", "head_code": "954", "branch_code": "8639", "branch_name": "台南縣白河鎮農會竹門分部" }
    ,
    { "id": "5325", "head_code": "954", "branch_code": "8640", "branch_name": "台南縣白河鎮農會玉豐分部" }
    ,
    { "id": "5326", "head_code": "954", "branch_code": "8651", "branch_name": "台南縣白河鎮農會內角分部" }
    ,
    { "id": "5327", "head_code": "954", "branch_code": "8662", "branch_name": "台南縣白河鎮農會仙草分部" }
    ,
    { "id": "5328", "head_code": "954", "branch_code": "8709", "branch_name": "台南縣東山鄉農會信用部" }
    ,
    { "id": "5329", "head_code": "954", "branch_code": "8710", "branch_name": "台南縣東山鄉農會東原分部" }
    ,
    { "id": "5330", "head_code": "954", "branch_code": "8721", "branch_name": "台南縣東山鄉農會青山分部" }
    ,
    { "id": "5331", "head_code": "954", "branch_code": "8732", "branch_name": "台南縣東山鄉農會南溪分部" }
    ,
    { "id": "5332", "head_code": "954", "branch_code": "8743", "branch_name": "台南縣東山鄉農會聖賢分部" }
    ,
    { "id": "5333", "head_code": "954", "branch_code": "8802", "branch_name": "台南縣後壁鄉農會信用部" }
    ,
    { "id": "5334", "head_code": "954", "branch_code": "8813", "branch_name": "台南縣後壁鄉農會菁寮分部" }
    ,
    { "id": "5335", "head_code": "954", "branch_code": "8824", "branch_name": "台南縣後壁鄉農會安溪分部" }
    ,
    { "id": "5336", "head_code": "954", "branch_code": "8835", "branch_name": "台南縣後壁鄉農會上茄苳分部" }
    ,
    { "id": "5337", "head_code": "954", "branch_code": "8846", "branch_name": "台南縣後壁鄉農會新東分部" }
    ,
    { "id": "5338", "head_code": "954", "branch_code": "8857", "branch_name": "台南縣後壁鄉農會竹新分部" }
    ,
    { "id": "5339", "head_code": "954", "branch_code": "8905", "branch_name": "彰化縣彰化區漁會信用部" }
    ,
    { "id": "5340", "head_code": "954", "branch_code": "8916", "branch_name": "彰化縣彰化區漁會王功分部" }
    ,
    { "id": "5341", "head_code": "954", "branch_code": "8927", "branch_name": "彰化縣彰化區漁會芳苑分部" }
    ,
    { "id": "5342", "head_code": "954", "branch_code": "8938", "branch_name": "彰化縣彰化區漁會大城分部" }
    ,
    { "id": "5343", "head_code": "954", "branch_code": "8949", "branch_name": "彰化縣彰化區漁會草港分部" }
    ,
    { "id": "5344", "head_code": "954", "branch_code": "8950", "branch_name": "彰化區漁會福興分部" }
    ,
    { "id": "5345", "head_code": "954", "branch_code": "9005", "branch_name": "屏東縣內埔地區農會信用部" }
    ,
    { "id": "5346", "head_code": "954", "branch_code": "9016", "branch_name": "屏東縣內埔區農會豐田分部" }
    ,
    { "id": "5347", "head_code": "954", "branch_code": "9027", "branch_name": "屏東縣內埔區農會東勢分部" }
    ,
    { "id": "5348", "head_code": "954", "branch_code": "9038", "branch_name": "屏東縣內埔區農會龍泉分部" }
    ,
    { "id": "5349", "head_code": "954", "branch_code": "9049", "branch_name": "屏東縣內埔區農會水門分部" }
    ,
    { "id": "5350", "head_code": "954", "branch_code": "9050", "branch_name": "屏東縣內埔區農會老埤分部" }
    ,
    { "id": "5351", "head_code": "954", "branch_code": "9108", "branch_name": "花蓮縣鳳榮地區農會信用部" }
    ,
    { "id": "5352", "head_code": "954", "branch_code": "9119", "branch_name": "花蓮縣鳳榮地區農會林榮分部" }
    ,
    { "id": "5353", "head_code": "954", "branch_code": "9120", "branch_name": "花蓮縣鳳榮地區農會萬榮分部" }
    ,
    { "id": "5354", "head_code": "954", "branch_code": "9201", "branch_name": "花蓮縣光豐地區農會信用部" }
    ,
    { "id": "5355", "head_code": "954", "branch_code": "9212", "branch_name": "花蓮縣光豐地區農會大富分部" }
    ,
    { "id": "5356", "head_code": "954", "branch_code": "9223", "branch_name": "花蓮縣光豐地區農會豐濱分部" }
    ,
    { "id": "5357", "head_code": "954", "branch_code": "9304", "branch_name": "台中縣和平鄉農會信用部" }
    ,
    { "id": "5358", "head_code": "954", "branch_code": "9315", "branch_name": "台中縣和平鄉農會梨山分部" }
    ,
    { "id": "5359", "head_code": "954", "branch_code": "9326", "branch_name": "台中縣和平鄉農會雙崎分部" }
    ,
    { "id": "5360", "head_code": "954", "branch_code": "9407", "branch_name": "台中縣大雅鄉農會信用部" }
    ,
    { "id": "5361", "head_code": "954", "branch_code": "9418", "branch_name": "台中縣大雅鄉農會上楓分部" }
    ,
    { "id": "5362", "head_code": "954", "branch_code": "9429", "branch_name": "台中縣大雅鄉農會馬岡分部" }
    ,
    { "id": "5363", "head_code": "954", "branch_code": "9430", "branch_name": "台中縣大雅鄉農會忠義分部" }
    ,
    { "id": "5364", "head_code": "954", "branch_code": "9500", "branch_name": "苗栗縣通苑區漁會信用部" }
    ,
    { "id": "5365", "head_code": "954", "branch_code": "9511", "branch_name": "苗栗縣通苑區漁會苑裡分部" }
    ,
    { "id": "5366", "head_code": "954", "branch_code": "9603", "branch_name": "台中縣東勢鎮農會信用部" }
    ,
    { "id": "5367", "head_code": "954", "branch_code": "9706", "branch_name": "台中縣沙鹿鎮農會信用部" }
    ,
    { "id": "5368", "head_code": "954", "branch_code": "9717", "branch_name": "台中縣沙鹿鎮農會北勢分部" }
    ,
    { "id": "5369", "head_code": "954", "branch_code": "9728", "branch_name": "台中縣沙鹿鎮農會鹿峰分部" }
    ,
    { "id": "5370", "head_code": "954", "branch_code": "9739", "branch_name": "台中縣沙鹿鎮農會西明分部" }
    ,
    { "id": "5371", "head_code": "954", "branch_code": "9740", "branch_name": "台中縣沙鹿鎮農會公館分部" }
    ,
    { "id": "5372", "head_code": "954", "branch_code": "9809", "branch_name": "台南縣新化鎮農會信用部" }
    ,
    { "id": "5373", "head_code": "954", "branch_code": "9810", "branch_name": "台南縣新化鎮農會那拔林分部" }
    ,
    { "id": "5374", "head_code": "954", "branch_code": "9821", "branch_name": "台南縣新化鎮農會中山分部" }
    ,
    { "id": "5375", "head_code": "954", "branch_code": "9832", "branch_name": "台南縣新化鎮農會太平分部" }
];