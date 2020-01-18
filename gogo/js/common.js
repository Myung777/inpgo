// �ҽ��� �� �ε��ǰ� ���� ������
$(function(){

	// hover �տ� function �� ���콺 �÷����� �� ����, �ڿ� function �� ���콺�� ����� �� �����մϴ�
	// element id �� main_menu�� �׸��� ������ �ִ� li �� _main (<-�̰� ���Ƿ� ���� �߰��Ѱſ��� �����Ͻø� �ſ�) �׸��� ���콺�� �ö����� �� ����
	$('#main_menu').find('li._main').hover(
		function(){
			// ���� ���콺�� �ö��� �׸� (_menu�ִ°�) �� ������ �ִ�  ul�� _sub (<-�̰� ���Ƿ� ���� �߰��Ѱſ��� �����Ͻø� �ſ�) Ŭ������ ���� �׸��� ��������
			// (fadeIn, Out�� �׳� �ణ �ִϸ��̼� ȿ������ jquery animation �˻��ؼ� �ٲټŵ� �ſ� �����̵� �� ���� ������!!!!@!)
			$(this).find('ul._sub').fadeIn();
		},
		function(){
			$(this).find('ul._sub').fadeOut();
		}
	);

	// ���� �����ϰ� ���콺 �÷��� �� �����Դϴ� �̹����� �����޴� ����
	// �׳� �ϴ� a �±װ� ���淡 li �� �÷��� �� ���� ������ �ٲ��ÿ�..
	$('#main_menu').find('ul._sub').find('li').hover(
		function(){
			$(this).css('color','white');
		},
		function(){
			$(this).css('color','black');
		}
	);

});
