import { makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";

export class CriterionStore {
  rootStore: RootStore;

  criteria = criteria;
  criterionPositions = criteriaPositions;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      rootStore: false,
    });
  }
}

const criteria = [
  {
    source: 1.0,
    group: "Attitude",
    criterion: "Trung thực, thẳng thắn",
    definition:
      "Thái độ trung thực là luôn tôn trọng sự thật, tôn trọng lẽ phải, sống ngay thẳng, thật thà và dũng cảm nhận lỗi khi mắc khuyết điểm.",
    level_1:
      "Hiểu được vai trò của trung thực, tôn trọng văn hoá công ty\nCòn e ngại, chưa có chính kiến riêng",
    level_2:
      "Nghiêm túc thực hiện theo mọi chỉ đạo và hướng dẫn của cấp trên\nỦng hộ và tuân thủ cơ chế thưởng phạt phân minh\nChưa tự tin đề xuất quan điểm cá nhân",
    level_3:
      "Dám nói lên quan điểm cá nhân, kể cả khi bất đồng với mọi người\nTin tưởng và có ý thức giữ lập trường trung thực\nCó tinh thần chịu trách nhiệm khi mắc sai phạm",
    level_4:
      "Hiểu rõ vai trò tối quan trọng của trung thực trong cuộc sống\nBiết cách tìm người “cố vấn” để giữ vững lập trường trung thực\nDũng cảm nhận trách nhiệm khi mắc sai phạm\nThẳng thắn tố giác các hành vi không đúng đắn, kể cả của cấp trên",
    level_5:
      "Đặt trung thực làm yếu tố cốt lõi trong nguyên tắc sống và làm việc\nĐoán trước được những tình huống sẽ thử thách lòng trung thực và dự kiến cách phản ứng\nGiữ vững được lập trường trước cám dỗ hoặc các vấn đề liên quan đến đạo đức\nCó phương pháp hiệu quả lâu dài để khuyến khích lòng trung thực của người khác",
  },
  {
    source: 1.0,
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    definition:
      "Người tỉ mỉ, cẩn thận là người có khả năng hoàn thành công việc sau khi đã cân nhắc tất cả các yếu tố liên quan dù là các yếu tố nhỏ nhất, luôn để tâm đến công việc và đảm bảo công việc được tiến hành chính xác nhất.\nCó ý thức xem xét các yếu tố của nhiệm vụ trước khi bắt tay vào thực hiện\nChủ động kiểm tra lại kết quả công việc trước khi bàn giao để đảm bảo tính chính xác và hoàn thiện\nThông báo kịp thời tới các bên liên quan đến nhiệm vụ khi có vấn đề thay đổi\nCó thể phát hiện các lỗi trong công việc trước khi lỗi để lại hậu quả\nChú tâm trong quá trình thực hiện công việc, tránh để xảy ra sai sót\nTheo dõi quá trình sửa đổi từng sai sót trong sản phẩm để đảm bảo không bị sơ suất",
    level_1: "Hiếm khi/ Không bao giờ",
    level_2: "Thỉnh thoảng",
    level_3: "Khá thường",
    level_4: "Thường xuyên",
    level_5: "Luôn luôn",
  },
  {
    source: 1.0,
    group: "Attitude",
    criterion: "Nhạy bén",
    definition:
      "Nhạy bén là khả năng nắm bắt, phát hiện và thích ứng nhanh đối với những cơ hội mới, thay đổi mới.",
    level_1:
      "Chỉ nắm được những thay đổi liên quan trực tiếp đến bản thân\nCó ý thức thay đổi để thích nghi nhưng còn chậm\nHiểu biết thực tế còn hạn chế",
    level_2:
      "Nắm được những thay đổi liên quan đến bản thân và logic hoặc cơ sở để thay đổi\nCó ý thức sẵn sàng thay đổi để thích nghi\nCập nhật kịp thời các thông tin nổi bật, quan trọng",
    level_3:
      "Hoà hợp, biết lắng nghe, chia sẻ, tôn trọng mình và tôn trọng người khác\nSử dụng ngôn ngữ linh hoạt, trôi chảy, thuyết phục\nTrí nhớ tốt, hiểu biết đa lĩnh vực\nKiểm soát chặt chẽ được hành động và cảm xúc",
    level_4:
      "Nhanh chóng sửa đổi hành vi để thích nghi hiệu quả với những thay đổi trong môi trường làm việc\nTích cực tìm kiếm và chọn lọc thông tin xoay quanh vấn đề đang cần giải quyết\nPhản xạ tốt với các tình huống bất ngờ phát sinh",
    level_5:
      "Nhanh nhẹn thích ứng với sự thay đổi, biết tập trung vào lợi ích của sự thay đổi\nChủ động tìm kiếm các thông tin xoay quanh cuộc sống hiện tại\nSẵn sàng thử các phương pháp tiếp cận mới phù hợp cho các tình huống mới\nQuan sát, phân tích và nhanh chóng đưa ra được hình dung về ảnh hưởng của thay đổi ",
  },
  {
    source: 1.0,
    group: "Attitude",
    criterion: "Kiên trì",
    definition:
      "Bền bỉ, kiên trì là thái độ nỗ lực, cố gắng không ngừng nghỉ, quyết tâm vượt qua thử thách để theo đuổi mục đích mà mình đã đề ra.",
    level_1:
      "Có thể thực hiện lặp đi lặp lại một thao tác cụ thể\nChỉ thực hiện các công việc khó khăn khi có người hướng dẫn cụ thể và cùng thực hiện",
    level_2:
      "Nghiêm túc thực hiện kỷ luật, nội quy dù có khắt khe\nChấp nhận thực hiện các công việc khó khăn khi được yêu cầu\nĐôi khi bị ảnh hưởng tâm lý bởi thất bại, dư luận, lời trách mắng, v.v.",
    level_3:
      "Duy trì được các thói quen tốt trong thời gian dài\nNhận thức được điểm yếu của bản thân và không ngừng trau dồi\nSẵn sàng đảm nhận các công việc khó khăn, đòi hỏi nhiều công sức\nCó khả năng phân tích sự việc dưới góc nhìn đa chiều",
    level_4:
      "Không nản chí, biết cách biến trở ngại thành động lực để cố gắng\nĐấu tranh đến cùng để bảo vệ chính kiến\nBiết tự trấn an bản thân, luôn giữ được bình tĩnh trước áp lực\nBiết tận dụng những cơ hội nhỏ để phát triển từng bước",
    level_5:
      "Biết lập kế hoạch hành động để thực hiện mục tiêu và cẩn thận thực hiện từng nhiệm vụ nhỏ\nBiết đứng dậy sau vấp ngã, biến thất bại là bài học kinh nghiệm và động lực để làm lại từ đầu\nChủ động tự tìm tòi nâng cao hiểu biết, kỹ năng chuyên môn\nKiên nhẫn thử nghiệm, cải tiến những ý tưởng mới trước khi chính thức áp dụng",
  },
  {
    source: 0.0,
    group: "Attitude",
    criterion: "Tinh thần chịu trách nhiệm",
    definition:
      "Tinh thần trách nhiệm trong công việc là khả năng tự nhận thức, chủ động và nỗ lực hoàn thành các nhiệm vụ được giao, xứng đáng với mức lương bạn nhận, với chức danh công việc bạn đảm nhiệm.",
    level_1:
      "Là việc một người nào đó có trách nhiệm thực hiện một nhiệm vụ, nhưng họ không làm, đòi hỏi phải có tác nhân bên ngoài thì mới có trách nhiệm hoặc thực hiện nó với một tinh thần hời hợt, không thực sự quan tâm đến những hậu quả không tốt xảy ra do hành vi của mình gây ra.",
    level_2:
      "Nhận thức được mình phải đảm bảo một kết quả phải xảy ra trong tương lai một cách chính xác và kịp thời.\nNhận thức về việc nếu không hoàn thành công việc đó thì mình là người có lỗi và mình phải gánh chịu hậu quả không tốt xảy ra do không hoàn thành công việc đó.\nThực thi công việc một cách có ý thức để đảm bảo kết quả đó phải xảy ra trong tương lai một cách chính xác và kịp thời",
    level_3:
      " Hỗ trợ đồng nghiệp, đóng góp ý kiến cho cấp trên thì họ vẫn giữ được sự tôn trọng đối với đồng nghiệp, cấp trên và vẫn giữ được sự tôn trọng đối với quyền hạn của đồng nghiệp, của cấp trên",
    level_4:
      "Luôn luôn nỗ lực hết sức mình để hoàn thành xuất sắc mọi nhiệm vụ cấp trên giao cho\nCó tinh thần đóng góp ý kiến, đóng góp công sức cho cấp trên, đồng nghiệp một cách tự nguyện",
    level_5:
      "Yếu tố thứ nhất là dám nghĩ, dám làm: Nhận nhiệm vụ và nhận trách nhiệm với nhiệm vụ của mình, đồng thời nỗ lực hết sức mình để hoàn thành nhiệm vụ, không tránh né, đùn đẩy nhiệm vụ qua cho hoàn cảnh hay người khác.\nYếu tố thứ hai là dám chịu (trách nhiệm): Nhận lỗi và sẵn sàng gánh chịu hậu quả xấu đến với mình khi mình không hoàn thành nhiệm vụ, không đổ thừa cho hoàn cảnh hay người khác.\nTự giác nhằm góp phần xây dựng tổ chức ngày càng tốt đẹp hơn.Có tinh thần hợp tác cao trong công việc với các thành viên khác trong tổ chức",
  },
  {
    source: 0.0,
    group: "Attitude",
    criterion: "Tinh thần lạc quan",
    definition:
      "Người lạc quan là người luôn tin tưởng vào công việc. Họ luôn tự tin hướng đến tương lai chứ không mãi quay nhìn về quá khứ. Họ tìm kiếm cơ hội trong mọi khó khăn. Thay vì xem xét những gì đã xảy ra trong quá khứ và tìm người đổ lỗi, người lạc quan chỉ suy nghĩ những gì có thể thực hiện được trong hiện tại và tương lai.",
    level_1:
      "Hiểu được vai trò của lạc quan\nDễ bị ảnh hưởng bởi những ý nghĩ xung quanh\nNản lòng khi gặp khó khăn",
    level_2: "Có ý thức trong việc điều chỉnh cảm xúc và trạng thái hành động",
    level_3:
      "Nhìn nhận về những khía cạnh tích cực của sự việc\nTạo dưng và kết nối các mối quan hệ sâu sắc hơn với những người xung quanh \n",
    level_4:
      "Tự giải phóng và cho phép bạn cân nhắc các lựa chọn mới và thay đổi công việc cũng như cuộc sống theo hướng tốt hơn\nThể hiện trạng thái bên ngoài là sự vui vẻ chiếm phần lớn, ít dành thời gian cho than vãn, luôn thấy mặt tốt của bất cứ vấn đề nào, luôn tin vào thành công",
    level_5:
      "Sẵn sàng gánh vác trách nhiệm tích cực cố gắng hết mình vì công việc. \nLuôn nghĩ về kết quả và tìm kiếm các cơ hội nên dễ gặt hái thành công\nTinh thần lạc quan còn có sức mạnh truyền cảm hứng cho người khác. \nTinh thần lạc quan giúp họ tin tưởng vào bản thân, vượt qua khó khăn, thành công trong mọi công việc.",
  },
  {
    source: 0.0,
    group: "Attitude",
    criterion: "Nhiệt tình",
    definition:
      "Một người nhiệt tình thể hiện bằng việc họ sẵn sàng làm những việc mà người khác ngại làm. Con người quyết định dựa trên cân đối giữa lợi ích và chi phí. Một người nhiệt tình sẽ sẵn sàng làm một việc mà theo quan điểm của số đông cho rằng đó là lợi ích âm.",
    level_1:
      "Chỉ nắm được những nhiệm vụ và hành động dựa trên những lợi ích của bản thân\nTinh thần kết nối, phối hợp chưa cao\nRụt rè, e ngại",
    level_2:
      "Có ý tưởng, đóng góp cho tổ chức\nCó ý thức sẵn sàng thay đổi để thích nghi\nSẵn sàng tham gia hành động",
    level_3:
      "Kiên định, không dễ bị lung lay, luôn hành động có chủ đích, đầy nhiệt huyết và không gây ra bất kỳ tổn hại nào về mặt thể chất lẫn tinh thần\r\n",
    level_4:
      "Làm việc với sự đam mê và yêu thích đối với công việc\nLuôn suy nghĩ, trăn trở, tìm kiếm ý tưởng mói cho công việc của mình\nLàm việc với thái độ hứng thú, tích cực và chủ động",
    level_5:
      "Đưa mọi người và công việc lại gần nhau tạo cảm hứng hành động\r\nXuất sắc trong các công việc đã có định hướng hành động, thực tế và không lập lại.\nThích khởi xướng và đưa ra những thay đổi, những ý kiến phản hồi mang tính ủng hộ với người khác.",
  },
  {
    source: 1.0,
    group: "Attitude",
    criterion: "Đổi mới, sáng tạo",
    definition:
      "Năng lực sáng tạo và đổi mới là khả năng thách thức các tư duy truyền thống và nhìn nhận tình huống dưới góc độ mới, đưa ra các cách làm mới, xây dựng các sản phẩm và quy trình mới.",
    level_1:
      "Nhận diện được các yếu tố sáng tạo\nXem xét các ý tưởng sáng tạo từ các thành viên khác trong nhóm",
    level_2:
      "Tiếp thu ý tưởng sáng tạo từ các cá nhân khác và có đề xuất hoàn thiện các ý tưởng sáng tạo đó\nLàm việc với các cá nhân khác để cùng nghĩ ra cách thức tiếp cận hiệu quả đối với vấn đề",
    level_3:
      "Đánh giá hiệu quả các cách làm cũ và đề xuất xây dựng phương án cải tiến\nChủ động tìm kiếm cách thức hiệu quả nhất để thực hiện công việc chung",
    level_4:
      "Thiết kế được các cách làm mới và hiệu quả nhất để thực hiện các mục tiêu của doanh nghiệp\nThu thập từ nhiều nguồn thông tin và tư duy được nhiều phương án để tiếp cận một vấn đề \n Xây dựng được môi trường làm việc thúc đẩy sáng tạo ở các nhóm làm việc",
    level_5:
      "Xây dựng được phương pháp, quy trình mới có khả năng ứng dụng ở quy mô doanh nghiệp với tầm ảnh hưởng sâu rộng\nĐưa ra cách giải quyết triệt để được cho những vấn đề nghiêm trọng của doanh nghiệp\nTổ chức được bộ máy làm việc kiểu mới giúp cải thiện hiệu suất chung của cả doanh nghiệp\nCó khả năng tư duy được cách làm mới trong hoàn cảnh rất thiếu hoặc không có dữ kiện",
  },
  {
    source: 1.0,
    group: "Attitude",
    criterion: "Tập trung vào kết quả",
    definition:
      "Tư duy tập trung vào kết quả là tư duy tạo ra kết quả kinh doanh dựa trên yêu cầu nhất quán; thiết lập và đạt được mục tiêu; luôn tuân thủ các tiêu chuẩn về chất lượng, dịch vụ, năng suất và đáp ứng thời hạn; duy trì tập trung vào mục tiêu của tổ chức.",
    level_1:
      "Không có mục tiêu cụ thể, chỉ cam kết đầu ra\nDuy trì được công việc dưới áp lực của trở ngại cho đến khi có giải pháp khả thi\nCó ý thức duy trì nhưng không đảm nhận được đồng thời chất lượng, dịch vụ và năng suất\nBáo cáo kết quả theo mẫu có sẵn",
    level_2:
      "Thiết lập được mục tiêu nhưng còn sai số đối với khả năng làm được\nCó tinh thần ứng phó và chịu trách nhiệm giải quyết các trở ngại\nTheo dõi và kịp thời xử lý các vấn đề gây ảnh hưởng đến chất lượng, dịch vụ và năng suất\nCó khả năng đánh giá kết quả dựa trên nhiều tiêu chí",
    level_3:
      "Thiết lập các mục tiêu rõ ràng và cụ thể\nCó khả năng nhìn nhận về mức độ của trở ngại, chuẩn bị sẵn phương án chủ động giảm thiểu tác động của trở ngại\nCó cơ chế giám sát và thưởng phạt nhằm đảm bảo chất lượng, dịch vụ và năng suất\nCó khả năng đánh giá kết quả đa chiều, kịp thời xử lý các thiếu sót đơn giản, rút ra được bài học kinh nghiệm",
    level_4:
      "Có khả năng thiết lập mục tiêu dài hạn và ngắn hạn dựa trên mục tiêu chung của tổ chức\nCó khả năng phân tích lợi hại của trở ngại, chuẩn bị sẵn tinh thần và phương án chủ động phòng tránh, loại bỏ trở ngại\nTạo động lực cho các thành viên, chủ động giám sát chặt chẽ và tìm cách nâng cao chất lượng, dịch vụ và năng suất làm việc\nCó khả năng đánh giá kết quả toàn diện, lập ra phương án xử lý thiếu sót, lấy đó làm cơ sở nền tảng cho lần sau",
    level_5:
      "Có khả năng thiết lập các mục tiêu dài hạn và ngắn hạn gắn bó chặt chẽ với việc đánh giá kết quả lần trước\nDự đoán và phân tích chính xác các trở ngại và rủi ro có thể xảy ra; có chiến lược thử nghiệm và chốt được phương án biến mọi trở ngại thành cơ hội\nLiên tục tìm kiếm, thử nghiệm và tận dụng cơ hội mới để cải thiện chất lượng, dịch vụ và gia tăng năng suất\nCó khả năng đánh giá kết quả toàn diện, chủ động nghiên cứu hiệu quả các giải pháp và tiếp tục thử các giải pháp mới cho đến khi đạt được kết quả mong đợi",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng đàm phán, thuyết phục",
    definition:
      "Kỹ năng đàm phán - thuyết phục là khả năng đưa ra phương án thống nhất trong tình huống mâu thuẫn, giảm thiểu xung đột lợi ích giữa các bên để đạt được kết quả tốt nhất và giữ vững mối quan hệ hợp tác.",
    level_1:
      "Biết kiểm soát thái độ của bản thân khi gặp phản đối nhưng còn lúng túng khi suy nghĩ phương án\nCó khả năng diễn đạt rành mạch ý kiến cá nhân nhưng không tạo được sự thuyết phục",
    level_2:
      "Chủ động lắng nghe nguyện vọng của đối phương, trình bày rành mạch phương án đề xuất dù không thực sự thuyết phục",
    level_3:
      "Tạo dựng được sự tin tưởng của một tập thể theo đề xuất của cá nhân\nBiết hướng xử lí đúng khi bị phản đối\nLuôn đặt mình vào tình thế của đối phương, nhưng phương án đề xuất chưa thực sự thuyết phục",
    level_4:
      "Thuyết phục được đội ngũ cấp cao theo các đề xuất của cá nhân\nBiết xử lí khôn khéo khi bị phản đối\nLuôn đặt mình vào tình thế của đối phương và đưa ra được những phương án đề xuất hợp lí\nDiễn đạt rành mạch, rõ ràng, có tính thuyết phục cao",
    level_5:
      "Thuyết phục được đội ngũ quản lý cấp cao đồng ý với các thay đổi lớn, có tầm ảnh hưởng rộng\nBiết điều chỉnh thái độ của bản thân linh hoạt theo tình huống\nThấu hiểu được chính xác nhu cầu của đối phương, đưa ra được phương án khéo léo khiến đối phương hài lòng \nNgôn ngữ và giọng điệu linh hoạt, có tính thuyết phục cao và tạo được ảnh hưởng lên đối phương",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    definition:
      "Kỹ năng phân tích, xử lí tình huống và ra quyết định là khả năng phát hiện ra vấn đề, phân tích và liên hệ các thông tin để thấu hiểu toàn diện vấn đề",
    level_1:
      "Áp dụng đúng quy trình để xử lí tình huống mà không có khả năng xử lí tình huống bất ngờ, không cân nhắc các mặt của quy trình",
    level_2:
      "Đưa ra quyết định kịp thời, đúng đắn trong các tình huống quen thuộc và không quá nghiêm trọng, tuy nhiên sẽ bối rối nếu có tình huống ngoại lệ bất ngờ xảy ra\nCó ý thức đánh giá các phương án xử lí tình huống ",
    level_3:
      "Có khả năng phân tích một tình huống phức tạp, nhìn nhận được mối quan hệ giữa các yếu tố trong tình huống",
    level_4:
      "Đưa ra được giải pháp hiệu quả, kịp thời trong một tình huống chưa có tiền lệ\nChủ động thu thập thêm dữ liệu và xử lí một hệ thống thông tin lớn, phức tạp trong thời gian ngắn, đưa ra được dự đoán về xu hướng và các hệ quả có khả năng xảy ra",
    level_5:
      "Luôn nhìn nhận vấn đề trung lập, khách quan ở nhiều góc độ\nCó khả năng tổng hợp và hệ thống hóa thông tin phức tạp\nNhìn nhận được vấn đề ở quy mô lớn (mang tầm chiến lược) và đề xuất được những phương án sáng tạo có tính đột phá\nTiên liệu được các tình huống và đưa ra được một hệ thống giải pháp hiệu quả, kịp thời trong những tình huống phức tạp, mơ hồ, thiếu thông tin",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    definition:
      "Kỹ năng tổ chức và quản lý thời gian là khả năng sắp xếp và sử dụng một cách có hiệu quả nguồn lực và thời gian giới hạn để đảm bảo hoàn thành công việc.",
    level_1:
      "Chưa biết cách đặt thứ tự ưu tiên cho công việc\nSẽ không hoàn thành được công việc theo đúng deadline nếu như khối lượng công việc lớn",
    level_2:
      "Có kế hoạch công việc cho bản thân\nHoàn thành được các công việc của bản thân theo đúng deadline với khối lượng công việc lớn\nChưa có khả năng tổ chức công việc cho đội nhóm",
    level_3:
      "Có khả năng lên kế hoạch công việc cho nhóm\nBiết cách đặt thứ tự ưu tiên ưu tiên cho công việc\nCó khả năng hoàn thành khối lượng công việc lớn, nhưng dễ mất kiểm soát trong những tình huống căng thẳng và nhạy cảm",
    level_4:
      "Có khả năng lên kế hoạch hành động chi tiết theo từng giai đoạn để hoàn thành mục tiêu cho công ty, sẵn sàng ứng phó với nhiều tình huống\nPhân phối nguồn lực chặt chẽ, biết đặt thứ tự ưu tiên\nCó khả năng hoàn thành khối lượng công việc lớn trong cả những tình huống áp lực",
    level_5:
      "Sắp xếp được hệ thống công việc ở quy mô chiến lược\nPhân phối một nguồn lực lớn một cách chặt chẽ, biết đặt thứ tự ưu tiên chính xác\nBao quát được hiệu quả sử dụng nguồn lực\nLuôn giữ được mọi việc trong tầm kiểm soát",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    definition:
      "Kỹ năng làm việc nhóm là khả năng thiết lập và duy trì mối quan hệ hợp tác tích cực với các thành viên khác để hoàn thành tốt đẹp các mục tiêu chung.",
    level_1:
      "Có trách nhiệm với công việc chung, tuân theo các chỉ dẫn của lãnh đạo \nHòa đồng, sẵn sàng san sè và giúp đỡ các thành viên trong nhóm",
    level_2:
      "Chủ động chia sẻ và giúp đỡ các thành viên trong nhóm\nNắm được vai trò của từng thành viên trong nhóm",
    level_3:
      "Xây dựng được mối quan hệ tốt đẹp với các thành viên trong và ngoài nhóm\nNắm được năng lực và vai trò của từng thành viên trong nhóm \nTạo dựng và cổ vũ tinh thần hợp tác trong nhóm",
    level_4:
      "Khơi dậy tinh thần hợp tác giữa các nhóm bằng cách cổ vũ các thành viên cùng chia sẻ và giúp đỡ lẫn nhau\nCổ vũ, tạo động lực cho các thành viên trong nhóm cùng đạt được mục tiêu chung\nXây dựng được một môi trường làm việc trong nhóm cởi mở, thân thiện \nTổ chức được phân công công việc trong nhóm hiệu quả dựa trên năng lực của từng thành viên",
    level_5:
      "Xây dựng và thúc đẩy tinh thần hợp tác giữa các nhóm để cùng đạt được mục tiêu chung của doanh nghiệp\nTạo dựng một tập thể vững mạnh nhờ khai thác hiệu quả năng lực của từng nhóm và kết nối các nhóm bằng mục tiêu, giá trị và tầm nhìn chung\nTạo dựng văn hóa làm việc nhóm trong tổ chức",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng tự học",
    definition:
      "Kỹ năng tự học, tự trau dồi là khả năng tự xác định được các điểm mạnh và điểm yếu của bản thân, từ đó tìm cách khắc phục điểm yếu và phát triển thế mạnh để tự nâng cao hiệu suất làm việc của cá nhân và tổ chức.",
    level_1: "Biết tiếp thu ý kiến nhưng chưa có chọn lọc",
    level_2:
      "Chấp nhận tham gia các khoá học nâng cao nghiệp vụ khi chỉ khi bắt buộc\nBiết quan sát, học hỏi từ những tình huống thực tế",
    level_3:
      "Chấp nhận tham gia các khoá học nâng cao nghiệp vụ khi có sự hỗ trợ của tổ chức\nBiết áp dụng kiến thức mới vào thực tế nhưng không thể tự đánh giá, rút kinh nghiệm",
    level_4:
      "Điều chỉnh được định hướng học tập của bản thân linh hoạt theo yêu cầu của tổ chức\nSẵn sàng tham gia các khoá học nâng cao nghiệp vụ khi được giới thiệu\nBiết áp dụng kiến thức mới vào thực tế để tự rút kinh nghiệm\nLuôn lắng nghe và tiếp thu ý kiến từ mọi người",
    level_5:
      "Tự xác định được năng lực chuyên môn cần thiết trong tương lai\nBám sát vào xu hướng công việc của thời đại để xây dựng định hướng học tập\nChủ động tìm kiếm và theo học các khoá học nâng cao nghiệp vụ\nLuôn luôn tiếp thu có chọn lọc những ý kiến tích cực từ mọi người\nLiên tục tự đánh giá và tìm kiếm phản hồi từ cấp trên và người có năng lực chuyên môn",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng đối mặt với áp lực",
    definition:
      "Kỹ năng đối mặt với áp lực là khả năng vẫn duy trì được hiệu quả công việc khi đối mặt với áp lực.",
    level_1:
      "Chỉ giữ được hiệu quả làm việc trong các giai đoạn áp lực cường độ thấp\nKiềm chế được cảm xúc của bản thân, tránh những suy nghĩ tiêu cực",
    level_2:
      " Duy trì sự bình tĩnh khi đối phó với những tình huống căng thẳng\nGiữ được tinh thần trách nhiệm, hoàn thành công việc đúng hạn\nLuôn suy nghĩ trước khi hành động",
    level_3:
      "Xác định được giới hạn cá nhân cho khối lượng công việc và phân chia công việc hợp lý\n Luôn bình tĩnh và trấn tĩnh người khác trong những tình huống căng thẳng\n Cân bằng được trách nhiệm công việc và trách nhiệm cuộc sống cá nhân",
    level_4:
      "Biết áp dụng các chiến lược giảm thiểu áp lực lâu dài\n Luôn đưa ra được phán quyết chính xác, khách quan\n Có tinh thần cầu tiến, sẵn sàng đối mặt với áp lực",
    level_5:
      " Có khả năng tập trung và tràn đầy sinh lực làm việc ngay trong thời kỳ căng thẳng \n Duy trì sự bình tĩnh và thể hiện sự tự chủ tuyệt đối trước thách thức lớn\n Có phương án tối ưu để giải phóng hoặc hạn chế áp lực trong tổ chức\nCó khả năng biến áp lực thành động lực làm việc hiệu quả",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    definition:
      "Kỹ năng giao tiếp là khả năng sử dụng phương tiện ngôn ngữ nói hoặc ngôn ngữ cơ thể để diễn đạt suy nghĩ, ý kiến, cảm nhận một cách rõ ràng và thuyết phục; đồng thời thúc đẩy được giao tiếp hai chiều.",
    level_1:
      "Có khả năng diễn đạt được ý kiến của mình, dù không phải lúc nào cũng mạch lạc và chính xác\nChủ động lắng nghe, nhưng không biết cách khơi gợi được phản hồi của đối phượng",
    level_2:
      "Có khả năng diễn đạt rành mạch tới nhiều đối tượng, tuy nhiên ngôn ngữ và giọng điệu trong nhiều trường hợp không chính xác\nCó ý thức khơi gợi giao tiếp hai chiều, dù đôi khi không thực sự khéo léo\nChủ động lắng nghe, thể hiện được thái độ quan tâm tới đối phương",
    level_3:
      "Có khả năng diễn đạt rành mạch, rõ ràng các nội dung cơ bản tới nhiều đối tượng khác nhau\nThường vận dụng được đúng giọng điệu và ngôn ngữ trong các trường hợp giao tiếp\nThường xuyên lắng nghe, quan tâm tới đối phương và biết khơi gợi giao tiếp hai chiều một cách khéo léo",
    level_4:
      "Có khả năng thuyết trình rành mạch các khái niệm phức tạp tới nhiều đối tượng khác nhau\nXử lí khéo léo được các tình huống phát sinh trong giao tiếp, linh hoạt trong cách sử dụng ngôn ngữ và giọng điệu\nNắm rõ những gì mình cần truyền đạt đến người nghe\nBiết lắng nghe và thường chấp nhận những phản hồi mà người khác dành cho mình",
    level_5:
      "Tự tin trình bày các vấn đề phức tạp và nhạy cảm tới mọi đối tượng (từ các đối tượng lãnh đạo cấp cao, người ngang hàng hoặc các đối tượng yếu thế hơn)\nLuôn tạo được ấn tượng là một người biết lắng nghe và sẵn sàng chấp nhận phản hồi mà người khác dành cho mình\nNgôn ngữ và giọng điệu linh hoạt, có sức thuyết phục và gây được ảnh hưởng lên người khác \nCó chiến lược rõ ràng trong giao tiếp",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng xây dựng mỗi quan hệ",
    definition:
      "Kỹ năng xây dựng mối quan hệ (networking) là khả năng xây dựng và chủ động duy trì các mối quan hệ cộng tác công việc nhằm phục vụ cho mục tiêu tương lai của doanh nghiệp.",
    level_1:
      "Có khả năng kết nối và duy trì các mối quan hệ cá nhân\nChưa có khả năng phân loại và đặt ưu tiên cho các mối quan hệ",
    level_2:
      "Có khả năng tạo dựng network trong các sự kiện, các cơ hội gặp mặt mà mình tham dự\nGiữ được mối quan hệ tốt đẹp với các key contacts",
    level_3:
      "Khai thác hiệu quả các mối quan hệ xung quanh và tận dụng để mở rộng network khi có cơ hội\nXây dựng được network tương đối đa dạng và phục vụ được cho mục đích chung của công việc",
    level_4:
      "Chủ động tìm kiếm các cơ hội networking ở nhiều lĩnh vực, không ngừng mở rộng network\nXây dựng được mối quan hệ hợp tác chiến lược lâu dài với nhiều đối tượng, trong đó có cả lãnh đạo cấp cao.",
    level_5:
      "Tự xây dựng và điều phối một cộng đồng để qua đó có mạng lưới đối tác cùng khách hàng tiềm năng\nCó khả năng xác định những mối quan hệ nào là quan trọng, và có phương án hành động trong từng mối quan hệ\nXây dựng được mối quan hệ hợp tác chiến lược lâu dài với cả những lãnh đạo cấp cao",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng quản lý xung đột",
    definition:
      "Kỹ năng quản trị xung đột là khả năng phát hiện, giải quyết, ngăn chặn hoặc tận dụng xung đột",
    level_1:
      "Nhận định được xung đột giữa các cá nhân và đội nhóm\nCổ vũ mọi người hòa giải xung đột",
    level_2:
      "Chủ động tiếp nhận những quan điểm khác nhau, đề xuất được phương án hòa giải xung đột trong đội nhóm\nCổ vũ mọi người hạn chế những xung đột cá nhân không cần thiết",
    level_3:
      "Dự đoán được những xung đột có thể xảy ra, có có biện pháp để ngăn chặn, giảm thiểu hậu quả của xung đột \nCổ vũ mọi người hạn chế những xung đột cá nhân không cần thiết",
    level_4:
      "Dự đoán và xây dựng được chiến lược ngăn chặn và giải quyết xung đột ở quy mô tổ chức",
    level_5:
      "Có khả năng thúc đẩy những căng thẳng và tranh luận có lợi cho tổ chức; giữ mức độ căng thẳng trong tầm kiểm soát\nDự đoán được những xung đột có thể xảy ra ở quy mô tổ chức, có phương án định hướng, ngăn chặn và giải quyết xung đột bằng thái độ mang tính xây dựng",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng giải trình",
    definition:
      "Năng lực giải trình là khả năng đạt hiệu quả cao trong việc cung cấp, giải thích, làm rõ các thông tin về thực hiện nhiệm vụ, công vụ hay những vấn đề liên quan đến trách nhiệm của cá nhân khi được yêu cầu.",
    level_1:
      "Biết biện minh cho hành động của mình trong quá khứ hoặc tương lai\nChỉ biết áp dụng những mẫu văn bản giải trình có sẵn",
    level_2:
      "Nhận thức được trách nhiệm giải trình và tự giác thực hiện\nChỉ có khả năng giải trình bằng văn bản, còn lúng túng khi giải trình bằng lời nói",
    level_3:
      "Hiểu được trách nhiệm giải trình và quyền từ chối giải trình của mình\nThực hiện đúng trình tự, thủ tục giải trình\nKhả năng giải trình bằng lời nói còn hạn chế",
    level_4:
      "Dự đoán được hệ quả các hành vi giải trình của mình\nCó hiểu biết để phối hợp với các bên liên quan cùng giải trình\nCung cấp đầy đủ bằng chứng, chứng cứ khách quan khi giải trình\nTự đề xuất được cơ chế giám sát và đánh giá giải trình",
    level_5:
      "Có kế hoạch từ trước về việc giải trình\nHiểu rõ về quyền hạn, thủ tục, quy trình giải trình\nCó khả năng giải trình rõ ràng, thuyết phục bằng cả lời nói và văn bản\nChủ động bổ sung, đính chính thông tin sau giải trình để đầy đủ, chính xác hơn\nCó khả năng tư vấn, giám sát, đánh giá giải trình của người khác",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng quản trị rủi ro",
    definition:
      "Kỹ năng quản trị rủi ro là khả năng xác định, phân tích, đánh giá và phản ứng trước các rủi ro trong quá trình thực hiện mục tiêu công việc. ",
    level_1:
      "Chưa sẵn sàng đối mặt với rủi ro\nCòn lúng túng trong việc giải quyết hậu quả của rủi ro (nếu có)",
    level_2:
      "Xác định tâm lý vững vàng để sẵn sàng đối mặt và chịu trách nhiệm với rủi ro\nCó ý thức về việc nhận định các rủi ro nhưng chưa chính xác",
    level_3:
      "Nhận định được các rủi ro với quy mô nhỏ, trong tương lai gần\nKịp thời phân tích rủi ro để có được đánh giá cần thiết\nBiết cách thông tin cho thành viên trong tổ chức về rủi ro có thể xảy ra",
    level_4:
      "Có tầm nhìn dài hạn về việc nhận định các rủi ro có thể xảy ra\nCó khả năng đánh giá rủi ro và đề xuất phương án giảm thiểu hậu quả\nĐưa ra được chiến lược phòng tránh rủi ro trong tương lai",
    level_5:
      "Có khả năng nhận định chính xác các rủi ro có thể xảy ra trong dài hạn\nĐánh giá toàn diện được các cơ hội và rủi ro trong thực tế tổ chức\nXây dựng được chiến lược biến rủi ro thành cơ hội phát triển lâu dài\nCó sẵn phương án phối hợp các phòng ban để sẵn sàng xử lý rủi ro",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng đào tạo",
    definition:
      "Kỹ năng đào tạo là khả năng truyền đạt kỹ năng, kiến thức cho người khác.",
    level_1:
      "Biết lắng nghe tâm tư, nguyện vọng học tập của học viên\nBiết cách phân chia công việc hợp lý cho học viên\nNăng lực cá nhân còn hạn chế, chưa sẵn sàng làm đào tạo viên",
    level_2:
      "Chủ động giới thiệu các chương trình đào tạo ngoài cho học viên\nKịp thời động viên, củng cố nỗ lực học tập của học viên\nCung cấp phản hồi cho học viên trong quá trình làm việc",
    level_3:
      "Tạo được sự hứng thú cho học viên\nTạo điều kiện cho học viên tham gia các khoá đào tạo ngoài\nTạo cơ hội cho học viên được học hỏi từ các nhân viên dày dạn\nPhản hồi kịp thời và nhất quán về quá trình học lý thuyết kết hợp thực hành của học viên",
    level_4:
      "Định hướng được nội dung đào tạo dựa trên sở thích nghề nghiệp và nhu cầu công việc của học viên\nXây dựng được hệ thống tiêu chuẩn đào tạo\nGiúp học viên tìm những cách mới để giải quyết các vấn đề cũ\nChủ động chẩn đoán các vấn đề của học viên và chia sẻ giải pháp để tạo ra kinh nghiệm học tập",
    level_5:
      "Xác định trước các trở ngại trong quá trình đào tạo và có kế hoạch xử lý\nĐánh giá chính xác được năng lực đã có và năng lực cần đào tạo của từng học viên\nLập ra kế hoạch đào tạo phù hợp với chiến lược của tổ chức và định hướng phát triển của cá nhân học viên\nSẵn sàng cung cấp các hướng dẫn rõ ràng, ngắn gọn về cách hoàn thành một nhiệm vụ hoặc quy trình\nBiết cách giám sát chặt chẽ và đánh giá chính xác kết quả đào tạo",
  },
  {
    source: 1.0,
    group: "Skill",
    criterion: "Kỹ năng tư duy chiến lược",
    definition:
      "Tư duy chiến lược là khả năng xác định được các mục tiêu và ưu tiên quan trọng, từ đó có kế hoạch hành động đảm bảo nhất quán được với lợi ích và giá trị lâu dài của tổ chức.",
    level_1:
      "Đặt ra được mục tiêu cá nhân phù hợp với chiến lược hành động của đội/nhóm và các giá trị của doanh nghiệp",
    level_2:
      "Điều phối được hoạt động của đội/nhóm phù hợp với chiến lược chung của doanh nghiệp\nHình dung được hệ quả của vấn đề",
    level_3:
      "Xây dựng được mục tiêu và các kế hoạch hành động cho đội/nhóm dựa trên mục tiêu chung của doanh nghiệp\nĐiều phối được hoạt động của đội/nhóm phù hợp với chiến lược chung của doanh nghiệp\nĐánh giá chính xác nguyên nhân, hệ quả của vấn đề đặt trong sự tương quan giữa các bộ phận trong doanh nghiệp",
    level_4:
      "Có khả năng truyền đạt được mục tiêu, tầm nhìn, chiến lược của tổ chức tới nhiều đối tượng cá nhân\nXác định được các cơ hội và nguy cơ có thể xảy đến tổ chức và có phương án hành động phù hợp với giá trị và tầm nhìn của doanh nghiệp\nThường xuyên quan sát, đánh giá, tổng hợp và hành động dựa trên mối tương quan trong và ngoài doanh nghiệp",
    level_5:
      "Xác định được thứ tự ưu tiên các mục tiêu của tổ chức\nĐịnh hình được hoặc có định hướng phát triển giá trị tổ chức\nCó khả năng truyền đạt được mục tiêu, tầm nhìn, chiến lược của tổ chức tới nhiều đối tượng cá nhân\nPhát triển xây dựng được kế hoạch hành động phù hợp với mục đích và giá trị của tổ chức\nDẫn dắt tổ chức đi theo chiến lược",
  },
];

const criteriaPositions = [
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng ra quyết định",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng phân tích dữ liệu",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đàm phán, thuyết phục",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lắng nghe",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng tự học",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng sử dụng tiếng anh",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức, các thuật ngữ chuyên ngành mua hàng",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về sản phẩm, ngành hàng, đối thủ",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình hệ thống nội bộ công ty",
    position: "Chuyên viên mua hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng phân tích dữ liệu",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lắng nghe",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng tự học",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng sử dụng tiếng anh",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về công nghệ thực phẩm",
    position: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tập trung vào kết quả",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lắng nghe",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng tự học",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đối mặt với áp lực",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng sử dụng tiếng anh",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về sử dụng các công cụ, phần mềm thiết kế",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion:
      "Kiến thức về chuyên ngành thiết kế (màu sắc, bố cục, hình ảnh, typo)",
    position: "Nhân viên thiết kế",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kỷ luật",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần chịu trách nhiệm",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đối mặt với áp lực",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lập kế hoạch",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về quy trình quản lý kho hàng",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về thị trường vận tải ",
    position: "Trưởng phòng kho vận",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kỷ luật",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần chịu trách nhiệm",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đối mặt với áp lực",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về quy trình quản lý kho hàng",
    position: "Quản lý vận hành kho",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kỷ luật",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần chịu trách nhiệm",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đối mặt với áp lực",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về công nghệ thực phẩm",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về bao bì đóng gói",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về thiết bị dụng cụ đóng gói thực phẩm",
    position: "Quản lý vận hành đóng gói",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần chịu trách nhiệm",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Không ngại di chuyển",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đàm phán, thuyết phục",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng tự học",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng sử dụng tiếng anh",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về hệ thống máy tính",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về hệ thống mạng internet",
    position: "IT helpdesk",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần chịu trách nhiệm",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Không ngại di chuyển",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đàm phán, thuyết phục",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng tự học",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về sử dụng các công cụ, phần mềm thiết kế",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion:
      "Kiến thức về chuyên ngành thiết kế (màu sắc, bố cục, hình ảnh, typo)",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về kỹ thuật thi công nội thất cửa hàng",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về kỹ thuật thi công quảng cáo cửa hàng",
    position: "Nhân viên kỹ thuật nội thất",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần chịu trách nhiệm",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Không ngại di chuyển",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đàm phán, thuyết phục",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng tự học",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức kỹ thuật điện",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức kỹ thuật cấp thoát nước",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức kĩ thuật điện lạnh",
    position: "Nhân viên kỹ thuật điện nước",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position: "Chuyên viên bán hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Chuyên viên bán hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần lạc quan",
    position: "Chuyên viên bán hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đàm phán, thuyết phục",
    position: "Chuyên viên bán hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Chuyên viên bán hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Chuyên viên bán hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Chuyên viên bán hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về sản phẩm, ngành hàng, đối thủ",
    position: "Chuyên viên bán hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position: "Chuyên viên bán hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về thị trường vận tải ",
    position: "Chuyên viên bán hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Tài xế xe tải",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần chịu trách nhiệm",
    position: "Tài xế xe tải",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Tài xế xe tải",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Tài xế xe tải",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng lái xe",
    position: "Tài xế xe tải",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức giao thông Hà Nội",
    position: "Tài xế xe tải",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức bảo trì xe oto cơ bản",
    position: "Tài xế xe tải",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kỷ luật",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần chịu trách nhiệm",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần lạc quan",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Đổi mới, sáng tạo",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng thuyết trình",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion:
      "Kiến thức về chuyên ngành thiết kế (màu sắc, bố cục, hình ảnh, typo)",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức các loại hình POSM",
    position: "Visual Merchandiser",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Lập trình viên Full stack",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhiệt tình",
    position: "Lập trình viên Full stack",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Cam kết",
    position: "Lập trình viên Full stack",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Lập trình viên Full stack",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng tự học",
    position: "Lập trình viên Full stack",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Lập trình viên Full stack",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về tiêu chuẩn lập trình",
    position: "Lập trình viên Full stack",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về UX/UI",
    position: "Lập trình viên Full stack",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức quản trị server",
    position: "Lập trình viên Full stack",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Cam kết",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng phân tích dữ liệu",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lắng nghe",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình hệ thống nội bộ công ty",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về quy trình chuẩn: Agile, TOC",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức lập trình Python",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về SQL và NoSQL",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Trung thực, thẳng thắn",
    position: "Kế toán tổng hợp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Kế toán tổng hợp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Kế toán tổng hợp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Kế toán tổng hợp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng phân tích dữ liệu",
    position: "Kế toán tổng hợp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Kế toán tổng hợp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức nghiệp vụ kế toán",
    position: "Kế toán tổng hợp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Trung thực, thẳng thắn",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng phân tích dữ liệu",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lập kế hoạch",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức nghiệp vụ kế toán",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion:
      "Am hiểu luật và chế độ kế toán liên quan mảng thuế trong doanh nghiệp",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Biết cách tra cứu và ứng dụng văn bản luật ",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng sử dụng phần mềm kế toán",
    position: "Kế toán thuế",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Chuyên viên phân tích dữ liệu",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Chuyên viên phân tích dữ liệu",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Chuyên viên phân tích dữ liệu",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng phân tích dữ liệu",
    position: "Chuyên viên phân tích dữ liệu",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Chuyên viên phân tích dữ liệu",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position: "Chuyên viên phân tích dữ liệu",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về thị trường vận tải ",
    position: "Chuyên viên phân tích dữ liệu",
    applied: 1.0,
  },
];
