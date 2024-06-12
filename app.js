var mapContainer = document.getElementById("map");
mapOption = {
  center: new kakao.maps.LatLng(36.489567, 126.942152),
  level: 12,
};
var map = new kakao.maps.Map(mapContainer, mapOption);
// 지도의 최대 레벨을 설정하여 level 12를 초과하지 못하도록 합니다.
map.setMaxLevel(12);

var cheonan = [
  new kakao.maps.LatLng(36.9375, 127.0745),
  new kakao.maps.LatLng(36.9122, 127.0947),
  new kakao.maps.LatLng(36.9017, 127.085),
  new kakao.maps.LatLng(36.8921, 127.0929),
  new kakao.maps.LatLng(36.8873, 127.0877),
  new kakao.maps.LatLng(36.8603, 127.0881),
  new kakao.maps.LatLng(36.8588, 127.1117),
  new kakao.maps.LatLng(36.7936, 127.0982),
  new kakao.maps.LatLng(36.7997, 127.1095),
  new kakao.maps.LatLng(36.7632, 127.1195),
  new kakao.maps.LatLng(36.7582, 127.0925),
  new kakao.maps.LatLng(36.7082, 127.0769),
  new kakao.maps.LatLng(36.7078, 127.0599),
  new kakao.maps.LatLng(36.6567, 127.0103),
  new kakao.maps.LatLng(36.6541, 127.0271),
  new kakao.maps.LatLng(36.6413, 127.0883),
  new kakao.maps.LatLng(36.6579, 127.1114),
  new kakao.maps.LatLng(36.6189, 127.1499),
  new kakao.maps.LatLng(36.6251, 127.16),
  new kakao.maps.LatLng(36.6927, 127.1603),
  new kakao.maps.LatLng(36.6873, 127.1433),
  new kakao.maps.LatLng(36.7082, 127.1294),
  new kakao.maps.LatLng(36.7346, 127.1631),
  new kakao.maps.LatLng(36.6892, 127.2861),
  new kakao.maps.LatLng(36.7986, 127.4019),
  new kakao.maps.LatLng(36.8154, 127.3789),
  new kakao.maps.LatLng(36.8297, 127.3358),
  new kakao.maps.LatLng(36.8537, 127.3363),
  new kakao.maps.LatLng(36.859, 127.3074),
  new kakao.maps.LatLng(36.8845, 127.3098),
  new kakao.maps.LatLng(36.9128, 127.2733),
  new kakao.maps.LatLng(36.9205, 127.2538),
  new kakao.maps.LatLng(36.9291, 127.2112),
  new kakao.maps.LatLng(36.9506, 127.2032),
  new kakao.maps.LatLng(36.9689, 127.1475),
  new kakao.maps.LatLng(36.9682, 127.1218),
];

var asan = [
  // 아산천안
  new kakao.maps.LatLng(36.9375, 127.0745),
  new kakao.maps.LatLng(36.9122, 127.0947),
  new kakao.maps.LatLng(36.9017, 127.085),
  new kakao.maps.LatLng(36.8921, 127.0929),
  new kakao.maps.LatLng(36.8873, 127.0877),
  new kakao.maps.LatLng(36.8603, 127.0881),
  new kakao.maps.LatLng(36.8588, 127.1117),
  new kakao.maps.LatLng(36.7936, 127.0982),
  new kakao.maps.LatLng(36.7997, 127.1095),
  new kakao.maps.LatLng(36.7632, 127.1195),
  new kakao.maps.LatLng(36.7582, 127.0925),
  new kakao.maps.LatLng(36.7082, 127.0769),
  new kakao.maps.LatLng(36.7078, 127.0599),
  // 아산천안공주
  new kakao.maps.LatLng(36.6567, 127.0103),
  // 아산공주
  new kakao.maps.LatLng(36.6485, 126.9898),
  // 아산예산공주
  new kakao.maps.LatLng(36.6794, 126.9673),
  // 아산예산
  new kakao.maps.LatLng(36.6902, 126.9699),
  new kakao.maps.LatLng(36.7034, 126.9501),
  new kakao.maps.LatLng(36.7016, 126.9028),
  new kakao.maps.LatLng(36.7234, 126.8985),
  new kakao.maps.LatLng(36.7307, 126.886),
  new kakao.maps.LatLng(36.7297, 126.8665),
  new kakao.maps.LatLng(36.7471, 126.8584),
  new kakao.maps.LatLng(36.7473, 126.8528),
  new kakao.maps.LatLng(36.7415, 126.8471),
  new kakao.maps.LatLng(36.7493, 126.8462),
  new kakao.maps.LatLng(36.7494, 126.8396),
  new kakao.maps.LatLng(36.7672, 126.8277),
  // 아산당진예산
  new kakao.maps.LatLng(36.7825, 126.8334),
  // 아산당진
  new kakao.maps.LatLng(36.7884, 126.8424),
  new kakao.maps.LatLng(36.7902, 126.8584),
  new kakao.maps.LatLng(36.8038, 126.8575),
  new kakao.maps.LatLng(36.8349, 126.8362),
  new kakao.maps.LatLng(36.8975, 126.8502),
  // 아산
  new kakao.maps.LatLng(36.9154, 126.9399),
  new kakao.maps.LatLng(36.9311, 126.9838),
  new kakao.maps.LatLng(36.9339, 127.0216),
  new kakao.maps.LatLng(36.9287, 127.0336),
  new kakao.maps.LatLng(36.941, 127.0661),
];
var dangjin = [
  // 아산당진예산
  new kakao.maps.LatLng(36.7825, 126.8334),

  // 아산당진
  new kakao.maps.LatLng(36.7884, 126.8424),
  new kakao.maps.LatLng(36.7902, 126.8584),
  new kakao.maps.LatLng(36.8038, 126.8575),
  new kakao.maps.LatLng(36.8349, 126.8362),
  new kakao.maps.LatLng(36.8975, 126.8502),

  // 당진
  new kakao.maps.LatLng(36.9525, 126.8409),
  new kakao.maps.LatLng(36.9961, 126.7067),
  new kakao.maps.LatLng(37.0339, 126.5583),
  new kakao.maps.LatLng(37.064, 126.5023),
  new kakao.maps.LatLng(37.021, 126.4641),
  new kakao.maps.LatLng(36.9693, 126.4898),
  new kakao.maps.LatLng(36.9399, 126.4956),

  // 당진서산
  new kakao.maps.LatLng(36.8785, 126.4768),
  new kakao.maps.LatLng(36.8681, 126.5108),
  new kakao.maps.LatLng(36.8246, 126.5272),
  new kakao.maps.LatLng(36.8348, 126.5877),
  new kakao.maps.LatLng(36.8174, 126.6011),
  new kakao.maps.LatLng(36.8134, 126.6312),

  // 당진예산
  new kakao.maps.LatLng(36.7753, 126.6545),
  new kakao.maps.LatLng(36.7707, 126.6649),
  new kakao.maps.LatLng(36.7804, 126.6697),
  new kakao.maps.LatLng(36.7833, 126.6807),
  new kakao.maps.LatLng(36.7839, 126.6943),
  new kakao.maps.LatLng(36.8004, 126.6957),
  new kakao.maps.LatLng(36.8031, 126.7123),
  new kakao.maps.LatLng(36.7487, 126.7731),
  new kakao.maps.LatLng(36.7867, 126.8185),
];

var yesan = [
  // 예산
  new kakao.maps.LatLng(36.7753, 126.6545),
  new kakao.maps.LatLng(36.7707, 126.6649),
  new kakao.maps.LatLng(36.7804, 126.6697),
  new kakao.maps.LatLng(36.7833, 126.6807),
  new kakao.maps.LatLng(36.7839, 126.6943),
  new kakao.maps.LatLng(36.8004, 126.6957),
  new kakao.maps.LatLng(36.8031, 126.7123),
  new kakao.maps.LatLng(36.7487, 126.7731),
  new kakao.maps.LatLng(36.7867, 126.8185),

  // 아산당진예산
  new kakao.maps.LatLng(36.7825, 126.8334),

  // 아산예산
  new kakao.maps.LatLng(36.7672, 126.8277),
  new kakao.maps.LatLng(36.7494, 126.8396),
  new kakao.maps.LatLng(36.7493, 126.8462),
  new kakao.maps.LatLng(36.7415, 126.8471),
  new kakao.maps.LatLng(36.7473, 126.8528),
  new kakao.maps.LatLng(36.7471, 126.8584),
  new kakao.maps.LatLng(36.7297, 126.8665),
  new kakao.maps.LatLng(36.7307, 126.886),
  new kakao.maps.LatLng(36.7234, 126.8985),
  new kakao.maps.LatLng(36.7016, 126.9028),
  new kakao.maps.LatLng(36.7034, 126.9501),
  new kakao.maps.LatLng(36.6902, 126.9699),

  // 아산예산공주
  new kakao.maps.LatLng(36.6794, 126.9673),

  // 예산공주
  new kakao.maps.LatLng(36.5569, 126.8979),

  // 예산 청양
  new kakao.maps.LatLng(36.5701, 126.8522),
  new kakao.maps.LatLng(36.5284, 126.8244),

  // 예산 청양 홍성
  new kakao.maps.LatLng(36.5326, 126.7745),

  // 예산 홍성
  new kakao.maps.LatLng(36.5363, 126.7683),
  new kakao.maps.LatLng(36.5271, 126.76),
  new kakao.maps.LatLng(36.536, 126.7421),
  new kakao.maps.LatLng(36.5513, 126.7385),
  new kakao.maps.LatLng(36.5554, 126.7471),
  new kakao.maps.LatLng(36.5803, 126.7485),
  new kakao.maps.LatLng(36.5932, 126.7727),
  new kakao.maps.LatLng(36.6174, 126.7699),
  new kakao.maps.LatLng(36.617, 126.7618),
  new kakao.maps.LatLng(36.6239, 126.7555),
  new kakao.maps.LatLng(36.6265, 126.7588),
  new kakao.maps.LatLng(36.6324, 126.7571),
  new kakao.maps.LatLng(36.6347, 126.7505),
  new kakao.maps.LatLng(36.645, 126.7534),
  new kakao.maps.LatLng(36.6484, 126.7365),
  new kakao.maps.LatLng(36.66, 126.737),
  new kakao.maps.LatLng(36.6694, 126.7455),
  new kakao.maps.LatLng(36.6734, 126.7405),
  new kakao.maps.LatLng(36.6702, 126.7288),
  new kakao.maps.LatLng(36.6676, 126.7259),
  new kakao.maps.LatLng(36.6706, 126.7195),
  new kakao.maps.LatLng(36.6721, 126.7099),
  new kakao.maps.LatLng(36.6659, 126.7052),
  new kakao.maps.LatLng(36.6626, 126.7071),
  new kakao.maps.LatLng(36.6623, 126.6969),
  new kakao.maps.LatLng(36.6602, 126.6913),
  new kakao.maps.LatLng(36.6611, 126.6807),
  new kakao.maps.LatLng(36.6549, 126.657),
  new kakao.maps.LatLng(36.6487, 126.6483),
  new kakao.maps.LatLng(36.6504, 126.6311),
  new kakao.maps.LatLng(36.6389, 126.6192),
  new kakao.maps.LatLng(36.6311, 126.6251),
  new kakao.maps.LatLng(36.6144, 126.6268),
  new kakao.maps.LatLng(36.6091, 126.6233),
  new kakao.maps.LatLng(36.6137, 126.619),
  new kakao.maps.LatLng(36.6233, 126.6159),
  new kakao.maps.LatLng(36.6251, 126.6065),
  new kakao.maps.LatLng(36.6189, 126.6025),
  new kakao.maps.LatLng(36.6214, 126.5984),
  new kakao.maps.LatLng(36.6175, 126.5863),
  new kakao.maps.LatLng(36.638, 126.5869),
  new kakao.maps.LatLng(36.6477, 126.5917),
  new kakao.maps.LatLng(36.6495, 126.5955),
  new kakao.maps.LatLng(36.6527, 126.5959),
  new kakao.maps.LatLng(36.6576, 126.5921),
  new kakao.maps.LatLng(36.6616, 126.591),

  // 예산홍성서산
  new kakao.maps.LatLng(36.6636, 126.5891),

  // 예산 서산
  new kakao.maps.LatLng(36.6698, 126.5954),
  new kakao.maps.LatLng(36.6788, 126.5992),
  new kakao.maps.LatLng(36.685, 126.5963),
  new kakao.maps.LatLng(36.6906, 126.6003),
  new kakao.maps.LatLng(36.6966, 126.6001),
  new kakao.maps.LatLng(36.7047, 126.6096),
  new kakao.maps.LatLng(36.7204, 126.6025),
  new kakao.maps.LatLng(36.7337, 126.6108),
  new kakao.maps.LatLng(36.7333, 126.6247),
  new kakao.maps.LatLng(36.7435, 126.6347),
  new kakao.maps.LatLng(36.7575, 126.633),
  new kakao.maps.LatLng(36.7589, 126.6366),
  new kakao.maps.LatLng(36.7521, 126.6455),
  new kakao.maps.LatLng(36.751, 126.6525),
  new kakao.maps.LatLng(36.7589, 126.6501),
  new kakao.maps.LatLng(36.7593, 126.6477),
  new kakao.maps.LatLng(36.7651, 126.6507),
  new kakao.maps.LatLng(36.7709, 126.6499),
  new kakao.maps.LatLng(36.7723, 126.6533),
];

var seosan = [
  // 당진서산
  new kakao.maps.LatLng(36.8785, 126.4768),
  new kakao.maps.LatLng(36.8681, 126.5108),
  new kakao.maps.LatLng(36.8246, 126.5272),
  new kakao.maps.LatLng(36.8348, 126.5877),
  new kakao.maps.LatLng(36.8174, 126.6011),
  new kakao.maps.LatLng(36.8134, 126.6312),

  // 당진서산예산
  new kakao.maps.LatLng(36.7753, 126.6545),

  // 예산서산
  new kakao.maps.LatLng(36.7723, 126.6533),
  new kakao.maps.LatLng(36.7709, 126.6499),
  new kakao.maps.LatLng(36.7651, 126.6507),
  new kakao.maps.LatLng(36.7593, 126.6477),
  new kakao.maps.LatLng(36.7589, 126.6501),
  new kakao.maps.LatLng(36.751, 126.6525),
  new kakao.maps.LatLng(36.7521, 126.6455),
  new kakao.maps.LatLng(36.7589, 126.6366),
  new kakao.maps.LatLng(36.7575, 126.633),
  new kakao.maps.LatLng(36.7435, 126.6347),
  new kakao.maps.LatLng(36.7333, 126.6247),
  new kakao.maps.LatLng(36.7337, 126.6108),
  new kakao.maps.LatLng(36.7204, 126.6025),
  new kakao.maps.LatLng(36.7047, 126.6096),
  new kakao.maps.LatLng(36.6966, 126.6001),
  new kakao.maps.LatLng(36.6906, 126.6003),
  new kakao.maps.LatLng(36.685, 126.5963),
  new kakao.maps.LatLng(36.6788, 126.5992),
  new kakao.maps.LatLng(36.6698, 126.5954),

  // 예산서산홍성
  new kakao.maps.LatLng(36.6636, 126.5891),

  // 서산홍성
  new kakao.maps.LatLng(36.6646, 126.5814),
  new kakao.maps.LatLng(36.6547, 126.5796),
  new kakao.maps.LatLng(36.6487, 126.5716),
  new kakao.maps.LatLng(36.6498, 126.5657),
  new kakao.maps.LatLng(36.6425, 126.5555),
  new kakao.maps.LatLng(36.6403, 126.5459),
  new kakao.maps.LatLng(36.6447, 126.5417),
  new kakao.maps.LatLng(36.6461, 126.5351),
  new kakao.maps.LatLng(36.6405, 126.5271),
  new kakao.maps.LatLng(36.6382, 126.5187),
  new kakao.maps.LatLng(36.6348, 126.5188),
  new kakao.maps.LatLng(36.6308, 126.5112),
  new kakao.maps.LatLng(36.6347, 126.5056),
  new kakao.maps.LatLng(36.6316, 126.4974),
  new kakao.maps.LatLng(36.6266, 126.4666),

  // 서산
  new kakao.maps.LatLng(36.6316, 126.4638),
  new kakao.maps.LatLng(36.655, 126.4677),
  new kakao.maps.LatLng(36.6584, 126.4635),
  new kakao.maps.LatLng(36.6623, 126.4612),
  new kakao.maps.LatLng(36.6739, 126.4642),
  new kakao.maps.LatLng(36.6849, 126.4617),
  new kakao.maps.LatLng(36.6916, 126.4538),
  new kakao.maps.LatLng(36.6911, 126.4507),
  new kakao.maps.LatLng(36.6759, 126.4479),
  new kakao.maps.LatLng(36.668, 126.4421),
  new kakao.maps.LatLng(36.644, 126.4445),
  new kakao.maps.LatLng(36.6374, 126.4446),
  new kakao.maps.LatLng(36.6215, 126.4346),
  new kakao.maps.LatLng(36.61, 126.4311),
  new kakao.maps.LatLng(36.6055, 126.4259),
  new kakao.maps.LatLng(36.6054, 126.4143),
  new kakao.maps.LatLng(36.6146, 126.4151),
  new kakao.maps.LatLng(36.6186, 126.3895),
  new kakao.maps.LatLng(36.6244, 126.3681),
  new kakao.maps.LatLng(36.6336, 126.3628),
  new kakao.maps.LatLng(36.6692, 126.3613),
  new kakao.maps.LatLng(36.6988, 126.3506),
  new kakao.maps.LatLng(36.701, 126.3486),
  new kakao.maps.LatLng(36.7108, 126.3471),

  // 태안서산
  new kakao.maps.LatLng(36.7253, 126.3465),
  new kakao.maps.LatLng(36.7515, 126.346),
  new kakao.maps.LatLng(36.7677, 126.3502),
  new kakao.maps.LatLng(36.7767, 126.3499),
  new kakao.maps.LatLng(36.7858, 126.3581),
  new kakao.maps.LatLng(36.7986, 126.3479),
  new kakao.maps.LatLng(36.8143, 126.3342),

  // 서산
  new kakao.maps.LatLng(36.8176, 126.3378),
  new kakao.maps.LatLng(36.8224, 126.3308),
  new kakao.maps.LatLng(36.8275, 126.3279),
  new kakao.maps.LatLng(36.8273, 126.3265),
  new kakao.maps.LatLng(36.8309, 126.3252),
  new kakao.maps.LatLng(36.8327, 126.3279),
  new kakao.maps.LatLng(36.8337, 126.3282),
  new kakao.maps.LatLng(36.8339, 126.3286),
  new kakao.maps.LatLng(36.8351, 126.3288),
  new kakao.maps.LatLng(36.8388, 126.3197),
  new kakao.maps.LatLng(36.8404, 126.3194),
  new kakao.maps.LatLng(36.8417, 126.3156),
  new kakao.maps.LatLng(36.8428, 126.3169),
  new kakao.maps.LatLng(36.843, 126.3202),
  new kakao.maps.LatLng(36.8477, 126.325),
  new kakao.maps.LatLng(36.8564, 126.3245),
  new kakao.maps.LatLng(36.8575, 126.3274),
  new kakao.maps.LatLng(36.8607, 126.3278),
  new kakao.maps.LatLng(36.8632, 126.332),
  new kakao.maps.LatLng(36.862, 126.336),
  new kakao.maps.LatLng(36.8615, 126.3435),
  new kakao.maps.LatLng(36.861, 126.348),
  new kakao.maps.LatLng(36.8596, 126.3465),
  new kakao.maps.LatLng(36.8536, 126.3453),
  new kakao.maps.LatLng(36.8533, 126.3437),
  new kakao.maps.LatLng(36.8496, 126.3432),
  new kakao.maps.LatLng(36.8485, 126.3421),
  new kakao.maps.LatLng(36.8437, 126.3456),
  new kakao.maps.LatLng(36.8439, 126.3481),
  new kakao.maps.LatLng(36.8319, 126.3564),
  new kakao.maps.LatLng(36.831, 126.3631),
  new kakao.maps.LatLng(36.8339, 126.3662),
  new kakao.maps.LatLng(36.8404, 126.3591),
  new kakao.maps.LatLng(36.8489, 126.3562),
  new kakao.maps.LatLng(36.8763, 126.365),
  new kakao.maps.LatLng(36.8819, 126.3766),
  new kakao.maps.LatLng(36.8803, 126.3978),
  new kakao.maps.LatLng(36.887, 126.3957),
  new kakao.maps.LatLng(36.893, 126.397),
  new kakao.maps.LatLng(36.8965, 126.4056),
  new kakao.maps.LatLng(36.8992, 126.4237),
  new kakao.maps.LatLng(36.9026, 126.4321),
  new kakao.maps.LatLng(36.9064, 126.4262),
  new kakao.maps.LatLng(36.9078, 126.4097),
  new kakao.maps.LatLng(36.9211, 126.4048),
  new kakao.maps.LatLng(36.9305, 126.4175),
  new kakao.maps.LatLng(36.9319, 126.386),
  new kakao.maps.LatLng(36.9449, 126.3809),
  new kakao.maps.LatLng(36.9387, 126.3597),
  new kakao.maps.LatLng(36.9522, 126.3511),
  new kakao.maps.LatLng(36.9635, 126.3336),
  new kakao.maps.LatLng(36.999, 126.3269),
  new kakao.maps.LatLng(37.0181, 126.4056),
  new kakao.maps.LatLng(37.005, 126.4506),
  new kakao.maps.LatLng(36.9942, 126.4621),
  new kakao.maps.LatLng(36.9559, 126.4832),
  new kakao.maps.LatLng(36.9357, 126.4879),
  new kakao.maps.LatLng(36.9101, 126.4759),
  new kakao.maps.LatLng(36.8765, 126.473),
];

var taean = [
  //태안 서산
  new kakao.maps.LatLng(36.7253, 126.3465),
  new kakao.maps.LatLng(36.7515, 126.346),
  new kakao.maps.LatLng(36.7677, 126.3502),
  new kakao.maps.LatLng(36.7767, 126.3499),
  new kakao.maps.LatLng(36.7858, 126.3581),
  new kakao.maps.LatLng(36.7986, 126.3479),
  new kakao.maps.LatLng(36.8143, 126.3342),

  //태안
  new kakao.maps.LatLng(36.8136, 126.3281),
  new kakao.maps.LatLng(36.8195, 126.3226),
  new kakao.maps.LatLng(36.8145, 126.3182),
  new kakao.maps.LatLng(36.8132, 126.3115),
  new kakao.maps.LatLng(36.815, 126.3067),
  new kakao.maps.LatLng(36.8144, 126.3047),
  new kakao.maps.LatLng(36.8083, 126.2965),
  new kakao.maps.LatLng(36.8059, 126.2949),
  new kakao.maps.LatLng(36.8022, 126.2967),
  new kakao.maps.LatLng(36.7979, 126.2913),
  new kakao.maps.LatLng(36.7994, 126.2874),
  new kakao.maps.LatLng(36.8011, 126.2884),
  new kakao.maps.LatLng(36.8029, 126.2865),
  new kakao.maps.LatLng(36.8055, 126.2869),
  new kakao.maps.LatLng(36.8134, 126.2888),
  new kakao.maps.LatLng(36.8167, 126.2865),
  new kakao.maps.LatLng(36.8178, 126.281),
  new kakao.maps.LatLng(36.8209, 126.2821),
  new kakao.maps.LatLng(36.8331, 126.3161),
  new kakao.maps.LatLng(36.8374, 126.3174),
  new kakao.maps.LatLng(36.8429, 126.294),
  new kakao.maps.LatLng(36.8475, 126.2964),
  new kakao.maps.LatLng(36.852, 126.2961),
  new kakao.maps.LatLng(36.8859, 126.3193),
  new kakao.maps.LatLng(36.8838, 126.3292),
  new kakao.maps.LatLng(36.8917, 126.3327),
  new kakao.maps.LatLng(36.8923, 126.3207),
  new kakao.maps.LatLng(36.896, 126.3216),
  new kakao.maps.LatLng(36.9054, 126.3198),
  new kakao.maps.LatLng(36.9205, 126.3005),
  new kakao.maps.LatLng(36.9296, 126.3105),
  new kakao.maps.LatLng(36.9421, 126.3026),
  new kakao.maps.LatLng(36.9554, 126.3144),
  new kakao.maps.LatLng(36.9621, 126.2926),
  new kakao.maps.LatLng(36.9666, 126.3062),
  new kakao.maps.LatLng(36.9732, 126.3081),
  new kakao.maps.LatLng(36.9792, 126.3054),
  new kakao.maps.LatLng(36.9768, 126.2995),
  new kakao.maps.LatLng(36.9708, 126.2966),
  new kakao.maps.LatLng(36.9695, 126.2857),
  new kakao.maps.LatLng(36.9634, 126.2842),
  new kakao.maps.LatLng(36.9505, 126.2898),
  new kakao.maps.LatLng(36.945, 126.2888),
  new kakao.maps.LatLng(36.9354, 126.2897),
  new kakao.maps.LatLng(36.9316, 126.2919),
  new kakao.maps.LatLng(36.9234, 126.2905),
  new kakao.maps.LatLng(36.9179, 126.288),
  new kakao.maps.LatLng(36.9114, 126.2854),
  new kakao.maps.LatLng(36.8995, 126.2808),
  new kakao.maps.LatLng(36.9136, 126.2492),
  new kakao.maps.LatLng(36.9045, 126.204),
  new kakao.maps.LatLng(36.8879, 126.1967),
  new kakao.maps.LatLng(36.8886, 126.1811),
  new kakao.maps.LatLng(36.8839, 126.1769),
  new kakao.maps.LatLng(36.8789, 126.1895),
  new kakao.maps.LatLng(36.872, 126.1906),
  new kakao.maps.LatLng(36.8682, 126.1838),
  new kakao.maps.LatLng(36.8579, 126.1924),
  new kakao.maps.LatLng(36.8534, 126.1967),
  new kakao.maps.LatLng(36.8495, 126.1587),
  new kakao.maps.LatLng(36.8378, 126.1457),
  new kakao.maps.LatLng(36.771, 126.1119),
  new kakao.maps.LatLng(36.7095, 126.1195),
  new kakao.maps.LatLng(36.7322, 126.1527),
  new kakao.maps.LatLng(36.7549, 126.1506),
  new kakao.maps.LatLng(36.7219, 126.2033),
  new kakao.maps.LatLng(36.7208, 126.2233),
  new kakao.maps.LatLng(36.7059, 126.2068),
  new kakao.maps.LatLng(36.7177, 126.1677),
  new kakao.maps.LatLng(36.7025, 126.1468),
  new kakao.maps.LatLng(36.6784, 126.1245),
  new kakao.maps.LatLng(36.6689, 126.1378),
  new kakao.maps.LatLng(36.6741, 126.1966),
  new kakao.maps.LatLng(36.7049, 126.2405),
  new kakao.maps.LatLng(36.7175, 126.2572),
  new kakao.maps.LatLng(36.7203, 126.273),
  new kakao.maps.LatLng(36.6779, 126.2616),
  new kakao.maps.LatLng(36.6709, 126.2659),
  new kakao.maps.LatLng(36.673, 126.2803),
  new kakao.maps.LatLng(36.6228, 126.2995),
  new kakao.maps.LatLng(36.6185, 126.2872),
  new kakao.maps.LatLng(36.5944, 126.2837),
  new kakao.maps.LatLng(36.5782, 126.2932),
  new kakao.maps.LatLng(36.5943, 126.3107),
  new kakao.maps.LatLng(36.5707, 126.3143),
  new kakao.maps.LatLng(36.5554, 126.3283),
  new kakao.maps.LatLng(36.5208, 126.3259),
  new kakao.maps.LatLng(36.4702, 126.3254),
  new kakao.maps.LatLng(36.4426, 126.3334),
  new kakao.maps.LatLng(36.4159, 126.3634),
  new kakao.maps.LatLng(36.3986, 126.4267),
  new kakao.maps.LatLng(36.4216, 126.4351),
  new kakao.maps.LatLng(36.4646, 126.4173),
  new kakao.maps.LatLng(36.4933, 126.4104),
  new kakao.maps.LatLng(36.5497, 126.3796),
  new kakao.maps.LatLng(36.5886, 126.376),
  new kakao.maps.LatLng(36.61, 126.366),
  new kakao.maps.LatLng(36.6294, 126.3532),
  new kakao.maps.LatLng(36.66, 126.3451),
  new kakao.maps.LatLng(36.7005, 126.3407),
];

var gongju = [
  // 아산예산공주
  new kakao.maps.LatLng(36.6794, 126.9673),

  // 예산홍성공주
  new kakao.maps.LatLng(36.5569, 126.8979),

  // 청양공주
  new kakao.maps.LatLng(36.5105, 126.884),
  new kakao.maps.LatLng(36.455, 126.9181),
  new kakao.maps.LatLng(36.4613, 126.9951),
  new kakao.maps.LatLng(36.4027, 127.0318),

  // 청양공주부여
  new kakao.maps.LatLng(36.3344, 126.9754),

  // 공주부여
  new kakao.maps.LatLng(36.3247, 126.9944),
  new kakao.maps.LatLng(36.3048, 126.986),
  new kakao.maps.LatLng(36.2787, 127.0355),

  // 공주부여논산
  new kakao.maps.LatLng(36.2748, 127.0669),

  // 공주논산
  new kakao.maps.LatLng(36.3368, 127.1077),
  new kakao.maps.LatLng(36.3035, 127.1458),

  // 공주논산계룡
  new kakao.maps.LatLng(36.3344, 127.1959),

  // 공주계룡
  new kakao.maps.LatLng(36.3502, 127.2139),
  new kakao.maps.LatLng(36.3497, 127.2389),
  new kakao.maps.LatLng(36.3278, 127.261),

  // 공주
  new kakao.maps.LatLng(36.3611, 127.2707),
  new kakao.maps.LatLng(36.4136, 127.2835),
  new kakao.maps.LatLng(36.4081, 127.2487),
  new kakao.maps.LatLng(36.4423, 127.2002),
  new kakao.maps.LatLng(36.5094, 127.1719),
  new kakao.maps.LatLng(36.5456, 127.1706),
  new kakao.maps.LatLng(36.5798, 127.2075),
  new kakao.maps.LatLng(36.6049, 127.1574),

  // 천안공주
  new kakao.maps.LatLng(36.6189, 127.1499),
  new kakao.maps.LatLng(36.6579, 127.1114),
  new kakao.maps.LatLng(36.6413, 127.0883),
  new kakao.maps.LatLng(36.6541, 127.0271),
  new kakao.maps.LatLng(36.6567, 127.0103),
];

var hongsung = [
  // 예산서산홍성
  new kakao.maps.LatLng(36.6636, 126.5891),

  // 서산홍성
  new kakao.maps.LatLng(36.6646, 126.5814),
  new kakao.maps.LatLng(36.6547, 126.5796),
  new kakao.maps.LatLng(36.6487, 126.5716),
  new kakao.maps.LatLng(36.6498, 126.5657),
  new kakao.maps.LatLng(36.6425, 126.5555),
  new kakao.maps.LatLng(36.6403, 126.5459),
  new kakao.maps.LatLng(36.6447, 126.5417),
  new kakao.maps.LatLng(36.6461, 126.5351),
  new kakao.maps.LatLng(36.6405, 126.5271),
  new kakao.maps.LatLng(36.6382, 126.5187),
  new kakao.maps.LatLng(36.6348, 126.5188),
  new kakao.maps.LatLng(36.6308, 126.5112),
  new kakao.maps.LatLng(36.6347, 126.5056),
  new kakao.maps.LatLng(36.6316, 126.4974),
  new kakao.maps.LatLng(36.6266, 126.4666),

  // 홍성
  new kakao.maps.LatLng(36.5925, 126.4565),
  new kakao.maps.LatLng(36.546, 126.4644),
  new kakao.maps.LatLng(36.5168, 126.4832),

  // 홍성보령
  new kakao.maps.LatLng(36.5304, 126.5054),
  new kakao.maps.LatLng(36.5057, 126.5535),
  new kakao.maps.LatLng(36.5065, 126.5639),
  new kakao.maps.LatLng(36.5011, 126.5671),
  new kakao.maps.LatLng(36.5075, 126.5902),
  new kakao.maps.LatLng(36.4759, 126.5999),
  new kakao.maps.LatLng(36.4817, 126.6179),
  new kakao.maps.LatLng(36.465, 126.6365),
  new kakao.maps.LatLng(36.4654, 126.6536),
  new kakao.maps.LatLng(36.4611, 126.6568),

  // 홍성보령청양
  new kakao.maps.LatLng(36.4615, 126.6747),

  // 홍성청양
  new kakao.maps.LatLng(36.4778, 126.7017),
  new kakao.maps.LatLng(36.4787, 126.7301),
  new kakao.maps.LatLng(36.4715, 126.737),
  new kakao.maps.LatLng(36.4849, 126.748),
  new kakao.maps.LatLng(36.5032, 126.7575),
  new kakao.maps.LatLng(36.5181, 126.7716),

  // 예산 청양 홍성
  new kakao.maps.LatLng(36.5326, 126.7745),

  // 예산 홍성
  new kakao.maps.LatLng(36.5363, 126.7683),
  new kakao.maps.LatLng(36.5271, 126.76),
  new kakao.maps.LatLng(36.536, 126.7421),
  new kakao.maps.LatLng(36.5513, 126.7385),
  new kakao.maps.LatLng(36.5554, 126.7471),
  new kakao.maps.LatLng(36.5803, 126.7485),
  new kakao.maps.LatLng(36.5932, 126.7727),
  new kakao.maps.LatLng(36.6174, 126.7699),
  new kakao.maps.LatLng(36.617, 126.7618),
  new kakao.maps.LatLng(36.6239, 126.7555),
  new kakao.maps.LatLng(36.6265, 126.7588),
  new kakao.maps.LatLng(36.6324, 126.7571),
  new kakao.maps.LatLng(36.6347, 126.7505),
  new kakao.maps.LatLng(36.645, 126.7534),
  new kakao.maps.LatLng(36.6484, 126.7365),
  new kakao.maps.LatLng(36.66, 126.737),
  new kakao.maps.LatLng(36.6694, 126.7455),
  new kakao.maps.LatLng(36.6734, 126.7405),
  new kakao.maps.LatLng(36.6702, 126.7288),
  new kakao.maps.LatLng(36.6676, 126.7259),
  new kakao.maps.LatLng(36.6706, 126.7195),
  new kakao.maps.LatLng(36.6721, 126.7099),
  new kakao.maps.LatLng(36.6659, 126.7052),
  new kakao.maps.LatLng(36.6626, 126.7071),
  new kakao.maps.LatLng(36.6623, 126.6969),
  new kakao.maps.LatLng(36.6602, 126.6913),
  new kakao.maps.LatLng(36.6611, 126.6807),
  new kakao.maps.LatLng(36.6549, 126.657),
  new kakao.maps.LatLng(36.6487, 126.6483),
  new kakao.maps.LatLng(36.6504, 126.6311),
  new kakao.maps.LatLng(36.6389, 126.6192),
  new kakao.maps.LatLng(36.6311, 126.6251),
  new kakao.maps.LatLng(36.6144, 126.6268),
  new kakao.maps.LatLng(36.6091, 126.6233),
  new kakao.maps.LatLng(36.6137, 126.619),
  new kakao.maps.LatLng(36.6233, 126.6159),
  new kakao.maps.LatLng(36.6251, 126.6065),
  new kakao.maps.LatLng(36.6189, 126.6025),
  new kakao.maps.LatLng(36.6214, 126.5984),
  new kakao.maps.LatLng(36.6175, 126.5863),
  new kakao.maps.LatLng(36.638, 126.5869),
  new kakao.maps.LatLng(36.6477, 126.5917),
  new kakao.maps.LatLng(36.6495, 126.5955),
  new kakao.maps.LatLng(36.6527, 126.5959),
  new kakao.maps.LatLng(36.6576, 126.5921),
  new kakao.maps.LatLng(36.6616, 126.591),
];

var cheongyang = [
  // 청양공주부여
  new kakao.maps.LatLng(36.3344, 126.9754),

  // 청양공주
  new kakao.maps.LatLng(36.4027, 127.0318),
  new kakao.maps.LatLng(36.4613, 126.9951),
  new kakao.maps.LatLng(36.455, 126.9181),
  new kakao.maps.LatLng(36.5105, 126.884),

  // 예산청양공주
  new kakao.maps.LatLng(36.5569, 126.8979),

  // 예산 청양
  new kakao.maps.LatLng(36.5701, 126.8522),
  new kakao.maps.LatLng(36.5284, 126.8244),

  // 예산 청양 홍성
  new kakao.maps.LatLng(36.5326, 126.7745),

  // 홍성청양
  new kakao.maps.LatLng(36.5181, 126.7716),
  new kakao.maps.LatLng(36.5032, 126.7575),
  new kakao.maps.LatLng(36.4849, 126.748),
  new kakao.maps.LatLng(36.4715, 126.737),
  new kakao.maps.LatLng(36.4787, 126.7301),
  new kakao.maps.LatLng(36.4778, 126.7017),

  // 홍성보령청양
  new kakao.maps.LatLng(36.4615, 126.6747),

  // 보령청양
  new kakao.maps.LatLng(36.411, 126.6925),

  // 보령청양부여
  new kakao.maps.LatLng(36.3728, 126.7256),

  // 청양부여
  new kakao.maps.LatLng(36.3526, 126.7558),
  new kakao.maps.LatLng(36.3547, 126.7967),
  new kakao.maps.LatLng(36.3777, 126.8166),
  new kakao.maps.LatLng(36.3838, 126.8508),
  new kakao.maps.LatLng(36.3726, 126.8444),
  new kakao.maps.LatLng(36.3751, 126.8326),
  new kakao.maps.LatLng(36.3565, 126.841),
  new kakao.maps.LatLng(36.3247, 126.8611),
  new kakao.maps.LatLng(36.3147, 126.9282),
];

var gyaeryong = [
  // 공주논산계룡
  new kakao.maps.LatLng(36.3344, 127.1959),

  // 공주계룡
  new kakao.maps.LatLng(36.3502, 127.2139),
  new kakao.maps.LatLng(36.3497, 127.2389),
  new kakao.maps.LatLng(36.3278, 127.261),

  // 계룡
  new kakao.maps.LatLng(36.296, 127.2612),
  new kakao.maps.LatLng(36.2914, 127.2478),
  new kakao.maps.LatLng(36.2764, 127.259),
  new kakao.maps.LatLng(36.2648, 127.2817),
  new kakao.maps.LatLng(36.2652, 127.291),
  new kakao.maps.LatLng(36.2578, 127.282),

  // 계룡논산
  new kakao.maps.LatLng(36.2457, 127.2796),
  new kakao.maps.LatLng(36.2374, 127.2637),
  new kakao.maps.LatLng(36.2319, 127.2458),
  new kakao.maps.LatLng(36.2359, 127.2387),
  new kakao.maps.LatLng(36.2553, 127.2368),
  new kakao.maps.LatLng(36.2534, 127.2283),
  new kakao.maps.LatLng(36.2615, 127.2206),
  new kakao.maps.LatLng(36.2526, 127.2093),
  new kakao.maps.LatLng(36.2504, 127.2016),
  new kakao.maps.LatLng(36.2608, 127.1958),
  new kakao.maps.LatLng(36.2938, 127.2008),
  new kakao.maps.LatLng(36.3228, 127.2018),
];

var buyeo = [
  // 공주부여논산
  new kakao.maps.LatLng(36.2748, 127.0669),

  // 공주부여
  new kakao.maps.LatLng(36.2787, 127.0355),
  new kakao.maps.LatLng(36.3048, 126.986),
  new kakao.maps.LatLng(36.3247, 126.9944),

  // 청양공주부여
  new kakao.maps.LatLng(36.3344, 126.9754),

  // 청양부여
  new kakao.maps.LatLng(36.3147, 126.9282),
  new kakao.maps.LatLng(36.3247, 126.8611),
  new kakao.maps.LatLng(36.3565, 126.841),
  new kakao.maps.LatLng(36.3751, 126.8326),
  new kakao.maps.LatLng(36.3726, 126.8444),
  new kakao.maps.LatLng(36.3838, 126.8508),
  new kakao.maps.LatLng(36.3777, 126.8166),
  new kakao.maps.LatLng(36.3547, 126.7967),
  new kakao.maps.LatLng(36.3526, 126.7558),

  // 보령청양부여
  new kakao.maps.LatLng(36.3728, 126.7256),

  // 보령부여
  new kakao.maps.LatLng(36.3658, 126.7059),
  new kakao.maps.LatLng(36.335, 126.6975),
  new kakao.maps.LatLng(36.3316, 126.6842),
  new kakao.maps.LatLng(36.3121, 126.6808),
  new kakao.maps.LatLng(36.2984, 126.6937),
  new kakao.maps.LatLng(36.29, 126.6874),
  new kakao.maps.LatLng(36.2682, 126.6966),
  new kakao.maps.LatLng(36.2537, 126.7383),
  new kakao.maps.LatLng(36.2377, 126.734),
  new kakao.maps.LatLng(36.2307, 126.7176),

  // 부여보령서천
  new kakao.maps.LatLng(36.1893, 126.6939),

  // 부여서천
  new kakao.maps.LatLng(36.1762, 126.7106),
  new kakao.maps.LatLng(36.179, 126.7926),
  new kakao.maps.LatLng(36.1404, 126.7931),
  new kakao.maps.LatLng(36.1152, 126.8407),
  new kakao.maps.LatLng(36.0839, 126.8385),
  new kakao.maps.LatLng(36.0714, 126.8685),

  // 부여
  new kakao.maps.LatLng(36.1099, 126.8728),
  new kakao.maps.LatLng(36.1413, 126.8925),
  new kakao.maps.LatLng(36.1397, 126.9223),

  // 부여논산
  new kakao.maps.LatLng(36.1488, 127.0047),
  new kakao.maps.LatLng(36.1804, 126.9978),
  new kakao.maps.LatLng(36.1984, 126.9851),
  new kakao.maps.LatLng(36.2103, 126.987),
  new kakao.maps.LatLng(36.2156, 127.0032),
  new kakao.maps.LatLng(36.2087, 127.009),
  new kakao.maps.LatLng(36.2456, 127.0416),
  new kakao.maps.LatLng(36.2564, 127.0651),
];

var boryeong = [
  // 홍성보령
  new kakao.maps.LatLng(36.5304, 126.5054),
  new kakao.maps.LatLng(36.5057, 126.5535),
  new kakao.maps.LatLng(36.5065, 126.5639),
  new kakao.maps.LatLng(36.5011, 126.5671),
  new kakao.maps.LatLng(36.5075, 126.5902),
  new kakao.maps.LatLng(36.4759, 126.5999),
  new kakao.maps.LatLng(36.4817, 126.6179),
  new kakao.maps.LatLng(36.465, 126.6365),
  new kakao.maps.LatLng(36.4654, 126.6536),
  new kakao.maps.LatLng(36.4611, 126.6568),

  // 홍성보령청양
  new kakao.maps.LatLng(36.4615, 126.6747),

  // 보령청양
  new kakao.maps.LatLng(36.411, 126.6925),

  // 보령청양부여
  new kakao.maps.LatLng(36.3728, 126.7256),

  // 보령부여
  new kakao.maps.LatLng(36.3658, 126.7059),
  new kakao.maps.LatLng(36.335, 126.6975),
  new kakao.maps.LatLng(36.3316, 126.6842),
  new kakao.maps.LatLng(36.3121, 126.6808),
  new kakao.maps.LatLng(36.2984, 126.6937),
  new kakao.maps.LatLng(36.29, 126.6874),
  new kakao.maps.LatLng(36.2682, 126.6966),
  new kakao.maps.LatLng(36.2537, 126.7383),
  new kakao.maps.LatLng(36.2377, 126.734),
  new kakao.maps.LatLng(36.2307, 126.7176),

  // 부여보령서천
  new kakao.maps.LatLng(36.1893, 126.6939),

  // 보령서천
  new kakao.maps.LatLng(36.1802, 126.6571),
  new kakao.maps.LatLng(36.1697, 126.6114),
  new kakao.maps.LatLng(36.1916, 126.561),
  new kakao.maps.LatLng(36.1873, 126.5381),

  // 보령
  new kakao.maps.LatLng(36.2374, 126.5304),
  new kakao.maps.LatLng(36.2605, 126.5401),
  new kakao.maps.LatLng(36.3262, 126.4992),
  new kakao.maps.LatLng(36.3495, 126.5473),
  new kakao.maps.LatLng(36.3897, 126.4778),
  new kakao.maps.LatLng(36.4293, 126.4945),
  new kakao.maps.LatLng(36.476, 126.4797),
  new kakao.maps.LatLng(36.5062, 126.4829),
];

var seocheon = [
  // 보령서천
  new kakao.maps.LatLng(36.1873, 126.5381),
  new kakao.maps.LatLng(36.1916, 126.561),
  new kakao.maps.LatLng(36.1697, 126.6114),
  new kakao.maps.LatLng(36.1802, 126.6571),

  // 부여보령서천
  new kakao.maps.LatLng(36.1893, 126.6939),

  // 부여서천
  new kakao.maps.LatLng(36.1762, 126.7106),
  new kakao.maps.LatLng(36.179, 126.7926),
  new kakao.maps.LatLng(36.1404, 126.7931),
  new kakao.maps.LatLng(36.1152, 126.8407),
  new kakao.maps.LatLng(36.0839, 126.8385),
  new kakao.maps.LatLng(36.0714, 126.8685),

  // 서천
  new kakao.maps.LatLng(36.0471, 126.8144),
  new kakao.maps.LatLng(36.0356, 126.8065),
  new kakao.maps.LatLng(36.032, 126.7595),
  new kakao.maps.LatLng(36.0097, 126.7355),
  new kakao.maps.LatLng(35.9991, 126.7256),
  new kakao.maps.LatLng(36.0058, 126.7022),
  new kakao.maps.LatLng(36.0066, 126.6624),
  new kakao.maps.LatLng(36.0283, 126.6599),
  new kakao.maps.LatLng(36.0543, 126.6321),
  new kakao.maps.LatLng(36.1003, 126.6085),
  new kakao.maps.LatLng(36.1291, 126.5572),
  new kakao.maps.LatLng(36.1332, 126.493),
  new kakao.maps.LatLng(36.1585, 126.494),
  new kakao.maps.LatLng(36.1749, 126.5296),
];

var nonsan = [
// 부여논산
new kakao.maps.LatLng(36.1488, 127.0047),
new kakao.maps.LatLng(36.1804, 126.9978),
new kakao.maps.LatLng(36.1984, 126.9851),
new kakao.maps.LatLng(36.2103, 126.9870),
new kakao.maps.LatLng(36.2156, 127.0032),
new kakao.maps.LatLng(36.2087, 127.0090),
new kakao.maps.LatLng(36.2456, 127.0416),
new kakao.maps.LatLng(36.2564, 127.0651),

// 공주부여논산
new kakao.maps.LatLng(36.2748, 127.0669),

// 공주논산
new kakao.maps.LatLng(36.3368, 127.1077),
new kakao.maps.LatLng(36.3035, 127.1458),

// 공주논산계룡
new kakao.maps.LatLng(36.3344, 127.1959),

// 계룡논산
new kakao.maps.LatLng(36.3228, 127.2018),
new kakao.maps.LatLng(36.2938, 127.2008),
new kakao.maps.LatLng(36.2608, 127.1958),
new kakao.maps.LatLng(36.2504, 127.2016),
new kakao.maps.LatLng(36.2526, 127.2093),
new kakao.maps.LatLng(36.2615, 127.2206),
new kakao.maps.LatLng(36.2534, 127.2283),
new kakao.maps.LatLng(36.2553, 127.2368),
new kakao.maps.LatLng(36.2359, 127.2387),
new kakao.maps.LatLng(36.2319, 127.2458),
new kakao.maps.LatLng(36.2374, 127.2637),
new kakao.maps.LatLng(36.2457, 127.2796),

// 논산
new kakao.maps.LatLng(36.2225, 127.2947),
new kakao.maps.LatLng(36.2222, 127.3031),
new kakao.maps.LatLng(36.2294, 127.3033),
new kakao.maps.LatLng(36.2140, 127.3211),
new kakao.maps.LatLng(36.2029, 127.3236),
new kakao.maps.LatLng(36.2009, 127.3332),

// 금산논산
new kakao.maps.LatLng(36.1843, 127.3313),
new kakao.maps.LatLng(36.1725, 127.3194),
new kakao.maps.LatLng(36.1511, 127.3190),
new kakao.maps.LatLng(36.1300, 127.3231),

// 논산
new kakao.maps.LatLng(36.1192, 127.3155),
new kakao.maps.LatLng(36.1253, 127.3061),
new kakao.maps.LatLng(36.1213, 127.2961),
new kakao.maps.LatLng(36.1119, 127.2949),
new kakao.maps.LatLng(36.1056, 127.2692),
new kakao.maps.LatLng(36.1120, 127.2603),
new kakao.maps.LatLng(36.1021, 127.2448),
new kakao.maps.LatLng(36.0868, 127.2571),
new kakao.maps.LatLng(36.0825, 127.2481),
new kakao.maps.LatLng(36.0979, 127.2264),
new kakao.maps.LatLng(36.0975, 127.2044),
new kakao.maps.LatLng(36.0865, 127.2009),
new kakao.maps.LatLng(36.0935, 127.1807),
new kakao.maps.LatLng(36.0833, 127.1686),
new kakao.maps.LatLng(36.0896, 127.1458),
new kakao.maps.LatLng(36.0811, 127.1351),
new kakao.maps.LatLng(36.0651, 127.1308),
new kakao.maps.LatLng(36.0729, 127.0963),
new kakao.maps.LatLng(36.0712, 127.0893),
new kakao.maps.LatLng(36.0897, 127.0656),
new kakao.maps.LatLng(36.1146, 127.0565),
new kakao.maps.LatLng(36.1167, 127.0633),
new kakao.maps.LatLng(36.1372, 127.0447),
new kakao.maps.LatLng(36.1381, 127.0213),
new kakao.maps.LatLng(36.1485, 127.0150),
new kakao.maps.LatLng(36.1453, 127.0104)
];

var geumsan = [
    // 금산논산
new kakao.maps.LatLng(36.1843, 127.3313),
new kakao.maps.LatLng(36.1725, 127.3194),
new kakao.maps.LatLng(36.1511, 127.3190),
new kakao.maps.LatLng(36.1300, 127.3231),

// 추가된 좌표들
new kakao.maps.LatLng(36.0205, 127.3798),
new kakao.maps.LatLng(36.0070, 127.4030),
new kakao.maps.LatLng(36.0267, 127.4334),
new kakao.maps.LatLng(35.9832, 127.4612),
new kakao.maps.LatLng(35.9847, 127.525),
new kakao.maps.LatLng(36.0373, 127.5326),
new kakao.maps.LatLng(36.0011, 127.6157),
new kakao.maps.LatLng(36.0671, 127.6379),
new kakao.maps.LatLng(36.1384, 127.5918),
new kakao.maps.LatLng(36.1853, 127.6004),
new kakao.maps.LatLng(36.2289, 127.5837),
new kakao.maps.LatLng(36.2477, 127.5363),
new kakao.maps.LatLng(36.1965, 127.4436),
new kakao.maps.LatLng(36.2718, 127.3800),
new kakao.maps.LatLng(36.2654, 127.3621),
new kakao.maps.LatLng(36.2191, 127.3649)
];

var polygonCheonan = new kakao.maps.Polygon({
  path: cheonan,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});

var polygonAsan = new kakao.maps.Polygon({
  path: asan,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});

var polygonDangjin = new kakao.maps.Polygon({
  path: dangjin,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});

var polygonYesan = new kakao.maps.Polygon({
  path: yesan,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});

var polygonSeosan = new kakao.maps.Polygon({
  path: seosan,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});

var polygonTaean = new kakao.maps.Polygon({
  path: taean,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});

var polygonGongju = new kakao.maps.Polygon({
  path: gongju,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});
var polygonHongsung = new kakao.maps.Polygon({
  path: hongsung,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});
var polygonCheongyang = new kakao.maps.Polygon({
  path: cheongyang,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});
var polygonGyaeryong = new kakao.maps.Polygon({
  path: gyaeryong,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});
var polygonBuyeo = new kakao.maps.Polygon({
  path: buyeo,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});
var polygonBoryeong = new kakao.maps.Polygon({
  path: boryeong,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});
var polygonSeocheon = new kakao.maps.Polygon({
  path: seocheon,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});
var polygonNonsan = new kakao.maps.Polygon({
  path: nonsan,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});
var polygonGeumsan = new kakao.maps.Polygon({
  path: geumsan,
  strokeWeight: 3,
  strokeColor: "#104E8B", // 진한 다저 블루
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#1E90FF", // 다저 블루
  fillOpacity: 0.9,
});


// 지도에 다각형을 표시합니다
polygonCheonan.setMap(map);
polygonAsan.setMap(map);
polygonDangjin.setMap(map);
polygonYesan.setMap(map);
polygonSeosan.setMap(map);
polygonTaean.setMap(map);
polygonGongju.setMap(map);
polygonHongsung.setMap(map);
polygonCheongyang.setMap(map);
polygonGyaeryong.setMap(map);
polygonBuyeo.setMap(map);
polygonBoryeong.setMap(map);
polygonSeocheon.setMap(map);
polygonNonsan.setMap(map);
polygonGeumsan.setMap(map);

// 지역명 표시
var overlayCheonan = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="cheonanLabel" style="color: white;">천안</div>',
  position: new kakao.maps.LatLng(36.8152, 127.1863),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true // 초기에는 보이지 않도록 설정
}); 
var overlayAsan = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="asanLabel" style="color: white;">아산</div>',
  position: new kakao.maps.LatLng(36.7849, 126.9898),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
}); 

var overlayDangjin = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="dangjinLabel" style="color: white;">당진</div>',
  position: new kakao.maps.LatLng(36.8903, 126.6745),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlayYesan = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="yesanLabel" style="color: white;">예산</div>',
  position: new kakao.maps.LatLng(36.6321, 126.8569),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlaySeosan = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="seosanLabel" style="color: white;">서산</div>',
  position: new kakao.maps.LatLng(36.7629, 126.4841),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlayTaean = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="taeanLabel" style="color: white;">태안</div>',
  position: new kakao.maps.LatLng(36.7405, 126.2103),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlayGongju = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="gongjuLabel" style="color: white;">공주</div>',
  position: new kakao.maps.LatLng(36.4869, 127.0851),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlayHongsung = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="hongsungLabel" style="color: white;">홍성</div>',
  position: new kakao.maps.LatLng(36.5660, 126.6149),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlayCheongyang = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="cheongyangLabel" style="color: white;">청양</div>',
  position: new kakao.maps.LatLng(36.4318, 126.8408),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlayGyaeryong = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="gyaeryongLabel" style="color: white;">계룡</div>',
  position: new kakao.maps.LatLng(36.2877, 127.2305),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlayBuyeo = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="buyeoLabel" style="color: white;">부여</div>',
  position: new kakao.maps.LatLng(36.2483, 126.8723),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlayBoryeong = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="boryeongLabel" style="color: white;">보령</div>',
  position: new kakao.maps.LatLng(36.3214, 126.5829),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlaySeocheon = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="seocheonLabel" style="color: white;">서천</div>',
  position: new kakao.maps.LatLng(36.0832, 126.6943),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlayNonsan = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="nonsanLabel" style="color: white;">논산</div>',
  position: new kakao.maps.LatLng(36.1894, 127.1452),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});

var overlayGeumsan = new kakao.maps.CustomOverlay({
  content: '<div class="label" id="geumsanLabel" style="color: white;">금산</div>',
  position: new kakao.maps.LatLng(36.1252, 127.4677),
  yAnchor: 0.5,
  zIndex: 3,
  visible: true
});



overlayCheonan.setMap(map);
overlayAsan.setMap(map);
overlayDangjin.setMap(map);
overlayYesan.setMap(map);
overlaySeosan.setMap(map);
overlayTaean.setMap(map);
overlayGongju.setMap(map);
overlayHongsung.setMap(map);
overlayCheongyang.setMap(map);
overlayGyaeryong.setMap(map);
overlayBuyeo.setMap(map);
overlayBoryeong.setMap(map);
overlaySeocheon.setMap(map);
overlayNonsan.setMap(map);
overlayGeumsan.setMap(map);

// 다각형에 마우스오버 이벤트가 발생했을 때 변경할 채우기 옵션입니다
var nowOver = {
  fillColor: "#104E8B", // 채우기 색깔입니다
  fillOpacity: 1, // 채우기 불투명도 입니다
};

// 다각형에 마우스아웃 이벤트가 발생했을 때 변경할 채우기 옵션입니다
var nowOut = {
  fillColor: "#1E90FF", // 채우기 색깔입니다
  fillOpacity: 0.9, // 채우기 불투명도 입니다
};

var clickCheonan = {
  fillColor: "#000000",
  fillOpacity: 0,
}


kakao.maps.event.addListener(polygonCheonan, "mouseover", function () {
  polygonCheonan.setOptions(nowOver);
  document.getElementById('cheonanLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonCheonan, "click", function() {
  polygonCheonan.setOptions(clickCheonan);
  console.log("clicked");
})

kakao.maps.event.addListener(polygonAsan, "mouseover", function () {
  polygonAsan.setOptions(nowOver);
  document.getElementById('asanLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonDangjin, "mouseover", function () {
  polygonDangjin.setOptions(nowOver);
  document.getElementById('dangjinLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonYesan, "mouseover", function () {
  polygonYesan.setOptions(nowOver);
  document.getElementById('yesanLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonSeosan, "mouseover", function () {
  polygonSeosan.setOptions(nowOver);
  document.getElementById('seosanLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonTaean, "mouseover", function () {
  polygonTaean.setOptions(nowOver);
  document.getElementById('taeanLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonGongju, "mouseover", function () {
  polygonGongju.setOptions(nowOver);
  document.getElementById('gongjuLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonHongsung, "mouseover", function () {
  polygonHongsung.setOptions(nowOver);
  document.getElementById('hongsungLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonCheongyang, "mouseover", function () {
  polygonCheongyang.setOptions(nowOver);
  document.getElementById('cheongyangLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonGyaeryong, "mouseover", function () {
  polygonGyaeryong.setOptions(nowOver);
  document.getElementById('gyaeryongLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonBuyeo, "mouseover", function () {
  polygonBuyeo.setOptions(nowOver);
  document.getElementById('buyeoLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonBoryeong, "mouseover", function () {
  polygonBoryeong.setOptions(nowOver);
  document.getElementById('boryeongLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonSeocheon, "mouseover", function () {
  polygonSeocheon.setOptions(nowOver);
  document.getElementById('seocheonLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonNonsan, "mouseover", function () {
  polygonNonsan.setOptions(nowOver);
  document.getElementById('nonsanLabel').style.fontWeight = 'bold';
});

kakao.maps.event.addListener(polygonGeumsan, "mouseover", function () {
  polygonGeumsan.setOptions(nowOver);
  document.getElementById('geumsanLabel').style.fontWeight = 'bold';
});



//마우스 아웃 이벤트

kakao.maps.event.addListener(polygonCheonan, "mouseout", function () {
  polygonCheonan.setOptions(nowOut);
  document.getElementById('cheonanLabel').style.fontWeight = 'normal'; // 글자 스타일을 원래 상태로 변경
});

kakao.maps.event.addListener(polygonAsan, "mouseout", function () {
  polygonAsan.setOptions(nowOut);
  document.getElementById('asanLabel').style.fontWeight = 'normal';
});


kakao.maps.event.addListener(polygonDangjin, "mouseout", function () {
  polygonDangjin.setOptions(nowOut);
  document.getElementById('dangjinLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonYesan, "mouseout", function () {
  polygonYesan.setOptions(nowOut);
  document.getElementById('yesanLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonSeosan, "mouseout", function () {
  polygonSeosan.setOptions(nowOut);
  document.getElementById('seosanLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonTaean, "mouseout", function () {
  polygonTaean.setOptions(nowOut);
  document.getElementById('taeanLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonGongju, "mouseout", function () {
  polygonGongju.setOptions(nowOut);
  document.getElementById('gongjuLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonHongsung, "mouseout", function () {
  polygonHongsung.setOptions(nowOut);
  document.getElementById('hongsungLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonCheongyang, "mouseout", function () {
  polygonCheongyang.setOptions(nowOut);
  document.getElementById('cheongyangLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonGyaeryong, "mouseout", function () {
  polygonGyaeryong.setOptions(nowOut);
  document.getElementById('gyaeryongLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonBuyeo, "mouseout", function () {
  polygonBuyeo.setOptions(nowOut);
  document.getElementById('buyeoLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonBoryeong, "mouseout", function () {
  polygonBoryeong.setOptions(nowOut);
  document.getElementById('boryeongLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonSeocheon, "mouseout", function () {
  polygonSeocheon.setOptions(nowOut);
  document.getElementById('seocheonLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonNonsan, "mouseout", function () {
  polygonNonsan.setOptions(nowOut);
  document.getElementById('nonsanLabel').style.fontWeight = 'normal';
});

kakao.maps.event.addListener(polygonGeumsan, "mouseout", function () {
  polygonGeumsan.setOptions(nowOut);
  document.getElementById('geumsanLabel').style.fontWeight = 'normal';
});

// 다각형에 마우스다운 이벤트를 등록합니다
// var downCount = 0;
// kakao.maps.event.addListener(polygonCheonan, "mousedown", function () {
//   console.log(event);
//   var resultDiv = document.getElementById("result");
//   resultDiv.innerHTML =
//     "다각형에 mousedown 이벤트가 발생했습니다!" + ++downCount;
// });