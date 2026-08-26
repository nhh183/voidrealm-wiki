# Hư Không Dị Giới (Terraria) / Void Realm

- Workshop: 2526778484
- Phiên bản: 2.2.4
- Ảnh inventory: 657
- Mục ghép được prefab nguồn: 367

> Ghi chú: đây là kiểm tra tĩnh từ source. Bảng `scripts/tr_recipes.lua` là dữ liệu nhị phân/đã mã hóa nên các công thức không đọc được sẽ được ghi rõ, không suy đoán.

## Các cơ chế chính

### Sứ giả Yog‑Sothoth và Điểm Tri Thức

Nhân vật 50 máu, 100 đói, 300 tinh thần; tốc độ 115%. Tri Thức nhận từ học công thức và đọc sách, tăng sát thương, thu hoạch, hồi ma lực và sức mạnh vũ khí Tinh Diễn.

Nguồn: `scripts/prefabs/ygsts.lua`

### Tinh Diễn — bốn hình thái

Vũ khí khởi đầu chuyển một chiều thành Đại Liêm, Trọng Kiếm, Cung hoặc Chú Thư. Mỗi dạng có bộ chỉ số, kỹ năng và cách vận hành riêng.

Nguồn: `main/tr_magic_weapon_actions.lua`

### Vô Tận Trí Tuệ

Kho chứa đeo cổ hấp thụ vật liệu để tạo bản vẽ, hồi ma lực theo Tri Thức, tăng sản lượng hái và có thể hồi sinh chủ nhân từ dạng hồn ma.

Nguồn: `scripts/prefabs/wujinzhihuirq.lua`

### Ma lực và trạng thái Quán Chú

Người chơi có thanh ma lực riêng. Chú Thư dùng ma lực cho triệu hồi, hồi sinh, thúc lớn cây, lá chắn và đi trên nước; một số phép tạo hoặc tiêu thụ Quán Chú để tăng hiệu quả.

Nguồn: `scripts/components/tr_magic.lua`

### Triệu hồi sư

Mỗi người chơi có giới hạn ô triệu hồi. Vũ khí, giáp và phụ kiện có thể tăng ô hoặc hệ số sát thương; Đại Liêm tạo phân thân và dùng linh hồn để cường hóa chúng.

Nguồn: `scripts/components/tr_summoner.lua`

### Rèn lại trang bị

Hệ thống rèn lại cho phép vũ khí và phụ kiện nhận nhiều dòng thuộc tính. Phạm vi vật phẩm, số dòng tối đa và thuộc tính đặc biệt được điều chỉnh trong cấu hình mod.

Nguồn: `main/tr_combat_enchantment_hooks.lua`

### Phụ kiện Terraria

Mod bổ sung hệ phụ kiện với ô chứa, hiệu ứng cộng dồn và nhiều chỉ số như tốc độ, hồi phục, kháng sát thương, triệu hồi và khả năng di chuyển đặc biệt.

Nguồn: `main/tr_accessory_container_actions.lua`

### Luyện kim và bàn chế tạo

Chuỗi tài nguyên gồm quặng, thỏi, lò luyện, bàn nghiên cứu và các cấp công nghệ. Nhiều vũ khí Terraria yêu cầu nguyên liệu hoặc trạm chuyên biệt.

Nguồn: `main/tr_crafting_setup.lua`

### Thuốc chiến đấu

Các thuốc cung cấp hiệu ứng có thời hạn: hồi máu, hồi ma lực, tăng sát thương, tốc độ, khai khoáng, câu cá, kháng lửa, đi trên nước và nhiều trạng thái chiến đấu khác.

Nguồn: `scripts/modinit/vi_prefab_strings.lua`

### Tiền thưởng và bảng truy nã

Bảng tiền thưởng tạo nhiệm vụ săn mục tiêu, theo dõi tiến độ và trao phần thưởng. Dữ liệu mục tiêu và phần thưởng được tách thành hệ thống riêng.

Nguồn: `scripts/tr_bounty_defs.lua`

### Hành lang Hư Không

Chế độ hành lang gồm sảnh chờ, lựa chọn nhân vật, hợp đồng, mục tiêu, affix, cửa hàng và vũ khí riêng; tiến trình được đồng bộ qua UI và sự kiện thế giới.

Nguồn: `main/tr_void_corridor_system.lua`

### Hệ Hex

Hex áp dụng các biến thể luật chơi, hiệu ứng người chơi và mở rộng riêng. Lịch sử, lựa chọn và thông báo Hex có giao diện chuyên dụng.

Nguồn: `main/tr_hex_system.lua`

### Boss và tiến trình thế giới

Mod thêm nhiều boss và sinh vật lấy cảm hứng từ Terraria cùng cơ chế sinh theo thế giới, đấu trường, đền thờ, sa mạc, biển và các sự kiện đặc biệt.

Nguồn: `main/tr_world_boss_spawns.lua`

### Du hành và bản đồ phân thân

Phân thân Đại Liêm có biểu tượng toàn bản đồ. Người chơi có thể cố định phân thân và đổi vị trí với nó; một số phép khác cấp đi trên nước hoặc dịch chuyển nhóm.

Nguồn: `main/ygsts_maptravel.lua`

### Skin và quyền sở hữu

Nhân vật, vũ khí và sinh vật có nhiều skin; mod có API đăng ký, dữ liệu UI, quà skin và kiểm tra quyền sở hữu riêng.

Nguồn: `main/tr_skins_api.lua`

## Danh mục toàn bộ vật phẩm và biểu tượng

| Hình | Tên | Prefab / ID | Loại | Mô tả | Nguồn |
|---|---|---|---|---|---|
| <img src="./public/items/4.png" width="64" height="64"> | 4 | `4` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/airenxianglian.png" width="64" height="64"> | Airenxianglian | `airenxianglian` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/airenzhaohuanzhang.png" width="64" height="64"> | Airenzhaohuanzhang | `airenzhaohuanzhang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/airenfazhang.lua` |
| <img src="./public/items/anheichangqiang.png" width="64" height="64"> | Anheichangqiang | `anheichangqiang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/anheichangqiang.lua` |
| <img src="./public/items/antmask.png" width="64" height="64"> | Mũ Giáp Kiến Sư Tử | `antmask` | Giáp | Giúp bạn ngụy trang thành một con Kiến Sư Tử | `scripts/prefabs/antmask.lua` |
| <img src="./public/items/antsuit.png" width="64" height="64"> | Giáp Tấm Kiến Sư Tử | `antsuit` | Giáp | Giúp bạn ngụy trang thành một con Kiến Sư Tử | `scripts/prefabs/antsuit.lua` |
| <img src="./public/items/anyinglinpian.png" width="64" height="64"> | Anyinglinpian | `anyinglinpian` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/anyinglinpian.lua` |
| <img src="./public/items/anyingtoukui.png" width="64" height="64"> | Mũ Giáp Bóng Đêm | `anyingtoukui` | Giáp | Đồng hành cùng bóng tối (kích hoạt hiệu ứng bộ trang bị sẽ dùng tinh thần để gánh chịu sát thương) | `scripts/prefabs/anyingtoukui.lua` |
| <img src="./public/items/anyingxiongjia.png" width="64" height="64"> | Anyingxiongjia | `anyingxiongjia` | Giáp | Điều khiển nguồn sức mạnh bóng tối vô biên (kích hoạt hiệu ứng trọn bộ trang bị sẽ chuyển hóa tinh thần lực để gánh chịu sát thương thay cho máu) | `scripts/prefabs/anyingxiongjia.lua` |
| <img src="./public/items/anyingzhu.png" width="64" height="64"> | Anyingzhu | `anyingzhu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/aomihua.png" width="64" height="64"> | Aomihua | `aomihua` | Phụ kiện | Tự động uống thuốc mana khi cạn kiệt, đồng thời làm giảm chỉ số thù hận và sự chú ý của kẻ địch lên bạn | `scripts/prefabs/aomihua.lua` |
| <img src="./public/items/aoshushuijing.png" width="64" height="64"> | Aoshushuijing | `aoshushuijing` | Phụ kiện | Tăng tốc độ hồi phục năng lượng ma pháp. Khi sử dụng vũ khí dạng bắn đạn, tự động bắn thêm 3 luồng đạn ma thuật | `scripts/prefabs/aoshushuijing.lua` |
| <img src="./public/items/aoxiangzhizheng.png" width="64" height="64"> | Aoxiangzhizheng | `aoxiangzhizheng` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/aoxiangzhizheng.lua` |
| <img src="./public/items/baicaoqionglu.png" width="64" height="64"> | Baicaoqionglu | `baicaoqionglu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/baitao_zhangui.png" width="64" height="64"> | Baitao Zhangui | `baitao_zhangui` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/baitao_zhangui.lua` |
| <img src="./public/items/baiyu_item.png" width="64" height="64"> | Baiyu Item | `baiyu_item` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/banboyouyu.png" width="64" height="64"> | Banboyouyu | `banboyouyu` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_fish.lua` |
| <img src="./public/items/banbozhihun.png" width="64" height="64"> | Banbozhihun | `banbozhihun` | Phụ kiện | Tăng 3 ô triệu hồi và tăng 45% sát thương cho đệ tử triệu hồi | `scripts/prefabs/banbozhihun.lua` |
| <img src="./public/items/bangbangmianhuatang.png" width="64" height="64"> | Kẹo Bông Gòn Que | `bangbangmianhuatang` | Vũ khí | Vừa chiến đấu vừa nhâm nhi kẹo ngon! Mỗi đòn đánh hồi phục 1 độ đói | `scripts/prefabs/bangbangmianhuatang.lua` |
| <img src="./public/items/bangbangmianhuatang_sancaituanzi.png" width="64" height="64"> | Bangbangmianhuatang Sancaituanzi | `bangbangmianhuatang_sancaituanzi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/baonuanyaoshui.png" width="64" height="64"> | Baonuanyaoshui | `baonuanyaoshui` | Thức ăn & Thuốc | Giúp giữ ấm cơ thể ở mức 40 độ C, tối đa không quá 40 độ C (không có tác dụng khi thân nhiệt trên 40 độ C) | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/baonuyaoshui.png" width="64" height="64"> | Baonuyaoshui | `baonuyaoshui` | Thức ăn & Thuốc | Trong 8 phút tiếp theo, đòn đánh có 10% cơ hội gây bạo kích, sát thương x2 | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/baoshi.png" width="64" height="64"> | Baoshi | `baoshi` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/trhulu.lua` |
| <img src="./public/items/baoshihua.png" width="64" height="64"> | Baoshihua | `baoshihua` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/baoshihua.lua` |
| <img src="./public/items/baoshijingcu.png" width="64" height="64"> | Baoshijingcu | `baoshijingcu` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/baoshijingcu.lua` |
| <img src="./public/items/baoxiayaoshui.png" width="64" height="64"> | Baoxiayaoshui | `baoxiayaoshui` | Thức ăn & Thuốc | Tăng 20% cơ hội câu được hòm kho báu | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/bingmeiguojiangjuan.png" width="64" height="64"> | Bingmeiguojiangjuan | `bingmeiguojiangjuan` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/bingxuegong.png" width="64" height="64"> | Bingxuegong | `bingxuegong` | Vũ khí | Tự động biến đổi mũi tên thường thành những nhọn băng sắc lạnh thấu xương | `scripts/prefabs/mugong.lua` |
| <img src="./public/items/bingxueren.png" width="64" height="64"> | Bingxueren | `bingxueren` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/bingxueren.lua` |
| <img src="./public/items/bingxueren_zhutianshiyue.png" width="64" height="64"> | Bingxueren Zhutianshiyue | `bingxueren_zhutianshiyue` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/bkm_image.png" width="64" height="64"> | Bkm Image | `bkm_image` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/black_jingzhuangti.png" width="64" height="64"> | Black Jingzhuangti | `black_jingzhuangti` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/black_jingzhuangti.lua` |
| <img src="./public/items/black_soul.png" width="64" height="64"> | Black Soul | `black_soul` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/black_soul.lua` |
| <img src="./public/items/boli.png" width="64" height="64"> | Thủy Tinh | `boli` | Thức ăn & Thuốc | Được nung chảy từ cát trắng | `scripts/prefabs/boli.lua` |
| <img src="./public/items/book.png" width="64" height="64"> | Book | `book` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/book.lua` |
| <img src="./public/items/caihongmaozhiren.png" width="64" height="64"> | Caihongmaozhiren | `caihongmaozhiren` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/miaodao.lua` |
| <img src="./public/items/cangyu.png" width="64" height="64"> | Cangyu | `cangyu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/caotijian.png" width="64" height="64"> | Kiếm Thảo Trĩ | `caotijian` | Vũ khí | Hãy hấp thụ dưỡng chất từ chính xác thịt kẻ thù! | `scripts/prefabs/caotijian.lua` |
| <img src="./public/items/caozhimao.png" width="64" height="64"> | Caozhimao | `caozhimao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/catbeijing.png" width="64" height="64"> | Catbeijing | `catbeijing` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/ccs_cards_20.png" width="64" height="64"> | Ccs Cards 20 | `ccs_cards_20` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/changmao.png" width="64" height="64"> | Thương Dài | `changmao` | Vũ khí | Sắc bén hơn gấp bội, gây thêm 20 sát thương chuẩn | `scripts/prefabs/changmao.lua` |
| <img src="./public/items/chaoweibengjie.png" width="64" height="64"> | Chaoweibengjie | `chaoweibengjie` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/chaoweibengjiefx.lua` |
| <img src="./public/items/chaozailiexihuiguang.png" width="64" height="64"> | Chaozailiexihuiguang | `chaozailiexihuiguang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chengbaoshiguo.png" width="64" height="64"> | Quả Cam Ngọc | `chengbaoshiguo` | Biểu tượng & Khác | Quả Cam Ngọc | Chưa ghép được prefab |
| <img src="./public/items/chengbaoshishu.png" width="64" height="64"> | Cây Cam Ngọc | `chengbaoshishu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chengbaoshishu_a_huiguangxiangshu.png" width="64" height="64"> | Chengbaoshishu A Huiguangxiangshu | `chengbaoshishu_a_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chengbaoshishu_huiguangxiangshu.png" width="64" height="64"> | Chengbaoshishu Huiguangxiangshu | `chengbaoshishu_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chengbaoshishu_normal.png" width="64" height="64"> | Chengbaoshishu Normal | `chengbaoshishu_normal` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chengbaoshishu_paopaogu.png" width="64" height="64"> | Chengbaoshishu Paopaogu | `chengbaoshishu_paopaogu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chengbaoshishu_short.png" width="64" height="64"> | Chengbaoshishu Short | `chengbaoshishu_short` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chengbaoshishu_stump.png" width="64" height="64"> | Chengbaoshishu Stump | `chengbaoshishu_stump` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chengbaoshishu_tall.png" width="64" height="64"> | Chengbaoshishu Tall | `chengbaoshishu_tall` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chengsejingta.png" width="64" height="64"> | Chengsejingta | `chengsejingta` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/chengsejingta.lua` |
| <img src="./public/items/chidebao.png" width="64" height="64"> | Chidebao | `chidebao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chitin.png" width="64" height="64"> | Chitin | `chitin` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/chitin.lua` |
| <img src="./public/items/chitinluan.png" width="64" height="64"> | Trứng Kiến Sư Tử | `chitinluan` | Biểu tượng & Khác | Khối trứng nhúc nhích bốc mùi hôi thối khó chịu | Chưa ghép được prefab |
| <img src="./public/items/chixinxunxiangping.png" width="64" height="64"> | Chixinxunxiangping | `chixinxunxiangping` | Phụ kiện | Cung cấp hiệu ứng hồi máu liên tục cho bản thân và đồng đội trong phạm vi dựa theo tỷ lệ lượng máu hiện tại của người sở hữu | `scripts/prefabs/chixinxunxiangping.lua` |
| <img src="./public/items/chiyanjujian.png" width="64" height="64"> | Đại Kiếm Rực Lửa | `chiyanjujian` | Vũ khí | Được tạo ra từ ngọn lửa rực cháy!' | `scripts/prefabs/chiyanjujian.lua` |
| <img src="./public/items/chiyanjujian_cangyan.png" width="64" height="64"> | Chiyanjujian Cangyan | `chiyanjujian_cangyan` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chiyanjujian_yanwu.png" width="64" height="64"> | Chiyanjujian Yanwu | `chiyanjujian_yanwu` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/chongdongyaoshui.png" width="64" height="64"> | Thuốc Lỗ Sâu | `chongdongyaoshui` | Thức ăn & Thuốc | Dịch chuyển lập tức đến bên cạnh một người đồng đội trong nhóm | `scripts/prefabs/chongdongyaoshui.lua` |
| <img src="./public/items/chouweiyaoshui.png" width="64" height="64"> | Chouweiyaoshui | `chouweiyaoshui` | Thức ăn & Thuốc | Lập tức xóa bỏ thù hận của kẻ địch trên diện rộng, đồng thời khiến chúng không thể chủ động tấn công bạn trong 1 phút | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/chouweiyu.png" width="64" height="64"> | Chouweiyu | `chouweiyu` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_fish.lua` |
| <img src="./public/items/chunjingjiaozhi.png" width="64" height="64"> | Chunjingjiaozhi | `chunjingjiaozhi` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/ningjiaoshipin.lua` |
| <img src="./public/items/chushoumao.png" width="64" height="64"> | Chushoumao | `chushoumao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/conglinbaozi.png" width="64" height="64"> | Bào Tử Rừng Rậm | `conglinbaozi` | Thức ăn & Thuốc | Tinh hoa từ các sinh vật nơi rừng rậm, dùng để chế tạo các vật phẩm mang thuộc tính rừng | `scripts/prefabs/conglinbaozi.lua` |
| <img src="./public/items/cuilianimg.png" width="64" height="64"> | Cuilianimg | `cuilianimg` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/cuiqu.png" width="64" height="64"> | Cuiqu | `cuiqu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/dafashihuiyin.png" width="64" height="64"> | Dafashihuiyin | `dafashihuiyin` | Phụ kiện | Tăng tốc độ hồi mana, đồng thời mỗi đòn tấn công sẽ bắn thêm 6 luồng đạn ma thuật sắc lẹm | `scripts/prefabs/dafashihuiyin.lua` |
| <img src="./public/items/dalishijiachong.png" width="64" height="64"> | Dalishijiachong | `dalishijiachong` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/dalishijiachong.lua` |
| <img src="./public/items/dazirandeenci.png" width="64" height="64"> | Dazirandeenci | `dazirandeenci` | Nguyên liệu & Vật phẩm | Dường như là một đóa hoa nhỏ màu xanh lam kỳ diệu mãi mãi không bao giờ tàn úa | `scripts/prefabs/dazirandeenci.lua` |
| <img src="./public/items/diaojuxiang.png" width="64" height="64"> | Diaojuxiang | `diaojuxiang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/diaoyuyaoshui.png" width="64" height="64"> | Diaoyuyaoshui | `diaoyuyaoshui` | Thức ăn & Thuốc | Tăng 50% tốc độ câu cá | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/diyuronglu.png" width="64" height="64"> | Diyuronglu | `diyuronglu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/dongxuetanxianyaoshui.png" width="64" height="64"> | Dongxuetanxianyaoshui | `dongxuetanxianyaoshui` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/drop_blueprint.png" width="64" height="64"> | Drop Blueprint | `drop_blueprint` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/duangangjian.png" width="64" height="64"> | Duangangjian | `duangangjian` | Vũ khí | Thanh thần kiếm sắc lẹm có thể dễ dàng cắt sắt chém thép như chém bùn | `scripts/prefabs/duangangjian.lua` |
| <img src="./public/items/dug_hanchanji_plant.png" width="64" height="64"> | Rễ Gai Rùng Mình | `dug_hanchanji_plant` | Biểu tượng & Khác | Gieo trồng ra những đóa hoa tỏa ra hơi lạnh băng giá thấu xương | Chưa ghép được prefab |
| <img src="./public/items/dug_huoyanhua_plant.png" width="64" height="64"> | Rễ Hoa Lửa | `dug_huoyanhua_plant` | Biểu tượng & Khác | Gieo trồng ra những đóa hoa rực cháy như ngọn lửa bập bùng | Chưa ghép được prefab |
| <img src="./public/items/dug_shanyaogen_plant.png" width="64" height="64"> | Phần Rễ Của Rễ Lấp Lánh | `dug_shanyaogen_plant` | Biểu tượng & Khác | Gieo xuống đất để mọc lên những vì sao bé nhỏ tinh khôi | Chưa ghép được prefab |
| <img src="./public/items/dug_siwangcao_plant.png" width="64" height="64"> | Rễ Cỏ Tử Vong | `dug_siwangcao_plant` | Biểu tượng & Khác | Gieo trồng và gặt hái những trái cấm mang hương vị tử vong | Chưa ghép được prefab |
| <img src="./public/items/dugu.png" width="64" height="64"> | Dugu | `dugu` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/mogu_pick.lua` |
| <img src="./public/items/dugu_cook.png" width="64" height="64"> | Dugu Cook | `dugu_cook` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/mogu_cook.lua` |
| <img src="./public/items/electric shock.png" width="64" height="64"> | Electric shock | `electric shock` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/emojitan_emomaomao.png" width="64" height="64"> | Emojitan Emomaomao | `emojitan_emomaomao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/emojitan_qicai.png" width="64" height="64"> | Emojitan Qicai | `emojitan_qicai` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/emojitan_wangzuo.png" width="64" height="64"> | Emojitan Wangzuo | `emojitan_wangzuo` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/emozhixin.png" width="64" height="64"> | Emozhixin | `emozhixin` | Kho chứa | Hiến tế linh hồn của bạn | `scripts/prefabs/emozhixin.lua` |
| <img src="./public/items/emozhiyi.png" width="64" height="64"> | Emozhiyi | `emozhiyi` | Kho chứa | Phồng lớn lên và giăng mở thành đôi cánh ác quỷ sải rộng uy nghi | `scripts/prefabs/emozhiyi.lua` |
| <img src="./public/items/erbenzhishi.png" width="64" height="64"> | Erbenzhishi | `erbenzhishi` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yasuomokuai.lua` |
| <img src="./public/items/fangyusunshang.png" width="64" height="64"> | Fangyusunshang | `fangyusunshang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/fanhundie.png" width="64" height="64"> | Fanhundie | `fanhundie` | Vũ khí | Quy luật tất yếu của nhân sinh: phàm là sinh linh ắt có ngày tàn diệt | `scripts/prefabs/fanhundie.lua` |
| <img src="./public/items/fanhundie_liuli.png" width="64" height="64"> | Fanhundie Liuli | `fanhundie_liuli` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/fanhundie_qingluandanfeng.png" width="64" height="64"> | Fanhundie Qingluandanfeng | `fanhundie_qingluandanfeng` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/fanhundie_wanyunshuang.png" width="64" height="64"> | Fanhundie Wanyunshuang | `fanhundie_wanyunshuang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/fanzuzhouzhouyu.png" width="64" height="64"> | Fanzuzhouzhouyu | `fanzuzhouzhouyu` | Phụ kiện | Thanh tẩy lời nguyền, miễn nhiễm lời nguyền hóa khỉ, đồng thời định kỳ trò chuyện và truyền năng lượng sống cho cây trồng trong phạm vi vừa phải | `scripts/prefabs/fanzuzhouzhouyu.lua` |
| <img src="./public/items/fashixunzhang.png" width="64" height="64"> | Fashixunzhang | `fashixunzhang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/fashixunzhang.lua` |
| <img src="./public/items/fazhenbeijing.png" width="64" height="64"> | Fazhenbeijing | `fazhenbeijing` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/fazhenbeijinghong.png" width="64" height="64"> | Fazhenbeijinghong | `fazhenbeijinghong` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/fazhenbeijinghuang.png" width="64" height="64"> | Fazhenbeijinghuang | `fazhenbeijinghuang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/fazhenbeijinglan.png" width="64" height="64"> | Fazhenbeijinglan | `fazhenbeijinglan` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/fazhenbeijingzi.png" width="64" height="64"> | Fazhenbeijingzi | `fazhenbeijingzi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/feixiangzhihun.png" width="64" height="64"> | Feixiangzhihun | `feixiangzhihun` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/feiyingliuguang.png" width="64" height="64"> | Feiyingliuguang | `feiyingliuguang` | Biểu tượng & Khác | Tôi đã nhìn thấy những đốm lửa đom đóm rực rỡ bay lượn trong đêm | `scripts/prefabs/feiyingliuguang.lua` |
| <img src="./public/items/fengchao.png" width="64" height="64"> | Fengchao | `fengchao` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/fengchao.lua` |
| <img src="./public/items/fengmiping.png" width="64" height="64"> | Fengmiping | `fengmiping` | Thức ăn & Thuốc | Lập tức hồi phục 25 máu, đồng thời bổ sung thêm 25 chỉ số phụ trợ | `scripts/prefabs/fengmiping.lua` |
| <img src="./public/items/fengmishuijing.png" width="64" height="64"> | Fengmishuijing | `fengmishuijing` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/fh_baozangdai.png" width="64" height="64"> | Fh Baozangdai | `fh_baozangdai` | Kho chứa | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/fh_baozangdai.lua` |
| <img src="./public/items/firehuahua.png" width="64" height="64"> | Firehuahua | `firehuahua` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/fuchouxunzhang.png" width="64" height="64"> | Fuchouxunzhang | `fuchouxunzhang` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/fuchouzhehuizhang.lua` |
| <img src="./public/items/fuguitongqian.png" width="64" height="64"> | Fuguitongqian | `fuguitongqian` | Kho chứa | Nó cất tiếng thì thầm, kể lại những bí mật về kho báu cổ đại và cám dỗ bạn dấn thân vào chốn phiêu lưu | `scripts/prefabs/fuguitongqian.lua` |
| <img src="./public/items/fuwenzhige.png" width="64" height="64"> | Fuwenzhige | `fuwenzhige` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/fuwenzhige.lua` |
| <img src="./public/items/fuxiangnang.png" width="64" height="64"> | Túi Thơm Gây Mùi | `fuxiangnang` | Phụ kiện | Khiến kẻ địch cảm thấy khó chịu và ít có khả năng nhắm bạn làm mục tiêu ưu tiên | `scripts/prefabs/fuxiangnang.lua` |
| <img src="./public/items/gaofu.png" width="64" height="64"> | Gaofu | `gaofu` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_gaofu.lua` |
| <img src="./public/items/gaofu_qicai.png" width="64" height="64"> | Gaofu Qicai | `gaofu_qicai` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/glowfly.png" width="64" height="64"> | Glowfly | `glowfly` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/glowfly.lua` |
| <img src="./public/items/gongjian.png" width="64" height="64"> | Gongjian | `gongjian` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/gongjiangzuofang.png" width="64" height="64"> | Gongjiangzuofang | `gongjiangzuofang` | Vũ khí | Bàn làm việc chuyên dụng để chế tác vô số phụ kiện và trang sức trang bị | `scripts/prefabs/gongjiangzuofang.lua` |
| <img src="./public/items/gongjiangzuofang_jiangpintanwei.png" width="64" height="64"> | Gongjiangzuofang Jiangpintanwei | `gongjiangzuofang_jiangpintanwei` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/gongjiangzuofang_tianshenxiang.png" width="64" height="64"> | Gongjiangzuofang Tianshenxiang | `gongjiangzuofang_tianshenxiang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/guangmangyaoshui.png" width="64" height="64"> | Guangmangyaoshui | `guangmangyaoshui` | Thức ăn & Thuốc | Phát sáng xung quanh trong 8 phút | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/guhudun.png" width="64" height="64"> | Guhudun | `guhudun` | Phụ kiện | Giúp bạn chống lại hiệu ứng hất tung (chuyển bị hất tung thành bị đẩy lùi nhẹ) | `scripts/prefabs/guhudun.lua` |
| <img src="./public/items/guixuzhiling.png" width="64" height="64"> | Guixuzhiling | `guixuzhiling` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/guixuzhiling.lua` |
| <img src="./public/items/guozainengliangkuai.png" width="64" height="64"> | Guozainengliangkuai | `guozainengliangkuai` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/guozainengliangkuai.lua` |
| <img src="./public/items/guozainengliangkuai_caomeibuding.png" width="64" height="64"> | Guozainengliangkuai Caomeibuding | `guozainengliangkuai_caomeibuding` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/guozainengliangkuai.lua` |
| <img src="./public/items/gushendediyuezhizheng.png" width="64" height="64"> | Gushendediyuezhizheng | `gushendediyuezhizheng` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/gushendediyuezhizheng.lua` |
| <img src="./public/items/haidaofazhang.png" width="64" height="64"> | Trượng Hải Tặc | `haidaofazhang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/haidaofazhang.lua` |
| <img src="./public/items/haigufashu.png" width="64" height="64"> | Haigufashu | `haigufashu` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/haigufashu.lua` |
| <img src="./public/items/haigutoukui.png" width="64" height="64"> | Haigutoukui | `haigutoukui` | Giáp | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/haishenbeike.png" width="64" height="64"> | Haishenbeike | `haishenbeike` | Phụ kiện | Khi trang bị bên người cho phép bước đi nhẹ nhàng trên mặt nước như đi trên đất liền | `scripts/prefabs/haishenbeike.lua` |
| <img src="./public/items/haishensanchaji.png" width="64" height="64"> | Haishensanchaji | `haishensanchaji` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/haishensanchaji.lua` |
| <img src="./public/items/haixingmozun.png" width="64" height="64"> | Haixingmozun | `haixingmozun` | Biểu tượng & Khác | Ma Tôn Hải Tinh | `scripts/prefabs/haixingmozun.lua` |
| <img src="./public/items/haixingmozun_a.png" width="64" height="64"> | Haixingmozun A | `haixingmozun_a` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/haixingmozun_b.png" width="64" height="64"> | Haixingmozun B | `haixingmozun_b` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/haixingmozun_c.png" width="64" height="64"> | Haixingmozun C | `haixingmozun_c` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/haixingmozun_er.png" width="64" height="64"> | Haixingmozun Er | `haixingmozun_er` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/haixingmozun_san.png" width="64" height="64"> | Haixingmozun San | `haixingmozun_san` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hamletinventory.png" width="64" height="64"> | Hamletinventory | `hamletinventory` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hanchanji.png" width="64" height="64"> | Gai Rùng Mình | `hanchanji` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hanchanji_plant.png" width="64" height="64"> | Cây Gai Rùng Mình | `hanchanji_plant` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hanchanji_plant_mangguotiantong.png" width="64" height="64"> | Hanchanji Plant Mangguotiantong | `hanchanji_plant_mangguotiantong` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hanshuangfuzhui.png" width="64" height="64"> | Hanshuangfuzhui | `hanshuangfuzhui` | Phụ kiện | Hoàn toàn miễn nhiễm với sốc nhiệt và sát thương từ lửa | `scripts/prefabs/hanshuangfuzhui.lua` |
| <img src="./public/items/hanshuangtiaoyu.png" width="64" height="64"> | Hanshuangtiaoyu | `hanshuangtiaoyu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hanshuangzhihua.png" width="64" height="64"> | Hanshuangzhihua | `hanshuangzhihua` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/heermosizhixue.png" width="64" height="64"> | Heermosizhixue | `heermosizhixue` | Phụ kiện | Sức mạnh ban phước từ vị thần phương Tây | `scripts/prefabs/heermosizhixue.lua` |
| <img src="./public/items/heishiyu.png" width="64" height="64"> | Heishiyu | `heishiyu` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_fish.lua` |
| <img src="./public/items/heitanjinli.png" width="64" height="64"> | Heitanjinli | `heitanjinli` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_fish.lua` |
| <img src="./public/items/heiyaoshi.png" width="64" height="64"> | Heiyaoshi | `heiyaoshi` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/heiyaoshi.lua` |
| <img src="./public/items/heiyaoshihudun.png" width="64" height="64"> | Heiyaoshihudun | `heiyaoshihudun` | Phụ kiện | Miễn nhiễm sát thương từ lửa, giảm 15% sát thương gánh chịu và chống lại hiệu ứng hất tung | `scripts/prefabs/heiyaoshihudun.lua` |
| <img src="./public/items/heiyaoshikulou.png" width="64" height="64"> | Heiyaoshikulou | `heiyaoshikulou` | Phụ kiện | Giúp bạn hoàn toàn miễn nhiễm với sát thương từ lửa | `scripts/prefabs/heiyaoshikulou.lua` |
| <img src="./public/items/heiyaoshisuohe.png" width="64" height="64"> | Heiyaoshisuohe | `heiyaoshisuohe` | Kho chứa | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/heiyaoshisuohe.lua` |
| <img src="./public/items/heiyaoshixia.png" width="64" height="64"> | Heiyaoshixia | `heiyaoshixia` | Kho chứa | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/heiyaoshixia.lua` |
| <img src="./public/items/heiyaoshiyaoshui.png" width="64" height="64"> | Heiyaoshiyaoshui | `heiyaoshiyaoshui` | Thức ăn & Thuốc | Miễn nhiễm sát thương từ lửa trong 16 phút | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/heiyaoshiyu.png" width="64" height="64"> | Heiyaoshiyu | `heiyaoshiyu` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_fish.lua` |
| <img src="./public/items/hongbaoshiguo.png" width="64" height="64"> | Quả Hồng Ngọc | `hongbaoshiguo` | Biểu tượng & Khác | Quả Hồng Ngọc | Chưa ghép được prefab |
| <img src="./public/items/hongbaoshishu.png" width="64" height="64"> | Cây Hồng Ngọc | `hongbaoshishu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hongbaoshishu_a_huiguangxiangshu.png" width="64" height="64"> | Hongbaoshishu A Huiguangxiangshu | `hongbaoshishu_a_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hongbaoshishu_huiguangxiangshu.png" width="64" height="64"> | Hongbaoshishu Huiguangxiangshu | `hongbaoshishu_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hongbaoshishu_normal.png" width="64" height="64"> | Hongbaoshishu Normal | `hongbaoshishu_normal` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hongbaoshishu_paopaogu.png" width="64" height="64"> | Hongbaoshishu Paopaogu | `hongbaoshishu_paopaogu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hongbaoshishu_short.png" width="64" height="64"> | Hongbaoshishu Short | `hongbaoshishu_short` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hongbaoshishu_stump.png" width="64" height="64"> | Hongbaoshishu Stump | `hongbaoshishu_stump` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hongbaoshishu_tall.png" width="64" height="64"> | Hongbaoshishu Tall | `hongbaoshishu_tall` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/hongsejingta.png" width="64" height="64"> | Hongsejingta | `hongsejingta` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/hongsejingta.lua` |
| <img src="./public/items/house_pieces.png" width="64" height="64"> | House Pieces | `house_pieces` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huajingshoupa.png" width="64" height="64"> | Huajingshoupa | `huajingshoupa` | Phụ kiện | Chiếc khăn tay mềm mại tỏa ra mùi thơm hoa cỏ thoang thoảng dịu êm | `scripts/prefabs/huajingshoupa.lua` |
| <img src="./public/items/huamumao.png" width="64" height="64"> | Huamumao | `huamumao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huangbaoshiguo.png" width="64" height="64"> | Quả Hoàng Ngọc | `huangbaoshiguo` | Biểu tượng & Khác | Quả Hoàng Ngọc | Chưa ghép được prefab |
| <img src="./public/items/huangbaoshishu.png" width="64" height="64"> | Cây Hoàng Ngọc | `huangbaoshishu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huangbaoshishu_a_huiguangxiangshu.png" width="64" height="64"> | Huangbaoshishu A Huiguangxiangshu | `huangbaoshishu_a_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huangbaoshishu_huiguangxiangshu.png" width="64" height="64"> | Huangbaoshishu Huiguangxiangshu | `huangbaoshishu_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huangbaoshishu_normal.png" width="64" height="64"> | Huangbaoshishu Normal | `huangbaoshishu_normal` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huangbaoshishu_paopaogu.png" width="64" height="64"> | Huangbaoshishu Paopaogu | `huangbaoshishu_paopaogu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huangbaoshishu_short.png" width="64" height="64"> | Huangbaoshishu Short | `huangbaoshishu_short` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huangbaoshishu_stump.png" width="64" height="64"> | Huangbaoshishu Stump | `huangbaoshishu_stump` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huangbaoshishu_tall.png" width="64" height="64"> | Huangbaoshishu Tall | `huangbaoshishu_tall` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huangfengfazhang.png" width="64" height="64"> | Huangfengfazhang | `huangfengfazhang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/huangfengfazhang.lua` |
| <img src="./public/items/huangfengzhaohuanzhang.png" width="64" height="64"> | Trượng Triệu Hồi Ong Vàng | `huangfengzhaohuanzhang` | Vũ khí | Đã đến lúc tìm kiếm vài chú ong chăm chỉ làm trợ thủ đắc lực rồi! | `scripts/prefabs/huangfengzhaohuanzhang.lua` |
| <img src="./public/items/huangjianingjiao.png" width="64" height="64"> | Huangjianingjiao | `huangjianingjiao` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/huangjianingjiao.lua` |
| <img src="./public/items/huangsejingta.png" width="64" height="64"> | Huangsejingta | `huangsejingta` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/huangsejingta.lua` |
| <img src="./public/items/huohuamobang.png" width="64" height="64"> | Trượng Tia Lửa | `huohuamobang` | Vũ khí | Bắn ra những tia lửa rực cháy khiến mục tiêu bị thiêu đốt | `scripts/prefabs/huohuamobang.lua` |
| <img src="./public/items/huolijiaozhi.png" width="64" height="64"> | Huolijiaozhi | `huolijiaozhi` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/ningjiaoshipin.lua` |
| <img src="./public/items/huoliyaoshuiping.png" width="64" height="64"> | Huoliyaoshuiping | `huoliyaoshuiping` | Thức ăn & Thuốc | Cung cấp thêm tốc độ di chuyển và hiệu ứng tinh thể mật ong, mang lại cảm giác ngọt ngào ấm áp như đang ngâm mình trong hồ mật | `scripts/prefabs/huoliyaoshuiping.lua` |
| <img src="./public/items/huoyanhua.png" width="64" height="64"> | Hoa Lửa | `huoyanhua` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huoyanhua_plant.png" width="64" height="64"> | Cây Hoa Lửa | `huoyanhua_plant` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huoyanhua_plant_kaochang.png" width="64" height="64"> | Huoyanhua Plant Kaochang | `huoyanhua_plant_kaochang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/huozhiyu.png" width="64" height="64"> | Huozhiyu | `huozhiyu` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/huozhiyu.lua` |
| <img src="./public/items/jiachongshacaozhi.png" width="64" height="64"> | Jiachongshacaozhi | `jiachongshacaozhi` | Phụ kiện | Tăng thêm 1 ô triệu hồi, đồng thời tăng 15% sát thương cho các đệ tử triệu hồi | `scripts/prefabs/jiachongshacaozhi.lua` |
| <img src="./public/items/jiakezhadan.png" width="64" height="64"> | Jiakezhadan | `jiakezhadan` | Vũ khí | Ném xuống nước để nổ cá, đồng thời tạo ra một vòng mồi thơm ngon thu hút bầy cá tụ tập | `scripts/prefabs/jiakezhadan.lua` |
| <img src="./public/items/jiangbing.png" width="64" height="64"> | Jiangbing | `jiangbing` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/jiangbing.lua` |
| <img src="./public/items/jianshiyaoshui.png" width="64" height="64"> | Jianshiyaoshui | `jianshiyaoshui` | Vũ khí | Tăng 20% sát thương cho cung tên và vũ khí dạng súng (không áp dụng cho vũ khí từ các mod khác) | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/jiaopuyaoshui.png" width="64" height="64"> | Jiaopuyaoshui | `jiaopuyaoshui` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/jici.png" width="64" height="64"> | Jici | `jici` | Vũ khí | Ngọn chiến thương sắc lẹm được cô đọng và đúc kết từ máu tươi cùng nỗi sợ hãi tột cùng | `scripts/prefabs/jici.lua` |
| <img src="./public/items/jici_longxichangqiang.png" width="64" height="64"> | Jici Longxichangqiang | `jici_longxichangqiang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/jici_qianzhi.png" width="64" height="64"> | Jici Qianzhi | `jici_qianzhi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/jidixue.png" width="64" height="64"> | Jidixue | `jidixue` | Phụ kiện | Ủng Cực Địa | `scripts/prefabs/jidixue.lua` |
| <img src="./public/items/jifengjiaozhuo.png" width="64" height="64"> | Vòng Chân Tật Phong | `jifengjiaozhuo` | Phụ kiện | Tăng 10% tốc độ di chuyển linh hoạt | `scripts/prefabs/jifengjiaozhuo.lua` |
| <img src="./public/items/jihuotanceqi_caomeibuding.png" width="64" height="64"> | Jihuotanceqi Caomeibuding | `jihuotanceqi_caomeibuding` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/jijiangong.png" width="64" height="64"> | Jijiangong | `jijiangong` | Vũ khí | Cung chiến độc đáo chế tác từ các mô liên kết gân cốt dẻo dai chắc chắn | `scripts/prefabs/mugong.lua` |
| <img src="./public/items/jiliaozhihe.png" width="64" height="64"> | Jiliaozhihe | `jiliaozhihe` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/jiliaozhihe.lua` |
| <img src="./public/items/jinding.png" width="64" height="64"> | Thỏi Vàng | `jinding` | Thức ăn & Thuốc | Giá trị của nó không hề nhỏ chút nào | `scripts/prefabs/jinding.lua` |
| <img src="./public/items/jingjiyaoshui.png" width="64" height="64"> | Jingjiyaoshui | `jingjiyaoshui` | Thức ăn & Thuốc | Khi bị tấn công, phản lại 33% sát thương cho kẻ địch, duy trì trong 5 phút | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/jinglingzhiyi.png" width="64" height="64"> | Jinglingzhiyi | `jinglingzhiyi` | Kho chứa | Đôi cánh nhỏ nhắn xinh xắn rực rỡ sắc màu của tinh linh | `scripts/prefabs/jinglingzhiyi.lua` |
| <img src="./public/items/jingong.png" width="64" height="64"> | Jingong | `jingong` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/jingzhuangti.png" width="64" height="64"> | Jingzhuangti | `jingzhuangti` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/jingzhuangti.lua` |
| <img src="./public/items/jinjia.png" width="64" height="64"> | Giáp Vàng | `jinjia` | Giáp | Bộ giáp sáng bóng rèn từ vàng ròng, có lẽ vẫn còn thiếu một viên đá quý lộng lẫy đính lên trên làm điểm nhấn | `scripts/prefabs/jinjia.lua` |
| <img src="./public/items/jinkuang.png" width="64" height="64"> | Quặng Vàng | `jinkuang` | Thức ăn & Thuốc | Được tôi luyện qua ngọn lửa rực hồng! | `scripts/prefabs/jinkuang.lua` |
| <img src="./public/items/jinkuojian.png" width="64" height="64"> | Jinkuojian | `jinkuojian` | Vũ khí | Thanh trường kiếm rèn từ vàng ròng kiêu sa | `scripts/prefabs/jinkuojian.lua` |
| <img src="./public/items/jinkuojian_bojinjian.png" width="64" height="64"> | Jinkuojian Bojinjian | `jinkuojian_bojinjian` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/jinshudaikou.png" width="64" height="64"> | Khóa Thắt Lưng Kim Loại | `jinshudaikou` | Phụ kiện | Tăng 5% tốc độ di chuyển khi mang theo bên người | `scripts/prefabs/jinshudaikou.lua` |
| <img src="./public/items/jinwangguan.png" width="64" height="64"> | Vương Miện Vàng | `jinwangguan` | Giáp | Chiếc vương miện đúc bằng vàng ròng, không ngừng lấp lánh thứ ánh kim quyền quý | `scripts/prefabs/jinwangguan.lua` |
| <img src="./public/items/jiqirenzhaohuanzhang.png" width="64" height="64"> | Jiqirenzhaohuanzhang | `jiqirenzhaohuanzhang` | Vũ khí | Triệu hồi các người máy mini tự động bắn pháo phế liệu vào kẻ thù | `scripts/prefabs/jiqirenzhaohuanzhang.lua` |
| <img src="./public/items/jitanzhishi.png" width="64" height="64"> | Jitanzhishi | `jitanzhishi` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yasuomokuai.lua` |
| <img src="./public/items/jixiejiaotie.png" width="64" height="64"> | Jixiejiaotie | `jixiejiaotie` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/jixiejiaotie.lua` |
| <img src="./public/items/jixiemoyan.png" width="64" height="64"> | Jixiemoyan | `jixiemoyan` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/jixiemoyan.lua` |
| <img src="./public/items/jixiexinbiao.png" width="64" height="64"> | Jixiexinbiao | `jixiexinbiao` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/jixiexinbiao.lua` |
| <img src="./public/items/judushaoping.png" width="64" height="64"> | Bình Độc Dược | `judushaoping` | Vũ khí | Bên trong chứa đầy chất độc chết người | `scripts/prefabs/judushaoping.lua` |
| <img src="./public/items/jumuji.png" width="64" height="64"> | Jumuji | `jumuji` | Kho chứa | Công cụ chuyên dụng để cưa cắt và chế tác các món đồ cơ khí đặc biệt | `scripts/prefabs/jumuji.lua` |
| <img src="./public/items/keyieye.png" width="64" height="64"> | Keyieye | `keyieye` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/keyieye.lua` |
| <img src="./public/items/know_blueprint.png" width="64" height="64"> | Know Blueprint | `know_blueprint` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/know_rareblueprint.png" width="64" height="64"> | Know Rareblueprint | `know_rareblueprint` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/konghuangxianglian.png" width="64" height="64"> | Dây Chuyền Hoảng Loạn | `konghuangxianglian` | Phụ kiện | Khi chịu đòn tấn công sẽ kích thích bản năng sinh tồn, mang lại lượng lớn tốc độ di chuyển trong chốc lát | `scripts/prefabs/konghuangxianglian.lua` |
| <img src="./public/items/kongjuzhihun.png" width="64" height="64"> | Kongjuzhihun | `kongjuzhihun` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/kongjuzhihun.lua` |
| <img src="./public/items/krm_image.png" width="64" height="64"> | Krm Image | `krm_image` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/kuaizoushizhong.png" width="64" height="64"> | Kuaizoushizhong | `kuaizoushizhong` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/kuaizoushizhong.lua` |
| <img src="./public/items/kuangxingzhinu.png" width="64" height="64"> | Kuangxingzhinu | `kuangxingzhinu` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/kuangxingzhinu.lua` |
| <img src="./public/items/kuijiaposun.png" width="64" height="64"> | Kuijiaposun | `kuijiaposun` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/kuoyinqi.png" width="64" height="64"> | Kuoyinqi | `kuoyinqi` | Phụ kiện | Định kỳ trò chuyện và vỗ về cây trồng trong phạm vi nhỏ xung quanh | `scripts/prefabs/kuoyinqi.lua` |
| <img src="./public/items/lajiaomian.png" width="64" height="64"> | Lajiaomian | `lajiaomian` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lanbaoshifazhang.png" width="64" height="64"> | Lanbaoshifazhang | `lanbaoshifazhang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/baoshifazhang.lua` |
| <img src="./public/items/lanbaoshiguo.png" width="64" height="64"> | Quả Lam Ngọc | `lanbaoshiguo` | Biểu tượng & Khác | Quả Lam Ngọc | Chưa ghép được prefab |
| <img src="./public/items/lanbaoshishu.png" width="64" height="64"> | Cây Lam Ngọc | `lanbaoshishu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lanbaoshishu_a_huiguangxiangshu.png" width="64" height="64"> | Lanbaoshishu A Huiguangxiangshu | `lanbaoshishu_a_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lanbaoshishu_huiguangxiangshu.png" width="64" height="64"> | Lanbaoshishu Huiguangxiangshu | `lanbaoshishu_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lanbaoshishu_normal.png" width="64" height="64"> | Lanbaoshishu Normal | `lanbaoshishu_normal` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lanbaoshishu_paopaogu.png" width="64" height="64"> | Lanbaoshishu Paopaogu | `lanbaoshishu_paopaogu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lanbaoshishu_short.png" width="64" height="64"> | Lanbaoshishu Short | `lanbaoshishu_short` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lanbaoshishu_stump.png" width="64" height="64"> | Lanbaoshishu Stump | `lanbaoshishu_stump` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lanbaoshishu_tall.png" width="64" height="64"> | Lanbaoshishu Tall | `lanbaoshishu_tall` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lansejingta.png" width="64" height="64"> | Lansejingta | `lansejingta` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/lansejingta.lua` |
| <img src="./public/items/laohuaxinhaofasheqi.png" width="64" height="64"> | Laohuaxinhaofasheqi | `laohuaxinhaofasheqi` | Vũ khí | Nó đang khẽ khàng vẫy gọi những thực thể băng giá bí ẩn từ cõi hư vô | `scripts/prefabs/laohuaxinhaofasheqi.lua` |
| <img src="./public/items/lastprisma.png" width="64" height="64"> | Lastprisma | `lastprisma` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/lastprism.lua` |
| <img src="./public/items/lengjinggongjiang.png" width="64" height="64"> | Lengjinggongjiang | `lengjinggongjiang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/lengjinggongjiang.lua` |
| <img src="./public/items/lengjinggongjiang_hulifazhang.png" width="64" height="64"> | Lengjinggongjiang Hulifazhang | `lengjinggongjiang_hulifazhang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lengjinggongjiang_xianzifazhang.png" width="64" height="64"> | Lengjinggongjiang Xianzifazhang | `lengjinggongjiang_xianzifazhang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lengjingshi.png" width="64" height="64"> | Lengjingshi | `lengjingshi` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/lengjingshi.lua` |
| <img src="./public/items/liandao_soul.png" width="64" height="64"> | Liandao Soul | `liandao_soul` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/liandao_soul.lua` |
| <img src="./public/items/lieweifazhang.png" width="64" height="64"> | Trượng Rạn Nứt Không Gian | `lieweifazhang` | Vũ khí | Sử dụng nó sẽ phải đánh đổi bằng một cái giá nho nhỏ | `scripts/prefabs/lieweifazhang.lua` |
| <img src="./public/items/liexi.png" width="64" height="64"> | Liexi | `liexi` | Vũ khí | Đừng căng thẳng thế, nó chỉ triệu hồi ra một chút xíu phản vật chất tối thôi mà | `scripts/prefabs/liexi.lua` |
| <img src="./public/items/lieyanhuobian.png" width="64" height="64"> | Lieyanhuobian | `lieyanhuobian` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/lieyanhuobian.lua` |
| <img src="./public/items/liliangzhihun.png" width="64" height="64"> | Liliangzhihun | `liliangzhihun` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/liliangzhihun.lua` |
| <img src="./public/items/linghuatianguang.png" width="64" height="64"> | Linghuatianguang | `linghuatianguang` | Sinh vật & Boss | Chuyển hóa mũi tên thành luồng điện quang siêu tốc, có thể tích lũy sức mạnh và tiến hóa không ngừng khi tiêu diệt Boss | `scripts/prefabs/linghuatianguang.lua` |
| <img src="./public/items/linghunbaoshi_fen.png" width="64" height="64"> | Linghunbaoshi Fen | `linghunbaoshi_fen` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/linghunbaoshi_hong.png" width="64" height="64"> | Linghunbaoshi Hong | `linghunbaoshi_hong` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/linghunbaoshi_huang.png" width="64" height="64"> | Linghunbaoshi Huang | `linghunbaoshi_huang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/linghunbaoshi_lan.png" width="64" height="64"> | Linghunbaoshi Lan | `linghunbaoshi_lan` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/linghunbaoshi_zi.png" width="64" height="64"> | Linghunbaoshi Zi | `linghunbaoshi_zi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/linghunjukuai.png" width="64" height="64"> | Linghunjukuai | `linghunjukuai` | Công cụ | Nén chặt những linh hồn phiêu dạt thành dạng khối rắn chắc | `scripts/prefabs/linghunjukuai.lua` |
| <img src="./public/items/lingyetianguang_jiuwujieyu.png" width="64" height="64"> | Lingyetianguang Jiuwujieyu | `lingyetianguang_jiuwujieyu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/liujintiantiyi.png" width="64" height="64"> | Liujintiantiyi | `liujintiantiyi` | Kho chứa | Thiên thể nghi mạ vàng chạm khắc cực kỳ tinh xảo, có khả năng quan sát sự luân chuyển của bốn mùa và sự thay đổi kỳ bí của các pha mặt trăng | `scripts/prefabs/liujintiantiyi.lua` |
| <img src="./public/items/liuxingfazhang.png" width="64" height="64"> | Liuxingfazhang | `liuxingfazhang` | Vũ khí | Triệu hồi một cơn mưa sao băng trút xuống đầu kẻ thù | `scripts/prefabs/liuxingfazhang.lua` |
| <img src="./public/items/liuxingfazhang_diyurongyanfazhang.png" width="64" height="64"> | Liuxingfazhang Diyurongyanfazhang | `liuxingfazhang_diyurongyanfazhang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/liuxingfazhang_molongzhixi.png" width="64" height="64"> | Liuxingfazhang Molongzhixi | `liuxingfazhang_molongzhixi` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/living_artifact.png" width="64" height="64"> | Giáp Sống Sinh Học | `living_artifact` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/living_artifact.lua` |
| <img src="./public/items/lucky_equipslots.png" width="64" height="64"> | Lucky Equipslots | `lucky_equipslots` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/luokuang.png" width="64" height="64"> | Luokuang | `luokuang` | Kho chứa | Rương siêu to khổng lồ, tự động thu thập vật phẩm tương tự xung quanh khi đóng mở; khảm thêm Hoàng Ngọc vào rương sẽ giúp mở rộng tối đa phạm vi thu thập | `scripts/prefabs/luokuang.lua` |
| <img src="./public/items/luokuang_fudianpaipai.png" width="64" height="64"> | Luokuang Fudianpaipai | `luokuang_fudianpaipai` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/luokuang_kuluomi.png" width="64" height="64"> | Luokuang Kuluomi | `luokuang_kuluomi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/luokuang_liwutuiche.png" width="64" height="64"> | Luokuang Liwutuiche | `luokuang_liwutuiche` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/luokuang_qingzhuxia.png" width="64" height="64"> | Luokuang Qingzhuxia | `luokuang_qingzhuxia` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/luokuang_zhengdianpaipai.png" width="64" height="64"> | Luokuang Zhengdianpaipai | `luokuang_zhengdianpaipai` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/luyutanhua.png" width="64" height="64"> | Luyutanhua | `luyutanhua` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/luyutanhua.lua` |
| <img src="./public/items/luyutanhua_taoyao.png" width="64" height="64"> | Luyutanhua Taoyao | `luyutanhua_taoyao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lvbaoshiguo.png" width="64" height="64"> | Quả Lục Ngọc | `lvbaoshiguo` | Biểu tượng & Khác | Quả Lục Ngọc | Chưa ghép được prefab |
| <img src="./public/items/lvbaoshishu.png" width="64" height="64"> | Cây Lục Ngọc | `lvbaoshishu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lvbaoshishu_a_huiguangxiangshu.png" width="64" height="64"> | Lvbaoshishu A Huiguangxiangshu | `lvbaoshishu_a_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lvbaoshishu_huiguangxiangshu.png" width="64" height="64"> | Lvbaoshishu Huiguangxiangshu | `lvbaoshishu_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lvbaoshishu_normal.png" width="64" height="64"> | Lvbaoshishu Normal | `lvbaoshishu_normal` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lvbaoshishu_paopaogu.png" width="64" height="64"> | Lvbaoshishu Paopaogu | `lvbaoshishu_paopaogu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lvbaoshishu_short.png" width="64" height="64"> | Lvbaoshishu Short | `lvbaoshishu_short` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lvbaoshishu_stump.png" width="64" height="64"> | Lvbaoshishu Stump | `lvbaoshishu_stump` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lvbaoshishu_tall.png" width="64" height="64"> | Lvbaoshishu Tall | `lvbaoshishu_tall` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lvdimao.png" width="64" height="64"> | Lvdimao | `lvdimao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/lvsejingta.png" width="64" height="64"> | Tháp Pha Lê Rừng Rậm | `lvsejingta` | Công trình | Tháp pha lê tượng trưng cho rừng sâu, có thể dùng Gương Ma Thuật để dịch chuyển nhanh đến đây | `scripts/prefabs/lvsejingta.lua` |
| <img src="./public/items/lvzhouxia.png" width="64" height="64"> | Lvzhouxia | `lvzhouxia` | Kho chứa | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/lvzhouxia.lua` |
| <img src="./public/items/mandelacaodiaoxiang.png" width="64" height="64"> | Mandelacaodiaoxiang | `mandelacaodiaoxiang` | Phụ kiện | Sát thương gánh chịu chuyển hóa thành án phạt rút máu từ từ, đồng thời tự động hồi phục máu theo thời gian | `scripts/prefabs/mandelacaodiaoxiang.lua` |
| <img src="./public/items/matitie.png" width="64" height="64"> | Matitie | `matitie` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/meiguideng_ningyunyujita.png" width="64" height="64"> | Meiguideng Ningyunyujita | `meiguideng_ningyunyujita` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/meiguilingyao.png" width="64" height="64"> | Meiguilingyao | `meiguilingyao` | Phụ kiện | Thứ nằm bên trong bình thực chất không phải là đóa hoa hồng tự nhiên | `scripts/prefabs/meiguilingyao.lua` |
| <img src="./public/items/mengyanfu.png" width="64" height="64"> | Mengyanfu | `mengyanfu` | Vũ khí | Đòn tấn công tàn nhẫn giáng thẳng vào tận sâu thẳm linh hồn kẻ thù | `scripts/prefabs/mengyanfu.lua` |
| <img src="./public/items/mengyanfu_anjin.png" width="64" height="64"> | Mengyanfu Anjin | `mengyanfu_anjin` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/mengyangao.png" width="64" height="64"> | Mengyangao | `mengyangao` | Vũ khí | Khai quật thứ ác mộng kinh hoàng ẩn giấu sâu dưới lòng đất | `scripts/prefabs/mengyangao.lua` |
| <img src="./public/items/mengyangao_anjin.png" width="64" height="64"> | Mengyangao Anjin | `mengyangao_anjin` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/mianhuatang.png" width="64" height="64"> | Mianhuatang | `mianhuatang` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/mianhuatang.lua` |
| <img src="./public/items/miaodao3.png" width="64" height="64"> | Miaodao3 | `miaodao3` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/miaodao.lua` |
| <img src="./public/items/miaodao3_dianwanmaomao.png" width="64" height="64"> | Miaodao3 Dianwanmaomao | `miaodao3_dianwanmaomao` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/minisha.png" width="64" height="64"> | Minisha | `minisha` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/minisha.lua` |
| <img src="./public/items/minjieyaoshui.png" width="64" height="64"> | Minjieyaoshui | `minjieyaoshui` | Thức ăn & Thuốc | Tăng 25% tốc độ di chuyển trong 10 phút | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/mitangbinggan.png" width="64" height="64"> | Mitangbinggan | `mitangbinggan` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/mitangbinggan.lua` |
| <img src="./public/items/mofalimao.png" width="64" height="64"> | Mofalimao | `mofalimao` | Phụ kiện | Giúp bạn lĩnh hội những bài học vỡ lòng về ma thuật nguyên tố căn bản | `scripts/prefabs/mofalimao.lua` |
| <img src="./public/items/mofameigui.png" width="64" height="64"> | Mofameigui | `mofameigui` | Vũ khí | Bắn ra những bông hoa ma thuật có khả năng phát nổ và tách thành vô số cánh hoa nhọn hoắt | `scripts/prefabs/mofameigui.lua` |
| <img src="./public/items/mofazhishi.png" width="64" height="64"> | Mofazhishi | `mofazhishi` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yasuomokuai.lua` |
| <img src="./public/items/moguangjian.png" width="64" height="64"> | Kiếm Ánh Sáng Suy Tàn | `moguangjian` | Vũ khí | Khi tấn công sẽ tạo ra các vết chém bóng tối chớp nhoáng gần đầu mũi kiếm để xé xác mục tiêu | `scripts/prefabs/moguangjian.lua` |
| <img src="./public/items/moguangjian_aoshuzhifeng.png" width="64" height="64"> | Moguangjian Aoshuzhifeng | `moguangjian_aoshuzhifeng` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/moguchangmao.png" width="64" height="64"> | Thương Nấm | `moguchangmao` | Vũ khí | Sắc bén hơn gấp bội, gây thêm 40 sát thương chuẩn với tầm đánh xa hơn hẳn | `scripts/prefabs/moguchangmao.lua` |
| <img src="./public/items/moguchangmao_cangting.png" width="64" height="64"> | Moguchangmao Cangting | `moguchangmao_cangting` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/moguchangmao_qicai.png" width="64" height="64"> | Moguchangmao Qicai | `moguchangmao_qicai` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/moguchangmao_zhuming.png" width="64" height="64"> | Moguchangmao Zhuming | `moguchangmao_zhuming` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/mogutang.png" width="64" height="64"> | Mogutang | `mogutang` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/mogutang.lua` |
| <img src="./public/items/mojing.png" width="64" height="64"> | Gương Ma Thuật | `mojing` | Nguyên liệu & Vật phẩm | Chỉ cần nhìn chằm chằm vào chiếc gương là có thể dịch chuyển trở về 'nhà' | `scripts/prefabs/mojing.lua` |
| <img src="./public/items/mojing_bingxuejing.png" width="64" height="64"> | Mojing Bingxuejing | `mojing_bingxuejing` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/mokuang.png" width="64" height="64"> | Quặng Ma Đạo | `mokuang` | Thức ăn & Thuốc | Tỏa ra thứ chướng khí khiến bất kỳ ai gần cận cũng phải rùng mình khó chịu | `scripts/prefabs/mokuang.lua` |
| <img src="./public/items/mokuangding.png" width="64" height="64"> | Thỏi Ma Đạo | `mokuangding` | Thức ăn & Thuốc | Tỏa ra thứ chướng khí khiến bất kỳ ai gần cận cũng phải rùng mình khó chịu | `scripts/prefabs/mokuangding.lua` |
| <img src="./public/items/molihua.png" width="64" height="64"> | Molihua | `molihua` | Phụ kiện | Tự động sử dụng lọ thuốc mana trong hành trang mỗi khi năng lượng ma pháp cạn kiệt | `scripts/prefabs/molihua.lua` |
| <img src="./public/items/molijingshi.png" width="64" height="64"> | Molijingshi | `molijingshi` | Thức ăn & Thuốc | Tinh thạch tổng hợp chứa đầy ma lực, bên trong có dòng năng lượng kỳ bí tuôn chảy | `scripts/prefabs/molijingshi.lua` |
| <img src="./public/items/moliyaoshui.png" width="64" height="64"> | Moliyaoshui | `moliyaoshui` | Thức ăn & Thuốc | Lọ thuốc mana bình dân nhất, lập tức hồi phục 50 năng lượng ma pháp khi uống | `scripts/prefabs/moliyaoshui.lua` |
| <img src="./public/items/molizaishengyaoshui.png" width="64" height="64"> | Molizaishengyaoshui | `molizaishengyaoshui` | Thức ăn & Thuốc | Hồi phục năng lượng ma pháp với tốc độ cực nhanh trong 5 phút, bất kể có trang bị vũ khí ma thuật hay không | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/moluqishitoukai.png" width="64" height="64"> | Moluqishitoukai | `moluqishitoukai` | Giáp | Bạn đã bắt đầu cảm nhận được luồng ma lực đang tuôn chảy xung quanh | `scripts/prefabs/moluqishitoukai.lua` |
| <img src="./public/items/moluqishitoukai_denghuazhaohuo.png" width="64" height="64"> | Moluqishitoukai Denghuazhaohuo | `moluqishitoukai_denghuazhaohuo` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/moluqishitoukai_zhizihuaguan.png" width="64" height="64"> | Moluqishitoukai Zhizihuaguan | `moluqishitoukai_zhizihuaguan` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/monengxiongjia.png" width="64" height="64"> | Monengxiongjia | `monengxiongjia` | Giáp | Bạn đã bắt đầu cảm nhận được luồng ma lực đang tuôn chảy xung quanh | `scripts/prefabs/monengxiongjia.lua` |
| <img src="./public/items/monengxiongjia_denghuazhaohuo.png" width="64" height="64"> | Monengxiongjia Denghuazhaohuo | `monengxiongjia_denghuazhaohuo` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/monengyaoshui.png" width="64" height="64"> | Monengyaoshui | `monengyaoshui` | Thức ăn & Thuốc | Tăng 20% sát thương cho vũ khí ma thuật (không áp dụng cho vũ khí từ các mod khác) | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/monster_book.png" width="64" height="64"> | Bách Khoa Quái Vật | `monster_book` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/moranshan_qingluandanfeng.png" width="64" height="64"> | Moranshan Qingluandanfeng | `moranshan_qingluandanfeng` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/mozhang.png" width="64" height="64"> | Mozhang | `mozhang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/mozhangceshi.lua` |
| <img src="./public/items/mozhangping.png" width="64" height="64"> | Mozhangping | `mozhangping` | Phụ kiện | Giảm lượng ma lực tiêu hao khi thi triển ma thuật, đồng thời đòn đánh sẽ ngăn chặn mục tiêu hồi phục máu và khiến chúng trúng độc sâu | `scripts/prefabs/mozhangping.lua` |
| <img src="./public/items/mugong.png" width="64" height="64"> | Mugong | `mugong` | Vũ khí | Cung Gỗ | `scripts/prefabs/mugong.lua` |
| <img src="./public/items/mujian.png" width="64" height="64"> | Kiếm Gỗ | `mujian` | Vũ khí | Thanh trường kiếm rèn từ gỗ | `scripts/prefabs/mujian.lua` |
| <img src="./public/items/nailiyaoshui.png" width="64" height="64"> | Nailiyaoshui | `nailiyaoshui` | Thức ăn & Thuốc | Giảm 10% sát thương gánh chịu trong 10 phút | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/nanguahujia.png" width="64" height="64"> | Giáp Tấm Bí Ngô | `nanguahujia` | Giáp | Dùng bí ngô làm áo giáp bảo vệ cơ thể, mặc bộ này có chắc là không bị người ta nhầm là quả bí ngô rồi đem nấu chín không đấy? (Hiệu ứng trang bị: tự phát sáng) | `scripts/prefabs/nanguahujia.lua` |
| <img src="./public/items/nanguapai.png" width="64" height="64"> | Nanguapai | `nanguapai` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/nanguapai.lua` |
| <img src="./public/items/nanguatoukui.png" width="64" height="64"> | Mũ Giáp Bí Ngô | `nanguatoukui` | Giáp | Đội quả bí ngô lên để bảo vệ đầu (Hiệu ứng trang bị: tự phát sáng) | `scripts/prefabs/nanguatoukui.lua` |
| <img src="./public/items/nianye.png" width="64" height="64"> | Nianye | `nianye` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/nianye.lua` |
| <img src="./public/items/nianyeland.png" width="64" height="64"> | Lót Sàn Chất Nhầy | `nianyeland` | Công trình | Chẳng mấy chốc, lớp chất nhầy này sẽ tự tụ tập lại thành đủ loại Slime sinh động | `scripts/prefabs/nianyeland.lua` |
| <img src="./public/items/nichonglin.png" width="64" height="64"> | Nichonglin | `nichonglin` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/nichonglin.lua` |
| <img src="./public/items/niuhuang.png" width="64" height="64"> | Niuhuang | `niuhuang` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/niuhuang.lua` |
| <img src="./public/items/nuanshoubao.png" width="64" height="64"> | Nuanshoubao | `nuanshoubao` | Phụ kiện | Hoàn toàn miễn nhiễm với cái lạnh thấu xương và gia tăng sức chống chịu hiệu ứng đóng băng | `scripts/prefabs/nuanshoubao.lua` |
| <img src="./public/items/nuqiyaoshui.png" width="64" height="64"> | Nuqiyaoshui | `nuqiyaoshui` | Thức ăn & Thuốc | Tăng 10% lượng sát thương gây ra trong 8 phút | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/opticstaff.png" width="64" height="64"> | Trượng Ma Nhãn | `opticstaff` | Vũ khí | Triệu hồi Song Tử Ma Nhãn sát cánh chiến đấu bên bạn | `scripts/prefabs/opticstaff.lua` |
| <img src="./public/items/opticstaff_kesulu.png" width="64" height="64"> | Opticstaff Kesulu | `opticstaff_kesulu` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/peigen.png" width="64" height="64"> | Peigen | `peigen` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/peigen.lua` |
| <img src="./public/items/pingzhuangemeng.png" width="64" height="64"> | Pingzhuangemeng | `pingzhuangemeng` | Kho chứa | Phong ấn những cơn ác mộng chốn sâu thẳm | `scripts/prefabs/pingzhuangemeng.lua` |
| <img src="./public/items/plant_guanmu.png" width="64" height="64"> | Plant Guanmu | `plant_guanmu` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/plant_lavaable.lua` |
| <img src="./public/items/plant_huojingji.png" width="64" height="64"> | Plant Huojingji | `plant_huojingji` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/plant_lavaable.lua` |
| <img src="./public/items/plant_juanxu.png" width="64" height="64"> | Plant Juanxu | `plant_juanxu` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/plant_lavaable.lua` |
| <img src="./public/items/plant_qiujing.png" width="64" height="64"> | Plant Qiujing | `plant_qiujing` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/plant_lavaable.lua` |
| <img src="./public/items/plant_zonglv.png" width="64" height="64"> | Plant Zonglv | `plant_zonglv` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/plant_lavaable.lua` |
| <img src="./public/items/playerhouse_city.png" width="64" height="64"> | Playerhouse City | `playerhouse_city` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/playerhouse_city.lua` |
| <img src="./public/items/posuifangzhou.png" width="64" height="64"> | Posuifangzhou | `posuifangzhou` | Vũ khí | Một thanh kiếm cũ kỹ han gỉ từng chiến đấu chống lại ma quỷ trên thế giới này, giờ đây nó đã sẵn sàng tái xuất thêm một lần nữa | `scripts/prefabs/posuifangzhou.lua` |
| <img src="./public/items/posuifangzhou_aoshagong.png" width="64" height="64"> | Posuifangzhou Aoshagong | `posuifangzhou_aoshagong` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/pusaike.png" width="64" height="64"> | Pusaike | `pusaike` | Vũ khí | Gây sát thương trực tiếp lên linh hồn kẻ địch | `scripts/prefabs/pusaike.lua` |
| <img src="./public/items/pusaike_heiyuan.png" width="64" height="64"> | Pusaike Heiyuan | `pusaike_heiyuan` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/pusaike_yinghualuanwu.png" width="64" height="64"> | Pusaike Yinghualuanwu | `pusaike_yinghualuanwu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/qiansan.png" width="64" height="64"> | Qiansan | `qiansan` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/qiansan-2.png" width="64" height="64"> | Qiansan-2 | `qiansan-2` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/qiansan-3.png" width="64" height="64"> | Qiansan-3 | `qiansan-3` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/qiansan-4.png" width="64" height="64"> | Qiansan-4 | `qiansan-4` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/qingjiu.png" width="64" height="64"> | Qingjiu | `qingjiu` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/qingjiu.lua` |
| <img src="./public/items/qiulong.png" width="64" height="64"> | Qiulong | `qiulong` | Vũ khí | Thần thú có sừng, nhân gian suy tôn là Cầu Long | `scripts/prefabs/qiulongshan.lua` |
| <img src="./public/items/qua.png" width="64" height="64"> | Qua | `qua` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_eguai.lua` |
| <img src="./public/items/quanzhijuzhu.png" width="64" height="64"> | Quanzhijuzhu | `quanzhijuzhu` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/quanzhijuzhu.lua` |
| <img src="./public/items/qub.png" width="64" height="64"> | Qub | `qub` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/quc.png" width="64" height="64"> | Quc | `quc` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/quchongtang.png" width="64" height="64"> | Quchongtang | `quchongtang` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/quchongtang.lua` |
| <img src="./public/items/qud.png" width="64" height="64"> | Qud | `qud` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/que.png" width="64" height="64"> | Que | `que` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/queling.png" width="64" height="64"> | Queling | `queling` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/rimu.png" width="64" height="64"> | Rimu | `rimu` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/rimu.lua` |
| <img src="./public/items/ronghejinshujiezhi.png" width="64" height="64"> | Ronghejinshujiezhi | `ronghejinshujiezhi` | Phụ kiện | Đòn đánh gây thêm lượng sát thương chuẩn bằng 20% chỉ số tấn công của vũ khí | `scripts/prefabs/ronghejinshujiezhi.lua` |
| <img src="./public/items/ronghuozhinu.png" width="64" height="64"> | Ronghuozhinu | `ronghuozhinu` | Vũ khí | Tự động thắp lửa, chuyển hóa mũi tên gỗ thông thường thành những mũi tên rực cháy thiêu đốt kẻ địch | `scripts/prefabs/mugong.lua` |
| <img src="./public/items/ronglu.png" width="64" height="64"> | Lò Luyện Kim | `ronglu` | Công trình | Hãy dùng ngọn lửa rực cháy để nung luyện khoáng sản của bạn! | `scripts/prefabs/ronglu.lua` |
| <img src="./public/items/ronglu_baihuyunque.png" width="64" height="64"> | Ronglu Baihuyunque | `ronglu_baihuyunque` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/ronglu_huohu.png" width="64" height="64"> | Ronglu Huohu | `ronglu_huohu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/ronglu_huohuwei.png" width="64" height="64"> | Ronglu Huohuwei | `ronglu_huohuwei` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/rongyangao.png" width="64" height="64"> | Rongyangao | `rongyangao` | Vũ khí | Thợ Mỏ Dung Nham | `scripts/prefabs/rongyangao.lua` |
| <img src="./public/items/ruchongweijin.png" width="64" height="64"> | Ruchongweijin | `ruchongweijin` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/ruchongweijin.lua` |
| <img src="./public/items/ruoxiaozhiliaoyaoshui.png" width="64" height="64"> | Thuốc Hồi Máu Nhỏ | `ruoxiaozhiliaoyaoshui` | Thức ăn & Thuốc | Lọ bình máu bình dân nhất, lập tức hồi phục 50 máu khi uống | `scripts/prefabs/ruoxiaozhiliaoyaoshui.lua` |
| <img src="./public/items/senzhimao.png" width="64" height="64"> | Senzhimao | `senzhimao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shachixianglian.png" width="64" height="64"> | Dây Chuyền Răng Cá Mập | `shachixianglian` | Phụ kiện | Xuyên thấu 5% giảm sát thương của mục tiêu | `scripts/prefabs/shachixianglian.lua` |
| <img src="./public/items/shamojingta.png" width="64" height="64"> | Shamojingta | `shamojingta` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_jingta.lua` |
| <img src="./public/items/shamomao.png" width="64" height="64"> | Shamomao | `shamomao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shandianxue.png" width="64" height="64"> | Shandianxue | `shandianxue` | Phụ kiện | Tốc độ chớp giật kinh hoàng | `scripts/prefabs/shandianxue.lua` |
| <img src="./public/items/shanliangshi.png" width="64" height="64"> | Shanliangshi | `shanliangshi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shanyaogen.png" width="64" height="64"> | Rễ Lấp Lánh | `shanyaogen` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shanyaogen_plant.png" width="64" height="64"> | Cây Rễ Lấp Lánh | `shanyaogen_plant` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shanyaogen_plant_huangyoumianbao.png" width="64" height="64"> | Shanyaogen Plant Huangyoumianbao | `shanyaogen_plant_huangyoumianbao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shanyaojinli.png" width="64" height="64"> | Shanyaojinli | `shanyaojinli` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shanyaonaiyounongtang.png" width="64" height="64"> | Shanyaonaiyounongtang | `shanyaonaiyounongtang` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shanzi.png" width="64" height="64"> | Shanzi | `shanzi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shayaxianglian.png" width="64" height="64"> | Shayaxianglian | `shayaxianglian` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shachixianglian.lua` |
| <img src="./public/items/shayuqi.png" width="64" height="64"> | Shayuqi | `shayuqi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shengdanbuding.png" width="64" height="64"> | Shengdanbuding | `shengdanbuding` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shengdanbuding.lua` |
| <img src="./public/items/shengdanshujian.png" width="64" height="64"> | Shengdanshujian | `shengdanshujian` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shengdanshujian.lua` |
| <img src="./public/items/shengdanshujian_changbingkatongshujian.png" width="64" height="64"> | Shengdanshujian Changbingkatongshujian | `shengdanshujian_changbingkatongshujian` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shengdanshujian_duanbingkatongshujian.png" width="64" height="64"> | Shengdanshujian Duanbingkatongshujian | `shengdanshujian_duanbingkatongshujian` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shengmingjiaozhi.png" width="64" height="64"> | Shengmingjiaozhi | `shengmingjiaozhi` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/ningjiaoshipin.lua` |
| <img src="./public/items/shengmingshuijing.png" width="64" height="64"> | Tim Pha Lê | `shengmingshuijing` | Thức ăn & Thuốc | Đá pha lê sinh mệnh bản mô phỏng, không có tác dụng tăng lượng máu tối đa | `scripts/prefabs/shengmingshuijing.lua` |
| <img src="./public/items/shengyupian.png" width="64" height="64"> | Shengyupian | `shengyupian` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shengyupian.lua` |
| <img src="./public/items/shenhaichuxu.png" width="64" height="64"> | Shenhaichuxu | `shenhaichuxu` | Sinh vật & Boss | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/kraken.lua` |
| <img src="./public/items/shenshengding.png" width="64" height="64"> | Shenshengding | `shenshengding` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shenshengding.lua` |
| <img src="./public/items/shenshenghujia.png" width="64" height="64"> | Shenshenghujia | `shenshenghujia` | Giáp | Bộ giáp tấm kiên cố rực sáng với nguồn thánh lực thiêng liêng đượm trào | `scripts/prefabs/shenshenghujia.lua` |
| <img src="./public/items/shenshenghujia_shuangyushengkai.png" width="64" height="64"> | Shenshenghujia Shuangyushengkai | `shenshenghujia_shuangyushengkai` | Giáp | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shenshengtoukui.png" width="64" height="64"> | Shenshengtoukui | `shenshengtoukui` | Giáp | Chiếc mũ giáp rực sáng với nguồn thánh lực thiêng liêng đượm trào | `scripts/prefabs/shenshengtoukui.lua` |
| <img src="./public/items/shenshengtoukui_shuangyushengkai.png" width="64" height="64"> | Shenshengtoukui Shuangyushengkai | `shenshengtoukui_shuangyushengkai` | Giáp | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shenyuan.png" width="64" height="64"> | Shenyuan | `shenyuan` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shenyuanerliao.png" width="64" height="64"> | Shenyuanerliao | `shenyuanerliao` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shenyuanerliao.lua` |
| <img src="./public/items/sheshouxunzhang.png" width="64" height="64"> | Sheshouxunzhang | `sheshouxunzhang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/sheshouxunzhang.lua` |
| <img src="./public/items/shipin_equipslots.png" width="64" height="64"> | Shipin Equipslots | `shipin_equipslots` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shipingezi_equipslots.png" width="64" height="64"> | Shipingezi Equipslots | `shipingezi_equipslots` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shipinlan.png" width="64" height="64"> | Shipinlan | `shipinlan` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shixiaotanceqi.png" width="64" height="64"> | Shixiaotanceqi | `shixiaotanceqi` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shixiaotanceqi.lua` |
| <img src="./public/items/shiyuzhihun.png" width="64" height="64"> | Shiyuzhihun | `shiyuzhihun` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shiyuzhihun.lua` |
| <img src="./public/items/shizixianglian.png" width="64" height="64"> | Shizixianglian | `shizixianglian` | Phụ kiện | Người là vị thần dưới ánh trăng, còn ta mãi mãi là tín đồ trung thành của Người | `scripts/prefabs/shizixianglian.lua` |
| <img src="./public/items/shougezheyixing.png" width="64" height="64"> | Shougezheyixing | `shougezheyixing` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/shoulieyaoshui.png" width="64" height="64"> | Shoulieyaoshui | `shoulieyaoshui` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/shuanghuaxue.png" width="64" height="64"> | Shuanghuaxue | `shuanghuaxue` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shuanghuaxue.lua` |
| <img src="./public/items/shuipingzuo.png" width="64" height="64"> | Shuipingzuo | `shuipingzuo` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shuipingzuo.lua` |
| <img src="./public/items/shuishangpiaoyaoshui.png" width="64" height="64"> | Shuishangpiaoyaoshui | `shuishangpiaoyaoshui` | Thức ăn & Thuốc | Cho phép khả năng đi trên mặt nước trong 15 phút | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/shuolan.png" width="64" height="64"> | Shuolan | `shuolan` | Vũ khí | Bắn ra những đóa lan rực rỡ có khả năng phát nổ và phân tách thành các cánh hoa tự động đuổi theo mục tiêu | `scripts/prefabs/shuolan.lua` |
| <img src="./public/items/shuxia.png" width="64" height="64"> | Shuxia | `shuxia` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shuxia.lua` |
| <img src="./public/items/shuyu.png" width="64" height="64"> | Shuyu | `shuyu` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/shuyu.lua` |
| <img src="./public/items/silingjuanzhou.png" width="64" height="64"> | Silingjuanzhou | `silingjuanzhou` | Phụ kiện | Tăng thêm 1 ô triệu hồi đệ tử | `scripts/prefabs/silingjuanzhou.lua` |
| <img src="./public/items/sishisheng_chun.png" width="64" height="64"> | Sishisheng Chun | `sishisheng_chun` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/sishisheng_dong.png" width="64" height="64"> | Sishisheng Dong | `sishisheng_dong` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/sishisheng_qiu.png" width="64" height="64"> | Sishisheng Qiu | `sishisheng_qiu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/sishisheng_xia.png" width="64" height="64"> | Sishisheng Xia | `sishisheng_xia` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/siwangcao.png" width="64" height="64"> | Cỏ Tử Vong | `siwangcao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/siwangcao_plant.png" width="64" height="64"> | Cây Cỏ Tử Vong | `siwangcao_plant` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/siwangcao_plant_qiaokelita.png" width="64" height="64"> | Siwangcao Plant Qiaokelita | `siwangcao_plant_qiaokelita` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/slime_baozangdai.png" width="64" height="64"> | Slime Baozangdai | `slime_baozangdai` | Kho chứa | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/slime_baozangdai.lua` |
| <img src="./public/items/slime_hat.png" width="64" height="64"> | Slime Hat | `slime_hat` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/slime_hat.lua` |
| <img src="./public/items/slimecrown.png" width="64" height="64"> | Slimecrown | `slimecrown` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/slimecrown.lua` |
| <img src="./public/items/storage_robot.png" width="64" height="64"> | Storage Robot | `storage_robot` | Biểu tượng & Khác | Người máy WX-78 phiên bản đặc biệt từ Terraria, phạm vi thu thập rộng hơn và làm việc hiệu quả hơn! | Chưa ghép được prefab |
| <img src="./public/items/suanfen.png" width="64" height="64"> | Suanfen | `suanfen` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/suiliehexin.png" width="64" height="64"> | Suiliehexin | `suiliehexin` | Phụ kiện | Tăng thêm 25% sát thương gây ra và 10% giảm sát thương gánh chịu | `scripts/prefabs/hexinshipin.lua` |
| <img src="./public/items/tailaren.png" width="64" height="64"> | Tailaren | `tailaren` | Vũ khí | Thanh kiếm tuyệt thế được tôi luyện từ linh khí ngàn năm của nhật nguyệt tinh hoa | `scripts/prefabs/tailaren.lua` |
| <img src="./public/items/tailaren_baonuegong.png" width="64" height="64"> | Tailaren Baonuegong | `tailaren_baonuegong` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tailaren_gaobaihuashu.png" width="64" height="64"> | Tailaren Gaobaihuashu | `tailaren_gaobaihuashu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tailaren_tierfeng.png" width="64" height="64"> | Tailaren Tierfeng | `tailaren_tierfeng` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tailashanyaoxue.png" width="64" height="64"> | Tailashanyaoxue | `tailashanyaoxue` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tailashanyaoxue.lua` |
| <img src="./public/items/taishichaomian.png" width="64" height="64"> | Taishichaomian | `taishichaomian` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/taishichaomian.lua` |
| <img src="./public/items/taitanyaoshui.png" width="64" height="64"> | Taitanyaoshui | `taitanyaoshui` | Thức ăn & Thuốc | Nhận trạng thái Bá Thể trong 6 phút (miễn nhiễm khựng lại hoặc làm choáng khi chịu sát thương) | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/taiyanghua.png" width="64" height="64"> | Taiyanghua | `taiyanghua` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/taiyanghua.lua` |
| <img src="./public/items/taiyanghua_place_pisa.png" width="64" height="64"> | Taiyanghua Place Pisa | `taiyanghua_place_pisa` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/taiyanghuadangao.png" width="64" height="64"> | Taiyanghuadangao | `taiyanghuadangao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/taiyanghuazhongzi.png" width="64" height="64"> | Taiyanghuazhongzi | `taiyanghuazhongzi` | Cây trồng & Tài nguyên | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/taiyanghua_place.lua` |
| <img src="./public/items/tanceqidizuo.png" width="64" height="64"> | Tanceqidizuo | `tanceqidizuo` | Kho chứa | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_tanceqi.lua` |
| <img src="./public/items/taolu.png" width="64" height="64"> | Taolu | `taolu` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/trhulu.lua` |
| <img src="./public/items/terra.png" width="64" height="64"> | Terra | `terra` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/terraprisma.png" width="64" height="64"> | Terraprisma | `terraprisma` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/terraprisma.lua` |
| <img src="./public/items/terrariazenith.png" width="64" height="64"> | Terrariazenith | `terrariazenith` | Vũ khí | Đã đến điểm kết thúc cho chặng đường phiêu lưu này rồi sao? | `scripts/prefabs/terrariazenith.lua` |
| <img src="./public/items/tianjigongzuotai.png" width="64" height="64"> | Tianjigongzuotai | `tianjigongzuotai` | Công trình | Tổ hợp công nghệ tối tân | `scripts/prefabs/tianjigongzuotai.lua` |
| <img src="./public/items/tianjigongzuotai_xuezhaozhi.png" width="64" height="64"> | Tianjigongzuotai Xuezhaozhi | `tianjigongzuotai_xuezhaozhi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tianlanshi.png" width="64" height="64"> | Tianlanshi | `tianlanshi` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tianlanshi.lua` |
| <img src="./public/items/tianlanshi_jixuanyou.png" width="64" height="64"> | Tianlanshi Jixuanyou | `tianlanshi_jixuanyou` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tianlanshigemui.png" width="64" height="64"> | Tianlanshigemui | `tianlanshigemui` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tianlanstaffui.png" width="64" height="64"> | Tianlanstaffui | `tianlanstaffui` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tianshizhiyi.png" width="64" height="64"> | Tianshizhiyi | `tianshizhiyi` | Kho chứa | Đôi Cánh Thuần Bạch | `scripts/prefabs/tianshizhiyi.lua` |
| <img src="./public/items/tianshizhiyi_bikongqingxiao.png" width="64" height="64"> | Tianshizhiyi Bikongqingxiao | `tianshizhiyi_bikongqingxiao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tianshizhiyi_hualing.png" width="64" height="64"> | Tianshizhiyi Hualing | `tianshizhiyi_hualing` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tianshizhiyi_jinlingnishang.png" width="64" height="64"> | Tianshizhiyi Jinlingnishang | `tianshizhiyi_jinlingnishang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tiantangzhifeng.png" width="64" height="64"> | Tiantangzhifeng | `tiantangzhifeng` | Biểu tượng & Khác | Bắn ra một chuỗi tên tinh thể dòng chảy các vì sao siêu tốc; cầm cung trong tay và ngừng tấn công một khoảng thời gian ngắn sẽ khiến các tinh thể tích tụ năng lượng mạnh mẽ hơn gấp bội | `scripts/prefabs/tiantangzhifeng.lua` |
| <img src="./public/items/tiepiyaoshui.png" width="64" height="64"> | Tiepiyaoshui | `tiepiyaoshui` | Thức ăn & Thuốc | Nhận giảm sát thương theo từng mốc dựa trên lực đánh của kẻ địch (sát thương gánh chịu càng lớn, lượng sát thương giảm càng nhiều) | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/tongding.png" width="64" height="64"> | Thỏi Đồng | `tongding` | Thức ăn & Thuốc | Quặng thô được luyện thành thỏi kim loại chắc chắn | `scripts/prefabs/tongding.lua` |
| <img src="./public/items/tongfu.png" width="64" height="64"> | Tongfu | `tongfu` | Vũ khí | Chiếc rìu chặt cây chắc chắn rèn từ đồng | `scripts/prefabs/tongfu.lua` |
| <img src="./public/items/tonggao.png" width="64" height="64"> | Tonggao | `tonggao` | Vũ khí | Chiếc cúp khai thác rèn từ đồng | `scripts/prefabs/tonggao.lua` |
| <img src="./public/items/tongkuang.png" width="64" height="64"> | Tongkuang | `tongkuang` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/penquan.lua` |
| <img src="./public/items/tongzhiduanjian.png" width="64" height="64"> | Đoản Kiếm Đồng | `tongzhiduanjian` | Vũ khí | Đoản Kiếm Đồng | `scripts/prefabs/tongzhiduanjian.lua` |
| <img src="./public/items/tongzhikuanrenjian.png" width="64" height="64"> | Kiếm Bản Rộng Bằng Đồng | `tongzhikuanrenjian` | Vũ khí | Trường Kiếm Đồng | `scripts/prefabs/tongzhikuanrenjian.lua` |
| <img src="./public/items/tongzhikuanrenjian_shuijing.png" width="64" height="64"> | Tongzhikuanrenjian Shuijing | `tongzhikuanrenjian_shuijing` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tongzhitoukui.png" width="64" height="64"> | Mũ Giáp Đồng | `tongzhitoukui` | Giáp | Chiếc mũ giáp bảo hộ thông thường rèn từ đồng | Chưa ghép được prefab |
| <img src="./public/items/touguangbaozhu.png" width="64" height="64"> | Touguangbaozhu | `touguangbaozhu` | Phụ kiện | Viên bảo châu xanh thẳm vân sóng biển, xuyên thấu 25% giảm sát thương của mục tiêu | `scripts/prefabs/touguangbaozhu.lua` |
| <img src="./public/items/tr_dazhenzhu.png" width="64" height="64"> | Tr Dazhenzhu | `tr_dazhenzhu` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_dazhenzhu.lua` |
| <img src="./public/items/tr_gujian.png" width="64" height="64"> | Tr Gujian | `tr_gujian` | Vũ khí | Nghiền nát và gõ nhịp trên chính xương xẩu của chúng | Chưa ghép được prefab |
| <img src="./public/items/tr_kabo.png" width="64" height="64"> | Tr Kabo | `tr_kabo` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tr_meiguideng.png" width="64" height="64"> | Đèn Hoa Hồng | `tr_meiguideng` | Kho chứa | Chiếc đèn hoa hồng lãng mạn, tự động tỏa sáng dịu nhẹ vào buổi hoàng hôn và ban đêm | `scripts/prefabs/tr_meiguideng.lua` |
| <img src="./public/items/tr_meiguideng_gongdeng.png" width="64" height="64"> | Tr Meiguideng Gongdeng | `tr_meiguideng_gongdeng` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tr_meiguideng_tonghuajiedenglanse.png" width="64" height="64"> | Tr Meiguideng Tonghuajiedenglanse | `tr_meiguideng_tonghuajiedenglanse` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tr_meiguideng_tonghuajiedengzise.png" width="64" height="64"> | Tr Meiguideng Tonghuajiedengzise | `tr_meiguideng_tonghuajiedengzise` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tr_meiguihuashuichi.png" width="64" height="64"> | Tr Meiguihuashuichi | `tr_meiguihuashuichi` | Kho chứa | Một hồ nước hoa hồng rộng lớn và lộng lẫy | `scripts/prefabs/tr_meiguihuashuichi.lua` |
| <img src="./public/items/tr_meiguihuatan.png" width="64" height="64"> | Tr Meiguihuatan | `tr_meiguihuatan` | Công trình | Xây dựng một bồn hoa hồng khổng lồ tuyệt đẹp | `scripts/prefabs/tr_meiguihuatan.lua` |
| <img src="./public/items/tr_meiguizhangpeng.png" width="64" height="64"> | Tr Meiguizhangpeng | `tr_meiguizhangpeng` | Công trình | Dựng lên một túp lều hoa hồng nhỏ nhắn đáng yêu | `scripts/prefabs/tr_meiguizhangpeng.lua` |
| <img src="./public/items/tr_mujian.png" width="64" height="64"> | Tr Mujian | `tr_mujian` | Vũ khí | Mũi tên tiện từ gỗ thông thường | Chưa ghép được prefab |
| <img src="./public/items/tr_naichabei.png" width="64" height="64"> | Tr Naichabei | `tr_naichabei` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_naichabei.lua` |
| <img src="./public/items/tr_naichabei_skin1.png" width="64" height="64"> | Tr Naichabei Skin1 | `tr_naichabei_skin1` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tr_naichabei_skin2.png" width="64" height="64"> | Tr Naichabei Skin2 | `tr_naichabei_skin2` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tr_qicaicaoling.png" width="64" height="64"> | Tr Qicaicaoling | `tr_qicaicaoling` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_butterfly.lua` |
| <img src="./public/items/tr_shengjian.png" width="64" height="64"> | Tr Shengjian | `tr_shengjian` | Vũ khí | Khi va chạm sẽ triệu hồi vẫn thạch giáng xuống nổ tung | Chưa ghép được prefab |
| <img src="./public/items/tr_shihe.png" width="64" height="64"> | Tr Shihe | `tr_shihe` | Kho chứa | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_shihe.lua` |
| <img src="./public/items/tr_wxxz.png" width="64" height="64"> | Tr Wxxz | `tr_wxxz` | Kho chứa | Gửi vật phẩm của bạn vào bên trong một nụ hoa ma thuật khổng lồ | `scripts/prefabs/wxxz.lua` |
| <img src="./public/items/tr_xiaoxiongdiaosu.png" width="64" height="64"> | Tượng Gấu Nhỏ | `tr_xiaoxiongdiaosu` | Kho chứa | Bức tượng điêu khắc hình chú gấu vô cùng đáng yêu | `scripts/prefabs/tr_xiaoxiongdiaosu.lua` |
| <img src="./public/items/tr_xiejian.png" width="64" height="64"> | Tr Xiejian | `tr_xiejian` | Vũ khí | Mũi tên chế tác từ tàn tích của các sinh vật tà ác | Chưa ghép được prefab |
| <img src="./public/items/tr_yemingjian.png" width="64" height="64"> | Tr Yemingjian | `tr_yemingjian` | Vũ khí | Bắn hạ mục tiêu với tốc độ kinh hoàng sánh ngang vận tốc âm thanh! | Chưa ghép được prefab |
| <img src="./public/items/tr_ysgj.png" width="64" height="64"> | Tr Ysgj | `tr_ysgj` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_yishugongji.lua` |
| <img src="./public/items/tr_yuyanjian.png" width="64" height="64"> | Tr Yuyanjian | `tr_yuyanjian` | Vũ khí | Thiêu đốt mục tiêu trong ngọn lửa hỏa ngục | Chưa ghép được prefab |
| <img src="./public/items/tr_zhishi.png" width="64" height="64"> | Tr Zhishi | `tr_zhishi` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_zhishi.lua` |
| <img src="./public/items/trcat.png" width="64" height="64"> | Mèo Con Ngoan Ngoãn | `trcat` | Giáp | Nuôi dưỡng một chú mèo con ngoan ngoãn đáng yêu | `scripts/prefabs/trcat.lua` |
| <img src="./public/items/trcat_eevee.png" width="64" height="64"> | Trcat Eevee | `trcat_eevee` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/trguixu.png" width="64" height="64"> | Trguixu | `trguixu` | Phụ kiện | Chốn quy tụ của những linh hồn phiêu dạt, đòn đánh xuyên thấu 45% giảm sát thương của mục tiêu | `scripts/prefabs/trguixu.lua` |
| <img src="./public/items/trkabo.png" width="64" height="64"> | Trkabo | `trkabo` | Biểu tượng & Khác | Lấp lánh sắc màu~ | `scripts/prefabs/trkabo.lua` |
| <img src="./public/items/trkabo_jinglingqiu.png" width="64" height="64"> | Trkabo Jinglingqiu | `trkabo_jinglingqiu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/trkabo_jiujiqiu.png" width="64" height="64"> | Trkabo Jiujiqiu | `trkabo_jiujiqiu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/trshiheng.png" width="64" height="64"> | Mất Cân Bằng | `trshiheng` | Kho chứa | Năng lượng trên đại lục này đang dần mất cân bằng, nhưng ít nhất bạn vẫn có thể đứng vững | `scripts/prefabs/trshiheng.lua` |
| <img src="./public/items/tryuee.png" width="64" height="64"> | Tryuee | `tryuee` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tryuee.lua` |
| <img src="./public/items/trzhongdu.png" width="64" height="64"> | Trzhongdu | `trzhongdu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/turf_xinghong.png" width="64" height="64"> | Turf Xinghong | `turf_xinghong` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/turf_xinghong.lua` |
| <img src="./public/items/twin1_baozangdai.png" width="64" height="64"> | Twin1 Baozangdai | `twin1_baozangdai` | Kho chứa | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/twin1_baozangdai.lua` |
| <img src="./public/items/twin2_baozangdai.png" width="64" height="64"> | Twin2 Baozangdai | `twin2_baozangdai` | Kho chứa | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/twin2_baozangdai.lua` |
| <img src="./public/items/tz_fh_ht.png" width="64" height="64"> | Tz Fh Ht | `tz_fh_ht` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tz_hong.png" width="64" height="64"> | Tz Hong | `tz_hong` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tz_hong_1.png" width="64" height="64"> | Tz Hong 1 | `tz_hong_1` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/tz_hong_2.png" width="64" height="64"> | Tz Hong 2 | `tz_hong_2` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/venus_icebox.png" width="64" height="64"> | Venus Icebox | `venus_icebox` | Kho chứa | Tủ lạnh hình củ cà rốt siêu cấp đáng yêu | `scripts/prefabs/venus_icebox.lua` |
| <img src="./public/items/venus_icebox_hachiware.png" width="64" height="64"> | Venus Icebox Hachiware | `venus_icebox_hachiware` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/venus_icebox_jiyi.png" width="64" height="64"> | Venus Icebox Jiyi | `venus_icebox_jiyi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/venus_icebox_sisinai.png" width="64" height="64"> | Venus Icebox Sisinai | `venus_icebox_sisinai` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/venus_icebox_usagi.png" width="64" height="64"> | Venus Icebox Usagi | `venus_icebox_usagi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/volcanoinventory.png" width="64" height="64"> | Volcanoinventory | `volcanoinventory` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/wakuangyaoshui.png" width="64" height="64"> | Wakuangyaoshui | `wakuangyaoshui` | Thức ăn & Thuốc | Tăng 33% tốc độ khai thác khoáng sản trong 10 phút | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/wanhuatong.png" width="64" height="64"> | Wanhuatong | `wanhuatong` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/jingbian.lua` |
| <img src="./public/items/white_soul.png" width="64" height="64"> | White Soul | `white_soul` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/black_soul.lua` |
| <img src="./public/items/willow_ember.png" width="64" height="64"> | Willow Ember | `willow_ember` | Biểu tượng & Khác | Trông có lung linh tuyệt đẹp không nào? | Chưa ghép được prefab |
| <img src="./public/items/winona_storage_robot.png" width="64" height="64"> | Winona Storage Robot | `winona_storage_robot` | Biểu tượng & Khác | Người máy Winona phiên bản đặc biệt từ Terraria, phạm vi thu thập rộng hơn và làm việc hiệu quả hơn! | Chưa ghép được prefab |
| <img src="./public/items/wjzh.png" width="64" height="64"> | Wjzh | `wjzh` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/wuheqinlidebangbangtang.png" width="64" height="64"> | Wuheqinlidebangbangtang | `wuheqinlidebangbangtang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/wuheqinlidebangbangtang.lua` |
| <img src="./public/items/wujinzhihuirq.png" width="64" height="64"> | Vô Tận Trí Tuệ | `wujinzhihuirq` | Kho chứa | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/wujinzhihuirq.lua` |
| <img src="./public/items/wujinzhihuirq_aili.png" width="64" height="64"> | Wujinzhihuirq Aili | `wujinzhihuirq_aili` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/wujinzhihuirq_durin.png" width="64" height="64"> | Wujinzhihuirq Durin | `wujinzhihuirq_durin` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/wumeiqiancengpai.png" width="64" height="64"> | Wumeiqiancengpai | `wumeiqiancengpai` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/wutouqishizhiren.png" width="64" height="64"> | Kiếm Kỵ Sĩ Không Đầu | `wutouqishizhiren` | Vũ khí | Trăng Bí Ngô đã bắt đầu mùa thu hoạch của mình! | `scripts/prefabs/wutouqishizhiren.lua` |
| <img src="./public/items/xiangmudangaojuan.png" width="64" height="64"> | Xiangmudangaojuan | `xiangmudangaojuan` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/xiangmudangaojuan.lua` |
| <img src="./public/items/xianrenzhanggao.png" width="64" height="64"> | Cuốc Xương Rồng | `xianrenzhanggao` | Vũ khí | Chiếc cuốc làm từ xương rồng tươi, tốt nhất là nên tranh thủ dùng ngay trước khi nó héo úa và thối rữa | `scripts/prefabs/xianrenzhanggao.lua` |
| <img src="./public/items/xianrenzhangjia.png" width="64" height="64"> | Giáp Tấm Xương Rồng | `xianrenzhangjia` | Giáp | Áo giáp làm từ gai xương rồng gai góc, chỉ hy vọng trước khi đâm được kẻ thù thì nó đừng có đâm thấu da thịt mình trước | `scripts/prefabs/xianrenzhangjia.lua` |
| <img src="./public/items/xianrenzhangjian.png" width="64" height="64"> | Xianrenzhangjian | `xianrenzhangjian` | Vũ khí | Khéo léo mượn chính phương pháp che chắn của kẻ khác để làm khiên giáp bảo vệ cho bản thân | `scripts/prefabs/xianrenzhangjian.lua` |
| <img src="./public/items/xianrenzhangtoukui.png" width="64" height="64"> | Mũ Giáp Xương Rồng | `xianrenzhangtoukui` | Giáp | Chiếc mũ làm từ xương rồng gai góc, tuy cầm hơi đâm tay nhưng bảo vệ đầu cực kỳ hiệu quả | `scripts/prefabs/xianrenzhangtoukui.lua` |
| <img src="./public/items/xianxuebaoshi.png" width="64" height="64"> | Xianxuebaoshi | `xianxuebaoshi` | Phụ kiện | Loại khoáng thạch quý hiếm trứ danh sản sinh từ vùng thảo nguyên trung tâm Kalimdor | `scripts/prefabs/xianxuebaoshi.lua` |
| <img src="./public/items/xiaoxiongdiaosu_shengdankuaile.png" width="64" height="64"> | Xiaoxiongdiaosu Shengdankuaile | `xiaoxiongdiaosu_shengdankuaile` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xiaoxiongdiaosu_yonghenghuashu.png" width="64" height="64"> | Xiaoxiongdiaosu Yonghenghuashu | `xiaoxiongdiaosu_yonghenghuashu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xieyan.png" width="64" height="64"> | Tà Nhãn | `xieyan` | Phụ kiện | Thanh tẩy mọi lời nguyền bám trên cơ thể, đồng thời miễn nhiễm với lời nguyền hóa khỉ (lưu ý: người chơi đã biến thành khỉ thì tuyệt đối đừng đeo) | `scripts/prefabs/xieyan.lua` |
| <img src="./public/items/xihezhizhang.png" width="64" height="64"> | Xihezhizhang | `xihezhizhang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/xihezhizhang.lua` |
| <img src="./public/items/xingchenpifeng.png" width="64" height="64"> | Xingchenpifeng | `xingchenpifeng` | Phụ kiện | Muôn vì sao phủ kín bầu trời, quả là một đêm tuyệt đẹp | `scripts/prefabs/xingchenpifeng.lua` |
| <img src="./public/items/xingguang.png" width="64" height="64"> | Xingguang | `xingguang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/xingguang.lua` |
| <img src="./public/items/xinghanghexin.png" width="64" height="64"> | Lõi Hàng Không Vũ Trụ | `xinghanghexin` | Phụ kiện | Tăng mạnh 50% sát thương gây ra và 20% giảm sát thương gánh chịu, hoàn toàn miễn nhiễm với sấm sét, đồng thời các đòn tấn công sẽ phóng ra luồng điện giật giòn giã | `scripts/prefabs/hexinshipin.lua` |
| <img src="./public/items/xinghongding.png" width="64" height="64"> | Thỏi Huyết Tinh | `xinghongding` | Thức ăn & Thuốc | Trông nó có vẻ vô cùng nguy hiểm | `scripts/prefabs/xinghongding.lua` |
| <img src="./public/items/xinghongfu.png" width="64" height="64"> | Xinghongfu | `xinghongfu` | Vũ khí | Chiếc rìu này nhẹ nhàng và sắc lẹm đến mức dường như đã đạt được sự thấu hiểu tuyệt đối với đôi tay của bạn | `scripts/prefabs/xinghongfu.lua` |
| <img src="./public/items/xinghonggao.png" width="64" height="64"> | Xinghonggao | `xinghonggao` | Vũ khí | Chiếc cuốc này nhẹ nhàng và linh hoạt đến mức dường như đã đạt được sự thấu hiểu tuyệt đối với đôi tay của bạn | `scripts/prefabs/xinghonggao.lua` |
| <img src="./public/items/xinghongkuang.png" width="64" height="64"> | Quặng Huyết Tinh | `xinghongkuang` | Thức ăn & Thuốc | Được hình thành từ xương máu và xác thịt | `scripts/prefabs/xinghongkuang.lua` |
| <img src="./public/items/xinghongtoukui.png" width="64" height="64"> | Mũ Giáp Huyết Tinh | `xinghongtoukui` | Giáp | Chiếc mũ giáp tỏa ra ánh sáng màu đỏ tươi đầy ma mị | `scripts/prefabs/xinghongtoukui.lua` |
| <img src="./public/items/xinghongxiongjia.png" width="64" height="64"> | Xinghongxiongjia | `xinghongxiongjia` | Giáp | Nó như có vô số giác hút bám chặt lấy da thịt của bạn | `scripts/prefabs/xinghongxiongjia.lua` |
| <img src="./public/items/xingnu.png" width="64" height="64"> | Xingnu | `xingnu` | Vũ khí | Được rèn đúc trong ngọn lửa phẫn nộ uy nghiêm của chốn thiên đường | `scripts/prefabs/xingnu.lua` |
| <img src="./public/items/xingshenzhisha.png" width="64" height="64"> | Xingshenzhisha | `xingshenzhisha` | Biểu tượng & Khác | Phóng ra thanh lưỡi hái thánh kim tốc độ cực cao - Tinh Thần Chi Sát. Khi chém trúng mục tiêu sẽ tách thành vô số lưỡi hái ảo ảnh có khả năng tự động đảo chiều và tiếp tục săn đuổi kẻ thù | `scripts/prefabs/xingshenzhisha.lua` |
| <img src="./public/items/xingxingmiansha.png" width="64" height="64"> | Xingxingmiansha | `xingxingmiansha` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xingyan.png" width="64" height="64"> | Tinh Diễn | `xingyan` | Vũ khí | Sức mạnh từ ngoại giới | `scripts/prefabs/xingyan.lua` |
| <img src="./public/items/xingyan_book_aili.png" width="64" height="64"> | Xingyan Book Aili | `xingyan_book_aili` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xingyan_bow_aili.png" width="64" height="64"> | Xingyan Bow Aili | `xingyan_bow_aili` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xingyan_greatsword_aili.png" width="64" height="64"> | Xingyan Greatsword Aili | `xingyan_greatsword_aili` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xingyan_heishi.png" width="64" height="64"> | Xingyan Heishi | `xingyan_heishi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xingyan_sickle_aili.png" width="64" height="64"> | Xingyan Sickle Aili | `xingyan_sickle_aili` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xingyangezi.png" width="64" height="64"> | Xingyangezi | `xingyangezi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xinhanghexin.png" width="64" height="64"> | Xinhanghexin | `xinhanghexin` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/hexinshipin.lua` |
| <img src="./public/items/xuancaimingjiao.png" width="64" height="64"> | Xuancaimingjiao | `xuancaimingjiao` | Phụ kiện | Tăng 20% tốc độ di chuyển và 20 lượng máu tối đa, đồng thời tăng cường tốc độ hồi phục ma lực | `scripts/prefabs/ningjiaoshipin.lua` |
| <img src="./public/items/xuanfabaizhilian.png" width="64" height="64"> | Xuanfabaizhilian | `xuanfabaizhilian` | Vũ khí | Bắn ra các pháp cầu lấp lánh, tiêu hao ma lực và lượng sát thương tăng dần theo thời gian vận niệm | `scripts/prefabs/xuanfabaizhilian.lua` |
| <img src="./public/items/xuanfabaizhilian_cuichanzhizhang.png" width="64" height="64"> | Xuanfabaizhilian Cuichanzhizhang | `xuanfabaizhilian_cuichanzhizhang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xueguairongmao.png" width="64" height="64"> | Xueguairongmao | `xueguairongmao` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/xueguairongmao.lua` |
| <img src="./public/items/xuehongfazhang.png" width="64" height="64"> | Xuehongfazhang | `xuehongfazhang` | Vũ khí | Triệu hồi Dơi Huyết Hồng tàn bạo sát cánh chiến đấu bên bạn | `scripts/prefabs/xuehongfazhang.lua` |
| <img src="./public/items/xueqiu.png" width="64" height="64"> | Xueqiu | `xueqiu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/xueqiu.lua` |
| <img src="./public/items/xueshi.png" width="64" height="64"> | Xueshi | `xueshi` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/xueshi.lua` |
| <img src="./public/items/xueshi_buzhou.png" width="64" height="64"> | Xueshi Buzhou | `xueshi_buzhou` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/xuewu.lua` |
| <img src="./public/items/xuewu.png" width="64" height="64"> | Xuewu | `xuewu` | Vũ khí | Bắn xuyên thủng sọ não kẻ thù một cách dứt khoát | `scripts/prefabs/xuewu.lua` |
| <img src="./public/items/xuewu_queshanbuzhou.png" width="64" height="64"> | Xuewu Queshanbuzhou | `xuewu_queshanbuzhou` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xuexingshirenyu.png" width="64" height="64"> | Xuexingshirenyu | `xuexingshirenyu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xuexingtuluzhe.png" width="64" height="64"> | Đao Đồ Tể Đẫm Máu | `xuexingtuluzhe` | Vũ khí | Gây hiệu ứng xấu 'Đồ Tể Đẫm Máu' khiến mục tiêu mất máu mỗi giây, có thể cộng dồn tối đa 5 tầng | `scripts/prefabs/xuexingtuluzhe.lua` |
| <img src="./public/items/xuexingtuluzhe_xueqi.png" width="64" height="64"> | Xuexingtuluzhe Xueqi | `xuexingtuluzhe_xueqi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xukongdai.png" width="64" height="64"> | Túi Hư Không | `xukongdai` | Kho chứa | Lưu trữ vật phẩm của bạn một cách an toàn bên trong chiếc túi không gian vô tận | `scripts/prefabs/xukongdai.lua` |
| <img src="./public/items/xukongdai_loujincainang.png" width="64" height="64"> | Xukongdai Loujincainang | `xukongdai_loujincainang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/xygj.png" width="64" height="64"> | Tinh Diễn · Cung | `xygj` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/xingyan_bow.lua` |
| <img src="./public/items/xyjj.png" width="64" height="64"> | Tinh Diễn · Trọng Kiếm | `xyjj` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/xingyan_greatsword.lua` |
| <img src="./public/items/xyld.png" width="64" height="64"> | Tinh Diễn · Đại Liêm | `xyld` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/xingyan_sickle.lua` |
| <img src="./public/items/xyzs.png" width="64" height="64"> | Tinh Diễn · Chú Thư | `xyzs` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/xingyan_book.lua` |
| <img src="./public/items/yangfengren.png" width="64" height="64"> | Yangfengren | `yangfengren` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yangfengren.lua` |
| <img src="./public/items/yangguanghuamicha.png" width="64" height="64"> | Yangguanghuamicha | `yangguanghuamicha` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yanjiangshi.png" width="64" height="64"> | Yanjiangshi | `yanjiangshi` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yanjiangshi.lua` |
| <img src="./public/items/yanxinjingyou.png" width="64" height="64"> | Yanxinjingyou | `yanxinjingyou` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yanzhimao.png" width="64" height="64"> | Yanzhimao | `yanzhimao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yaodaocunzheng.png" width="64" height="64"> | Yaodaocunzheng | `yaodaocunzheng` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yaodaocunzheng.lua` |
| <img src="./public/items/yaojingchen.png" width="64" height="64"> | Yaojingchen | `yaojingchen` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yaojingchen.lua` |
| <img src="./public/items/yasuoimage.png" width="64" height="64"> | Yasuoimage | `yasuoimage` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yasuomokuai.png" width="64" height="64"> | Yasuomokuai | `yasuomokuai` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tianjigongzuotai.lua` |
| <img src="./public/items/yeguang.png" width="64" height="64"> | Yeguang | `yeguang` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yeguang.lua` |
| <img src="./public/items/yemushala.png" width="64" height="64"> | Yemushala | `yemushala` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yexingyaoshi.png" width="64" height="64"> | Yexingyaoshi | `yexingyaoshi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yin_bbt.png" width="64" height="64"> | Yin Bbt | `yin_bbt` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yin_bbt.lua` |
| <img src="./public/items/yingbuquantao.png" width="64" height="64"> | Yingbuquantao | `yingbuquantao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yingxiongduanjian.png" width="64" height="64"> | Yingxiongduanjian | `yingxiongduanjian` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yingxiongduanjian.lua` |
| <img src="./public/items/yingxiongduanliejian.png" width="64" height="64"> | Yingxiongduanliejian | `yingxiongduanliejian` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yinkeshiban_banbozhihun.png" width="64" height="64"> | Yinkeshiban Banbozhihun | `yinkeshiban_banbozhihun` | Phụ kiện | Tăng 4 ô triệu hồi và tăng 60% sát thương cho đệ tử triệu hồi | `scripts/prefabs/yinkeshiban_banbozhihun.lua` |
| <img src="./public/items/yinlubuding.png" width="64" height="64"> | Yinlubuding | `yinlubuding` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yinshenyaoshui.png" width="64" height="64"> | Yinshenyaoshui | `yinshenyaoshui` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/yinyangwenpan.png" width="64" height="64"> | Yinyangwenpan | `yinyangwenpan` | Phụ kiện | Duy trì thân nhiệt ổn định, miễn nhiễm sát thương lửa, tăng kháng băng giá và hoàn toàn phớt lờ bão cát | `scripts/prefabs/yinyangwenpan.lua` |
| <img src="./public/items/yongyeren.png" width="64" height="64"> | Kiếm Bóng Đêm | `yongyeren` | Vũ khí | Có vẻ như mặt trời vừa gặp phải một chút rắc rối nhỏ rồi | `scripts/prefabs/yongyeren.lua` |
| <img src="./public/items/yongyeren_leiji.png" width="64" height="64"> | Yongyeren Leiji | `yongyeren_leiji` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/youxian.png" width="64" height="64"> | Youxian | `youxian` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/youxian.lua` |
| <img src="./public/items/youzhidiaoyuxian.png" width="64" height="64"> | Youzhidiaoyuxian | `youzhidiaoyuxian` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yuanbanduangangjian.png" width="64" height="64"> | Yuanbanduangangjian | `yuanbanduangangjian` | Vũ khí | Kiếm Huyền Thoại | `scripts/prefabs/yuanbanduangangjian.lua` |
| <img src="./public/items/yuanbanyongyeren.png" width="64" height="64"> | Yuanbanyongyeren | `yuanbanyongyeren` | Vũ khí | Khiến cả thế giới chìm ngập trong bóng đêm một lần nữa | `scripts/prefabs/yuanbanyongyeren.lua` |
| <img src="./public/items/yuanguzhishi.png" width="64" height="64"> | Yuanguzhishi | `yuanguzhishi` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yasuomokuai.lua` |
| <img src="./public/items/yueguangcao.png" width="64" height="64"> | Yueguangcao | `yueguangcao` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yueguangcao.lua` |
| <img src="./public/items/yueguangcao_place_caomeidafu.png" width="64" height="64"> | Yueguangcao Place Caomeidafu | `yueguangcao_place_caomeidafu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yueguangcaozhongzi.png" width="64" height="64"> | Yueguangcaozhongzi | `yueguangcaozhongzi` | Cây trồng & Tài nguyên | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yueguangcao_place.lua` |
| <img src="./public/items/yueguanghushenfu.png" width="64" height="64"> | Yueguanghushenfu | `yueguanghushenfu` | Phụ kiện | Tăng cường toàn diện các chỉ số cho người mang vào thời điểm hoàng hôn và ban đêm | `scripts/prefabs/yueguanghushenfu.lua` |
| <img src="./public/items/yueguangnaixi.png" width="64" height="64"> | Yueguangnaixi | `yueguangnaixi` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yuejianhuacha.png" width="64" height="64"> | Yuejianhuacha | `yuejianhuacha` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yueliangbeike.png" width="64" height="64"> | Yueliangbeike | `yueliangbeike` | Phụ kiện | Ban cho khả năng đi trên mặt nước, đồng thời nhận lượng lớn chỉ số gia tăng vào buổi hoàng hôn và ban đêm | `scripts/prefabs/yueliangbeike.lua` |
| <img src="./public/items/yuenanhefen.png" width="64" height="64"> | Yuenanhefen | `yuenanhefen` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yuenanhefen.lua` |
| <img src="./public/items/yuezhimao.png" width="64" height="64"> | Yuezhimao | `yuezhimao` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yufuerhuan.png" width="64" height="64"> | Yufuerhuan | `yufuerhuan` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yufuyujudai.png" width="64" height="64"> | Yufuyujudai | `yufuyujudai` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/yuhuocha.png" width="64" height="64"> | Yuhuocha | `yuhuocha` | Vũ khí | Thông qua nó, dường như bạn có thể nắm giữ một loại ma thuật hỏa ngục vô cùng khủng khiếp | `scripts/prefabs/yuhuocha.lua` |
| <img src="./public/items/yuhuoyaoshui.png" width="64" height="64"> | Yuhuoyaoshui | `yuhuoyaoshui` | Thức ăn & Thuốc | Thiêu đốt tất cả sinh vật, cây cối và vật phẩm xung quanh trong vòng 8 phút | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/yuntiekuang.png" width="64" height="64"> | Yuntiekuang | `yuntiekuang` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yuntiekuang.lua` |
| <img src="./public/items/yushi.png" width="64" height="64"> | Yushi | `yushi` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/yushi.lua` |
| <img src="./public/items/yushiding.png" width="64" height="64"> | Thỏi Hỏa Ngục | `yushiding` | Thức ăn & Thuốc | Thỏi kim loại luyện từ khoáng thạch dung nham rực lửa, không nên mang theo bên người quá lâu | `scripts/prefabs/yushiding.lua` |
| <img src="./public/items/yxdj.png" width="64" height="64"> | Yxdj | `yxdj` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zaishengfazhang.png" width="64" height="64"> | Trượng Tái Sinh | `zaishengfazhang` | Vũ khí | Thu thập tài nguyên thiên nhiên nhanh chóng và được nhiều sản lượng hơn | `scripts/prefabs/zaishengfazhang.lua` |
| <img src="./public/items/zaishengfazhang_chuntao.png" width="64" height="64"> | Zaishengfazhang Chuntao | `zaishengfazhang_chuntao` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zaishengfazhang_jiuyaolinghuzhang.png" width="64" height="64"> | Zaishengfazhang Jiuyaolinghuzhang | `zaishengfazhang_jiuyaolinghuzhang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zaishengfazhang_shengfang.png" width="64" height="64"> | Zaishengfazhang Shengfang | `zaishengfazhang_shengfang` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zaishengfazhangchuntaokin.png" width="64" height="64"> | Zaishengfazhangchuntaokin | `zaishengfazhangchuntaokin` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zaishenghufu.png" width="64" height="64"> | Zaishenghufu | `zaishenghufu` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/zaishenghufu.lua` |
| <img src="./public/items/zaishengshouhuan.png" width="64" height="64"> | Vòng Tay Tái Sinh | `zaishengshouhuan` | Phụ kiện | Hồi phục một lượng máu nhất định mỗi giây khi đeo bên người | `scripts/prefabs/zaishengshouhuan.lua` |
| <img src="./public/items/zaishengyaoshui.png" width="64" height="64"> | Zaishengyaoshui | `zaishengyaoshui` | Thức ăn & Thuốc | Hồi 1 máu mỗi giây, duy trì trong 2 phút | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/zhandouyaoshui.png" width="64" height="64"> | Zhandouyaoshui | `zhandouyaoshui` | Sinh vật & Boss | Tạo ra một bản sao hoàn hảo cho các sinh vật ở gần (ngoại trừ Boss) | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/zhanhuashi.png" width="64" height="64"> | Zhanhuashi | `zhanhuashi` | Nguyên liệu & Vật phẩm | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/zhanhuashi.lua` |
| <img src="./public/items/zhanhuashi_yuemengqianquan.png" width="64" height="64"> | Zhanhuashi Yuemengqianquan | `zhanhuashi_yuemengqianquan` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zhanshixunzhang.png" width="64" height="64"> | Zhanshixunzhang | `zhanshixunzhang` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/zhanshixunzhang.lua` |
| <img src="./public/items/zhaohuanshixunzhang.png" width="64" height="64"> | Zhaohuanshixunzhang | `zhaohuanshixunzhang` | Phụ kiện | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/zhaohuanshixunzhang.lua` |
| <img src="./public/items/zhenjingyaoshui.png" width="64" height="64"> | Zhenjingyaoshui | `zhenjingyaoshui` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_yaoshui.lua` |
| <img src="./public/items/zhizhuhujia.png" width="64" height="64"> | Zhizhuhujia | `zhizhuhujia` | Giáp | Ngụy trang thành một con nhện để hòa nhập vào bầy đàn | `scripts/prefabs/zhizhuhujia.lua` |
| <img src="./public/items/zhizhutoukui.png" width="64" height="64"> | Zhizhutoukui | `zhizhutoukui` | Giáp | Ngụy trang thành một con nhện để hòa nhập vào bầy đàn | `scripts/prefabs/zhizhutoukui.lua` |
| <img src="./public/items/zhizhuya.png" width="64" height="64"> | Zhizhuya | `zhizhuya` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/zhizhuya.lua` |
| <img src="./public/items/zhizhuzhaohuanzhang.png" width="64" height="64"> | Zhizhuzhaohuanzhang | `zhizhuzhaohuanzhang` | Vũ khí | Triệu hồi vài người trợ thủ thân quen sát cánh bên bạn | `scripts/prefabs/zhizhuzhaohuanzhang.lua` |
| <img src="./public/items/zhongziwandao.png" width="64" height="64"> | Zhongziwandao | `zhongziwandao` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/zhongziwandao.lua` |
| <img src="./public/items/zhuangjiadongxueyu.png" width="64" height="64"> | Zhuangjiadongxueyu | `zhuangjiadongxueyu` | Thức ăn & Thuốc | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/tr_fish.lua` |
| <img src="./public/items/zibaoshiguo.png" width="64" height="64"> | Quả Tử Ngọc | `zibaoshiguo` | Biểu tượng & Khác | Quả Tử Ngọc | Chưa ghép được prefab |
| <img src="./public/items/zibaoshishu.png" width="64" height="64"> | Cây Tử Ngọc | `zibaoshishu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zibaoshishu_a_huiguangxiangshu.png" width="64" height="64"> | Zibaoshishu A Huiguangxiangshu | `zibaoshishu_a_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zibaoshishu_huiguangxiangshu.png" width="64" height="64"> | Zibaoshishu Huiguangxiangshu | `zibaoshishu_huiguangxiangshu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zibaoshishu_normal.png" width="64" height="64"> | Zibaoshishu Normal | `zibaoshishu_normal` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zibaoshishu_paopaogu.png" width="64" height="64"> | Zibaoshishu Paopaogu | `zibaoshishu_paopaogu` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zibaoshishu_short.png" width="64" height="64"> | Zibaoshishu Short | `zibaoshishu_short` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zibaoshishu_stump.png" width="64" height="64"> | Zibaoshishu Stump | `zibaoshishu_stump` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zibaoshishu_tall.png" width="64" height="64"> | Zibaoshishu Tall | `zibaoshishu_tall` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
| <img src="./public/items/zisebangyu.png" width="64" height="64"> | Zisebangyu | `zisebangyu` | Vũ khí | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/zisebangyu.lua` |
| <img src="./public/items/zisejingta.png" width="64" height="64"> | Zisejingta | `zisejingta` | Công trình | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | `scripts/prefabs/zisejingta.lua` |
| <img src="./public/items/zuzhouyan.png" width="64" height="64"> | Zuzhouyan | `zuzhouyan` | Biểu tượng & Khác | Chưa có mô tả tiếng Việt trong bảng chuỗi của mod. | Chưa ghép được prefab |
