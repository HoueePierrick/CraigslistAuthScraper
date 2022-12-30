fetch("https://www.shop-apotheke.com/nx/login/", {
  headers: {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language":
      "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,ar-MA;q=0.6,ar;q=0.5,he-IL;q=0.4,he;q=0.3,de;q=0.2",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua":
      '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    cookie:
      'feature-flag-user-token=7ab7c488-9051-4a36-a51e-2f6e1776b3b9; asbidc=4aa90569-31cb-4e9d-a851-3977fb9426ea; JSURFERID=poWrOzBreWKMHMcr89wcxokl22WZH0kJXjkv%2FaECkoMHH1TWJSpwD38A02JuryMF8GWJD9QatvkGJSnsxYFtEXD1; _ALGOLIA=anonymous-8cd9fc2c-a971-4123-8acc-7cf5d2ec3612; atbpdid=6a1abbcc-038f-4966-8434-3ea80a8e03bc; emos_jcsid=AYTZDmF*eD*NQRD0uqjtLSH8zaoA3FXY:t:1:0; expa=direct; first-impression=false; _gcl_au=1.1.1306340588.1672332271; usercentrics_consent={"ad_storage":true,"analytics_storage":true,"functional":true}; _ga=GA1.2.479710445.1672332271; _gid=GA1.2.366958877.1672332271; _cs_c=1; ajs_user_id=null; ajs_group_id=null; ajs_anonymous_id=%2250e17f71-a0f3-4af9-9f74-5874a42f4b18%22; xng.sid=f5c5429a-ba08-4028-8230-27582614ad91; xng.gid=888dc223-7798-4863-b05f-4d8ff18d8839; mdLogger=false; kampyle_userid=44cc-483a-74b8-321f-471c-cbc5-7a26-8639; kampyleUserSession=1672332273546; kampyleUserSessionsCount=1; kampyleUserPercentile=11.287039328571137; asbidt=598a3fdc-a316-43bd-a084-98667b0b1c55; emos_jcvid=AYTZDmF*eD*NQRD0uqjtLSH8zaoA3FXY:1:0:0:0:true:1; asuid=c11ac2384c65783caafa738234e01805; UserID1=7182612747045045458; feature-flag-targeting={"browser-family":"Chrome","browser-version":"108.0.0.0","device":"desktop","expa":"","isInternalIP":false,"tenant":"com"}; feature-flag-cookie={"ad-server":{"e":true,"v":{"f":1,"v_name":"kevel"}},"ad-xs":{"e":true,"v":{"f":1,"v_name":"v1"}},"cro-734":{"e":true,"v":{"f":1,"v_name":"v1"}},"cro-757":{"e":true,"v":{"f":1,"v_name":"v2"}},"cro-929":{"e":true,"v":{"f":1,"v_name":"v2"}},"cro-985":{"e":true,"v":{"f":1,"v_name":"v1"}},"release-switch":{"e":true,"v":{"cart-cta-delayed":false,"erx":true,"marketplace":true,"mp-cross-sell":false,"now":true,"sae-only":true,"v_name":""}},"variant-attributes":{"e":true,"v":{"enabled":true,"f":1,"v_name":"v1"}},"wsssh-1429":{"e":true,"v":{"f":1,"v_name":"v1"}},"wsssh-1561":{"e":true,"v":{"f":"1","v_name":"v1"}},"wstra-2462":{"e":true},"wstra-3548":{"e":true,"v":{"f":1,"v_name":"v1"}}}; _cs_mk=0.6554366660869442_1672417378792; atbpuid=undefined; asbid_sync={"c":1,"t":1}; auth=eyJhbGciOiJSUzM4NCJ9.eyJzdWIiOiJHVUVTVCIsInJvbGUiOiJHVUVTVCIsInRlbmFudCI6ImNvbSIsInR5cGUiOiJBQ0NFU1MiLCJrZXlWZXJzaW9uIjoiZjIyNzBlODktYjhiYy00NTgwLTkwNjAtNTkwZjEzYmI5MjIxIiwiZGV2aWNlVHlwZSI6ImJyb3dzZXIiLCJleHAiOjE3MDM5NzQ1MzcsImV4cFJlZnJlc2giOiIyMDIzLTEyLTMwVDIyOjE1OjM3LjU4NloiLCJleHBTZW5zaXRpdmUiOiIyMDIzLTEyLTMwVDIyOjE1OjM3LjU4NloiLCJqdGkiOiI1OTM1MGQyYi1hY2FiLTQ1YmItODYwZS1jM2NlOTBiNTZmY2QiLCJpc3MiOiJhdXRoLnJlZHRlY2xhYi5jb20iLCJpYXQiOjE2NzI0MTc1OTd9.KM3g7CZfP34kSkHVqx-dNuni_IRZEgb7WCnA366_Hl3XXD8yi8EZgxaqr2HbprkEEJmFxmAiO7xIELioGqy0QKyfwHMGHL2raH9yKM4gcRK-YYFC_dVBEqVIDFIResve4u_4WGzuai1kh60tyn8P0zz4k-jR28XRZ5bmfP_6Fsri0HfgkYSZrGV0wxq7k5_u4nfYrmTyIiRSnWrhp4FY17BdhpG_iEx1pEBsdYmyy0rSDsR0iQzEt1WeTNw9R4FcwWp6ImC2aLiCNB0HBBiuenSxHPVQevEmJ7QGySCvC7wQ6Y950-4e9J9AxbYtFXmVLyDlPQPwW9Fcu2WN1hzGPJ6FRxxrCa_HhOk-9eH0XMcB1p_K2LvjpoVFMqtg6QPuNCSnSbFfmh1PYhqDojTQGTtE2PN2Pw01QadDJrO2TkAcbMhDPAhWX-cVOksoQQTY3nGj6So60n36MPG7ALMwhew3FxLkSmg_J2L55NmqBBkRe3LKK9qX3-JhB8HXmhmB; JSESSIONID=prod1~FA66698D0691C7DEEFC7622B45B355F1.app11; _gat_UA-126831500-2=1; _cs_id=2f9430af-9838-a86c-ddfe-79b991d278a6.1672332270.2.1672417600.1672417378.1.1706496270741; _cs_s=9.0.0.1672419400765; _uetsid=10f4b410879811ed893365fb8a73bed9; _uetvid=10f4a9e0879811edb266972a1f040e4d; kampyleSessionPageCounter=11',
    Referer: "https://www.shop-apotheke.com/nx/login/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: "username=houee.pierrick%40gmail.com&password=SouriaDimashq2022%24%21&frc-captcha-solution=74e2ccf4f8ef35a047ecb4e65b21df3d.Y68RQOqUVdBkYZO3AQwzhgAAAAAAAAAAUxR8cXNbCos%3D.AAAAAPYcAAABAAAAfgcCAAIAAAB8kgEAAwAAAJbqAQAEAAAAiFkAAAUAAACMXAAABgAAAFESAAAHAAAAwqUAAAgAAAAMIQEACQAAAJ2fBQAKAAAARCEAAAsAAAB1%2FgMADAAAAAMnAAANAAAAxOYAAA4AAACpNgAADwAAAK9YAAAQAAAAZ3QEABEAAAAmMgAAEgAAAItVAAATAAAA6ZoCABQAAAAPQwIAFQAAABAQAgAWAAAA9OUCABcAAACqLAEAGAAAAAa3AAAZAAAAuvYBABoAAACaOwYAGwAAAO9%2FAAAcAAAADFECAB0AAAAZkQEAHgAAAD6VAQAfAAAABp8AACAAAADXEQEAIQAAAD11AAAiAAAA3ugAACMAAABxTQQAJAAAALSkAgAlAAAASboAACYAAADqwwMAJwAAALotCQAoAAAAokMAACkAAADpJQEAKgAAAI5pAAArAAAAGlIDACwAAAAL1gUALQAAALT6AAAuAAAAclkAAC8AAABGeQEAMAAAADAJAAAxAAAAEsEAADIAAAAYgAQA.AgAE&targetFeatureCode=&action=loginForm&loginForm-submit-button=",
  method: "POST",
});

{
    username:
    "houee.pierrick@gmail.com",
    password:
    "SouriaDimashq2022$!",
    "frc-captcha-solution": 
    "74e2ccf4f8ef35a047ecb4e65b21df3d.Y68RQOqUVdBkYZO3AQwzhgAAAAAAAAAAUxR8cXNbCos=.AAAAAPYcAAABAAAAfgcCAAIAAAB8kgEAAwAAAJbqAQAEAAAAiFkAAAUAAACMXAAABgAAAFESAAAHAAAAwqUAAAgAAAAMIQEACQAAAJ2fBQAKAAAARCEAAAsAAAB1/gMADAAAAAMnAAANAAAAxOYAAA4AAACpNgAADwAAAK9YAAAQAAAAZ3QEABEAAAAmMgAAEgAAAItVAAATAAAA6ZoCABQAAAAPQwIAFQAAABAQAgAWAAAA9OUCABcAAACqLAEAGAAAAAa3AAAZAAAAuvYBABoAAACaOwYAGwAAAO9/AAAcAAAADFECAB0AAAAZkQEAHgAAAD6VAQAfAAAABp8AACAAAADXEQEAIQAAAD11AAAiAAAA3ugAACMAAABxTQQAJAAAALSkAgAlAAAASboAACYAAADqwwMAJwAAALotCQAoAAAAokMAACkAAADpJQEAKgAAAI5pAAArAAAAGlIDACwAAAAL1gUALQAAALT6AAAuAAAAclkAAC8AAABGeQEAMAAAADAJAAAxAAAAEsEAADIAAAAYgAQA.AgAE",
}
// targetFeatureCode: 
// action: 
// loginForm
// loginForm-submit-button: 
