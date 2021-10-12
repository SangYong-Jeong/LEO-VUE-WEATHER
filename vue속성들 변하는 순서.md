## 처음 시작할 때
- 1순위. data
- 2순위. computed (여기서 작동한 computed는 함수 실행 후 리턴값을 data에 등록한다고 생각하면 된다.) data에서 변수들이 선언 되었으므로 다음은 해당 변수를 참조하는 computed
    - computed value 값인 함수에다가 this.데이터를 넣어서 값을 변경시켰을 때 computed가 return 되기 전 watch가 실행되는 로직인지 확인해보았으나 Lint를 쓰는 경우 막아놓았다. 이렇게 막아놓는 것을 보아하니 결국 내가 실험해보려는 코드로 Vue를 컴파일 할 시 에러가 난다는 것을 알 수 있다. 
    - watch는 내가 노려보는 변수의 값이 초깃값 설정 이후에 변한 경우 작동하는 구조
- 3순위. created()는 여기서 시작 (여기서 등록이 마친 data, computed들을 핸들링 할 수 있다.) - 코
- 4순위. watch -> data, computed, create 끝난 이후에 시작
- 이후에는 로직을 알아보는 것이 중요하다. 루트를 훑는 가치판단은 위를 기준으로 판단해야 한다.
- 물론 위의내용은 초기에 돌아 갈 때 논리다. 그 이후에는 data(), created() 는 돌아가지 않고 computed, watch 순서로 돌아가는 논리이다.