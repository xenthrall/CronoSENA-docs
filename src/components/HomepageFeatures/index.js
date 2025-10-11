import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gestión Inteligente de Formación',
    Svg: require('@site/static/img/crono-mountains.svg').default,
    description: (
      <>
        CronoSENA centraliza la planificación académica del SENA, optimizando la
        asignación de instructores, ambientes y fichas para lograr una gestión
        precisa y eficiente.
      </>
    ),
  },
  {
    title: 'Hecho para la Comunidad Educativa',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Diseñado para administradores, instructores y aprendices, CronoSENA
        simplifica los procesos diarios y mejora la comunicación entre todos los
        actores de la formación profesional.
      </>
    ),
  },
  {
    title: 'Potenciado por Tecnología Moderna',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Desarrollado con <b>Laravel</b> y <b>Filament</b>, CronoSENA combina la
        estabilidad del backend con la flexibilidad del frontend, ofreciendo una
        experiencia fluida, segura y escalable.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
