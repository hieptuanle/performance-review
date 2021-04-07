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

  getMatchingCriterion(content?: string) {
    if (!content) {
      return null;
    }
    return this.criteria.find((criterion) => {
      return criterion.criterion === content;
    });
  }
}

const criteria = [
  {
    source: 1,
    group: "Attitude",
    criterion: "Trung thực, thẳng thắn",
    definition:
      "Thái độ trung thực là luôn tôn trọng sự thật, tôn trọng lẽ phải, sống ngay thẳng, thật thà và dũng cảm nhận lỗi khi mắc khuyết điểm.",
    level1:
      "Hiểu được vai trò của trung thực, tôn trọng văn hoá công ty\nCòn e ngại, chưa có chính kiến riêng",
    level2:
      "Nghiêm túc thực hiện theo mọi chỉ đạo và hướng dẫn của cấp trên\nỦng hộ và tuân thủ cơ chế thưởng phạt phân minh\nChưa tự tin đề xuất quan điểm cá nhân",
    level3:
      "Dám nói lên quan điểm cá nhân, kể cả khi bất đồng với mọi người\nTin tưởng và có ý thức giữ lập trường trung thực\nCó tinh thần chịu trách nhiệm khi mắc sai phạm",
    level4:
      "Hiểu rõ vai trò tối quan trọng của trung thực trong cuộc sống\nBiết cách tìm người “cố vấn” để giữ vững lập trường trung thực\nDũng cảm nhận trách nhiệm khi mắc sai phạm\nThẳng thắn tố giác các hành vi không đúng đắn, kể cả của cấp trên",
    level5:
      "Đặt trung thực làm yếu tố cốt lõi trong nguyên tắc sống và làm việc\nĐoán trước được những tình huống sẽ thử thách lòng trung thực và dự kiến cách phản ứng\nGiữ vững được lập trường trước cám dỗ hoặc các vấn đề liên quan đến đạo đức\nCó phương pháp hiệu quả lâu dài để khuyến khích lòng trung thực của người khác",
  },
  {
    source: 1,
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    definition:
      "Người tỉ mỉ, cẩn thận là người có khả năng hoàn thành công việc sau khi đã cân nhắc tất cả các yếu tố liên quan dù là các yếu tố nhỏ nhất, luôn để tâm đến công việc và đảm bảo công việc được tiến hành chính xác nhất.\nCó ý thức xem xét các yếu tố của nhiệm vụ trước khi bắt tay vào thực hiện\nChủ động kiểm tra lại kết quả công việc trước khi bàn giao để đảm bảo tính chính xác và hoàn thiện\nThông báo kịp thời tới các bên liên quan đến nhiệm vụ khi có vấn đề thay đổi\nCó thể phát hiện các lỗi trong công việc trước khi lỗi để lại hậu quả\nChú tâm trong quá trình thực hiện công việc, tránh để xảy ra sai sót\nTheo dõi quá trình sửa đổi từng sai sót trong sản phẩm để đảm bảo không bị sơ suất",
    level1: "Hiếm khi/ Không bao giờ",
    level2: "Thỉnh thoảng",
    level3: "Khá thường",
    level4: "Thường xuyên",
    level5: "Luôn luôn",
  },
  {
    source: 1,
    group: "Attitude",
    criterion: "Nhạy bén",
    definition:
      "Nhạy bén là khả năng nắm bắt, phát hiện và thích ứng nhanh đối với những cơ hội mới, thay đổi mới.",
    level1:
      "Chỉ nắm được những thay đổi liên quan trực tiếp đến bản thân\nCó ý thức thay đổi để thích nghi nhưng còn chậm\nHiểu biết thực tế còn hạn chế",
    level2:
      "Nắm được những thay đổi liên quan đến bản thân và logic hoặc cơ sở để thay đổi\nCó ý thức sẵn sàng thay đổi để thích nghi\nCập nhật kịp thời các thông tin nổi bật, quan trọng",
    level3:
      "Hoà hợp, biết lắng nghe, chia sẻ, tôn trọng mình và tôn trọng người khác\nSử dụng ngôn ngữ linh hoạt, trôi chảy, thuyết phục\nTrí nhớ tốt, hiểu biết đa lĩnh vực\nKiểm soát chặt chẽ được hành động và cảm xúc",
    level4:
      "Nhanh chóng sửa đổi hành vi để thích nghi hiệu quả với những thay đổi trong môi trường làm việc\nTích cực tìm kiếm và chọn lọc thông tin xoay quanh vấn đề đang cần giải quyết\nPhản xạ tốt với các tình huống bất ngờ phát sinh",
    level5:
      "Nhanh nhẹn thích ứng với sự thay đổi, biết tập trung vào lợi ích của sự thay đổi\nChủ động tìm kiếm các thông tin xoay quanh cuộc sống hiện tại\nSẵn sàng thử các phương pháp tiếp cận mới phù hợp cho các tình huống mới\nQuan sát, phân tích và nhanh chóng đưa ra được hình dung về ảnh hưởng của thay đổi",
  },
  {
    source: 1,
    group: "Attitude",
    criterion: "Kiên trì",
    definition:
      "Bền bỉ, kiên trì là thái độ nỗ lực, cố gắng không ngừng nghỉ, quyết tâm vượt qua thử thách để theo đuổi mục đích mà mình đã đề ra.",
    level1:
      "Có thể thực hiện lặp đi lặp lại một thao tác cụ thể\nChỉ thực hiện các công việc khó khăn khi có người hướng dẫn cụ thể và cùng thực hiện",
    level2:
      "Nghiêm túc thực hiện kỷ luật, nội quy dù có khắt khe\nChấp nhận thực hiện các công việc khó khăn khi được yêu cầu\nĐôi khi bị ảnh hưởng tâm lý bởi thất bại, dư luận, lời trách mắng, v.v.",
    level3:
      "Duy trì được các thói quen tốt trong thời gian dài\nNhận thức được điểm yếu của bản thân và không ngừng trau dồi\nSẵn sàng đảm nhận các công việc khó khăn, đòi hỏi nhiều công sức\nCó khả năng phân tích sự việc dưới góc nhìn đa chiều",
    level4:
      "Không nản chí, biết cách biến trở ngại thành động lực để cố gắng\nĐấu tranh đến cùng để bảo vệ chính kiến\nBiết tự trấn an bản thân, luôn giữ được bình tĩnh trước áp lực\nBiết tận dụng những cơ hội nhỏ để phát triển từng bước",
    level5:
      "Biết lập kế hoạch hành động để thực hiện mục tiêu và cẩn thận thực hiện từng nhiệm vụ nhỏ\nBiết đứng dậy sau vấp ngã, biến thất bại là bài học kinh nghiệm và động lực để làm lại từ đầu\nChủ động tự tìm tòi nâng cao hiểu biết, kỹ năng chuyên môn\nKiên nhẫn thử nghiệm, cải tiến những ý tưởng mới trước khi chính thức áp dụng",
  },
  {
    source: "Mơ",
    group: "Attitude",
    criterion: "Kỷ luật",
    definition:
      "Kỷ luật là những hành động theo kế hoạch, mục tiêu đã đề ra trước đó, bất kể bạn đang ở trong hoàn cảnh nào, cảm xúc cá nhân ra sao. Kỷ luật sẽ khiến bạn hy sinh những khoái cảm và vui thú hiện tại để đạt được điều quan trọng hơn. Trong công việc, tính kỷ luật giúp nhân sự làm tốt công việc, nghiêm túc và có trách nhiệm hơn. Kỷ luật có thể do bản thân tự đề ra, cũng có thể do doanh nghiệp quy định trước đó nhằm thống nhất quy trình hoạt động chung.",
    level1:
      "Tự nhận thức:\nCó thể làm mọi việc mà không bị cảm xúc chi phối, tức là dù có buồn hay chán nản nhưng vẫn hoàn thành",
    level2:
      "Nhận thức có ý thức:\nNhận thức được những hành vi, hoạt động tốt cần phải thực hiện để hoàn thành mục tiêu đề ra",
    level3:
      "Quyết tâm thực hiện đúng kỷ luật thay vì chỉ lập ra được mục tiêu, kế hoạch của mình",
    level4:
      "Có can đảm vượt qua khó khăn để hoàn thành mục tiêu, can đảm vượt lên chính mình để thực hiện hành động để đạt tới mục tiêu nào đó",
    level5:
      "Tự định hướng bản thân - không chờ bị tác động. Biết cách tự điều hướng bản thân, nói chuyện với chính mình khi xung quanh không có ai để khuyến khích, trấn an bản thân",
  },
  {
    source: "Mơ",
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    definition:
      "Phản hồi là cách thức giao tiếp mà người ta sẽ đưa và nhận thông tin trong cách ứng xử. Kỹ năng phản hồi được thể hiện qua 2 cách:\n\nPhản hồi xây dựng (hay còn gọi là phản hồi tích cực)\nPhản hồi theo kiểu “khen và chê”",
    level1: "Nhận thông tin và hồi đáp kịp thời",
    level2: "Nhận thông tin và hồi đáp thường xuyên",
    level3: "Chuẩn bị thông tin phản hồi rõ ràng về những gì sẽ nói",
    level4:
      "Cung cấp những thông tin, hồi đáp hữu ích hay những gợi ý cụ thể cho đối phương khi tiếp nhận thông tin. Đi đúng hướng và trọng tâm vào vấn đề",
    level5:
      "Theo sát và có khả năng đo lường được thông tin nhận được. Ghi chép lại thông tin và thảo luận về công việc cũng như những gì cần phải được sửa đổi",
  },
  {
    source: 0,
    group: "Attitude",
    criterion: "Tinh thần chịu trách nhiệm",
    definition:
      "Tinh thần trách nhiệm trong công việc là khả năng tự nhận thức, chủ động và nỗ lực hoàn thành các nhiệm vụ được giao, xứng đáng với mức lương bạn nhận, với chức danh công việc bạn đảm nhiệm.",
    level1:
      "Là việc một người nào đó có trách nhiệm thực hiện một nhiệm vụ, nhưng họ không làm, đòi hỏi phải có tác nhân bên ngoài thì mới có trách nhiệm hoặc thực hiện nó với một tinh thần hời hợt, không thực sự quan tâm đến những hậu quả không tốt xảy ra do hành vi của mình gây ra.",
    level2:
      "Nhận thức được mình phải đảm bảo một kết quả phải xảy ra trong tương lai một cách chính xác và kịp thời.\nNhận thức về việc nếu không hoàn thành công việc đó thì mình là người có lỗi và mình phải gánh chịu hậu quả không tốt xảy ra do không hoàn thành công việc đó.\nThực thi công việc một cách có ý thức để đảm bảo kết quả đó phải xảy ra trong tương lai một cách chính xác và kịp thời",
    level3:
      "Hỗ trợ đồng nghiệp, đóng góp ý kiến cho cấp trên thì họ vẫn giữ được sự tôn trọng đối với đồng nghiệp, cấp trên và vẫn giữ được sự tôn trọng đối với quyền hạn của đồng nghiệp, của cấp trên",
    level4:
      "Luôn luôn nỗ lực hết sức mình để hoàn thành xuất sắc mọi nhiệm vụ cấp trên giao cho\nCó tinh thần đóng góp ý kiến, đóng góp công sức cho cấp trên, đồng nghiệp một cách tự nguyện",
    level5:
      "Yếu tố thứ nhất là dám nghĩ, dám làm: Nhận nhiệm vụ và nhận trách nhiệm với nhiệm vụ của mình, đồng thời nỗ lực hết sức mình để hoàn thành nhiệm vụ, không tránh né, đùn đẩy nhiệm vụ qua cho hoàn cảnh hay người khác.\nYếu tố thứ hai là dám chịu (trách nhiệm): Nhận lỗi và sẵn sàng gánh chịu hậu quả xấu đến với mình khi mình không hoàn thành nhiệm vụ, không đổ thừa cho hoàn cảnh hay người khác.\nTự giác nhằm góp phần xây dựng tổ chức ngày càng tốt đẹp hơn.Có tinh thần hợp tác cao trong công việc với các thành viên khác trong tổ chức",
  },
  {
    source: 0,
    group: "Attitude",
    criterion: "Tinh thần lạc quan",
    definition:
      "Người lạc quan là người luôn tin tưởng vào công việc. Họ luôn tự tin hướng đến tương lai chứ không mãi quay nhìn về quá khứ. Họ tìm kiếm cơ hội trong mọi khó khăn. Thay vì xem xét những gì đã xảy ra trong quá khứ và tìm người đổ lỗi, người lạc quan chỉ suy nghĩ những gì có thể thực hiện được trong hiện tại và tương lai.",
    level1:
      "Hiểu được vai trò của lạc quan\nDễ bị ảnh hưởng bởi những ý nghĩ xung quanh\nNản lòng khi gặp khó khăn",
    level2: "Có ý thức trong việc điều chỉnh cảm xúc và trạng thái hành động",
    level3:
      "Nhìn nhận về những khía cạnh tích cực của sự việc\nTạo dưng và kết nối các mối quan hệ sâu sắc hơn với những người xung quanh",
    level4:
      "Tự giải phóng và cho phép bạn cân nhắc các lựa chọn mới và thay đổi công việc cũng như cuộc sống theo hướng tốt hơn\nThể hiện trạng thái bên ngoài là sự vui vẻ chiếm phần lớn, ít dành thời gian cho than vãn, luôn thấy mặt tốt của bất cứ vấn đề nào, luôn tin vào thành công",
    level5:
      "Sẵn sàng gánh vác trách nhiệm tích cực cố gắng hết mình vì công việc. \nLuôn nghĩ về kết quả và tìm kiếm các cơ hội nên dễ gặt hái thành công\nTinh thần lạc quan còn có sức mạnh truyền cảm hứng cho người khác. \nTinh thần lạc quan giúp họ tin tưởng vào bản thân, vượt qua khó khăn, thành công trong mọi công việc.",
  },
  {
    source: 0,
    group: "Attitude",
    criterion: "Nhiệt tình",
    definition:
      "Một người nhiệt tình thể hiện bằng việc họ sẵn sàng làm những việc mà người khác ngại làm. Con người quyết định dựa trên cân đối giữa lợi ích và chi phí. Một người nhiệt tình sẽ sẵn sàng làm một việc mà theo quan điểm của số đông cho rằng đó là lợi ích âm.",
    level1:
      "Chỉ nắm được những nhiệm vụ và hành động dựa trên những lợi ích của bản thân\nTinh thần kết nối, phối hợp chưa cao\nRụt rè, e ngại",
    level2:
      "Có ý tưởng, đóng góp cho tổ chức\nCó ý thức sẵn sàng thay đổi để thích nghi\nSẵn sàng tham gia hành động",
    level3:
      "Kiên định, không dễ bị lung lay, luôn hành động có chủ đích, đầy nhiệt huyết và không gây ra bất kỳ tổn hại nào về mặt thể chất lẫn tinh thần",
    level4:
      "Làm việc với sự đam mê và yêu thích đối với công việc\nLuôn suy nghĩ, trăn trở, tìm kiếm ý tưởng mói cho công việc của mình\nLàm việc với thái độ hứng thú, tích cực và chủ động",
    level5:
      "Đưa mọi người và công việc lại gần nhau tạo cảm hứng hành động\nXuất sắc trong các công việc đã có định hướng hành động, thực tế và không lập lại.\nThích khởi xướng và đưa ra những thay đổi, những ý kiến phản hồi mang tính ủng hộ với người khác.",
  },
  {
    source: 1,
    group: "Attitude",
    criterion: "Đổi mới, sáng tạo",
    definition:
      "Năng lực sáng tạo và đổi mới là khả năng thách thức các tư duy truyền thống và nhìn nhận tình huống dưới góc độ mới, đưa ra các cách làm mới, xây dựng các sản phẩm và quy trình mới.",
    level1:
      "Nhận diện được các yếu tố sáng tạo\nXem xét các ý tưởng sáng tạo từ các thành viên khác trong nhóm",
    level2:
      "Tiếp thu ý tưởng sáng tạo từ các cá nhân khác và có đề xuất hoàn thiện các ý tưởng sáng tạo đó\nLàm việc với các cá nhân khác để cùng nghĩ ra cách thức tiếp cận hiệu quả đối với vấn đề",
    level3:
      "Đánh giá hiệu quả các cách làm cũ và đề xuất xây dựng phương án cải tiến\nChủ động tìm kiếm cách thức hiệu quả nhất để thực hiện công việc chung",
    level4:
      "Thiết kế được các cách làm mới và hiệu quả nhất để thực hiện các mục tiêu của doanh nghiệp\nThu thập từ nhiều nguồn thông tin và tư duy được nhiều phương án để tiếp cận một vấn đề \n Xây dựng được môi trường làm việc thúc đẩy sáng tạo ở các nhóm làm việc",
    level5:
      "Xây dựng được phương pháp, quy trình mới có khả năng ứng dụng ở quy mô doanh nghiệp với tầm ảnh hưởng sâu rộng\nĐưa ra cách giải quyết triệt để được cho những vấn đề nghiêm trọng của doanh nghiệp\nTổ chức được bộ máy làm việc kiểu mới giúp cải thiện hiệu suất chung của cả doanh nghiệp\nCó khả năng tư duy được cách làm mới trong hoàn cảnh rất thiếu hoặc không có dữ kiện",
  },
  {
    source: 1,
    group: "Attitude",
    criterion: "Tập trung vào kết quả",
    definition:
      "Tư duy tập trung vào kết quả là tư duy tạo ra kết quả kinh doanh dựa trên yêu cầu nhất quán; thiết lập và đạt được mục tiêu; luôn tuân thủ các tiêu chuẩn về chất lượng, dịch vụ, năng suất và đáp ứng thời hạn; duy trì tập trung vào mục tiêu của tổ chức.",
    level1:
      "Không có mục tiêu cụ thể, chỉ cam kết đầu ra\nDuy trì được công việc dưới áp lực của trở ngại cho đến khi có giải pháp khả thi\nCó ý thức duy trì nhưng không đảm nhận được đồng thời chất lượng, dịch vụ và năng suất\nBáo cáo kết quả theo mẫu có sẵn",
    level2:
      "Thiết lập được mục tiêu nhưng còn sai số đối với khả năng làm được\nCó tinh thần ứng phó và chịu trách nhiệm giải quyết các trở ngại\nTheo dõi và kịp thời xử lý các vấn đề gây ảnh hưởng đến chất lượng, dịch vụ và năng suất\nCó khả năng đánh giá kết quả dựa trên nhiều tiêu chí",
    level3:
      "Thiết lập các mục tiêu rõ ràng và cụ thể\nCó khả năng nhìn nhận về mức độ của trở ngại, chuẩn bị sẵn phương án chủ động giảm thiểu tác động của trở ngại\nCó cơ chế giám sát và thưởng phạt nhằm đảm bảo chất lượng, dịch vụ và năng suất\nCó khả năng đánh giá kết quả đa chiều, kịp thời xử lý các thiếu sót đơn giản, rút ra được bài học kinh nghiệm",
    level4:
      "Có khả năng thiết lập mục tiêu dài hạn và ngắn hạn dựa trên mục tiêu chung của tổ chức\nCó khả năng phân tích lợi hại của trở ngại, chuẩn bị sẵn tinh thần và phương án chủ động phòng tránh, loại bỏ trở ngại\nTạo động lực cho các thành viên, chủ động giám sát chặt chẽ và tìm cách nâng cao chất lượng, dịch vụ và năng suất làm việc\nCó khả năng đánh giá kết quả toàn diện, lập ra phương án xử lý thiếu sót, lấy đó làm cơ sở nền tảng cho lần sau",
    level5:
      "Có khả năng thiết lập các mục tiêu dài hạn và ngắn hạn gắn bó chặt chẽ với việc đánh giá kết quả lần trước\nDự đoán và phân tích chính xác các trở ngại và rủi ro có thể xảy ra; có chiến lược thử nghiệm và chốt được phương án biến mọi trở ngại thành cơ hội\nLiên tục tìm kiếm, thử nghiệm và tận dụng cơ hội mới để cải thiện chất lượng, dịch vụ và gia tăng năng suất\nCó khả năng đánh giá kết quả toàn diện, chủ động nghiên cứu hiệu quả các giải pháp và tiếp tục thử các giải pháp mới cho đến khi đạt được kết quả mong đợi",
  },
  {
    source: "Mơ",
    group: "Skill",
    criterion: "Kỹ năng thuyết trình",
    definition:
      "Kỹ năng thuyết trình là khả năng diễn đạt một thông điệp với những lý lẽ và lập luận chặt chẽ để thuyết phục và tương tác với người nghe bằng cách thu thập và giải đáp các câu hỏi phản biện.",
    level1:
      "Chuẩn bị nội dung, hình thức đầy đủ\nPhong cách trình bày chưa tự tin, mạch lạc",
    level2:
      "Chuẩn bị nội dung, hình thức đầy đủ\nPhong cách trình bày cụ thể, tuy nhiên vẫn còn phụ thuộc vào văn bản",
    level3:
      "Xác định mục tiêu cụ thể, vượt qua sự hồi hộp, lo lắng cũng như những nhân tố gây phân tán trong lúc thuyết trình",
    level4:
      "Chuẩn bị nội dung, hình thức đầy đủ, xác định được mục tiêu cụ thể\nPhong cách trình bày sáng tạo, thu hút và truyền cảm hứng cho người nghe",
    level5:
      "Sử dụng các kỹ thuật tương tác với khán giả để xác định và giải quyết các câu hỏi. Linh hoạt, nhạy bén trong xử lý tình huống. Phân tích và tổng hợp các feedback để rút kinh nghiệm",
  },
  {
    source: "Mơ",
    group: "Skill",
    criterion: "Kỹ năng thiết lập mục tiêu",
    definition:
      "Kỹ năng lập kế hoạch là khả năng sắp xếp và sử dụng một cách có hiệu quả nguồn lực và thời gian giới hạn để đảm bảo hoàn thành công việc.",
    level1:
      "Chưa biết cách đặt thứ tự ưu tiên cho công việc\nSẽ không hoàn thành được công việc theo đúng deadline nếu như khối lượng công việc lớn",
    level2:
      "Có kế hoạch công việc cho bản thân\nHoàn thành được các công việc của bản thân theo đúng deadline với khối lượng công việc lớn\nChưa có khả năng tổ chức công việc cho đội nhóm",
    level3:
      "Có khả năng lên kế hoạch công việc cho bản thân/nhóm\nBiết cách đặt thứ tự ưu tiên ưu tiên cho công việc\nCó khả năng hoàn thành khối lượng công việc lớn, nhưng dễ mất kiểm soát trong những tình huống căng thẳng và nhạy cảm",
    level4:
      "Có khả năng lên kế hoạch hành động chi tiết theo từng giai đoạn để hoàn thành mục tiêu cho công ty, sẵn sàng ứng phó với nhiều tình huống\nPhân phối nguồn lực chặt chẽ, biết đặt thứ tự ưu tiên\nCó khả năng hoàn thành khối lượng công việc lớn trong cả những tình huống áp lực",
    level5:
      "Cá nhân có thể tự tin truyền đạt kĩ năng này cho người khác.\nSắp xếp được hệ thống công việc ở quy mô chiến lược\nPhân phối một nguồn lực lớn một cách chặt chẽ, biết đặt thứ tự ưu tiên chính xác\nBao quát được hiệu quả sử dụng nguồn lực\nLuôn giữ được mọi việc trong tầm kiểm soát",
  },
  {
    source: "Mơ",
    group: "Skill",
    criterion: "Kỹ năng thấu hiểu nội tâm",
    definition:
      "Thấu hiểu – đó là khả năng hiểu biết và nhận thức, là sự kết hợp trải nghiệm giữa cảm nhận và suy nghĩ của con người, sự hiểu biết về hoàn cảnh, nhu cầu, khó khăn của một người từ quan điểm của họ và đặt mình vào vị trí của họ để có một cái nhìn sâu sắc hơn.",
    level1: "Chú tâm lắng nghe những gì đối phương nói",
    level2:
      "Chủ động tương tác, hiểu được thông điệp mà người khác đang cố gắng truyền đạt",
    level3: "Đặt bản thân vào vị trí của người khác để thấu hiểu, cảm thông",
    level4:
      "Thu thập và kết nối xâu chuỗi các dữ liệu thông tin và có một cái nhìn đầy đủ hơn về đối phương",
    level5:
      "Có khả năng nhận biết, điều chỉnh hành vi của bản thân phù hợp với tâm lý của đối phương",
  },
  {
    source: "Dũng",
    group: "Skill",
    criterion: "Kỹ năng ra quyết định",
    definition: null,
    level1:
      "Áp dụng đúng quy trình để xử lí tình huống mà không có khả năng xử lí tình huống bất ngờ, không cân nhắc các mặt của quy trình\nChỉ có khả năng quyết định các vấn đề nhỏ lẻ, không để lại hậu quả nghiêm trọng",
    level2:
      "Đưa ra quyết định kịp thời, đúng đắn trong các tình huống quen thuộc và không quá nghiêm trọng, tuy nhiên sẽ bối rối nếu có tình huống ngoại lệ bất ngờ xảy ra\nCó ý thức đánh giá các phương án xử lí tình huống\nPhải nhờ trợ giúp trong tình huống thiếu dữ kiện để ra quyết định\nCó ý thức nhìn nhận vấn đề khách quan nhưng còn hành động theo chủ quan",
    level3:
      "Có khả năng phân tích một tình huống phức tạp, nhìn nhận được mối quan hệ giữa các yếu tố trong tình huống\nĐưa ra quyết định kịp thời, đúng đắn trong các tình huống có độ khó trung bình",
    level4:
      "Đưa ra được giải pháp hiệu quả, kịp thời trong một tình huống chưa có tiền lệ\nChủ động thu thập thêm dữ liệu và xử lí một hệ thống thông tin lớn, phức tạp trong thời gian ngắn, đưa ra được dự đoán về xu hướng và các hệ quả có khả năng xảy ra",
    level5:
      "Luôn nhìn nhận vấn đề trung lập, khách quan ở nhiều góc độ\nCó khả năng tổng hợp và hệ thống hóa thông tin phức tạp\nNhìn nhận được vấn đề ở quy mô lớn (mang tầm chiến lược) và đề xuất được những phương án sáng tạo có tính đột phá\nTiên liệu được các tình huống và đưa ra được một hệ thống giải pháp hiệu quả, kịp thời trong những tình huống phức tạp, mơ hồ, thiếu thông tin",
  },
  {
    source: "Mơ",
    group: "Skill",
    criterion: "Kỹ năng phân tích dữ liệu",
    definition:
      "Phân tích dữ liệu (data analysis) là một quá trình làm việc với dữ liệu để tìm ra những thông tin hữu ích hỗ trợ việc ra quyết định kinh doanh. Quá trình này bao gồm việc làm sạch, chuyển đổi và mô hình hóa dữ liệu.\nMục đích chính của phân tích dữ liệu là tìm ý nghĩa trong dữ liệu để có thể sử dụng kiến ​​thức xuất phát để đưa ra quyết định sáng suốt.",
    level1: "Có kỹ năng đọc được các thông tin (date) có sẵn",
    level2:
      "Hiểu ý nghĩa từng dữ liệu muốn thể hiện là gì, chúng mô tả điều gì\nLuôn luôn đặt các câu hỏi để xác định các trả lời bằng nhiều chỉ số hiệu suất, truy vấn và báo cáo",
    level3:
      "Phân tích chấn đoán: Tại sao điều đó xảy ra\nSo sánh, tìm kiếm được những điểm bất thường. Đánh giá những yếu tố tác động dựa trên data. Phân tích chi tiết hơn và phân tích mối quan hệ với dữ liệu khác",
    level4:
      "Phân tích dự đoán: Điều gì sẽ xảy ra\nHiểu được liệu các xu hướng hoặc hành vi hiện tại có tiếp tục trong tương lai hay không\nCung cấp cho cấp trên/cá nhân về cái nhìn về tương lai để có thể chủ động hành động nhằm đảm bảo kết quả mong muốn\nSử dụng số liệu thống kê và mô hình để xác định hiệu suất trong tương lai dựa trên dữ liệu hiện tại và quá khứ",
    level5:
      "Phân tích đề xuất: làm thế nào để nó xảy ra\nSử dụng các ước tính của phân tích dự đoán về những gì có thể xảy ra để đề xuất những hành động nên thực hiện",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng đàm phán, thuyết phục",
    definition:
      "Kỹ năng đàm phán - thuyết phục là khả năng đưa ra phương án thống nhất trong tình huống mâu thuẫn, giảm thiểu xung đột lợi ích giữa các bên để đạt được kết quả tốt nhất và giữ vững mối quan hệ hợp tác.",
    level1:
      "Biết kiểm soát thái độ của bản thân khi gặp phản đối nhưng còn lúng túng khi suy nghĩ phương án\nCó khả năng diễn đạt rành mạch ý kiến cá nhân nhưng không tạo được sự thuyết phục",
    level2:
      "Chủ động lắng nghe nguyện vọng của đối phương, trình bày rành mạch phương án đề xuất dù không thực sự thuyết phục",
    level3:
      "Tạo dựng được sự tin tưởng của một tập thể theo đề xuất của cá nhân\nBiết hướng xử lí đúng khi bị phản đối\nLuôn đặt mình vào tình thế của đối phương, nhưng phương án đề xuất chưa thực sự thuyết phục",
    level4:
      "Thuyết phục được đội ngũ cấp cao theo các đề xuất của cá nhân\nBiết xử lí khôn khéo khi bị phản đối\nLuôn đặt mình vào tình thế của đối phương và đưa ra được những phương án đề xuất hợp lí\nDiễn đạt rành mạch, rõ ràng, có tính thuyết phục cao",
    level5:
      "Thuyết phục được đội ngũ quản lý cấp cao đồng ý với các thay đổi lớn, có tầm ảnh hưởng rộng\nBiết điều chỉnh thái độ của bản thân linh hoạt theo tình huống\nThấu hiểu được chính xác nhu cầu của đối phương, đưa ra được phương án khéo léo khiến đối phương hài lòng \nNgôn ngữ và giọng điệu linh hoạt, có tính thuyết phục cao và tạo được ảnh hưởng lên đối phương",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    definition:
      "Kỹ năng phân tích, xử lí tình huống và ra quyết định là khả năng phát hiện ra vấn đề, phân tích và liên hệ các thông tin để thấu hiểu toàn diện vấn đề",
    level1:
      "Áp dụng đúng quy trình để xử lí tình huống mà không có khả năng xử lí tình huống bất ngờ, không cân nhắc các mặt của quy trình",
    level2:
      "Đưa ra quyết định kịp thời, đúng đắn trong các tình huống quen thuộc và không quá nghiêm trọng, tuy nhiên sẽ bối rối nếu có tình huống ngoại lệ bất ngờ xảy ra\nCó ý thức đánh giá các phương án xử lí tình huống",
    level3:
      "Có khả năng phân tích một tình huống phức tạp, nhìn nhận được mối quan hệ giữa các yếu tố trong tình huống",
    level4:
      "Đưa ra được giải pháp hiệu quả, kịp thời trong một tình huống chưa có tiền lệ\nChủ động thu thập thêm dữ liệu và xử lí một hệ thống thông tin lớn, phức tạp trong thời gian ngắn, đưa ra được dự đoán về xu hướng và các hệ quả có khả năng xảy ra",
    level5:
      "Luôn nhìn nhận vấn đề trung lập, khách quan ở nhiều góc độ\nCó khả năng tổng hợp và hệ thống hóa thông tin phức tạp\nNhìn nhận được vấn đề ở quy mô lớn (mang tầm chiến lược) và đề xuất được những phương án sáng tạo có tính đột phá\nTiên liệu được các tình huống và đưa ra được một hệ thống giải pháp hiệu quả, kịp thời trong những tình huống phức tạp, mơ hồ, thiếu thông tin",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    definition:
      "Kỹ năng tổ chức và quản lý thời gian là khả năng sắp xếp và sử dụng một cách có hiệu quả nguồn lực và thời gian giới hạn để đảm bảo hoàn thành công việc.",
    level1:
      "Chưa biết cách đặt thứ tự ưu tiên cho công việc\nSẽ không hoàn thành được công việc theo đúng deadline nếu như khối lượng công việc lớn",
    level2:
      "Có kế hoạch công việc cho bản thân\nHoàn thành được các công việc của bản thân theo đúng deadline với khối lượng công việc lớn\nChưa có khả năng tổ chức công việc cho đội nhóm",
    level3:
      "Có khả năng lên kế hoạch công việc cho nhóm\nBiết cách đặt thứ tự ưu tiên ưu tiên cho công việc\nCó khả năng hoàn thành khối lượng công việc lớn, nhưng dễ mất kiểm soát trong những tình huống căng thẳng và nhạy cảm",
    level4:
      "Có khả năng lên kế hoạch hành động chi tiết theo từng giai đoạn để hoàn thành mục tiêu cho công ty, sẵn sàng ứng phó với nhiều tình huống\nPhân phối nguồn lực chặt chẽ, biết đặt thứ tự ưu tiên\nCó khả năng hoàn thành khối lượng công việc lớn trong cả những tình huống áp lực",
    level5:
      "Sắp xếp được hệ thống công việc ở quy mô chiến lược\nPhân phối một nguồn lực lớn một cách chặt chẽ, biết đặt thứ tự ưu tiên chính xác\nBao quát được hiệu quả sử dụng nguồn lực\nLuôn giữ được mọi việc trong tầm kiểm soát",
  },
  {
    source: "Mơ",
    group: "Skill",
    criterion: "Kỹ năng lắng nghe",
    definition:
      "Lẵng nghe là một quá trình chủ động, tập trung và mong muốn thấu hiểu nội dung của người nói. Phân tích những gì họ nói rồi đưa ra lời đối đáp ý nghĩa hoặc chia sẻ, cho lời khuyên với người đối diện",
    level1:
      "Chủ động lắng nghe, nhưng không biết cách khơi gợi được phản hồi của đối phượng",
    level2: "Chủ động lắng nghe, thể hiện được thái độ quan tâm tới đối phương",
    level3:
      "Thường xuyên lắng nghe, quan tâm tới đối phương và biết khơi gợi giao tiếp hai chiều một cách khéo léo",
    level4:
      "Biết lắng nghe và thường chấp nhận những phản hồi mà người khác dành cho mình",
    level5:
      "Lắng nghe và đi đến những chiến lược rõ ràng, hành động thiết thực mang lại kết quả tốt",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    definition:
      "Kỹ năng làm việc nhóm là khả năng thiết lập và duy trì mối quan hệ hợp tác tích cực với các thành viên khác để hoàn thành tốt đẹp các mục tiêu chung.",
    level1:
      "Có trách nhiệm với công việc chung, tuân theo các chỉ dẫn của lãnh đạo \nHòa đồng, sẵn sàng san sè và giúp đỡ các thành viên trong nhóm",
    level2:
      "Chủ động chia sẻ và giúp đỡ các thành viên trong nhóm\nNắm được vai trò của từng thành viên trong nhóm",
    level3:
      "Xây dựng được mối quan hệ tốt đẹp với các thành viên trong và ngoài nhóm\nNắm được năng lực và vai trò của từng thành viên trong nhóm \nTạo dựng và cổ vũ tinh thần hợp tác trong nhóm",
    level4:
      "Khơi dậy tinh thần hợp tác giữa các nhóm bằng cách cổ vũ các thành viên cùng chia sẻ và giúp đỡ lẫn nhau\nCổ vũ, tạo động lực cho các thành viên trong nhóm cùng đạt được mục tiêu chung\nXây dựng được một môi trường làm việc trong nhóm cởi mở, thân thiện \nTổ chức được phân công công việc trong nhóm hiệu quả dựa trên năng lực của từng thành viên",
    level5:
      "Xây dựng và thúc đẩy tinh thần hợp tác giữa các nhóm để cùng đạt được mục tiêu chung của doanh nghiệp\nTạo dựng một tập thể vững mạnh nhờ khai thác hiệu quả năng lực của từng nhóm và kết nối các nhóm bằng mục tiêu, giá trị và tầm nhìn chung\nTạo dựng văn hóa làm việc nhóm trong tổ chức",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng tự học",
    definition:
      "Kỹ năng tự học, tự trau dồi là khả năng tự xác định được các điểm mạnh và điểm yếu của bản thân, từ đó tìm cách khắc phục điểm yếu và phát triển thế mạnh để tự nâng cao hiệu suất làm việc của cá nhân và tổ chức.",
    level1: "Biết tiếp thu ý kiến nhưng chưa có chọn lọc",
    level2:
      "Chấp nhận tham gia các khoá học nâng cao nghiệp vụ khi chỉ khi bắt buộc\nBiết quan sát, học hỏi từ những tình huống thực tế",
    level3:
      "Chấp nhận tham gia các khoá học nâng cao nghiệp vụ khi có sự hỗ trợ của tổ chức\nBiết áp dụng kiến thức mới vào thực tế nhưng không thể tự đánh giá, rút kinh nghiệm",
    level4:
      "Điều chỉnh được định hướng học tập của bản thân linh hoạt theo yêu cầu của tổ chức\nSẵn sàng tham gia các khoá học nâng cao nghiệp vụ khi được giới thiệu\nBiết áp dụng kiến thức mới vào thực tế để tự rút kinh nghiệm\nLuôn lắng nghe và tiếp thu ý kiến từ mọi người",
    level5:
      "Tự xác định được năng lực chuyên môn cần thiết trong tương lai\nBám sát vào xu hướng công việc của thời đại để xây dựng định hướng học tập\nChủ động tìm kiếm và theo học các khoá học nâng cao nghiệp vụ\nLuôn luôn tiếp thu có chọn lọc những ý kiến tích cực từ mọi người\nLiên tục tự đánh giá và tìm kiếm phản hồi từ cấp trên và người có năng lực chuyên môn",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng đối mặt với áp lực",
    definition:
      "Kỹ năng đối mặt với áp lực là khả năng vẫn duy trì được hiệu quả công việc khi đối mặt với áp lực.",
    level1:
      "Chỉ giữ được hiệu quả làm việc trong các giai đoạn áp lực cường độ thấp\nKiềm chế được cảm xúc của bản thân, tránh những suy nghĩ tiêu cực",
    level2:
      "Duy trì sự bình tĩnh khi đối phó với những tình huống căng thẳng\nGiữ được tinh thần trách nhiệm, hoàn thành công việc đúng hạn\nLuôn suy nghĩ trước khi hành động",
    level3:
      "Xác định được giới hạn cá nhân cho khối lượng công việc và phân chia công việc hợp lý\n Luôn bình tĩnh và trấn tĩnh người khác trong những tình huống căng thẳng\n Cân bằng được trách nhiệm công việc và trách nhiệm cuộc sống cá nhân",
    level4:
      "Biết áp dụng các chiến lược giảm thiểu áp lực lâu dài\n Luôn đưa ra được phán quyết chính xác, khách quan\n Có tinh thần cầu tiến, sẵn sàng đối mặt với áp lực",
    level5:
      "Có khả năng tập trung và tràn đầy sinh lực làm việc ngay trong thời kỳ căng thẳng Duy trì sự bình tĩnh và thể hiện sự tự chủ tuyệt đối trước thách thức lớn\nCó phương án tối ưu để giải phóng hoặc hạn chế áp lực trong tổ chức\nCó khả năng biến áp lực thành động lực làm việc hiệu quả",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    definition:
      "Kỹ năng giao tiếp là khả năng sử dụng phương tiện ngôn ngữ nói hoặc ngôn ngữ cơ thể để diễn đạt suy nghĩ, ý kiến, cảm nhận một cách rõ ràng và thuyết phục; đồng thời thúc đẩy được giao tiếp hai chiều.",
    level1:
      "Có khả năng diễn đạt được ý kiến của mình, dù không phải lúc nào cũng mạch lạc và chính xác\nChủ động lắng nghe, nhưng không biết cách khơi gợi được phản hồi của đối phượng",
    level2:
      "Có khả năng diễn đạt rành mạch tới nhiều đối tượng, tuy nhiên ngôn ngữ và giọng điệu trong nhiều trường hợp không chính xác\nCó ý thức khơi gợi giao tiếp hai chiều, dù đôi khi không thực sự khéo léo\nChủ động lắng nghe, thể hiện được thái độ quan tâm tới đối phương",
    level3:
      "Có khả năng diễn đạt rành mạch, rõ ràng các nội dung cơ bản tới nhiều đối tượng khác nhau\nThường vận dụng được đúng giọng điệu và ngôn ngữ trong các trường hợp giao tiếp\nThường xuyên lắng nghe, quan tâm tới đối phương và biết khơi gợi giao tiếp hai chiều một cách khéo léo",
    level4:
      "Có khả năng thuyết trình rành mạch các khái niệm phức tạp tới nhiều đối tượng khác nhau\nXử lí khéo léo được các tình huống phát sinh trong giao tiếp, linh hoạt trong cách sử dụng ngôn ngữ và giọng điệu\nNắm rõ những gì mình cần truyền đạt đến người nghe\nBiết lắng nghe và thường chấp nhận những phản hồi mà người khác dành cho mình",
    level5:
      "Tự tin trình bày các vấn đề phức tạp và nhạy cảm tới mọi đối tượng (từ các đối tượng lãnh đạo cấp cao, người ngang hàng hoặc các đối tượng yếu thế hơn)\nLuôn tạo được ấn tượng là một người biết lắng nghe và sẵn sàng chấp nhận phản hồi mà người khác dành cho mình\nNgôn ngữ và giọng điệu linh hoạt, có sức thuyết phục và gây được ảnh hưởng lên người khác \nCó chiến lược rõ ràng trong giao tiếp",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng xây dựng mỗi quan hệ",
    definition:
      "Kỹ năng xây dựng mối quan hệ (networking) là khả năng xây dựng và chủ động duy trì các mối quan hệ cộng tác công việc nhằm phục vụ cho mục tiêu tương lai của doanh nghiệp.",
    level1:
      "Có khả năng kết nối và duy trì các mối quan hệ cá nhân\nChưa có khả năng phân loại và đặt ưu tiên cho các mối quan hệ",
    level2:
      "Có khả năng tạo dựng network trong các sự kiện, các cơ hội gặp mặt mà mình tham dự\nGiữ được mối quan hệ tốt đẹp với các key contacts",
    level3:
      "Khai thác hiệu quả các mối quan hệ xung quanh và tận dụng để mở rộng network khi có cơ hội\nXây dựng được network tương đối đa dạng và phục vụ được cho mục đích chung của công việc",
    level4:
      "Chủ động tìm kiếm các cơ hội networking ở nhiều lĩnh vực, không ngừng mở rộng network\nXây dựng được mối quan hệ hợp tác chiến lược lâu dài với nhiều đối tượng, trong đó có cả lãnh đạo cấp cao.",
    level5:
      "Tự xây dựng và điều phối một cộng đồng để qua đó có mạng lưới đối tác cùng khách hàng tiềm năng\nCó khả năng xác định những mối quan hệ nào là quan trọng, và có phương án hành động trong từng mối quan hệ\nXây dựng được mối quan hệ hợp tác chiến lược lâu dài với cả những lãnh đạo cấp cao",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng quản lý xung đột",
    definition:
      "Kỹ năng quản trị xung đột là khả năng phát hiện, giải quyết, ngăn chặn hoặc tận dụng xung đột",
    level1:
      "Nhận định được xung đột giữa các cá nhân và đội nhóm\nCổ vũ mọi người hòa giải xung đột",
    level2:
      "Chủ động tiếp nhận những quan điểm khác nhau, đề xuất được phương án hòa giải xung đột trong đội nhóm\nCổ vũ mọi người hạn chế những xung đột cá nhân không cần thiết",
    level3:
      "Dự đoán được những xung đột có thể xảy ra, có có biện pháp để ngăn chặn, giảm thiểu hậu quả của xung đột \nCổ vũ mọi người hạn chế những xung đột cá nhân không cần thiết",
    level4:
      "Dự đoán và xây dựng được chiến lược ngăn chặn và giải quyết xung đột ở quy mô tổ chức",
    level5:
      "Có khả năng thúc đẩy những căng thẳng và tranh luận có lợi cho tổ chức; giữ mức độ căng thẳng trong tầm kiểm soát\nDự đoán được những xung đột có thể xảy ra ở quy mô tổ chức, có phương án định hướng, ngăn chặn và giải quyết xung đột bằng thái độ mang tính xây dựng",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng giải trình",
    definition:
      "Năng lực giải trình là khả năng đạt hiệu quả cao trong việc cung cấp, giải thích, làm rõ các thông tin về thực hiện nhiệm vụ, công vụ hay những vấn đề liên quan đến trách nhiệm của cá nhân khi được yêu cầu.",
    level1:
      "Biết biện minh cho hành động của mình trong quá khứ hoặc tương lai\nChỉ biết áp dụng những mẫu văn bản giải trình có sẵn",
    level2:
      "Nhận thức được trách nhiệm giải trình và tự giác thực hiện\nChỉ có khả năng giải trình bằng văn bản, còn lúng túng khi giải trình bằng lời nói",
    level3:
      "Hiểu được trách nhiệm giải trình và quyền từ chối giải trình của mình\nThực hiện đúng trình tự, thủ tục giải trình\nKhả năng giải trình bằng lời nói còn hạn chế",
    level4:
      "Dự đoán được hệ quả các hành vi giải trình của mình\nCó hiểu biết để phối hợp với các bên liên quan cùng giải trình\nCung cấp đầy đủ bằng chứng, chứng cứ khách quan khi giải trình\nTự đề xuất được cơ chế giám sát và đánh giá giải trình",
    level5:
      "Có kế hoạch từ trước về việc giải trình\nHiểu rõ về quyền hạn, thủ tục, quy trình giải trình\nCó khả năng giải trình rõ ràng, thuyết phục bằng cả lời nói và văn bản\nChủ động bổ sung, đính chính thông tin sau giải trình để đầy đủ, chính xác hơn\nCó khả năng tư vấn, giám sát, đánh giá giải trình của người khác",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng quản trị rủi ro",
    definition:
      "Kỹ năng quản trị rủi ro là khả năng xác định, phân tích, đánh giá và phản ứng trước các rủi ro trong quá trình thực hiện mục tiêu công việc.",
    level1:
      "Chưa sẵn sàng đối mặt với rủi ro\nCòn lúng túng trong việc giải quyết hậu quả của rủi ro (nếu có)",
    level2:
      "Xác định tâm lý vững vàng để sẵn sàng đối mặt và chịu trách nhiệm với rủi ro\nCó ý thức về việc nhận định các rủi ro nhưng chưa chính xác",
    level3:
      "Nhận định được các rủi ro với quy mô nhỏ, trong tương lai gần\nKịp thời phân tích rủi ro để có được đánh giá cần thiết\nBiết cách thông tin cho thành viên trong tổ chức về rủi ro có thể xảy ra",
    level4:
      "Có tầm nhìn dài hạn về việc nhận định các rủi ro có thể xảy ra\nCó khả năng đánh giá rủi ro và đề xuất phương án giảm thiểu hậu quả\nĐưa ra được chiến lược phòng tránh rủi ro trong tương lai",
    level5:
      "Có khả năng nhận định chính xác các rủi ro có thể xảy ra trong dài hạn\nĐánh giá toàn diện được các cơ hội và rủi ro trong thực tế tổ chức\nXây dựng được chiến lược biến rủi ro thành cơ hội phát triển lâu dài\nCó sẵn phương án phối hợp các phòng ban để sẵn sàng xử lý rủi ro",
  },
  {
    source: "Dũng",
    group: "Skill",
    criterion: "Kỹ năng quản trị mối quan hệ",
    definition: null,
    level1:
      "Có khả năng kết nối và duy trì các mối quan hệ cá nhân\nChưa có khả năng phân loại và đặt ưu tiên cho các mối quan hệ",
    level2:
      "Có khả năng tạo dựng network trong các sự kiện, các cơ hội gặp mặt mà mình tham dự\nGiữ được mối quan hệ tốt đẹp với các key contacts",
    level3:
      "Khai thác hiệu quả các mối quan hệ xung quanh và tận dụng để mở rộng network khi có cơ hội\nXây dựng được network tương đối đa dạng và phục vụ được cho mục đích chung của công việc",
    level4:
      "Chủ động tìm kiếm các cơ hội networking ở nhiều lĩnh vực, không ngừng mở rộng network\nXây dựng được mối quan hệ hợp tác chiến lược lâu dài với nhiều đối tượng, trong đó có cả lãnh đạo cấp cao.",
    level5:
      "Tự xây dựng và điều phối một cộng đồng để qua đó có mạng lưới đối tác cùng khách hàng tiềm năng\nCó khả năng xác định những mối quan hệ nào là quan trọng, và có phương án hành động trong từng mối quan hệ\nXây dựng được mối quan hệ hợp tác chiến lược lâu dài với cả những lãnh đạo cấp cao",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng đào tạo",
    definition:
      "Kỹ năng đào tạo là khả năng truyền đạt kỹ năng, kiến thức cho người khác.",
    level1:
      "Biết lắng nghe tâm tư, nguyện vọng học tập của học viên\nBiết cách phân chia công việc hợp lý cho học viên\nNăng lực cá nhân còn hạn chế, chưa sẵn sàng làm đào tạo viên",
    level2:
      "Chủ động giới thiệu các chương trình đào tạo ngoài cho học viên\nKịp thời động viên, củng cố nỗ lực học tập của học viên\nCung cấp phản hồi cho học viên trong quá trình làm việc",
    level3:
      "Tạo được sự hứng thú cho học viên\nTạo điều kiện cho học viên tham gia các khoá đào tạo ngoài\nTạo cơ hội cho học viên được học hỏi từ các nhân viên dày dạn\nPhản hồi kịp thời và nhất quán về quá trình học lý thuyết kết hợp thực hành của học viên",
    level4:
      "Định hướng được nội dung đào tạo dựa trên sở thích nghề nghiệp và nhu cầu công việc của học viên\nXây dựng được hệ thống tiêu chuẩn đào tạo\nGiúp học viên tìm những cách mới để giải quyết các vấn đề cũ\nChủ động chẩn đoán các vấn đề của học viên và chia sẻ giải pháp để tạo ra kinh nghiệm học tập",
    level5:
      "Xác định trước các trở ngại trong quá trình đào tạo và có kế hoạch xử lý\nĐánh giá chính xác được năng lực đã có và năng lực cần đào tạo của từng học viên\nLập ra kế hoạch đào tạo phù hợp với chiến lược của tổ chức và định hướng phát triển của cá nhân học viên\nSẵn sàng cung cấp các hướng dẫn rõ ràng, ngắn gọn về cách hoàn thành một nhiệm vụ hoặc quy trình\nBiết cách giám sát chặt chẽ và đánh giá chính xác kết quả đào tạo",
  },
  {
    source: 1,
    group: "Skill",
    criterion: "Kỹ năng tư duy chiến lược",
    definition:
      "Tư duy chiến lược là khả năng xác định được các mục tiêu và ưu tiên quan trọng, từ đó có kế hoạch hành động đảm bảo nhất quán được với lợi ích và giá trị lâu dài của tổ chức.",
    level1:
      "Đặt ra được mục tiêu cá nhân phù hợp với chiến lược hành động của đội/nhóm và các giá trị của doanh nghiệp",
    level2:
      "Điều phối được hoạt động của đội/nhóm phù hợp với chiến lược chung của doanh nghiệp\nHình dung được hệ quả của vấn đề",
    level3:
      "Xây dựng được mục tiêu và các kế hoạch hành động cho đội/nhóm dựa trên mục tiêu chung của doanh nghiệp\nĐiều phối được hoạt động của đội/nhóm phù hợp với chiến lược chung của doanh nghiệp\nĐánh giá chính xác nguyên nhân, hệ quả của vấn đề đặt trong sự tương quan giữa các bộ phận trong doanh nghiệp",
    level4:
      "Có khả năng truyền đạt được mục tiêu, tầm nhìn, chiến lược của tổ chức tới nhiều đối tượng cá nhân\nXác định được các cơ hội và nguy cơ có thể xảy đến tổ chức và có phương án hành động phù hợp với giá trị và tầm nhìn của doanh nghiệp\nThường xuyên quan sát, đánh giá, tổng hợp và hành động dựa trên mối tương quan trong và ngoài doanh nghiệp",
    level5:
      "Xác định được thứ tự ưu tiên các mục tiêu của tổ chức\nĐịnh hình được hoặc có định hướng phát triển giá trị tổ chức\nCó khả năng truyền đạt được mục tiêu, tầm nhìn, chiến lược của tổ chức tới nhiều đối tượng cá nhân\nPhát triển xây dựng được kế hoạch hành động phù hợp với mục đích và giá trị của tổ chức\nDẫn dắt tổ chức đi theo chiến lược",
  },
  {
    source: "Mơ",
    group: "Skill",
    criterion: "Kỹ năng lập kế hoạch",
    definition:
      "Kỹ năng lập kế hoạch là khả năng sắp xếp và sử dụng một cách có hiệu quả nguồn lực và thời gian giới hạn để đảm bảo hoàn thành công việc.",
    level1:
      "Chưa biết cách đặt thứ tự ưu tiên cho công việc\nSẽ không hoàn thành được công việc theo đúng deadline nếu như khối lượng công việc lớn",
    level2:
      "Có kế hoạch công việc cho bản thân\nHoàn thành được các công việc của bản thân theo đúng deadline với khối lượng công việc lớn\nChưa có khả năng tổ chức công việc cho đội nhóm",
    level3:
      "Có khả năng lên kế hoạch công việc cho bản thân/nhóm\nBiết cách đặt thứ tự ưu tiên ưu tiên cho công việc\nCó khả năng hoàn thành khối lượng công việc lớn, nhưng dễ mất kiểm soát trong những tình huống căng thẳng và nhạy cảm",
    level4:
      "Có khả năng lên kế hoạch hành động chi tiết theo từng giai đoạn để hoàn thành mục tiêu cho công ty, sẵn sàng ứng phó với nhiều tình huống\nPhân phối nguồn lực chặt chẽ, biết đặt thứ tự ưu tiên\nCó khả năng hoàn thành khối lượng công việc lớn trong cả những tình huống áp lực",
    level5:
      "Cá nhân có thể tự tin truyền đạt kĩ năng này cho người khác.\nSắp xếp được hệ thống công việc ở quy mô chiến lược\nPhân phối một nguồn lực lớn một cách chặt chẽ, biết đặt thứ tự ưu tiên chính xác\nBao quát được hiệu quả sử dụng nguồn lực\nLuôn giữ được mọi việc trong tầm kiểm soát",
  },
  {
    source: "Mơ",
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    definition:
      "Tin học văn phòng là một nhánh trong ngành CÔNG NGHỆ THÔNG TIN, chú trọng đến khả năng xử lý các công việc thường được sử dụng trong văn phòng như: thao tác với văn bản, bảng tính, trình chiếu. Tin học văn phòng gồm bộ công cụ Microsoft Office liên quan như Microsoft Office Word, Microsoft Office Excel, Microsoft Office Power Point, Microsoft Office Access, … với rất nhiều các phiên bản khác nhau nhưng về cơ bản là phục vụ cho công việc văn phòng nói chung.",
    level1:
      "Gần như không có hiểu biết hoặc biết hạn chế về các kiến thức tin học văn phòng\n- Các phần mềm máy tính: word, excel, powerpoint\n- Kỹ năng đánh máy và sử dụng các phím tắt trên bàn phím máy tính\n- Công cụ giao tiếp: Slack\n- Email",
    level2:
      "Sử dụng cơ bản các kiến thức tin học văn phòng:\n- Các phần mềm máy tính: word, excel, powerpoint\n- Kỹ năng đánh máy và sử dụng các phím tắt trên bàn phím máy tính\n- Công cụ giao tiếp: Slack\n- Email",
    level3:
      "Có hiểu biết và vận dụng hiệu quả kỹ năng tin học văn phòng tương ứng vào công việc \n- Các phần mềm máy tính: word, excel, powerpoint\n- Kỹ năng đánh máy và sử dụng các phím tắt trên bàn phím máy tính\n- Công cụ giao tiếp: Slack\n- Email",
    level4:
      "Hiểu biết sâu-rộng và thuần thục trong sử dụng kiến thức tin học văn phòng\n- Các phần mềm máy tính: word, excel, powerpoint\n- Kỹ năng đánh máy và sử dụng các phím tắt trên bàn phím máy tính\n- Công cụ giao tiếp: Slack\n- Email",
    level5:
      "Có khả năng chỉ dẫn, huấn luyện người khác.\nCó khả năng học hỏi, sáng tạo để áp dụng vào thực tế\n- Các phần mềm máy tính: word, excel, powerpoint\n- Kỹ năng đánh máy và sử dụng các phím tắt trên bàn phím máy tính\n- Công cụ giao tiếp: Slack\n- Email",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Khả năng sử dụng tiếng anh",
    definition: null,
    level1:
      "BEGINNER\n(TOEFL 0 - 31 | IELTS 0 - 3.5 | TOEIC 0-400)\nỞ cấp độ tiếng Anh này, bạn chỉ có thể nói và hiểu được tiếng Anh một cách rất giới hạn trong các cuộc hội thoại cơ bản hằng ngày nếu đối phương nói tiếng Anh chậm và rõ.",
    level2:
      "ELEMENTARY\n\n(TOEFL 32 - 45 | IELTS 3.5 - 4.0 | TOEIC 405 - 600)\n\nĐạt được cấp độ tiếng Anh này, bạn có thể giao tiếp tiếng Anh trong những tình huống đơn giản, quen thuộc nhưng vốn từ vựng và ngữ pháp bị hạn chế nhiều. Gần như không thể giao tiếp trong các tình huống mới.",
    level3:
      "INTERMEDIATE\n\n(TOEFL 46 - 59 | IELTS 4.0 - 5.0 | TOEIC 785 - 900)\n\nBạn có khả năng giao tiếp tiếng Anh với người bản xứ trong các tình huống quen thuộc,nhưng gặp khó khăn trong những tình huống mới.",
    level4:
      "UPPER INTERMEDIATE\n\n(TOEFL 60 - 78 | IELTS 5.5 - 6.0 | TOEIC 705 - 780)\n\nBạn có thể giao tiếp và hiểu người bản xứ trong các tình huống xảy ra hàng ngày. Giáo viên đôi khi không hiểu ý bạn và mức độ mắc lỗi ngữ pháp, câu… ở mức trung bình.",
    level5:
      "ADVANCED\n\n(TOEFL 79 - 120 | IELTS 6.5 - 9.0 | TOEIC 785 - 990)\n\nBạn có thể giao tiếp với người bản xứ trong phần lớn các tình huống với độ chính xác cao về mặt ngữ pháp và sử dụng từ vựng phong phú.",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Kiến thức, các thuật ngữ chuyên ngành mua hàng",
    definition: null,
    level1:
      "Chủ động tìm hiểu và ghi nhớ các thuật ngữ, kiến thức có liên quan đến chuyên ngành",
    level2:
      "Có khả năng tổng hợp các kiến thức, chủ động tìm hiểu các kiến thức mới để nâng cao trình độ",
    level3:
      "Hiểu và vận dụng được các kiến thức chuyên ngành trong thực tế công việc",
    level4:
      "Có khả năng sáng tạo, áp dụng kiến thức để chủ động thay đổi cách làm việc và nâng cao hiệu quả",
    level5:
      "Đúc rút được kinh nghiệm để làm việc hiệu quả và có khả năng đào tạo cho người mới về các kiến thức đó",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Kiến thức về sản phẩm, ngành hàng, đối thủ",
    definition: null,
    level1:
      "Biết công ty đang bán mặt hàng gì, trong thị trường nào, đối thủ chính là ai",
    level2:
      "Nắm được nguồn nhập, mức tiêu thụ của sản phẩm; hiểu được mô hình, mục tiêu KD của đối thủ",
    level3:
      "Nắm bắt xu hướng thị trường, lên kế hoạch nhập hàng dựa vào nhu cầu của khách hàng",
    level4:
      "Dự đoán được hướng phát triển của ngành hàng để mở rộng, phát triển, cải tiến sản phẩm kinh doanh",
    level5:
      "Xây dựng chiến lược sản phẩm cho công ty có thể cạnh tranh với đối thủ và có vị trí số 1 thị trường",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Am hiểu quy trình hệ thống nội bộ công ty",
    definition: null,
    level1:
      "Biết sử dụng công cụ hỗ trợ trong công việc (webwork, slack); hiểu được chức năng của từng bộ phận (mkt, tech, kho...)",
    level2: "Tìm ra vướng mắc, lỗi sai và đề xuất cải thiện hệ thống",
    level3:
      "Tham gia làm việc với các phòng ban khác ở công tác cải thiện hệ thống đến bước hoàn chỉnh",
    level4:
      "Chủ động quan sát, theo dõi và cải thiện, nâng cấp hệ thống của bộ phận",
    level5:
      "Chủ động dẫn dắt các dự án lớn thay đổi hệ thống có liên quan tới nhiều bộ phận khác nhau",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    definition: null,
    level1:
      "Hiểu biết về các nguyên liệu cơ bản trong làm bánh, nấu ăn và pha chế.",
    level2:
      "Có khả năng tổng hợp các kiến thức, chủ động tìm hiểu các kiến thức mới để nâng cao trình độ",
    level3:
      "Có sự phân tích, so sánh được ưu, nhược điểm của các loại nguyên liệu cơ bản. Có thể thay thế các loại nguyên liệu nhằm mục đích tăng chất lượng, tính hiệu quả.",
    level4:
      "Có thể phân tích, so sánh các loại nguyên liệu của cả 3 ngành. Có khả năng truyền đạt, đào tạo cho người khác về các kiến thức học được",
    level5:
      "Có thể trực tiếp làm ra hoặc yêu cầu nhà sản xuất sản phẩm theo yêu cầu và được thị trường tiếp nhận",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Kiến thức về công nghệ thực phẩm",
    definition: null,
    level1: "Biết về cách bảo quản, thời hạn sử dụng các loại nguyên liệu",
    level2: "Kiểm tra, đánh giá chất lượng của các nguyên liệu",
    level3:
      "Thiết kế các quy trình chế biến và bảo quản các loại nguyên liệu thực phẩm",
    level4: "Phát triển, nghiên cứu các loại sản phẩm mới",
    level5:
      "Thiết kế và phát triển, áp dụng quy trình vào thực tế sản xuất thực phẩm được thị trường đón nhận",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Kiến thức về sử dụng các công cụ, phần mềm thiết kế",
    definition: null,
    level1: "Chủ động tìm hiểu và ghi nhớ về sử dụng các công cụ, phần mềm",
    level2: "Vận dụng các kiến thức vào trong công việc thiết kế",
    level3:
      "Sử dụng thành thạo và kết hợp tối thiểu 3 phần mềm thiết kế (PTS, Ai, Pr)",
    level4: "Sử dụng thành thạo và kết hợp từ 5 phần mềm trở lên",
    level5:
      "Đúc rút được kinh nghiệm để làm việc hiệu quả và có khả năng đào tạo cho người mới về các kiến thức đó",
  },
  {
    source: null,
    group: "Knowledge",
    criterion:
      "Kiến thức về chuyên ngành thiết kế (màu sắc, bố cục, hình ảnh, typo)",
    definition: null,
    level1:
      "Chủ động tìm hiểu và ghi nhớ các thuật ngữ, kiến thức có liên quan đến chuyên ngành",
    level2:
      "Có khả năng tổng hợp các kiến thức, chủ động tìm hiểu các kiến thức mới để nâng cao trình độ",
    level3: "Vận dụng các kiến thức vào trong thiết kế một cách có định hướng",
    level4:
      "Có khả năng sáng tạo, áp dụng kiến thức để chủ động thay đổi cách làm việc và nâng cao hiệu quả",
    level5:
      "Đúc rút được kinh nghiệm để làm việc hiệu quả và có khả năng đào tạo cho người mới về các kiến thức đó",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức về quy trình quản lý kho hàng",
    definition:
      "Kiến thức quy trình quản lý kho hàng là sự am hiểu lý thuyết vận dụng vào thực tế các quy trình/phương pháp vận hành kho hiểu quả như: \n- Quản lý theo sku\n- FIFO và LIFO\n- Lên sơ đồ lưu trữ để kiểm soát\n- Quản lý theo mã vạch và lô hàng\n- Cách sử dụng các phần mềm quản lý kho",
    level1:
      "Chủ động tìm hiểu và ghi nhớ các kiến thức về chuyên môn. Nắm được các kiến thức lý thuyết cơ bản",
    level2:
      "Có khả năng tổng hợp và hệ thống hóa được một số lượng lớn các kiến thức, chủ động cập nhật các kiến thức mới. \nNắm bắt được cả lý thuyết và thực tế.",
    level3:
      "Có khả năng vận dụng được các kiến thức và lý thuyết về chuyên môn vào công việc, thực hiện công việc một cách có định hướng.",
    level4:
      "Đánh giá được hiệu quả công việc của những người khác cùng chuyên môn nghiệp vụ\nPhân tích được những tình huống phát sinh trong trong công việc",
    level5:
      "Có khả năng đào tạo cho những người mới về chuyên môn nghiệp vụ\nĐúc rút được những phương pháp, kĩ thuật mới để thực hiện công việc hiệu quả hơn\nCó khả năng xử lí hiệu quả được mọi tình huống có thể phát sinh trong công việc",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức về thị trường vận tải",
    definition:
      "Kiến thức về thị trường vận tải là sự am hiểu về thị trường vận tải nội tỉnh và liên tỉnh phục vụ cho việc vận chuyển hàng hóa của công ty, có các nhóm kiến thức cần biết áp dung trong 4handy bao gồm:\n- Lý thuyết về các loại hình vận tải, ưu nhược điểm và tình huống áp dụng\n- Đặc điểm, mức giá, phương pháp làm việc của các đối tác vận chuyển trên thị trường\n- Đặc điểm, mức giá, phương pháp làm việc của các phương tiện vận chuyển nội bộ trong công ty\n- Xu hướng thay đổi phương thức vận tải hoặc các cập nhật mới của thị trường",
    level1:
      "Chủ động tìm hiểu và ghi nhớ các kiến thức về chuyên môn. Nắm được các kiến thức lý thuyết cơ bản",
    level2:
      "Có khả năng tổng hợp và hệ thống hóa được một số lượng lớn các kiến thức, chủ động cập nhật các kiến thức mới. \nNắm bắt được cả lý thuyết và thực tế.",
    level3:
      "Có khả năng vận dụng được các kiến thức và lý thuyết về chuyên môn vào công việc, thực hiện công việc một cách có định hướng.",
    level4:
      "Đánh giá được hiệu quả công việc của những người khác cùng chuyên môn nghiệp vụ\nPhân tích được những tình huống phát sinh trong trong công việc",
    level5:
      "Có khả năng đào tạo cho những người mới về chuyên môn nghiệp vụ\nĐúc rút được những phương pháp, kĩ thuật mới để thực hiện công việc hiệu quả hơn\nCó khả năng xử lí hiệu quả được mọi tình huống có thể phát sinh trong công việc",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức về bao bì đóng gói",
    definition:
      "Kiến thức bao bì đóng gói là sự am hiểu về các loại chất liệu và phương pháp đóng gói bao bì hàng hóa trên thị trường: \n- Am hiểu loại bao bì nilon, giấy, thủy tinh, nhôm, thiếc, nhựa, và vật liệu tự nhiên khác: đặc điểm, hàng hóa phù hợp, chi phí\n- Am hiểu các nhà cung cấp bao bì trên thị trường: Giá cả, phương pháp làm việc\n- Am hiểu các chất liệu bổ trợ đóng gói: màng seal nhôm, màng seal tự dính, màng co, tem nhãn dán, túi hút ẩm/oxy/gas\n- Am hiểu các loại máy móc, dụng cụ hỗ trợ đóng gói: hàn nhiệt, seal nhiệt, cân, máy đóng gói bán tự động và tự động",
    level1:
      "Chủ động tìm hiểu và ghi nhớ các kiến thức về chuyên môn. Nắm được các kiến thức lý thuyết cơ bản",
    level2:
      "Có khả năng tổng hợp và hệ thống hóa được một số lượng lớn các kiến thức, chủ động cập nhật các kiến thức mới. \nNắm bắt được cả lý thuyết và thực tế.",
    level3:
      "Có khả năng vận dụng được các kiến thức và lý thuyết về chuyên môn vào công việc, thực hiện công việc một cách có định hướng.",
    level4:
      "Đánh giá được hiệu quả công việc của những người khác cùng chuyên môn nghiệp vụ\nPhân tích được những tình huống phát sinh trong trong công việc",
    level5:
      "Có khả năng đào tạo cho những người mới về chuyên môn nghiệp vụ\nĐúc rút được những phương pháp, kĩ thuật mới để thực hiện công việc hiệu quả hơn\nCó khả năng xử lí hiệu quả được mọi tình huống có thể phát sinh trong công việc",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức về hệ thống máy tính",
    definition:
      "Kiến thức về hệ thống máy tín là sự am hiểu về cấu tạo, cách hoạt động, sự cố thường gặp và cách xử lý đối với hệ thống thiết bị phần cứng máy tính bao gồm:\n- CPU, Màn hình\n- Các thiết bị ngoại vi: loa, chuột, bàn phím, dây kết nối, máy in",
    level1:
      "Hiểu biết cách vận hành đúng của thiết bị, hệ thống kĩ thuật đảm bảo không gây hỏng hóc do lỗi người dùng",
    level2: "Đánh giá và phán đoán được được nguyên nhân các sự cố xảy ra",
    level3:
      "Có khả năng trực tiếp xử lý, sửa chưa, lắp đặt và thi công các hạng mục kĩ thuật hiệu quả và nhanh chóng",
    level4:
      "Hiểu rõ hệ thống kỹ thuật để áp dụng các phương pháp bảo trì chủ động vào quản lý thiết bị, từ đó hạn chế các sự cố xảy ra trong quá trình hoạt động",
    level5:
      "Có khả năng đúc rút kinh nghiệm xây dựng thành quy tắc, truyền đạt và hướng dẫn lại cho người khác thực hiện các công việc chuyên môn kỹ thuật",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức về hệ thống mạng internet",
    definition:
      "- Am hiểu cơ chế hoạt động hệ thống internet\n- Am hiểu hạ tầng mạng phần cứng, cấu tại, cách hoạt động, sự cố thường gặp và cách giải quyết\n- Am hiểu đặc điểm của các nhà cung cấp mạng và thiết bị mạng trên thị trường",
    level1:
      "Hiểu biết cách vận hành đúng của thiết bị, hệ thống kĩ thuật đảm bảo không gây hỏng hóc do lỗi người dùng",
    level2:
      "Đánh giá và phán đoán được nguyên nhân sự cố cơ bản\nHiểu biết các phần cứng/phần mềm cơ bản của hệ thống để giám sát đối tác thuê ngoài lắp đặt, thi công và sửa chữa",
    level3:
      "Có khả năng trực tiếp xử lý, sửa chưa, lắp đặt và thi công các hạng mục kĩ thuật hiệu quả và nhanh chóng",
    level4:
      "Hiểu rõ hệ thống kỹ thuật để áp dụng các phương pháp bảo trì chủ động vào quản lý thiết bị, từ đó hạn chế các sự cố xảy ra trong quá trình hoạt động",
    level5:
      "Có khả năng đúc rút kinh nghiệm xây dựng thành quy tắc, truyền đạt và hướng dẫn lại cho người khác thực hiện các công việc chuyên môn kỹ thuật",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức về kỹ thuật thi công nội thất cửa hàng",
    definition:
      "Kiến thức về kĩ thuật thi công nội thất bao gồm:\n- Lý thuyết về kỹ thuật xây dựng, bố cục và thiết kế\n- Am hiểu về chất liệu thi công: giá cả, nguồn hàng, đơn vị thi công, ưu nhược điểm và tình huống sử dụng\n- Am hiểu về bố ánh sáng\n- Am hiểu về lưu thông không khí\n- Am hiểu về thiết kế trải nghiệm người dùng",
    level1:
      "Chủ động tìm hiểu và ghi nhớ các kiến thức về chuyên môn. Nắm được các kiến thức lý thuyết cơ bản",
    level2:
      "Có khả năng tổng hợp và hệ thống hóa được một số lượng lớn các kiến thức, chủ động cập nhật các kiến thức mới. \nNắm bắt được cả lý thuyết và thực tế.",
    level3:
      "Có khả năng vận dụng được các kiến thức và lý thuyết về chuyên môn vào công việc, thực hiện công việc một cách có định hướng.",
    level4:
      "Đánh giá được hiệu quả công việc của những người khác cùng chuyên môn nghiệp vụ\nPhân tích được những tình huống phát sinh trong trong công việc",
    level5:
      "Có khả năng đào tạo cho những người mới về chuyên môn nghiệp vụ\nĐúc rút được những phương pháp, kĩ thuật mới để thực hiện công việc hiệu quả hơn\nCó khả năng xử lí hiệu quả được mọi tình huống có thể phát sinh trong công việc",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức về kỹ thuật thi công quảng cáo cửa hàng",
    definition:
      "Kiến thức về kỹ thuật thi công ngoại thất bao gồm: \n- Lý thuyết về kỹ thuật xây dựng, bố cục và thiết kế\n- Am hiểu về chất liệu thi công quảng cáo: giá cả, nguồn hàng, đơn vị thi công, ưu nhược điểm và tình huống sử dụng",
    level1:
      "Chủ động tìm hiểu và ghi nhớ các kiến thức về chuyên môn. Nắm được các kiến thức lý thuyết cơ bản",
    level2:
      "Có khả năng tổng hợp và hệ thống hóa được một số lượng lớn các kiến thức, chủ động cập nhật các kiến thức mới. \nNắm bắt được cả lý thuyết và thực tế.",
    level3:
      "Có khả năng vận dụng được các kiến thức và lý thuyết về chuyên môn vào công việc, thực hiện công việc một cách có định hướng.",
    level4:
      "Đánh giá được hiệu quả công việc của những người khác cùng chuyên môn nghiệp vụ\nPhân tích được những tình huống phát sinh trong trong công việc",
    level5:
      "Có khả năng đào tạo cho những người mới về chuyên môn nghiệp vụ\nĐúc rút được những phương pháp, kĩ thuật mới để thực hiện công việc hiệu quả hơn\nCó khả năng xử lí hiệu quả được mọi tình huống có thể phát sinh trong công việc",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức kỹ thuật điện",
    definition: null,
    level1:
      "Hiểu biết cách vận hành đúng của thiết bị, hệ thống kĩ thuật đảm bảo không gây hỏng hóc do lỗi người dùng",
    level2:
      "Đánh giá và phán đoán được nguyên nhân sự cố cơ bản\nHiểu biết các phần cứng/phần mềm cơ bản của hệ thống để giám sát đối tác thuê ngoài lắp đặt, thi công và sửa chữa",
    level3:
      "Có khả năng trực tiếp xử lý, sửa chưa, lắp đặt và thi công các hạng mục kĩ thuật hiệu quả và nhanh chóng",
    level4:
      "Hiểu rõ hệ thống kỹ thuật để áp dụng các phương pháp bảo trì chủ động vào quản lý thiết bị, từ đó hạn chế các sự cố xảy ra trong quá trình hoạt động",
    level5:
      "Có khả năng đúc rút kinh nghiệm xây dựng thành quy tắc, truyền đạt và hướng dẫn lại cho người khác thực hiện các công việc chuyên môn kỹ thuật",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức kỹ thuật cấp thoát nước",
    definition: null,
    level1:
      "Hiểu biết cách vận hành đúng của thiết bị, hệ thống kĩ thuật đảm bảo không gây hỏng hóc do lỗi người dùng",
    level2:
      "Đánh giá và phán đoán được nguyên nhân sự cố cơ bản\nHiểu biết các phần cứng/phần mềm cơ bản của hệ thống để giám sát đối tác thuê ngoài lắp đặt, thi công và sửa chữa",
    level3:
      "Có khả năng trực tiếp xử lý, sửa chưa, lắp đặt và thi công các hạng mục kĩ thuật hiệu quả và nhanh chóng",
    level4:
      "Hiểu rõ hệ thống kỹ thuật để áp dụng các phương pháp bảo trì chủ động vào quản lý thiết bị, từ đó hạn chế các sự cố xảy ra trong quá trình hoạt động",
    level5:
      "Có khả năng đúc rút kinh nghiệm xây dựng thành quy tắc, truyền đạt và hướng dẫn lại cho người khác thực hiện các công việc chuyên môn kỹ thuật",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức kĩ thuật điện lạnh",
    definition: null,
    level1:
      "Hiểu biết cách vận hành đúng của thiết bị, hệ thống kĩ thuật đảm bảo không gây hỏng hóc do lỗi người dùng",
    level2:
      "Đánh giá và phán đoán được nguyên nhân sự cố cơ bản\nHiểu biết các phần cứng/phần mềm cơ bản của hệ thống để giám sát đối tác thuê ngoài lắp đặt, thi công và sửa chữa",
    level3:
      "Có khả năng trực tiếp xử lý, sửa chưa, lắp đặt và thi công các hạng mục kĩ thuật hiệu quả và nhanh chóng",
    level4:
      "Hiểu rõ hệ thống kỹ thuật để áp dụng các phương pháp bảo trì chủ động vào quản lý thiết bị, từ đó hạn chế các sự cố xảy ra trong quá trình hoạt động",
    level5:
      "Có khả năng đúc rút kinh nghiệm xây dựng thành quy tắc, truyền đạt và hướng dẫn lại cho người khác thực hiện các công việc chuyên môn kỹ thuật",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức các loại hình POSM",
    definition: null,
    level1:
      "Biết các loại hình POSM cơ bản: poster, tờ rơi, standee, hàng mẫu...\nChưa áp dụng vào thực tế nhiều",
    level2:
      "Biết nhiều loại hình POSM đa dạng: ô dù, dangler, divider, booth, quầy thu ngân, đảo trưng bày ...\nChưa áp dụng vào thực tế nhiều",
    level3:
      "Biết các loại hình POSM cơ bản\nÁp dụng tốt các loại hình cơ bản vào thực tế",
    level4:
      "Biết đa dạng các loại hình POSM\nÁp dụng tốt nhiều loại hình vào thực tế",
    level5:
      "Biết đa dạng các loại hình POSM\nÁp dụng tốt nhiều loại vào thực tế\nCó sáng loại loại hình mới theo sản phẩm và đặc thù cửa hàng",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Khả năng lái xe",
    definition: null,
    level1:
      "Người mới học lái xe, có kĩ năng và kiến thức lái cơ bản, đủ để tham gia giao thông nhưng chưa lái thực tế nhiều\nXử lý tình huống chậm và không biết giữ khoảng cách an toàn\nLái được các loại xe số tự động, xe gia định hoặc tải nhỏ (<1 tấn)",
    level2:
      "Người đã có kinh nghiệm lái xe nhưng còn ít, chưa đủ 1 năm\nXử lý tình huống tốt, biết cách giữ khoảng cách an toàn\nLái được các loại xe sàn, xe tải nhỏ (<1 tấn)",
    level3:
      "Người đã có kinh nghiệm lái xe từ 1-2 năm\nXử lý tình huống tốt, có kinh nghiệm chạy cả nội thành và liên tỉnh\nLái được các loại xe tải cỡ vừa 1-2 tấn",
    level4:
      "Người đã có kinh nghiệm lái xe từ 1-2 năm\nXử lý tình huống tốt, có kinh nghiệm chạy cả nội thành và liên tỉnh\nLái được các loại xe tải cỡ vừa 2-5 tấn",
    level5:
      "Người đã có kinh nghiệm lái xe ít nhất 2 năm\nThông thạo các kĩ năng lái xe an toàn\nCó khả năng dự đoán trước các tình huống khi tham gia giao thông\nLái được các loại xe tải hạng nặng 5-20 tấn",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức giao thông Hà Nội",
    definition: null,
    level1:
      "Am hiểu luật giao thông cơ bản\nSử dụng Google map để di chuyển theo đường ngắn nhất",
    level2:
      "Am hiểu rõ luật giao thông\nHiểu rõ các tuyến đường về chất lượng đường, độ tắc để chọn đường ngắn",
    level3:
      "Am hiểu rõ luật giao thông\nHiểu rõ các tuyến đường cả về yếu tố công an giao thông để tránh các lỗi không cần thiết.",
    level4:
      "Am hiểu rõ luật giao thông\nBiết cách xử lý các sự cố vi phạm giao thông nếu gặp phải trên đường\nBiết cách tránh các cung đường xấu để giảm thời gian và nguyên liệu",
    level5:
      "Am hiểu rõ luật giao thông\nChủ động xử lý được tất cả các sự cố giao thông không đáng có xảy ra\nCó khả năng xây dựng được lịch trình chạy xe tối ưu trong nội thành Hà Nội",
  },
  {
    source: "Dũng",
    group: "Knowledge",
    criterion: "Kiến thức bảo trì xe oto cơ bản",
    definition: null,
    level1:
      "Biết lịch bảo dưỡng các hạng mục cơ bản: dầu mát, lốp, lọc gió, má phanh...",
    level2:
      "Biết lịch bảo dưỡng các hạng mục cơ bản: dầu mát, lốp, lọc gió, má phanh...\nBiết các địa chỉ uy tín để bảo dưỡng chi phí hiệu quả",
    level3:
      "Hiểu bản chất các biểu hiện của xe khi cần bảo dưỡng\nChủ động bảo dưỡng theo tình hình thực tế của xe",
    level4:
      "Biết cách bảo dưỡng các hạng mục cơ bản: dầu mát, lốp, lọc gió, má phanh...nhưng chưa làm thực tế, đủ để quan sát/giám sát thợ salon",
    level5: "Có khả năng tự bảo dưỡng xe",
  },
  {
    source: "Hiệp",
    group: "Knowledge",
    criterion: "Kiến thức về tiêu chuẩn lập trình",
    definition:
      "Kiến thức về tiêu chuẩn lập trình là hiểu biết về các quy trình và hướng dẫn tốt nhất về cách định dạng, đặt tên, tổ chức và ứng dụng một ngôn ngữ lập trình để giải quyết các vấn đề cụ thể.",
    level1:
      "Có nắm sơ bộ được các tiêu chuẩn lập trình tuy nhiên khi áp dụng còn nhiều sai sót",
    level2:
      "Áp dụng được đầy đủ các tiêu chuẩn lập trình, không để xảy ra thiếu sót",
    level3:
      "Có thể review code của đồng nghiệp để xác định những nội dung không phù hợp với tiêu chuẩn",
    level4:
      "Biết tự hệ thống hóa các tiêu chuẩn để các thành viên trong nhóm có thể thực hiện theo.\nChủ động học hỏi, tìm hiểu các chuẩn mực của ngành và luôn luôn nâng cấp các tiêu chuẩn lập trình của cá nhân cũng như của đội nhóm mình phụ trách",
    level5:
      "Nắm được xu hướng chung và thay đổi của ngành để có định hướng cho bộ phận.\nLà tấm gương truyền cảm hứng cho đồng đội tự học và luyện tập nâng cao tiêu chuyẩn lập trình của bản thân.",
  },
  {
    source: "Hiệp",
    group: "Knowledge",
    criterion: "Kiến thức về UX/UI",
    definition:
      "Kiến thức về UX/UI là các hiểu biết về cách thiết kế giao diện và thiết kế trải nghiệm sử dụng sản phẩm để đem đến hiệu năng và cảm xúc tích cực nhất cho người dùng.",
    level1:
      "Có nắm được sơ bộ các tiêu chí chung về UX/UI tuy nhiên vẫn cần có nhiều sự tham vấn, can thiệp của cấp trên hoặc mất nhiều thời gian tìm giải pháp với người dùng.",
    level2:
      "Thuần thục các tiêu chí về UX/UI và ứng dụng trong các sản phẩm do mình phụ trách",
    level3:
      "Biết cách hệ thống hóa các tiêu chuẩn về UX/UI và có thể đào tạo các thành viên khác về UX/UI",
    level4:
      "Chủ động nâng cao tiêu chuẩn của bộ phận từ các nguồn bên ngoài. Có sáng tạo riêng cũng như cải tiến phù hợp với đặc thù của tổ chức.",
    level5:
      "Nắm được xu hướng chung và thay đổi của ngành để có định hướng cho bộ phận.\nLà tấm gương truyền cảm hứng cho đồng đội tự học và luyện tập nâng cao tiêu chuyẩn của bản thân.",
  },
  {
    source: "Hiệp",
    group: "Knowledge",
    criterion: "Kiến thức quản trị server",
    definition:
      "Kiến thức quản trị server là các hiểu biết về việc khởi tạo, duy trì, vận hành, giám sát các máy chủ (ảo và vật lý), các dịch vụ No Server (SaaS, IaaS v.v.) để lưu trữ dữ liệu và triển khai các chức năng của hệ thống nhằm đạt mục tiêu chung của tổ chức",
    level1: "Biết cách khởi tạo server và khởi động một số tiến trình cơ bản",
    level2:
      "Biết cách xây dựng các hệ thống tự động kiểm thử, tự động đưa lên (CI/CD)\nBiết cách xử lý sự cố phát sinh",
    level3:
      "Có khả năng training các thành viên khác về lĩnh vực này\nCó các kế hoạch và biện pháp ngăn ngừa sự cố xảy ra và hệ thống hóa thành quy trình",
    level4:
      "Có kinh nghiệm kiến thức sâu rộng trong việc sử dụng và lý thuyết hoạt động của các giải pháp khác nhau trong từng lĩnh vực. Cụ thể mỗi lĩnh vực (VD: logging, monitoring, database, queue v.v.) đều có kiến thức về ít nhất 3 giải pháp phổ biến nhất.",
    level5:
      "Nắm được xu hướng chung và thay đổi của ngành để có định hướng cho bộ phận.\nLà tấm gương truyền cảm hứng cho đồng đội tự học và luyện tập nâng cao tiêu chuyẩn của bản thân.",
  },
  {
    source: "Hiệp",
    group: "Knowledge",
    criterion: "Kiến thức về quy trình chuẩn: Agile, TOC",
    definition:
      "Kiến thức về các quy trình chuẩn là các hiểu biết về việc xây dựng quy trình, xây dựng hệ thống. Đối tượng xây dựng quy trình có thể là con người (cá nhân, đội nhóm) hoặc một bộ phận trong tổ chức (sản xuất, kế toán). Người có kiến thức về các quy trình chuẩn sẽ giúp đề xuất,",
    level1:
      "Nắm được các khái niệm cơ bản (VD: Agile, Theory Of Contraint) và ứng dụng một phần vào thực tế",
    level2:
      "Tích cực ứng dụng các lý thuyết vào thực tế hoạt động của tổ chức.\nNhận ra các điểm chưa hợp lý so với lý thuyết để cải thiện.",
    level3:
      "Có khả năng thiết kế tổng thể hệ thống quy trình từ đầu với sự kết hợp hài hòa giữa lý thuyết và thực tế.",
    level4: "Có kinh nghiệm và kiến thức sâu rộng về các quy trình tiêu chuẩn.",
    level5:
      "Nắm được xu hướng chung và thay đổi của ngành để có định hướng cho bộ phận.\nLà tấm gương truyền cảm hứng cho đồng đội tự học và luyện tập nâng cao tiêu chuyẩn của bản thân.",
  },
  {
    source: "Hiệp",
    group: "Knowledge",
    criterion: "Kiến thức lập trình Python",
    definition: "Hiểu biết về ngôn ngữ lập trình Python phục vụ cho công việc",
    level1:
      "Áp dụng được để thực hiện các nghiệp vụ đơn giản như truy xuất dữ liệu từ CSDL",
    level2:
      "Thuần thục thực hiện các nghiệp vụ sắp xếp, làm sạch, xử lý dữ liệu (data wrangling)",
    level3:
      "Thuần thục các trình xây dựng các model dữ liệu để tìm quy luật, giải thích hiện tượng, thực hiện A/B testing.\nThuần thục tự động hóa data cho người dùng",
    level4:
      "Có kiến thức sâu rộng về các library, framework về nhiều chủ đề liên quan đến dữ liệu: dữ liệu lớn, máy học, NLP.",
    level5:
      "Nắm được xu hướng chung và thay đổi của ngành để có định hướng cho bộ phận.\nLà tấm gương truyền cảm hứng cho đồng đội tự học và luyện tập nâng cao tiêu chuyẩn của bản thân.",
  },
  {
    source: "Hiệp",
    group: "Knowledge",
    criterion: "Kiến thức về SQL và NoSQL",
    definition:
      "Hiểu biết về ngôn ngữ truy vấn SQL và NoSQL cũng như các công nghệ hạ tầng liên quan phục vụ cho mục đích truy xuất và tổng hợp dữ liệu từ hệ thống cơ sở dữ liệu",
    level1:
      "Áp dụng được để thực hiện các nghiệp vụ đơn giản như truy xuất dữ liệu từ CSDL",
    level2:
      "Thuần thục việc truy xuất dữ liệu, tổng hợp dữ liệu từ nhiều bảng/tập hợp (table/collection) khác nhau",
    level3:
      "Có khả năng hệ thống hóa kho code truy vấn để nhanh chóng giải quyết vấn đề\nCó kiến thức nâng cao hiệu năng của truy vấn\nCó khả năng đào tạo cho các thành viên khác",
    level4:
      "Có khả năng xây dựng kế hoạch tổ chức sắp xếp kho dữ liệu (data warehouse) để phục vụ mục đích của doanh nghiệp",
    level5:
      "Nắm được xu hướng chung và thay đổi của ngành để có định hướng cho bộ phận.\nLà tấm gương truyền cảm hứng cho đồng đội tự học và luyện tập nâng cao tiêu chuyẩn của bản thân.",
  },
  {
    source: "Hiệp",
    group: "Knowledge",
    criterion: "Kiến thức nghiệp vụ kế toán",
    definition:
      "Kiến thức nghiệp vụ kế toán là hiểu biết về các phương pháp hạch toán theo chuẩn mực, các loại tài khoản, các quy tắc kế toán viên phải tuân theo để đảm bảo các số liệu báo cáo chính xác và liên tục",
    level1: null,
    level2: null,
    level3: null,
    level4: null,
    level5:
      "Nắm được xu hướng chung và thay đổi của ngành để có định hướng cho bộ phận.\nLà tấm gương truyền cảm hứng cho đồng đội tự học và luyện tập nâng cao tiêu chuyẩn của bản thân.",
  },
  {
    source: "Hiệp",
    group: "Knowledge",
    criterion:
      "Am hiểu luật và chế độ kế toán liên quan mảng thuế trong doanh nghiệp",
    definition: null,
    level1: null,
    level2: null,
    level3: null,
    level4: null,
    level5: null,
  },
  {
    source: "Hiệp",
    group: "Knowledge",
    criterion: "Biết cách tra cứu và ứng dụng văn bản luật",
    definition: null,
    level1: null,
    level2: null,
    level3: null,
    level4: null,
    level5: null,
  },
  {
    source: "Hiệp",
    group: "Knowledge",
    criterion: "Khả năng sử dụng phần mềm kế toán",
    definition: null,
    level1: null,
    level2: null,
    level3: null,
    level4: null,
    level5: null,
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Kiến thức về quy trình xử lý khiếu nại",
    definition: null,
    level1:
      "Chủ động tìm hiểu, học hỏi về quy trình xử lý khiếu nại với khách hàng\n- Thời gian xử lý\n- Chi phí\n- Phương pháp xử lý\nNắm rõ quy trình xử lý khiếu nại của công ty",
    level2:
      "- Áp dụng đúng quy trình xử lý vào công việc thực tế. -Có khả năng tổng hợp và hệ thống hoá được quy trình xử lý với khách hàng theo nhóm với mức chi phí cụ thể",
    level3:
      "- Có khả năng vận dụng được các kiến thức thực tế vào công việc, xử lý được các tinh huống phát sinh chưa có trước đó,\n- Ổn định được tâm lý khách hàng khó tính và giảm thiếu tối đa ảnh hưởng đến công ty.",
    level4:
      "- Đánh giá được hiệu quả công việc của bản thận và các bộ phận liên quan trong công việc xử lý khiếu nại. - Phân tích được những tình huống phát sinh trong trong công việc, đưa ra những cải tiến trong quy trình xử lý.",
    level5:
      "- Có khả năng đào tạo cho những người mới về quy trình xử lý khiếu nại, \n- Xây dựng được quy trình xử lý khiếu nại mới để thực hiện công việc hiệu quả hơn.",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Kiến thức tâm lý học",
    definition: null,
    level1: "Chủ động tìm hiểu, hỏi học về các kiến thức tâm lý học",
    level2:
      "Có khả năng tổng hợp, xây dựng được các yếu tố tâm lý ảnh hưởng đến quá trình tuyển dụng",
    level3:
      "Áp dụng được các kiến thức vào thực tế (VD: phỏng vấn ứng viên, nhận biết, đánh giá chính xác được tiềm năng của họ)",
    level4:
      "Tự xây dựng được các chương trình, quy trình áp dụng cho quá trình tuyển dụng (VD: DISC, Đánh giá 360,...)",
    level5:
      "Không chỉ áp dụng các kiến thức cho tìm kiếm ứng viên mà còn Quản lý công việc, Quản lý các mối quan hệ, Quản lý các xung đột và Quản lý bản thân",
  },
  {
    source: null,
    group: "Knowledge",
    criterion:
      "Kiến thức tiêu chuẩn vệ sinh an toàn thực phẩm trong lĩnh vực sản xuất và nhà hàng kinh doanh dịch vụ ăn uống",
    definition: null,
    level1:
      "Chủ động tìm hiểu và các điều kiện tiên quyết để cơ sở, bếp đạt điều kiện vệ sinh an toàn thực phẩm như TCVN, HACCP. SSOP, GMP,\nCác điều kiện của nhà xưởng, thiết bị, thực phẩm, con người",
    level2:
      "Có khả năng tổng hợp tài liệu, lên quy trình và nêu được các yếu tố cần thay đổi cho cơ sở sản xuất kinh doanh ăn uống, cửa hàng thực phẩm đạt đk vệ sinh an toàn thực phẩm",
    level3:
      "Áp dụng kiến thức để gíam sát, xử lý và thay đổi cơ sở, bếp duy trì đảm bảo điều kiện vệ sinh ATTP\nXử lý phát sinh đang có gây ảnh hưởng đến chất lượng VSATTP",
    level4:
      "Tự xây dựng các quy trình, quy định để hướng dẫn các bộ phận về kiến thức VSATTP",
    level5:
      "Có thể hướng dẫn người mới về các kiến thức chuyên môn.\nXử lý tốt tất cả công việc phát sinh, lên quy trình cho các bộ phận phối hợp xử lý",
  },
  {
    source: null,
    group: "Knowledge",
    criterion:
      "Kiến thức về quy trình vận hành và giám sát bếp chế biến công nghiệp",
    definition: null,
    level1:
      "Biết về cách bảo quản, thời hạn sử dụng các loại nguyên liệu\nCách sử dụng các loại máy móc công nghiệp \nQuy trình vận hành chung của bếp",
    level2:
      "Kiểm tra, đánh giá chất lượng của các nguyên liệu đầu vào và thành phẩm đầu ra\nThực hiện đúng các quy trình, kiến thức đã được hướng dẫn",
    level3:
      "Update, thay đổi được các quy trình chế biến và bảo quản các loại nguyên liệu thực phẩm\nKiểm soát được quy trình vận hành của bộ phận.",
    level4:
      "Phát triển, thay đổi các quy trình để đạt hiệu quả năng suất cao trong công việc.",
    level5:
      "Có khả năng hướng dẫn, truyền đạt cho người cùng chuyên môn, \nTự xử lý hiệu quả toàn bộ phát sinh trong quá trình hoạt động và đề xuất cải tiến mới, thay đổi toàn bộ quy trình sản xuất",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Kiến thức về 7 công cụ quản lý chất lượng",
    definition: null,
    level1:
      "Chủ động tìm hiểu, học hỏi về 7 công cụ phiếu kiểm soát, biểu đồ, biểu đồ nhân quả, Pareto, mật độ phân bổ và biểu đồ phân tán",
    level2:
      "Có khả năng tổng hợp, hiểu và sắp xếp lại lý thuyết về công cụ quản lý.",
    level3:
      "Áp dụng được các loại biểu đồ vào việc kiểm tra QC và kiểm soát chất lượng, quy trình của nhân viên",
    level4:
      "Tự xây dựng lên phiếu kiểm soát, biểu đồ mẫu và chuẩn đối với công việc trong hoạt động giám sát chuỗi Abby và Savor",
    level5:
      "Có khả năng hướng dẫn được cho người mới về các công cụ quản lý chất lượng trên. Đưa ra những phương pháp mới để quản lý chất lượng hiệu quả. Có khả năng xử lý hiệu quả mọi tình huống phát sinh trong công việc.",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Am hiểu về quy trình bộ phận giám sát",
    definition: null,
    level1:
      "Chủ động tìm hiểu, hỏi học về quy trình của bộ phận \n- Nhân diện sản phẩm, nắm rõ điều kiện bảo quản, hạn sử dụng nguyên liệu, thực phẩm\n- Nắm layout cơ bản của chuỗi\n- Kiến thức về quy trình làm việc của các bộ phận trong tổ chức",
    level2:
      "- Hiểu và áp dụng quy trình vào trong công việc kiểm tra check chất lương, check quy trình và không gian hiệu quả.\n- Phát hiện ra vấn đề kịp thời và đầy đủ",
    level3:
      "- Xử lý được các vấn đề sau giám sát\n- Xử lý và phân tích được tình huống phát sinh ngoài quy trình đã có sẵn của bộ phận",
    level4:
      "- Chủ động đề xuất thay đổi, xây dựng quy trình giám sát mới. Update các quy trình đang có để cải tiến quy trình của bộ phận",
    level5:
      "Có khả năng hướng dẫn công việc cho người mới đầy đủ kiến thức bộ phận.\nCó khả năng xử lý hiệu quả mọi tình huống phát sinh trong công việc",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Am hiểu quy trình kiểm toán nội bộ",
    definition: null,
    level1:
      "Thuộc và hiểu quy trình lý thuyết trong kiểm toán hàng hoá của công ty\n- Đầu mục công việc\n- Timeline thực hiện - Cách thực hiện",
    level2: "Biết cách áp dụng quy trình vào trong công việc",
    level3:
      "Có tư duy phản biện, xử lý tình huống phát sinh ngoài quy trình được học",
    level4: "Đúc rút và cải tiến quy trình mới",
    level5:
      "Có thể tự xây dựng quy trình mới và hướng dẫn lại quy trình mới hiệu quả cho các bộ phận",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Am hiểu quy trình vận hành hàng hóa nội bộ",
    definition: null,
    level1:
      "Thuộc và nắm rõ cách xử lý số liệu ra vào giữa kho, cơ sở, cơ sở và cơ sở\nQuy trình xử lý thu hồi, tiêu huỷ, kiểm hàng, update số liệu",
    level2:
      "Biết cách kiểm tra quy trình đang thực hiện các bộ phận thực tế có khớp với lý thuyết\nNhìn nhận ra vấn đề về kiểm toán hàng hoá của các bộ phận để xử lý",
    level3:
      "Có tư duy phản biện, xử lý tình huống phát sinh ngoài quy trình đã có",
    level4:
      "Phân tích, đúc rút và đưa ra những thay đổi trong vận hành hàng hoá, cải thiện hiệu suất công việc",
    level5:
      "Khẳ năng xây dựng một quy trình mới trong vận hành, kiểm soát hàng hoá.\nTự xử lỷ hiệu quả công việc phát sinh.",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Kiến thức chuyên môn nghiệp vụ nhân sự",
    definition: null,
    level1:
      "Chủ động tìm hiểu và ghi nhớ các lý thuyết về chuyên môn nghiệp vụ",
    level2:
      "Có khả năng tổng hợp và hệ thống hóa được một số lượng lớn các lý thuyết về chuyên môn nghiệp vụ, chủ động cập nhật các kiến thức mới về nghiệp vụ để nâng cao trình độ.",
    level3:
      "Có khả năng vận dụng được các kiến thức và lý thuyết về chuyên môn vào công việc, thực hiện công việc một cách có định hướng.",
    level4:
      "Đánh giá được hiệu quả công việc của những người khác cùng chuyên môn nghiệp vụ\nPhân tích được những tình huống phát sinh trong trong công việc",
    level5:
      "Có khả năng đào tạo cho những người mới về chuyên môn nghiệp vụ\nĐúc rút được những phương pháp mới để thực hiện công việc hiệu quả hơn\nCó khả năng xử lí hiệu quả được mọi tình huống có thể phát sinh trong công việc",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Hiểu biết về thị trường & xu hướng tuyển dụng",
    definition: null,
    level1:
      "Chủ động, thường xuyên tìm hiểu thị trường và xu hướng tuyển dụng\nVD: xu hướng dùng mạng XH nhiều hơn, Sử dụng dữ liệu,...",
    level2: "Dự đoán được nhu cầu nhân sự của các bộ phận",
    level3:
      "Phân tích và vẽ được chân dung kế hoạch tuyển dụng nhân sự tiềm năng theo xu hướng",
    level4: "Xây dựng chiến lược và quản lý nhân sự theo xu hướng",
    level5: "Biết cách áp dụng hiệu quả vào tình hình thực tế",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Khả năng sử dụng ngôn ngữ",
    definition: null,
    level1:
      "Có khả năng hiểu và sử dụng các cấu trúc câu đơn giản\nCó khả năng giới thiệu, hỏi và trả lời các câu hỏi cơ bản về bản thân\nCó thể giao tiếp thông thường, nói chậm rãi, rõ ràng",
    level2:
      "Có thể hiểu câu và các cụm từ thông thường trong hầu hết các chủ đề quen thuộc\nCó thể giao tiếp đơn giản, thực hiện các yêu cầu cơ bản và nắm bắt được thông tin khi giao tiếp trong bối cảnh quen thuộc\nCó thể dùng từ vựng đơn giản để miêu tả cá nhân, bối cảnh trực tiếp hay những chủ đề quen thuộc",
    level3:
      "Có khả năng hiểu các ý chính trong văn bản phức tạp về các chủ đề cụ thể cũng như trừu tượng\nGiao tiếp một cách lưu loát, không gây sự hiểu lầm giữa đôi bên.\nCó khả năng sử dụng các câu chi tiết, rõ ràng trong nhiều chủ đề khác nhau, bày tỏ quan điểm về một đề tài trong các bối cảnh khác nhau\nCó khả năng sử dụng các câu liên kết đơn giản trong các chủ đề quen thuộc",
    level4:
      "Có khả năng hiểu các loại văn bản dài và phức tạp, nhận biết được các hàm ý\nBiểu hiện khả năng ngôn ngữ một cách tự nhiên, thuần thục\nCó khả năng sử dụng linh hoạt các cấu trúc câu, các thành phần câu, từ nối câu và các cụm từ chức năng\nCó thể xử lý hầu hết các tình huống bất ngờ xảy ra trong giao tiếp",
    level5:
      "Có khả năng hiểu một cách dễ dàng những thông tin đọc và nghe được\nTóm tắt được thông tin từ các nguồn nói và viết khác nhau, tái cấu trúc các lập luận và miêu tả lại được thành một trình tự gắn kết.\nBiểu hiện khả năng ngôn ngữ một cách tự nhiên, trôi chảy và chính xác, phân lập các tầng nghĩa phức tạp khác nhau\nSử dụng ngôn ngữ linh hoạt và hiệu quả phục vụ cho tất cả các mục đích xã hội, học tập hay công việc",
  },
  {
    source: null,
    group: "Knowledge",
    criterion: "Kiến thức về sự phạm - Pedagogy",
    definition: null,
    level1: "Biết\nỨng viên có thể nhớ được nội dung các bài giảng",
    level2:
      "Hiểu\nỨng viên có khả năng chỉ ra ý nghĩa và mối liên hệ giữa các thông tin (hay khái niệm) mà họ đã biết. Ngoài việc đọc được khái niệm, UV còn hiểu được ý nghĩa, giải thích được các khái niệm đó\nVD: Đưa các công cụ như trắc nghiệm, bài tập, feedback nhằm đảm bảo học viên thấu hiểu kiến thức",
    level3:
      "Ứng dụng\nTừ kiến thức được giảng dạy, ứng viên có khả năng áp dụng hiệu quả vào thực tế",
    level4:
      "Phân tích, tổng hợp\nỨng viên đào sâu đến bản chất của vấn đề và có khả năng sáng tạo cái mới",
    level5:
      "Đánh giá\nỨng viên có khả năng đưa ra các phán xét hay-dở, tốt-xấu, tiến bộ – lạc hậu, phù hợp – không phù hợp v.v., về các vấn đề được training trực tiếp",
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
    criterion: "Kiến thức về thị trường vận tải",
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
    criterion: "Kiến thức về thị trường vận tải",
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
    group: "Attitude",
    criterion: "Đổi mới, sáng tạo",
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
    criterion: "Kỹ năng đối mặt với áp lực",
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
    criterion: "Khả năng sử dụng tiếng anh",
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
    group: "Attitude",
    criterion: "Đổi mới, sáng tạo",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng thuyết trình",
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
    criterion: "Kỹ năng quản lý thời gian",
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
    criterion: "Kỹ năng đối mặt với áp lực",
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
    group: "Skill",
    criterion: "Kỹ năng giải trình",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lập kế hoạch",
    position: "Business Analyst",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng sử dụng tiếng anh",
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
    group: "Attitude",
    criterion: "Cam kết",
    position: "Kế toán tổng hợp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tập trung vào kết quả",
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
    criterion: "Kỹ năng đối mặt với áp lực",
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
    criterion: "Khả năng tin học văn phòng",
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
    criterion: "Kỹ năng đối mặt với áp lực",
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
    criterion: "Biết cách tra cứu và ứng dụng văn bản luật",
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
    group: "Attitude",
    criterion: "Cam kết",
    position: "Chuyên viên phân tích dữ liệu",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng ra quyết định",
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
    group: "Skill",
    criterion: "Kỹ năng giải trình",
    position: "Chuyên viên phân tích dữ liệu",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
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
    criterion: "Kiến thức về thị trường vận tải",
    position: "Chuyên viên phân tích dữ liệu",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kỷ luật",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Đổi mới, sáng tạo",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xây dựng mỗi quan hệ",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đào tạo",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion:
      "Kiến thức tiêu chuẩn vệ sinh thực phẩm trong lĩnh vực sản xuất và nhà hàng kinh doanh dịch vụ ăn uống",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion:
      "Kiến thức về quy trình vận hành và giám sát bếp chế biến công nghiệp",
    position: "Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Trung thực, thẳng thắn",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kỷ luật",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng tự học",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đối mặt với áp lực",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình hệ thống nội bộ công ty",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về công nghệ thực phẩm",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion:
      "Kiến thức tiêu chuẩn vệ sinh thực phẩm trong lĩnh vực sản xuất và nhà hàng kinh doanh dịch vụ ăn uống",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về 7 công cụ quản lý chất lượng",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu về quy trình bộ phận giám sát",
    position: "Nhân viên giám sát chất lượng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Trung thực, thẳng thắn",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kỷ luật",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Đổi mới, sáng tạo",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tập trung vào kết quả",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng tự học",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giải trình",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng tư duy chiến lược",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình hệ thống nội bộ công ty",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình kiểm toán nội bộ",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình vận hành hàng hóa nội bộ",
    position: "Kiểm toán viên nội bộ",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kỷ luật",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tập trung vào kết quả",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lắng nghe",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xây dựng mỗi quan hệ",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý xung đột",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giải trình",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản trị rủi ro",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình hệ thống nội bộ công ty",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về quy trình xử lý khiếu nại",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức tâm lý học",
    position: "Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đàm phán, thuyết phục",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình hệ thống nội bộ công ty",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức tâm lý học",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức chuyên môn nghiệp vụ nhân sự",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Hiểu biết về thị trường & xu hướng tuyển dụng",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng sử dụng ngôn ngữ",
    position: "Chuyên viên Tuyển dụng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đàm phán, thuyết phục",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình hệ thống nội bộ công ty",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức tâm lý học",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức chuyên môn nghiệp vụ nhân sự",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Hiểu biết về thị trường & xu hướng tuyển dụng",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng sử dụng ngôn ngữ",
    position: "Chuyên viên nhân sự tổng hợp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng phân tích dữ liệu",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đào tạo",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lập kế hoạch",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình hệ thống nội bộ công ty",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức chuyên môn nghiệp vụ nhân sự",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng sử dụng ngôn ngữ",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về sự phạm - Pedagogy",
    position: "Chuyên viên đào tạo và phát triển",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kỷ luật",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Đổi mới, sáng tạo",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng phân tích dữ liệu",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lắng nghe",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng tự học",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xây dựng mỗi quan hệ",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đào tạo",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng sử dụng tiếng anh",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về công nghệ thực phẩm",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion:
      "Kiến thức tiêu chuẩn vệ sinh thực phẩm trong lĩnh vực sản xuất và nhà hàng kinh doanh dịch vụ ăn uống",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion:
      "Kiến thức về quy trình vận hành và giám sát bếp chế biến công nghiệp",
    position:
      "Chuyên viên nghiên cứu, phát triển sản phẩm - Quản lý sản xuất bếp",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tỉ mỉ, cẩn thận",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kỷ luật",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần chịu trách nhiệm",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần lạc quan",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Đổi mới, sáng tạo",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng thuyết trình",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng phân tích dữ liệu",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng làm việc nhóm",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đào tạo",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lập kế hoạch",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng tin học văn phòng",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình hệ thống nội bộ công ty",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion:
      "Kiến thức về chuyên ngành thiết kế (màu sắc, bố cục, hình ảnh, typo)",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức các loại hình POSM",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức chuyên môn nghiệp vụ nhân sự",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Khả năng sử dụng ngôn ngữ",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về sự phạm - Pedagogy",
    position: "Chuyên viên đào tạo và phát triển - Visual merchandiser",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Nhạy bén",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kiên trì",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Kỷ luật",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Phản hồi nhanh",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tinh thần lạc quan",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Attitude",
    criterion: "Tập trung vào kết quả",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng đàm phán, thuyết phục",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xử lý tình huống",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý thời gian",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng lắng nghe",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giao tiếp",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng xây dựng mỗi quan hệ",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản lý xung đột",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng giải trình",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Skill",
    criterion: "Kỹ năng quản trị rủi ro",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về sản phẩm, ngành hàng, đối thủ",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Am hiểu quy trình hệ thống nội bộ công ty",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về các loại nguyên liệu",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về thị trường vận tải",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức về quy trình xử lý khiếu nại",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
  {
    group: "Knowledge",
    criterion: "Kiến thức tâm lý học",
    position: "Chuyên viên bán hàng - Chăm sóc khách hàng",
    applied: 1.0,
  },
];
