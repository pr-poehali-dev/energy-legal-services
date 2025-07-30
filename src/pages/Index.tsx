import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading text-2xl font-bold text-primary">
              ЭНЕРГОПРАВО
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
              <a href="#team" className="text-secondary hover:text-primary transition-colors">Команда</a>
              <a href="#contact" className="text-secondary hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
              Экспертная поддержка в
              <span className="text-primary block">энергетическом праве</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Уникальное сочетание юридической экспертизы и глубокого понимания энергетической отрасли. 
              Работаем по всей России с 2010 года.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg">
                <Icon name="FileText" className="mr-2" size={20} />
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексное юридическое сопровождение в сфере энергетики с учетом 
              технических особенностей отрасли
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Zap",
                title: "Энергетическое право",
                description: "Лицензирование, тарифообразование, энергосбережение, возобновляемые источники энергии",
                features: ["Получение лицензий", "Тарифные споры", "Энергоаудит", "ВИЭ проекты"]
              },
              {
                icon: "Scale",
                title: "Арбитражные споры",
                description: "Представительство в судах по спорам в энергетической сфере",
                features: ["Взыскание долгов", "Тарифные споры", "Технологические нарушения", "Экспертизы"]
              },
              {
                icon: "FileText",
                title: "Корпоративное право",
                description: "Юридическое сопровождение энергетических компаний",
                features: ["M&A сделки", "Комплаенс", "Договорная работа", "Регулятивные вопросы"]
              },
              {
                icon: "Building",
                title: "Инфраструктурные проекты",
                description: "Сопровождение строительства энергообъектов",
                features: ["Земельные вопросы", "Техприсоединение", "Строительные разрешения", "Экология"]
              },
              {
                icon: "Shield",
                title: "Регулятивное право",
                description: "Взаимодействие с органами власти и регуляторами",
                features: ["ФАС России", "ФСТ России", "Минэнерго", "Региональные РЭК"]
              },
              {
                icon: "Briefcase",
                title: "Консультирование",
                description: "Экспертные заключения и правовой анализ",
                features: ["Due Diligence", "Правовые заключения", "Обучение персонала", "Аудит рисков"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-scale-in border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-3 bg-accent rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name={service.icon as any} size={24} />
                    </div>
                    <CardTitle className="font-heading text-xl text-secondary">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="font-body text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Наша команда
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Высококвалифицированные специалисты с уникальным сочетанием 
              юридического и технического образования
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src="/img/3a57971d-b795-48fe-ab10-b9f5ef5aac8c.jpg" 
                    alt="Главный партнер" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-heading text-2xl text-secondary mb-2">
                  Главный партнер
                </CardTitle>
                <CardDescription className="font-body text-muted-foreground mb-4">
                  Эксперт-юрист
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <Icon name="GraduationCap" size={20} className="mr-3 text-primary" />
                    <span className="font-body text-sm text-secondary">Высшее электротехническое образование</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Scale" size={20} className="mr-3 text-primary" />
                    <span className="font-body text-sm text-secondary">Высшее юридическое образование</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Award" size={20} className="mr-3 text-primary" />
                    <span className="font-body text-sm text-secondary">15+ лет в энергетическом праве</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" size={20} className="mr-3 text-primary" />
                    <span className="font-body text-sm text-secondary">Практика по всей России</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src="/img/de081cf5-eb29-4991-bddf-3b0c68348150.jpg" 
                    alt="Старший партнер" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-heading text-2xl text-secondary mb-2">
                  Старший партнер
                </CardTitle>
                <CardDescription className="font-body text-muted-foreground mb-4">
                  Кандидат юридических наук
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <Icon name="BookOpen" size={20} className="mr-3 text-primary" />
                    <span className="font-body text-sm text-secondary">Кандидат юридических наук</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" size={20} className="mr-3 text-primary" />
                    <span className="font-body text-sm text-secondary">Автор 50+ научных публикаций</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Briefcase" size={20} className="mr-3 text-primary" />
                    <span className="font-body text-sm text-secondary">Опыт в крупных энергокомпаниях</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Target" size={20} className="mr-3 text-primary" />
                    <span className="font-body text-sm text-secondary">Специализация: арбитраж</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Свяжитесь с нами
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить ваши задачи в сфере энергетического права. 
              Первичная консультация — бесплатно.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-secondary mb-4">
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-4 text-primary" />
                  <div>
                    <p className="font-body text-secondary font-medium">+7 (495) 123-45-67</p>
                    <p className="font-body text-sm text-muted-foreground">Круглосуточно</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-4 text-primary" />
                  <div>
                    <p className="font-body text-secondary font-medium">info@energopravo.ru</p>
                    <p className="font-body text-sm text-muted-foreground">Ответим в течение часа</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-4 text-primary" />
                  <div>
                    <p className="font-body text-secondary font-medium">Москва, Деловой центр</p>
                    <p className="font-body text-sm text-muted-foreground">Работаем по всей России</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-4 text-primary" />
                  <div>
                    <p className="font-body text-secondary font-medium">Пн-Пт: 9:00-19:00</p>
                    <p className="font-body text-sm text-muted-foreground">Срочные вопросы — круглосуточно</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-secondary mb-4">
                  Преимущества работы с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Icon name="Shield" size={20} className="mr-4 text-primary mt-1" />
                  <div>
                    <p className="font-body text-secondary font-medium">Гарантия результата</p>
                    <p className="font-body text-sm text-muted-foreground">Успешно решаем 95% задач клиентов</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Zap" size={20} className="mr-4 text-primary mt-1" />
                  <div>
                    <p className="font-body text-secondary font-medium">Оперативность</p>
                    <p className="font-body text-sm text-muted-foreground">Быстрое реагирование на срочные вопросы</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Users" size={20} className="mr-4 text-primary mt-1" />
                  <div>
                    <p className="font-body text-secondary font-medium">Индивидуальный подход</p>
                    <p className="font-body text-sm text-muted-foreground">Персональная стратегия для каждого клиента</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Award" size={20} className="mr-4 text-primary mt-1" />
                  <div>
                    <p className="font-body text-secondary font-medium">Высокая экспертиза</p>
                    <p className="font-body text-sm text-muted-foreground">Уникальное сочетание права и техники</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Получить бесплатную консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="font-heading text-2xl font-bold mb-4">ЭНЕРГОПРАВО</div>
            <p className="font-body text-gray-300 mb-6">
              Профессиональные юридические услуги в сфере энергетики
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Услуги</a>
              <a href="#team" className="text-gray-300 hover:text-white transition-colors">Команда</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-600">
              <p className="font-body text-sm text-gray-400">
                © 2024 ЭнергоПраво. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}