export function initRouterMotion(): void {
  const figures = document.querySelectorAll<HTMLElement>("figure[data-router-motion]");

  figures.forEach((figure) => {
    if (figure.dataset.initialized === "true") return;
    figure.dataset.initialized = "true";

    const scene = figure.querySelector<SVGSVGElement>("svg[data-route-scene]");
    const control = figure.querySelector<HTMLButtonElement>("button[data-motion-toggle]");

    figure.dataset.running = "false";
    if (control) control.hidden = true;

    if (!scene) return;

    const morphs = Array.from(scene.querySelectorAll<SVGAnimationElement>("animate[data-route-morph]"));
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let userPaused = false;
    let inViewport = false;

    const resetSceneClock = (): void => {
      scene.pauseAnimations();
      scene.setCurrentTime(0);
    };

    resetSceneClock();
    morphs.forEach((morph) => morph.beginElement());
    scene.pauseAnimations();

    const updateControl = (): void => {
      if (!control) return;

      const label = userPaused ? "Resume animation" : "Pause animation";
      control.textContent = label;
      control.setAttribute("aria-label", label);
      control.setAttribute("aria-pressed", String(userPaused));
      control.hidden = motionPreference.matches;
    };

    const updatePlayback = (): void => {
      const shouldRun = !motionPreference.matches && !document.hidden && inViewport && !userPaused;
      figure.dataset.running = String(shouldRun);

      if (shouldRun) {
        scene.unpauseAnimations();
      } else {
        scene.pauseAnimations();
      }

      updateControl();
    };

    const handleVisibilityChange = (): void => {
      updatePlayback();
    };

    const handleMotionPreferenceChange = (): void => {
      if (motionPreference.matches) resetSceneClock();
      updatePlayback();
    };

    const handleControlClick = (): void => {
      if (motionPreference.matches) return;
      userPaused = !userPaused;
      updatePlayback();
    };

    control?.addEventListener("click", handleControlClick);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionPreference.addEventListener("change", handleMotionPreferenceChange);

    if (typeof IntersectionObserver === "function") {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (!entry) return;
        inViewport = entry.isIntersecting;
        updatePlayback();
      });
      observer.observe(figure);
    } else {
      inViewport = true;
    }

    updatePlayback();
  });
}
